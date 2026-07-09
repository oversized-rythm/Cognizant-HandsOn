public class Logger{

    //static reference variable 
    private static Logger instance;

    //Private cpnstructor
    private Logger(){
        System.out.println("Logger Instance Created");
    }

    //Public method which returns the single instance
    public static Logger getInstance(){
        if(instance==null){
            instance= new Logger();
        }
        return instance;
    }

    //Logging Method
    public void log(String Message){
        System.out.println("Log: " + Message);
    }
}