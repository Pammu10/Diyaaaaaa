/*
Pramodh Krishna
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
*/

//Pramodh Krishna
#include<stdio.h>
#include<string.h>
#define wsize 8

struct stack{
    int top; 
    char* a[wsize];
}s, ns;

void push_s(char*);
char* pop();
void display();

int main()
{
    int n, i, k;
    char w[wsize];
    char nw[wsize];
    char *ptr;
    char *srt;
    gets(w);
    s.top = -1;
    k = 0;
    ptr = w;
    srt = nw;
    for (ptr = w; *ptr != '\0'; ptr++){
        srt = ptr;
        printf("%c   ", *srt);
        push_s(srt);
    }
    //display();
    for (i = 0; i < strlen(w); i++){
        printf("%d", s.top);
        printf("%s\n", pop());
    }
        
    //for (i = 0; i < n; i++)
    //    printf("%s", pop());
    //return 0;
}

void display(){
    int temp = s.top;
    while (temp > -1){
        printf("%s\n", s.a[temp--]);
    }

}
void push_s(char *c){
    s.a[++s.top]= c;
}
char* pop(){
    return s.a[s.top--];
}