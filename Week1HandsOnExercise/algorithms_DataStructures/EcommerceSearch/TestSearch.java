
public class TestSearch {
     public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(205, "Shoes", "Fashion"),
            new Product(150, "Mobile", "Electronics"),
            new Product(301, "Watch", "Accessories")
        };

        Product[] sortedProducts = {
            new Product(101, "Laptop", "Electronics"),
            new Product(150, "Mobile", "Electronics"),
            new Product(205, "Shoes", "Fashion"),
            new Product(301, "Watch", "Accessories")
        };

        Product result1 = SearchService.linearSearch(products, 150);

        if (result1 != null) {
            System.out.println("Linear Search Result:");
            result1.display();
        } else {
            System.out.println("Product not found using Linear Search");
        }

        Product result2 = SearchService.binarySearch(sortedProducts, 205);

        if (result2 != null) {
            System.out.println("Binary Search Result:");
            result2.display();
        } else {
            System.out.println("Product not found using Binary Search");
        }
    }
}
