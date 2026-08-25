import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

public class B {
    public static void main(String[] args) {
        //Using integer division and modulus operator, write a program that accepts a three-digit integer form 0 to 999 and
        //outputs the value in words.
        B main = new B();
        main.convertWords();
    }

    public void convertWords(){
        Scanner in = new Scanner(System.in);
        boolean loop = true;
        int num = 0;
        while (loop) { 
            try {
                System.out.print("Input three digit number[0-999]: ");
                num = in.nextInt();

                loop = false;
            } catch (Exception e) {
                System.out.println("String not allowed.");
                in.next();
            }
        }

        Map map = new HashMap<Integer, String>();
        map.putAll(map
        if(num >= 0 && num <= 10){
            
        } else if (num > 10 && num <= 99) {
            
        } else if (num > 99 && num <= 999) {
            
        } else{
            System.out.println("Number should be greater than 0 and less than 999.");
        }

        in.close();
    }
}
