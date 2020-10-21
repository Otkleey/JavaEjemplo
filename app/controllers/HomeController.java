package controllers;

import javax.inject.Inject;

import com.fasterxml.jackson.databind.node.ObjectNode;

import play.data.DynamicForm;
import play.libs.Json;
import play.mvc.*;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {
    @Inject
    private play.data.FormFactory formFactory;

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index() {
        return ok(views.html.index.render());
    }

    public Result operaciones() {
        return ok(views.html.operaciones.render());
    }

    public Result formulario() {
        return ok(views.html.formularioprueba.render());
    }

    public Result registro(Http.Request request) {
        DynamicForm df = formFactory.form().bindFromRequest(request);

        /* Diccionario dinamico dependiendo de la forma de la request */

        String name = df.get("name");
        String lastname = df.get("lastname");
        String password = df.get("password");
        String gender = df.get("gender");
        String email = df.get("email");
        /* Insert into usuarios value(name: "",lastname... bla bla ejemplo) (RAWSQL) */
        /* (ORM) User.save(); */
        return ok("Registrado " + name + " " +lastname + password + gender + email);
    }

    public Result sayHello(Http.Request request) {
        DynamicForm df = formFactory.form().bindFromRequest(request);

        String correo = df.get("correo");
        String modo = df.get("modo");
        System.out.println(modo);

        ObjectNode result = Json.newObject();
        //Figura           Cuadrado.nuevaFigura()

        if(correo.equals("s.montiel@hotmail.com")){
            result.put("Name", "Pablo");
            result.put("LastName", "Gomez");
            result.put("Date", "02/08/2020");
            result.put("Age", getMyString()); 
            result.put("Modo", modo);
        }else{
            result.put("Error", "Credenciales Incorrectas");
        }
        return ok(result);
      }


    public Result plus(Http.Request request){ 
        DynamicForm df = formFactory.form().bindFromRequest(request);
        Integer num1 = null;
        Integer num2 = null;
        try {
            num1 = Integer.valueOf(df.get("numero1"));
            System.out.println(num1);
        } catch (Exception e) {
            return ok("Fallo el num1");
        }
        try {
            num2 = Integer.valueOf(df.get("numero2"));
            System.out.println(num2);
        } catch (Exception e) {
            return ok("Fallo el num2");
        }
        return ok("Voy a sumar" + " " +(num1 + num2));
    }


    private Integer getMyString(){
        return 27;
    }
}
