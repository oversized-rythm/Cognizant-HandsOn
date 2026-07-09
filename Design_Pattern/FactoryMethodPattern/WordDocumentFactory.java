package Design_Pattern.FactoryMethodPattern;

public class WordDocumentFactory extends DocumentFactory {
    public Document createDocument(){
        return new WordDocument();
    }
}
