public class EcommerceSearchTest {
    public static void main(String[] args) {
        // Product catalog : sorted by Product ID
        Product[] catalog = {
            new Product(101, "Wireless Mouse", "Electronics"),
            new Product(250, "Mechanical Keyboard", "Electronics"),
            new Product(312, "Coffee Mug", "Home"),
            new Product(499, "Gaming Headset", "Electronics"),
            new Product(505, "Office Chair", "Furniture")
        };

        System.out.println("-----Linear Search -----");
        System.out.println(SearchAlgorithms.linearSearch(catalog, 312));     // Product exist
        System.out.println(SearchAlgorithms.linearSearch(catalog, 999));     // Product does not exist

        System.out.println("-----Binary Search -----");
        System.out.println(SearchAlgorithms.binarySearch(catalog, 499));     // Product exist
        System.out.println(SearchAlgorithms.binarySearch(catalog, 999));     // Product does not exist
    }
}