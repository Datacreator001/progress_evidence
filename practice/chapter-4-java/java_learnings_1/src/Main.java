import java.util.Scanner;

public class Main {
   public static void main(String[] args) {
      System.out.println("What is 1 + 1 ?");
      System.out.println("A: 3");
      System.out.println("B: 4");
      System.out.println("C: 2");
      System.out.println("D: 500");

      Scanner input = new Scanner(System.in);
      String answer = input.next();

      if (!answer.equals("C")){
         System.out.println("Sorry you are Incorrect!");
      } else{
         System.out.println("You Are Correct!!");
      }
   }
}
























//public class Main {
//   public static void main(String[] args) {
//      Scanner input = new Scanner(System.in);
//      boolean isOnRepeat= true;
//      while(isOnRepeat){
//         System.out.println("Playing current song");
//         System.out.println("Would you like to take the song off repeat?");
//        String userInput = input.next();
//        if(userInput.equals("yes")){
//           isOnRepeat = false;
//        }
//      }
//      System.out.println("Playing Next Song");
//   }
//}
//
















//public class Main {
//   public static void main(String[] args) {
//      System.out.println("Pick a number between 1 and 10");
//      Scanner input = new Scanner(System.in);
//
//      int inputtedNum = input.nextInt();
//
//      if (inputtedNum < 5) {
//          System.out.println("Enjoy the good luck a friend brings you");
//      } else {
//         System.out.println("Your shoe selection will make you very happy today");
//      }
//
//   }
//}





























//import java.util.Scanner;
//
//
//
//public class Main {
//
//    public static void main(String[] args) {
//       int studentAge = 15;
//       double studentGPA = 3.45;
//
//
//       boolean hasPefectAttedence = true;
//       String studentsFirstName = "Nick";
//       String studentsLastName = "Bryant";
//       char studentFirstInit = studentsFirstName.charAt(0);
//       char studentLastinit = studentsLastName.charAt(0);
//
////       System.out.println(studentAge);
////       System.out.println(studentGPA);
////       System.out.println(studentsFirstName);
////       System.out.println(studentsLastName);
////       System.out.println(studentFirstInit);
////       System.out.println(studentLastinit);
//       System.out.println(studentsFirstName + " " + studentsLastName + " has a GPA of" + " " + studentGPA);
//       System.out.println("What do you want to update it to?");
//       Scanner input = new Scanner(System.in);
//       studentGPA = input.nextDouble();
//
//       System.out.println(studentsFirstName + " " + studentsLastName +
//               " now has a GPA of" + " "+ studentGPA);
//    }
//}

