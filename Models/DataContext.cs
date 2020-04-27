using Microsoft.EntityFrameworkCore;

namespace ERP.Models {

    public class DataContext: DbContext
    {

        /*
            Class to handle connection between DB and model classes

            ** if you modify, change on the models
            you need to  Create a migration: command --> dotnet ef migrations add someName 
            update database: command --> dotnet ef database update
        */
        public DataContext(DbContextOptions<DataContext> options): base(options){



        }

        //Specify the list of models (Classes) that you want to become a table on the DB

        public DbSet<Car> Cars {get; set;}

    }
}