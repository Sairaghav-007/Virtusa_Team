import java.util.Scanner;

public class Fibanocci {
    public static void printFibonacci(int a) {
        int f = 0, s = 1;

        for (int i = 1; i <= a; i++) {
            System.out.print(f + " ");
            int n = f + s;
            f = s;
            s = n;
        }
        System.out.println();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        printFibonacci(n); 
        sc.close();
        
    }
}