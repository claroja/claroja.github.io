```c
#include <stdio.h>
int main(int argc, char *argv[])
{
	//argc接收传递参数的个数
	//argv接受传递参数的内容
	printf("%d\n", argc);
	int i;
	for (i = 0; i < argc; i++)
	{
		printf("%s\n", argv[i]);
	}
	return 0;
}

```