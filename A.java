import java.util.Scanner;

public class A {
    public static void main(String[] args) {
        //Create a program that would input a numer in month between 1 to 12 and print the corresponding months in words, eg "January".
        //Furthermore, if the month is not between 1 and 12 there should be an ERROR message;
        A main = new A();
        main.convertMonth();
    }

    public void convertMonth(){
        Scanner in = new Scanner(System.in);
        String[] months = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};

        int num = in.nextInt();

        
    }
}
