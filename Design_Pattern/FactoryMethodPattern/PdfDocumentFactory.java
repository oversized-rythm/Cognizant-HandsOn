package Design_Pattern.FactoryMethodPattern;

public class PdfDocumentFactory extends DocumentFactory {
    public Document createDocument(){
        return new PdfDocument();
    }
}
