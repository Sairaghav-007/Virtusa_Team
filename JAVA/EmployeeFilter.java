import java.util.*;


class Employee {
    String name;
    int age;
    double salary;

    Employee(String name, int age, double salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
 class EmployeeFilter {
    public static void main(String[] args) {
        List<Employee> list = Arrays.asList(
            new Employee("Alice", 24, 45000),
            new Employee("Bob", 30, 60000),
            new Employee("Charlie", 28, 55000),
            new Employee("David", 22, 52000)
        );

        list.stream()
            .filter(e -> e.age > 25 && e.salary > 50000)
            .forEach(e -> System.out.println(e.name + " - " + e.age + " - " + e.salary));
    }
}