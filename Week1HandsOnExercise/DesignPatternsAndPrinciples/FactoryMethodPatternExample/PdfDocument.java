package Design_Pattern.FactoryMethodPattern;

public class PdfDocument implements Document {
    public void open(){
        System.out.println("PDF Document is opened");
    }
}
