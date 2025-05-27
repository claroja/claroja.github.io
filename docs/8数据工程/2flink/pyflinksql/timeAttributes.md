# timeAttributes

Flink can process data based on different notions of time.

- **Processing time** refers to the machine’s system time (also known as epoch time, e.g. Java’s System.currentTimeMillis()) that is executing the respective operation.
- **Event time** refers to the processing of streaming data based on timestamps that are attached to each row. The timestamps can encode when an event happened.

Time attributes can be part of every `table schema`. They are defined when creating a table from a `CREATE TABLE DDL` or a `DataStream`. Once a time attribute is defined, it can be referenced as a field and used in time-based operations.


## Event Time
To handle out-of-order events and to distinguish between on-time and late events in streaming, Flink needs to know the timestamp for each row, and it also needs regular indications of how far along in event time the processing has progressed so far (via so-called `watermarks`).


The event time attribute is defined using a `WATERMARK` statement in `CREATE table DDL`.Flink supports defining event time attribute on `TIMESTAMP` column and `TIMESTAMP_LTZ` column.

- If the timestamp data in the source is represented as `year-month-day-hour-minute-second`, usually a string value without time-zone information, e.g. 2020-04-15 20:13:40.564, it’s recommended to define the event time attribute as a TIMESTAMP column:

    ```sql
    CREATE TABLE user_actions (
    user_name STRING,
    data STRING,
    user_action_time TIMESTAMP(3),
    -- declare user_action_time as event time attribute and use 5 seconds delayed watermark strategy
    WATERMARK FOR user_action_time AS user_action_time - INTERVAL '5' SECOND
    ) WITH (
    ...
    );

    SELECT TUMBLE_START(user_action_time, INTERVAL '10' MINUTE), COUNT(DISTINCT user_name)
    FROM user_actions
    GROUP BY TUMBLE(user_action_time, INTERVAL '10' MINUTE);
    ```

- If the timestamp data in the source is represented as a `epoch time`, usually a long value, e.g. `1618989564564`, it’s recommended to define event time attribute as a TIMESTAMP_LTZ column:

    ```sql
    CREATE TABLE user_actions (
    user_name STRING,
    data STRING,
    ts BIGINT,
    time_ltz AS TO_TIMESTAMP_LTZ(ts, 3),
    -- declare time_ltz as event time attribute and use 5 seconds delayed watermark strategy
    WATERMARK FOR time_ltz AS time_ltz - INTERVAL '5' SECOND
    ) WITH (
    ...
    );

    SELECT TUMBLE_START(time_ltz, INTERVAL '10' MINUTE), COUNT(DISTINCT user_name)
    FROM user_actions
    GROUP BY TUMBLE(time_ltz, INTERVAL '10' MINUTE);
    ```





## Processing Time
Processing time allows a table program to produce results based on the time of the local machine.

The processing time attribute is defined as a computed column in CREATE table DDL using the system PROCTIME() function, the function return type is TIMESTAMP_LTZ.

```sql
CREATE TABLE user_actions (
  user_name STRING,
  data STRING,
  user_action_time AS PROCTIME() -- declare an additional field as a processing time attribute
) WITH (
  ...
);

SELECT TUMBLE_START(user_action_time, INTERVAL '10' MINUTE), COUNT(DISTINCT user_name)
FROM user_actions
GROUP BY TUMBLE(user_action_time, INTERVAL '10' MINUTE);
```








refs:
https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/table/concepts/time_attributes/
https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/concepts/time/
https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/table/sql/create/#create-table