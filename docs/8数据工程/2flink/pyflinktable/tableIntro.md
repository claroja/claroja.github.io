# tableIntro


```python
from pyflink.common import Row
from pyflink.table import (EnvironmentSettings, TableEnvironment, TableDescriptor, Schema,
                        DataTypes,)
from pyflink.table.expressions import lit, col
from pyflink.table.udf import udtf

word_count_data = ["To be, or not to be,--that is the question:--",
                    "Be all my sins remember'd."]

## 1. declare an execution environment
t_env = TableEnvironment.create(EnvironmentSettings.in_streaming_mode())
t_env.get_config().set("parallelism.default", "1")  # write all the data to one file

## 2. define the source
tab = t_env.from_elements(map(lambda i: (i,), word_count_data),
                            DataTypes.ROW([DataTypes.FIELD('line', DataTypes.STRING())]))

## 3. define the sink
t_env.create_temporary_table(
    'sink',
    TableDescriptor.for_connector('print')
        .schema(Schema.new_builder()
                .column('word', DataTypes.STRING())
                .column('count', DataTypes.BIGINT())
                .build())
        .build())

## 4. define transform
@udtf(result_types=[DataTypes.STRING()])
def split(line: Row):
    for s in line[0].split():
        yield Row(s)

tab.flat_map(split).alias('word') \
    .group_by(col('word')) \
    .select(col('word'), lit(1).count) \
    .execute_insert('sink') \
    .wait()
## remove .wait if submitting to a remote cluster, refer to
## https://nightlies.apache.org/flink/flink-docs-stable/docs/dev/python/faq/#wait-for-jobs-to-finish-when-executing-jobs-in-mini-cluster
## for more details
```



refs:
