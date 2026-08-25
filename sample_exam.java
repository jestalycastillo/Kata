import java.util.Scanner;

public class sample_exam{

    public static void main(String[] args){
        myFunction();
    }

    public static void myFunction(){
        Scanner in = new Scanner(System.in);
        int length = in.nextInt();

        int[] arr = new int[length];

        for(int i = 0; i < arr.length; i++){
            arr[i] = i + 1;
            System.out.println(printArray(arr[i]));
        }
    }

    public static int printArray(int num){
        return num;
    }
}