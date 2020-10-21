package controllers;

import javax.inject.Inject;

import com.fasterxml.jackson.databind.node.ObjectNode;

import play.data.DynamicForm;
import play.libs.Json;
import play.mvc.*;


public class EjemplosJS extends Controller {
    @Inject
    private play.data.FormFactory formFactory;

    public Result ejercicios() {
        return ok(views.html.ejercicios.render());
    }

    public Result areasPerimetros() {
        return ok(views.html.areasPerimetros.render());
    }

    public Result listaDeDatos() {
        return ok(views.html.listaDeDatos.render());
    }


}