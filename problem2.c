//Pramodh Krishna 
//Problem 2 

#include<stdio.h>
#include<string.h>

struct stack{
    char arr[100];
    int top;
}s;

void push(char c){
    s.arr[++s.top] = c;
}

void pop(){
    printf("%c", s.arr[s.top--]);
}

int isempty(){
    if (s.top == -1)
        return 1;
    else 
        return 0;
}

int main()
{
    s.top = -1;
    char str[100];
    scanf("%100[^\n]s", str);
    char c = ' ';
    strncat(str, &c, 1);
    int n = sizeof(str)/sizeof(str[0]);
    for (int i = strlen(str) - 1; i >= 0; i--){
        push(str[i]);
        
        if (str[i-1] ==  ' '){
            while(isempty() == 0){
                pop();
            }
        }
    }
    while (isempty() == 0)
        pop();
    
    return 0;
}
