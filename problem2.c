//Pramodh Krishna
#include<stdio.h>
#define wsize 10

struct stack{
    int top; 
    char a[wsize];
}s;

void push(char);
char pop();

int main()
{
    int n, i, j, e, k;
    char w[wsize];
    char nw[wsize];
    s.top = -1;
    scanf("%s", w);
    for (i = 0; w[i] != '\0'; i++){
        push(w[i]);
    }
    for (i = 0; i < n; i++)
        printf("%c", pop());
    return 0;
}


void push(char c){
    s.a[++s.top]= c;
}

char pop(){
    return s.a[s.top--];
}
