//Pramodh Krishna
//Problem 1

#include<stdio.h>
int op = 0;
int answer[10];
void lowest_price();
int main(){
    int n;
    scanf("%d", &n);
    for (int i = 0; i < n; i++){
        int C, I;
        scanf("%d", &C);
        scanf("%d", &I);
        int P[I];
    for (int i = 0; i < I; i++){
        scanf("%d" , &P[i]);
    }  
    lowest_price(C, I, P);  
    }
    for (int i = 0; i < op; i++){
        if (i % 2 == 0){
        printf("\n");
        printf("Case #%d: ", i/2 + 1);
        }
        printf("%d ", answer[i]); 
    }
    return 0;
}

void lowest_price(int c, int i, int p[]){
    int j, k;
    int i1, i2;
    int max = 0;
    for (j = 0; j < i; j++){
        for (k = j; k < i; k++){
            if ((p[j] + p[k] <= c) && (p[j] + p[k] >= max) && (j != k)){
                max = p[j] + p[k];
                i1 = j + 1;
                i2 = k + 1;
            }
        }
    }
    answer[op++] = i1;
    answer[op++] = i2;
}
