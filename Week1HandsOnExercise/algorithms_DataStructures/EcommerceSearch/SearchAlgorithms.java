// Implementing linear search and binary search algorithms to search Products

public class SearchAlgorithms{
    // Linear Search : Works on both unsorted and sorted arrays
    public  static Product linearSearch(Product[] catalog, int targetId) {
        for (Product product : catalog) {
            if (product.productId == targetId) {
                return product; // product found
            }
        }
        return null;    // Not found
    }

    // Binary Search : The array must be sorted by productId
    public static Product binarySearch(Product[] catalog, int targetId) {
        int left = 0;
        int right = catalog.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            Product midProduct = catalog[mid];

            if (midProduct.productId == targetId) {
                return midProduct;  // found it
            } else if (midProduct.productId < targetId) {
                left = mid + 1;     // target must be in right half
            } else {
                right = mid - 1;    // target must be in left half
            }
        }
        return null;    // Not found
    }
}