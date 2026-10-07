 import java.util.*;
 class TemperatureConversion {
    
    public static double celsiusToFahrenheit(double celsius) {
        return (celsius * 9.0 / 5.0) + 32;
    }

    public static double fahrenheitToCelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5.0 / 9.0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double c = sc.nextDouble();
        double f = sc.nextDouble();

        System.out.printf("%.1f°C = %.1f°F%n", c, celsiusToFahrenheit(c));
        System.out.printf("%.1f°F = %.1f°C%n", f, fahrenheitToCelsius(f));
    }
} 