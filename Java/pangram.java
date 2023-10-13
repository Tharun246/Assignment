import java.util.Scanner;

public class pangram 
{
    private static String Alph="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    static boolean check(String s)
    { 
        s=s.toUpperCase();
        if(s.length()<26)
        { 
            //System.out.println("here 1st");
            return false;
        }
        else
        {
            for(int i=0;i<26;i++)
            { 
                if(s.indexOf(Alph.charAt(i))==-1)
                { 
                    return false;
                }
            }
            return true;
        }
        
    }
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        String x=s.nextLine(); 
        s.close();
        if(check(x)==true)
        { 
            System.out.println("Given String "+x+" is a "+"pangram");
        }
        else{ 

            System.out.println("Given String "+x+" is not a "+"pangram");
        }

        
        
    }
    
}
