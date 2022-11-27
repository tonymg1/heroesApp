DESCRIPCIÓN
Esta aplicación muestra una lista de heroes tanto de Marvel como de DC. La función es agruparlos por su editor, acceder a ellos y su característicasl, así como buscar entre los existentes. 


TECNOLOGÍAS 
React, Vite, Npm, localStorage

lIBRERÍAS: 
react-router-dom

HOOKS:
useState
useReducer: 
useContext
useNavigate
useMemo
useParams
useLocation

CUSTOM HOOK:
useForm


FUNCIONAMIENTO ANTES DE SRC

public: imagenes de los heroes
index.html: importación de bootstrap y animate.css

main.jsx
Instalación de la librería 'react router-dom' de donde se importa BrowserRouter 
(el cual inyecta propiedades a nuestro componente para poder acceder al historial de navegación, realizar redirecciones, etc.)
El main.jsx se va a encargar de renderizar HeroesApp.jsx

HeroesApp: importa AuthProvider de context en auth y, también, AppRouter de router que se renderiza dentro de la anterior. 
El componente AuthProvider es el que contiene a AppRouter para que se encuentra en un punto alto de la aplicación y se puedea tener un acceso fácil, este importa el AuthContext (compoenente para crear contexto mediante create-contex) y va a hacer uso del useReducer el que va a ser uso de authReducer. Así pues, AuthProvider va ser una función que utiliza un useReducer. El useState recibe un estado (en este caso nombrado authState y empuja el método con un dispatch). En el useReducer se llama a la función de authReducer que proporciona ub estado vacio y una acción, luego para establecer los casos de login y logout importa types de types. Para iniciarlizar llama a la función init que va a traer al usuario del localStorage. Luego va a desarrollar los métodos de login y logout.




SRC:
1. auth.
    1.1 Context:
    1.2 Pages
    1.3 Types
2. Heroes:
    2.1 components
    2.2 data
    2.3 helpers
    2.4 Pages
    2.5 routes

3. Hooks
    3.1 useForm

4. Router
    4.1 AppRouter
    4.2 PrivateRoute
    4.3 PublicRoute

5. ui
    5.1 components

    FUNCIONAMIENTO POR SRC

    AppRouter: 
importa de Route y Routes de la librería 'react router-dom'. Route es el componente  para crear nuestras rutas a otros páginas. Así, crea dos alternativas a la hora de navegarpor un lado renderiza un compoenente para que haga de ruta privada y otro para una ruta pública.
La ruta pública apunta al login y renderiza el LoginPage que se encuentra dentro del archivo auth. Este es un componente que hace uso del custom hook useContext, useNavigate de la librería react-router-dom y del componente Authcontext de context dentro de context en auth. 
Sin embargo, la ruta privada apunta a HeroesRoutes que se encuentra en routes dentro de la carpeta de heroes. 
Ahora bien, ambos componentes van a tener la misma lógica. Hace uso del hook useContext, Navigate de 'react-router-dom' y van a importar AuthContext de auth que aporta el contexto por medio de create-context que importa de react. Se crea la variable logged desectruturada y sse comprueba si el usuario está logeado.

En cuanto a la ruta pública apunta a LoginPage que es el compoenente encargado de renderizar el login. Al igual, va a importar useContext, useNavigate de react-router-dom y el AuthContext (que aporta el contexto). Este componente renderiza un botón de Login que llama a una función llamada onLogin, la que se sirve del useContext para la constante login y useNavigate para la constante navigate que direcciona la página hacia el contenido privado. 

Respecto a la ruta privada, apunta hacia HeroesRoutes, el cual es un componente que tiene la misma función en cuanto a las paginas que no se desea que sean públicas. Por tanto, hace uso de la librería react-router-dom para importar tanto, Navigate como Routes y Route, importa los componentes que renderizan las distintas páginas (DcPage, MarvelPage, HeroPage y SearchPage). Además, de importar la Navbar que se encuentra en la carpeta ui. En definitiva, se trata de una función que en primer lugar, renderiza el Nabvar, después renderiza las distitas páginas en función de su path y fija la página de Marvel como primera opción. 

Funcionamiento del Navbar. El Navbar al realizar funciones de navegación necesita de la librería react-router-dom la que va a importar Link, NavLink, useNavigate . También va a reconocer al usuario y poseer un botón para realizar el logout. La función de Navbar se compone de Navling que apuntan a su respectiva página, un nombre de usuario, si este existe y, un botón para hacer el loggout mediante un onClick que te lleva al login en el caso de no estar logeado. 

Ahora bien, las páginas de Marvel y DC, van a renderizar el componente HeroeList por su publisher. Este es un componente que se encuentra en dentro de la carpeta heroes, en concreto, de la carpeta components. Hace uso del hook useMemo, importa la función getHeroesByPublisher de helpers y el componente HeroeCard. La función de este componente es renderizar el compoenente HeroCard según el publisher, para ello utilza el hook useMemo que memoriza el publisher y después mapea los heroes. Por su parte la función getHeroesByPublisher hace el filtrado y HeroeCard recibe las caraacterísticas de los heroes y mediante Link de 'react router-dom' crea un enlance a la página de HeroPage que es la página indiviual de cada heroe que necesita de react el hook useMemo, de la librería react-router-dom de Navigate, useNavigate y useParams. Va a devolver su imagen y algunas caracterísitcas del personaje, pero antes se crea la constante id haciendo uso de Useparams, después se crea la constante hero y se memoriza por medio de la función importada getHeroById, la cual recurre a la base de datos creada para la aplicación y filtra los personajes por su id. Además contiene un botón para regresar que utiliza una función basada en el useNavigate. 

El enlace de Search en el Navbar tiene por encargo redireccionar a esta, hace uso de useLocation, useNavigate de la librería react-router-dom (EN DESARROLLO).

