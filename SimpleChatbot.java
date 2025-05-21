import java.util.Scanner;

public class SimpleChatbot {

    public static String getResponse(String input) {
        input = input.toLowerCase();

        if (input.contains("hello") || input.contains("hi")) {
            return "Hello! How can I assist you today?";
        } else if (input.contains("how are you")) {
            return "I'm just a program, but I'm doing great! Thanks for asking.";
        } else if (input.contains("what is your name")) {
            return "I am your friendly Java Chatbot.";
        } else if (input.contains("help")) {
            return "I can answer simple questions or chat with you!";
        } else if (input.contains("weather")) {
            return "I can't check the weather yet, but maybe soon!";
        } else if (input.contains("bye") || input.contains("exit")) {
            return "Goodbye! Have a nice day!";
        } else {
            return "Sorry, I don't understand. Can you try asking differently?";
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Welcome to the Java Chatbot! Type 'bye' or 'exit' to quit.");

        while (true) {
            System.out.print("You: ");
            String userInput = scanner.nextLine();

            String response = getResponse(userInput);
            System.out.println("Bot: " + response);

            if (userInput.toLowerCase().contains("bye") || userInput.toLowerCase().contains("exit")) {
                break;
            }
        }
        scanner.close();
    }
}
