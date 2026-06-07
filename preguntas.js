 // ========================================================================
// ¡¡¡AQUÍ VA TU BASE DE DATOS DE PREGUNTAS!!!
// ========================================================================
// Edita, añade o borra preguntas aquí.
// Sigue el formato:
// {
//    tema: "Nombre del Tema",
//    pregunta: "¿Texto de la pregunta?",
//    opciones: ["Opción 0", "Opción 1", "Opción 2"],
//    correcta: 1  (El número de la opción correcta)
// }
// ¡Importante! No olvides la coma (,) entre cada objeto {pregunta}.

const BBDD_PREGUNTAS = [
    {
        "tema": "Unidad 5 - RA 4",
        "pregunta": "Dado el siguiente fragmento, ¿qué se ejecutaría en función de la ruta?\n\nRoute::get('/mascota/votar/', [MCT::class, 'votarMascota'])->name('votar');\nRoute::get('/mascota/{mascota}/convertir/', [MCT::class, 'convertirMascota'])->name('convertir');\nRoute::post('/mascota/{mascota}/borrar', [MCT::class, 'borrarMascota'])->name('borrarmascota');",
        "opciones": [
            "votar, convertir y borrarmascota",
            "votarMascota, convertirMascota y borrarMascota",
            "votar, convertir y borrar",
            "get y post"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 5 - RA 4",
        "pregunta": "Para hacer referencia a la primera ruta del siguiente fragmento en una plantilla blade, ¿qué pondríamos?\n\nRoute::get('/mascota/votar/', [MCT::class, 'votarMascota'])->name('votar');",
        "opciones": [
            "<A href=\"{{url('votar')}}\">Votar</A>",
            "<A href=\"{{route('votarMascota')}}\">Votar</A>",
            "<A href=\"{{route('votar')}}\">Votar</A>",
            "<A href=\"{{url('votarMascota')}}\">Votar</A>"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 5 - RA 4",
        "pregunta": "El siguiente fragmento es el código interno de una clase del modelo almacenada en el archivo Mascota.php, ¿cuál de las siguientes opciones sobre dicha clase NO es correcta?\n\nuse HasFactory;\nprotected $fillable = ['nombre', 'publica', 'megustas', 'user_id','descripcion'];\npublic function user(): BelongsTo\n{\n    return $this->belongsTo(User::class);\n}",
        "opciones": [
            "La clase debe extender la clase Migration.",
            "La clase debe estar en el espacio de nombres App\\Models.",
            "La clase debe llamarse Mascota.",
            "La clase será usada por Eloquent."
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 5 - RA 4",
        "pregunta": "El siguiente fragmento es el código interno de una clase del modelo almacenada en el archivo Mascota.php, ¿cuál de las siguientes opciones nos permite indicar el nombre de la tabla de la base de datos donde se almacenarán los datos?\n\nuse HasFactory;\nprotected $fillable = ['nombre', 'publica', 'megustas', 'user_id','descripcion'];\npublic function user(): BelongsTo\n{\n    return $this->belongsTo(User::class);\n}",
        "opciones": [
            "private $dbtable = 'mascota';",
            "protected $table = 'mascotas';",
            "const \\table = Migration::table('mascotas');",
            "private function setTable() { return 'mascotas'; }"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 5 - RA 4",
        "pregunta": "El siguiente fragmento declara una variable llamada $fillable, ¿cuál es el propósito de dicha variable?\n\nprotected $fillable = ['nombre', 'publica', 'megustas', 'user_id','descripcion'];",
        "opciones": [
            "$fillable es un array que contiene los campos de la tabla que no se pueden rellenar de forma masiva.",
            "$fillable es un array que contiene los campos de la tabla que no pueden estar vacíos.",
            "$fillable es un array que contiene los campos de la tabla que se pueden rellenar de forma masiva.",
            "$fillable es un array que contiene los campos de la tabla que no se rellenan de forma automática (tales como timestamps o id autogenerado)."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 5 - RA 4",
        "pregunta": "La vista formmascota usada en el siguiente fragmento, ¿qué tipo de vista es?\n\npublic function editarMascota(int $masc) {\n    return view('formmascota');\n}",
        "opciones": [
            "Es una vista de tipo HTML, dado que no tiene parámetros.",
            "Es una vista de tipo PHP, dado que Blade y Smarty son compatibles con PHP.",
            "Es una vista de tipo Smarty como en todos los proyectos Laravel.",
            "Es una vista de tipo Blade, dado que es el motor de plantillas por defecto en este caso."
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad 5 - RA 4",
        "pregunta": "En la vista mascotacreada usada tras la inserción en el siguiente fragmento, ¿cómo podría mostrarse el nombre de la mascota recién guardada?\n\npublic function editarMascota(int $masc) {\n    return view('formmascota');\n}\npublic function nuevaMascota(Request $request)\n{\n    $data=$request->validate([\n        'nombre' => 'required|string|max:50',\n        'descripcion' => 'required|string|max:250',\n        'publica' => 'required|string|in:Si,No',\n    ]);\n    $mascota = new Mascota();\n    $mascota->nombre = $data['nombre'];\n    $mascota->publica = $data['publica'];\n    $mascota->descripcion = $data['descripcion'];\n    $mascota->save();\n    // ... (llamada a la vista mascotacreada)\n}",
        "opciones": [
            "<h1>{{$mascota['nombre']}}</h1>",
            "<h1>{{$mascota->nombre}}</h1>",
            "<h1>{{$m->nombre}}</h1>",
            "<h1>{{$m['nombre']}}</h1>"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 5 - RA 4",
        "pregunta": "En el primer método del siguiente fragmento vas a usar los datos de la mascota con el identificador pasado por parámetro y los vas a pasar a la vista formmascota. ¿Cómo sería el código para buscar la mascota con el identificador recibido si la clase del modelo se llama Mascota?\n\npublic function editarMascota(int $masc) {\n    return view('formmascota');\n}",
        "opciones": [
            "$mascota=Mascota::find($masc);",
            "$mascota=Mascota::select('id_mascota', $masc);",
            "$mascota=Mascota::only('id_mascota',$masc);",
            "$mascota=Mascota::where('id_mascota',$masc);"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 5 - Desarrollo en Laravel",
        "pregunta": "Dado el siguiente fragmento, ¿qué nombre de ruta usaríamos en la función route() de Blade para acceder a la acción que muestra el formulario de creación (método create)?\n\nRoute::resource('fotos', FotoController::class);",
        "opciones": [
            "fotos.form",
            "fotos.create",
            "fotos.store",
            "fotos.new"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 5 - Desarrollo en Laravel",
        "pregunta": "En el siguiente fragmento de código usando Query Builder, ¿qué tipo de estructura devuelve el método get() y se almacena en la variable $vuelos?\n\n$vuelos = DB::table('vuelos')->where('aerolinea', 'Epsilon')->get();",
        "opciones": [
            "Un objeto único de tipo Modelo (Model)",
            "Un array asociativo simple de PHP",
            "Un valor booleano (true o false) indicando si hay vuelos",
            "Una colección (Collection) con los resultados"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad 5 - Desarrollo en Laravel",
        "pregunta": "En el siguiente fragmento de una vista Blade, ¿cuál es la función exacta de la directiva @extends('layouts.app')?\n\n@extends('layouts.app')\n@section('titulo', 'Inicio')\n@section('contenido')\n    <h1>Bienvenido al sistema</h1>\n@endsection",
        "opciones": [
            "Importar una clase de configuración PHP llamada layouts.app.",
            "Heredar de la plantilla o layout principal ubicado en resources/views/layouts/app.blade.php.",
            "Extender las variables de sesión para que estén disponibles en toda la aplicación.",
            "Incluir un fragmento HTML secundario dentro de la vista actual sin establecer herencia."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 5 - Desarrollo en Laravel",
        "pregunta": "El siguiente fragmento se encuentra en la clase del modelo Post.php. ¿Qué tipo de relación representa basándonos en la convención de Eloquent?\n\npublic function user(): BelongsTo {\n    return $this->belongsTo(User::class);\n}",
        "opciones": [
            "Una relación de muchos a muchos con la tabla de usuarios.",
            "Una relación inversa de uno a varios (un Post pertenece a un User).",
            "Una relación directa de uno a muchos (un Post tiene muchos Users).",
            "Una restricción de base de datos para borrar usuarios en cascada."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 5 - Desarrollo en Laravel",
        "pregunta": "En el siguiente fragmento de código de un controlador, ¿cuál es el objetivo principal del método Auth::attempt()?\n\nif (Auth::attempt($credentials)){\n    $request->session()->regenerate();\n    return redirect()->route('perfil');\n}",
        "opciones": [
            "Intenta autenticar al usuario verificando si las credenciales coinciden con los registros de la base de datos.",
            "Intenta registrar un nuevo usuario en la base de datos de forma automática con esos datos.",
            "Verifica si el usuario actual ya tiene una sesión activa y válida en el navegador.",
            "Intenta recuperar la contraseña perdida del usuario enviando un correo de confirmación."
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 5 - Desarrollo en Laravel",
        "pregunta": "Revisa el siguiente código de validación dentro de un controlador. Si un usuario envía el formulario dejando el campo 'email' vacío, ¿qué ocurrirá automáticamente en Laravel?\n\n$datos_validados = $request->validate([\n    'name' => 'required|max:255',\n    'email' => 'required|email|unique:users',\n    'password' => 'required|min:8',\n]);",
        "opciones": [
            "La variable $datos_validados guardará un valor null en el índice 'email'.",
            "Se lanzará una excepción fatal de PHP (Error 500) deteniendo la ejecución.",
            "Laravel redirigirá automáticamente al usuario a la página anterior, enviando los errores de validación a la vista.",
            "El controlador ignorará el error e insertará el registro con un email vacío en la base de datos."
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen - Nuevo Temario Unidad 5",
        "pregunta": "En el siguiente fragmento, ¿qué verbo HTTP se utiliza para la ruta encargada de actualizar un post (la ruta con nombre posts.update)?\n\nRoute::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');\nRoute::put('/posts/{post}', [PostController::class, 'update'])->name('posts.update');\nRoute::delete('/posts/{post}', [PostController::class, 'destroy'])->name('posts.destroy');",
        "opciones": [
            "GET",
            "POST",
            "PUT (o PATCH)",
            "DELETE"
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen - Nuevo Temario Unidad 5",
        "pregunta": "El siguiente fragmento es un método dentro del modelo Post. ¿Qué tipo de relación de Eloquent está estableciendo este modelo con el modelo User?\n\nuse Illuminate\\Database\\Eloquent\\Relations\\BelongsTo;\n\nclass Post extends Model\n{\n    public function user(): BelongsTo\n    {\n        return $this->belongsTo(User::class);\n    }\n}",
        "opciones": [
            "Una relación de uno a uno mediante hasOne.",
            "Una relación inversa de uno a varios (un post pertenece a un usuario).",
            "Una relación de varios a varios mediante belongsToMany.",
            "Una relación directa de uno a varios (un post tiene muchos usuarios)."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen - Nuevo Temario Unidad 5",
        "pregunta": "En el siguiente fragmento, observamos la instrucción if (Auth::check()). Según la arquitectura de Laravel, ¿cuál es el propósito de esta comprobación antes de validar y guardar los datos?\n\npublic function update(Request $request, Post $post)\n{\n    if (Auth::check()) \n    {\n        $request->validate([\n            'title' => 'required|max:255',\n            'body'  => 'required|max:1000'\n        ]);\n\n        $post->title = $request->input('title');\n        $post->body = $request->input('body');\n        $post->save();\n\n        return redirect()->route('posts.index')->with('success', 'Post actualizado.');\n    }\n}",
        "opciones": [
            "Validar que el formulario HTML no contenga campos vacíos.",
            "Verificar si el usuario actual ha iniciado sesión (está autenticado) en la aplicación.",
            "Comprobar si el usuario tiene permisos de administrador.",
            "Encriptar los datos del usuario antes de enviarlos a la base de datos."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen - Nuevo Temario Unidad 5",
        "pregunta": "En la validación de datos del siguiente fragmento, ¿qué significa exactamente la regla required|max:255 aplicada al campo title?\n\npublic function update(Request $request, Post $post)\n{\n    if (Auth::check()) \n    {\n        $request->validate([\n            'title' => 'required|max:255',\n            'body'  => 'required|max:1000'\n        ]);\n\n        $post->title = $request->input('title');\n        $post->body = $request->input('body');\n        $post->save();\n\n        return redirect()->route('posts.index')->with('success', 'Post actualizado.');\n    }\n}",
        "opciones": [
            "Que el título es opcional, pero si se envía debe tener exactamente 255 caracteres.",
            "Que el título es obligatorio y debe tener un valor numérico máximo de 255.",
            "Que el título es obligatorio y no puede tener más de 255 caracteres de longitud.",
            "Que el título debe ser único en la tabla y tener hasta 255 caracteres."
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen - Análisis de Código",
        "pregunta": "Dado el siguiente fragmento, ¿qué método del controlador se ejecutaría al acceder a la ruta nombrada como 'guardar'?\n\nRoute::get('/temas', [CancionController::class, 'composiciones'])->name('obras-musicales');\nRoute::get('/agregar', [CancionController::class, 'crear'])->name('anadir');\nRoute::post('/agregar', [CancionController::class, 'almacenar'])->name('guardar');",
        "opciones": [
            "agregar",
            "almacenar",
            "composiciones",
            "guardar"
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen - Análisis de Código",
        "pregunta": "Para hacer referencia a la primera ruta del siguiente fragmento en una plantilla blade para crear un menú de navegación, ¿qué pondríamos?\n\nRoute::get('/temas', [CancionController::class, 'composiciones'])->name('obras-musicales');\nRoute::get('/agregar', [CancionController::class, 'crear'])->name('anadir');\nRoute::post('/agregar', [CancionController::class, 'almacenar'])->name('guardar');",
        "opciones": [
            "<a href=\"{{url('obras-musicales')}}\">Ver Temas</a>",
            "<a href=\"{{route('temas')}}\">Ver Temas</a>",
            "<a href=\"{{route('obras-musicales')}}\">Ver Temas</a>",
            "<a href=\"{{url('composiciones')}}\">Ver Temas</a>"
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen - Análisis de Código",
        "pregunta": "El siguiente fragmento es el código interno de una clase del modelo almacenada en el archivo Pintura.php. ¿Cuál de las siguientes opciones sobre dicha clase NO es correcta según Eloquent?\n\nclass Pintura extends Model\n{\n    use HasFactory;\n\n    public function pintor(): BelongsTo\n    {\n        return $this->belongsTo(Pintor::class);\n    }\n}",
        "opciones": [
            "La clase extiende la clase Model nativa de Eloquent.",
            "La clase establece que una \"Pintura\" puede pertenecer a varios \"Pintores\" a la vez.",
            "La función pintor() define una relación inversa de uno a varios mediante BelongsTo.",
            "Por convención, Eloquent asumirá que la tabla asociada en la base de datos se llama pinturas."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen - Análisis de Código",
        "pregunta": "En el siguiente fragmento, vemos el código interno de un método de un controlador para guardar datos. ¿Qué tecnología de Laravel se está usando concretamente para realizar la inserción en la tabla canciones?\n\npublic function almacenar(Request $request)\n{\n    DB::table('canciones')->insert([\n        'titulo' => $request->input('title'),\n        'artista' => $request->input('artist'),\n        'lanzamiento' => $request->input('launch'),\n        'genero' => $request->input('genre'),\n        'duracion' => $request->input('duration'),\n    ]);\n\n    return redirect()->route('obras-musicales');\n}",
        "opciones": [
            "El ORM Eloquent.",
            "La interfaz unificada Query Builder.",
            "Una migración mediante el método up().",
            "Un archivo de sembrado (Seeder)."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen - Análisis de Código",
        "pregunta": "Imagina que, en lugar de usar la tecnología del fragmento anterior (Query Builder), quisieras buscar una canción específica por su clave primaria (ID) recibida por parámetro utilizando el ORM Eloquent (suponiendo que la clase del modelo se llama Cancion). ¿Cómo sería el código?",
        "opciones": [
            "$cancion = Cancion::find($id);",
            "$cancion = Cancion::where('id_cancion', $id);",
            "$cancion = Cancion::select($id);",
            "$cancion = Cancion::only($id);"
        ],
        "correcta": 0
    },
    {
        "tema": "Simulacro de Examen - Profundizando en el Temario",
        "pregunta": "Dado el siguiente fragmento, ¿qué función cumple exactamente la llamada encadenada ->middleware('auth') en la definición de la ruta?\n\nRoute::get('/vuelos', function () {\n    // Solo los usuarios autenticados pueden acceder a esta ruta.\n})->middleware('auth');",
        "opciones": [
            "Autentica manualmente al usuario pasándole las credenciales directamente en la petición GET.",
            "Verifica la autenticación del usuario antes de procesar la solicitud y permitirle acceder a la ruta.",
            "Conecta la ruta directamente al panel de base de datos de los vuelos.",
            "Encripta automáticamente todas las variables enviadas por la petición al servidor."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen - Profundizando en el Temario",
        "pregunta": "Teniendo en cuenta el siguiente fragmento y el funcionamiento de los \"Controladores de Recursos\" en Laravel, ¿qué método HTTP y qué acción del controlador se ejecutarían por defecto para procesar la eliminación de una foto específica?\n\nRoute::resource('fotos', FotoController::class);",
        "opciones": [
            "Método POST y acción destroy()",
            "Método GET y acción delete()",
            "Método DELETE y acción destroy()",
            "Método DELETE y acción remove()"
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen - Profundizando en el Temario",
        "pregunta": "Analizando el siguiente fragmento, ¿qué tecnología propia de Laravel se está utilizando concretamente para insertar esos datos en la tabla vuelos?\n\nDB::table('vuelos')->insert([\n    'aerolínea' => 'Epsilon',\n    'destino' => 'Nueva York',\n    'fecha_salida' => date('Y-m-d', strtotime('2023-06-01'))\n]);",
        "opciones": [
            "El ORM Eloquent mediante la creación de un Modelo.",
            "Una migración mediante el método up().",
            "Un controlador de recursos invocado de forma automática.",
            "La interfaz unificada Query Builder."
        ],
        "correcta": 3
    },
    {
        "tema": "Simulacro de Examen - Profundizando en el Temario",
        "pregunta": "El siguiente fragmento muestra el código interno de una clase del modelo almacenada en Comentario.php. ¿Cuál es la finalidad de la propiedad protegida $fillable?\n\nclass Comentario extends Model\n{\n    use HasFactory;\n    \n    protected $table = 'comentarios';\n    protected $fillable = ['contenido', 'post_id', 'fecha'];\n}",
        "opciones": [
            "Definir los atributos que no pueden guardarse nunca en la base de datos por motivos de seguridad.",
            "Indicar el nombre de la tabla relacionada mediante una clave foránea (foreign key).",
            "Especificar los atributos de la tabla que se pueden rellenar o asignar de forma masiva.",
            "Establecer los campos que son obligatorios a la hora de validar el formulario de inserción."
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen - Profundizando en el Temario",
        "pregunta": "Según el siguiente código, ¿qué tipo de relación de Eloquent se está estableciendo entre los modelos Post y Comentario?\n\nclass Post extends Model\n{\n    public function comentarios()\n    {\n        return $this->hasMany(Comentario::class);\n    }\n}",
        "opciones": [
            "Una relación de uno a uno (un post tiene un solo comentario).",
            "Una relación inversa de uno a varios (un post pertenece a varios comentarios).",
            "Una relación directa de uno a varios (un post puede tener varios comentarios).",
            "Una relación de varios a varios (varios posts tienen varios comentarios)."
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen - Profundizando en el Temario",
        "pregunta": "En el siguiente fragmento vemos el código de validación de un controlador. ¿Qué significa exactamente la regla unique:users aplicada al campo email?\n\npublic function store(Request $request)\n{\n    $datos_validados = $request->validate([\n        'name' => 'required|max:255',\n        'email' => 'required|email|unique:users',\n        'password' => 'required|min:8',\n    ]);\n}",
        "opciones": [
            "Que el email debe tener formato de correo electrónico y ser único en toda la red de Internet.",
            "Que el correo electrónico introducido debe ser único dentro de la tabla users de la base de datos.",
            "Que el email es opcional, pero si se introduce, debe coincidir con el del usuario autenticado.",
            "Que solo los usuarios con el rol de \"administrador\" pueden utilizar ese correo electrónico."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen - Profundizando en el Temario",
        "pregunta": "Dado el código de la vista Blade del siguiente fragmento, ¿qué directiva es la responsable de indicar de qué \"layout\" (plantilla principal) hereda esta vista?\n\n@extends('plantillas.base')\n@section('titulo', 'Inicio')\n@section('contenido')\n    <h2>Inicio</h2>\n    <p>Bienvenido a nuestra web.</p>\n@endsection",
        "opciones": [
            "@section('contenido')",
            "@extends('plantillas.base')",
            "@yield('titulo')",
            "<h2>Inicio</h2>"
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen - Profundizando en el Temario",
        "pregunta": "Observando el siguiente fragmento, vemos una relación BelongsToMany entre Autor y Libro. En el contexto de las bases de datos relacionales y Laravel, ¿qué estructura adicional es estrictamente necesaria para que esta relación de \"varios a varios\" funcione?\n\nclass Autor extends Model\n{\n    public function libros(): BelongsToMany\n    {\n        return $this->belongsToMany(Libro::class);\n    }\n}",
        "opciones": [
            "Una tabla \"hija\" que herede todos los campos de ambas clases.",
            "La tabla migrations para registrar las operaciones del usuario.",
            "Una tabla pivote (o tabla intermedia) que contenga las claves foráneas de autores y libros.",
            "Ninguna tabla adicional, Eloquent lo gestiona todo en la memoria caché del servidor."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 5 - RA 4 (Videoclub)",
        "pregunta": "Dado el siguiente fragmento, ¿qué se ejecutaría exactamente en función de las rutas definidas al recibir una petición web?\n\nRoute::get('/zonapublica', [CriticaControllerRMM::class, 'zonaPublica'])->name('zonapublica');\nRoute::post('/critica/{pelicula_id}/nueva', [CriticaControllerRMM::class, 'crearNuevaCriticaRMM'])->name('crearnuevacriticaRMM');\nRoute::post('/critica/{id}/borrar', [CriticaControllerRMM::class, 'borrarCriticaRMM'])->name('borrarcriticaRMM');",
        "opciones": [
            "zonapublica, crearnuevacriticaRMM y borrarcriticaRMM",
            "get y post",
            "zonaPublica, crearNuevaCriticaRMM y borrarCriticaRMM",
            "El controlador CriticaControllerRMM completo, ejecutando todos sus métodos en orden."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 5 - RA 4 (Videoclub)",
        "pregunta": "Para hacer referencia a la segunda ruta del siguiente fragmento (la de guardar la crítica) en el atributo action de un formulario blade, pasándole el ID de la película ($pelicula->id), ¿qué código Blade pondríamos?\n\nRoute::post('/critica/{pelicula_id}/nueva', [CriticaControllerRMM::class, 'crearNuevaCriticaRMM'])->name('crearnuevacriticaRMM');",
        "opciones": [
            "<form action=\"{{ url('crearNuevaCriticaRMM', $pelicula->id) }}\">",
            "<form action=\"{{ route('crearNuevaCriticaRMM', $pelicula->id) }}\">",
            "<form action=\"{{ url('/critica/{pelicula_id}/nueva') }}\">",
            "<form action=\"{{ route('crearnuevacriticaRMM', $pelicula->id) }}\">"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad 5 - RA 4 (Videoclub)",
        "pregunta": "El siguiente fragmento es el código interno de una clase del modelo almacenada en el archivo CriticaRMM.php. ¿Cuál de las siguientes opciones sobre dicha clase NO es correcta?\n\nuse HasFactory;\nprotected $table = 'criticas';\nprotected $fillable = ['valoracion', 'comentario', 'pelicula', 'usuario'];\npublic function peliculaAsociada(): BelongsTo{\n    return $this->belongsTo(PeliculaRMM::class, 'pelicula');\n}",
        "opciones": [
            "La clase debe extender la clase Migration.",
            "La clase debe estar preferiblemente en el espacio de nombres App\\Models.",
            "La clase debe llamarse CriticaRMM.",
            "La clase será usada por el ORM Eloquent."
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 5 - RA 4 (Videoclub)",
        "pregunta": "En el siguiente fragmento, ¿cuál es el propósito de la propiedad protected $table = 'criticas';?\n\nuse HasFactory;\nprotected $table = 'criticas';\nprotected $fillable = ['valoracion', 'comentario', 'pelicula', 'usuario'];",
        "opciones": [
            "Para crear la tabla \"criticas\" en la base de datos de MySQL en el momento de instanciar el modelo.",
            "Para indicar expresamente el nombre de la tabla de la base de datos, ya que Eloquent por defecto habría buscado una tabla llamada \"criticar_r_m_ms\" (la pluralización en inglés).",
            "Para establecer que el campo table es una columna obligatoria en la base de datos.",
            "Es un requisito de Blade para poder iterar sobre las críticas en una vista."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 5 - RA 4 (Videoclub)",
        "pregunta": "El siguiente fragmento declara una variable llamada $fillable, ¿cuál es el propósito de dicha variable?\n\nprotected $fillable = ['valoracion', 'comentario', 'pelicula', 'usuario'];",
        "opciones": [
            "$fillable es un array que contiene los campos de la tabla que no pueden estar vacíos (las reglas NOT NULL de la base de datos).",
            "$fillable es un array que contiene los campos de la tabla que no se rellenan de forma automática (como timestamps o id).",
            "$fillable es un array que contiene los campos de la tabla que se pueden rellenar de forma masiva (mass assignment), por ejemplo usando el método CriticaRMM::create().",
            "$fillable es un array que sirve para rellenar los datos old() cuando un formulario falla."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 5 - RA 4 (Videoclub)",
        "pregunta": "La vista formnuevacriticaRMM usada en el siguiente fragmento, ¿qué tipo de vista es?\n\npublic function formNuevaCriticaRMM(int $id_pelicula) {\n    $pelicula = PeliculaRMM::find($id_pelicula);\n    return view('formnuevacriticaRMM', compact('pelicula'));\n}",
        "opciones": [
            "Es una vista de tipo Smarty como en todos los proyectos anteriores de PHP.",
            "Es una vista de tipo Blade, dado que es el motor de plantillas por defecto en Laravel.",
            "Es una vista de tipo HTML, dado que la directiva compact('pelicula') la convierte a texto plano.",
            "Es una vista de tipo Controller-View, única de la versión Laravel 10."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 5 - RA 4 (Videoclub)",
        "pregunta": "Si la validación del siguiente fragmento falla, Laravel devuelve al usuario al formulario. ¿Cómo mostraríamos en la vista el texto del comentario que el usuario ya había escrito para que no se pierda?\n\npublic function crearNuevaCriticaRMM(Request $request, int $pelicula_id){\n    $data = $request->validate([\n        'valoracion' => 'required|integer|min:1|max:5',\n        'comentario' => 'required|string|max:250',\n    ]);\n    // ... \n}",
        "opciones": [
            "<textarea>{{ $critica->comentario }}</textarea>",
            "<textarea>{{ $_POST['comentario'] }}</textarea>",
            "<textarea>{{ old('comentario') }}</textarea>",
            "<textarea>{{ $request->comentario }}</textarea>"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 5 - RA 4 (Videoclub)",
        "pregunta": "En el primer método del siguiente fragmento, vas a usar los datos de la película para pasarlos a la vista. ¿Qué hace internamente la instrucción $pelicula = PeliculaRMM::find($id_pelicula);?\n\npublic function formNuevaCriticaRMM(int $id_pelicula) {\n    $pelicula = PeliculaRMM::find($id_pelicula);\n    return view('formnuevacriticaRMM', compact('pelicula'));\n}",
        "opciones": [
            "Busca en la carpeta resources/views si existe un archivo con ese ID.",
            "Ejecuta una consulta del tipo SELECT * FROM peliculas WHERE id = ? devolviendo una instancia del modelo (un objeto) si la encuentra.",
            "Filtra un array de películas que ya estaban previamente almacenadas en la sesión del usuario.",
            "Devuelve únicamente el campo ID de la tabla películas, pero no el resto de sus atributos."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Nivel Avanzado (Laravel MVC)",
        "pregunta": "Analizando el siguiente fragmento, si un usuario que NO ha iniciado sesión intenta acceder escribiendo la URL /mi-perfil en su navegador, ¿qué ocurrirá?\n\nRoute::middleware(['auth'])->group(function () {\n    Route::get('/mi-perfil', [UsuarioController::class, 'zonaPrivada'])->name('privada');\n    Route::post('/critica/{id}/borrar', [CriticaControllerRMM::class, 'borrarCriticaRMM'])->name('borrar');\n});",
        "opciones": [
            "Verá la página de su perfil vacía porque no hay datos en la sesión.",
            "Laravel lanzará un error de base de datos (Error 500).",
            "El middleware auth bloqueará el acceso y lo redirigirá automáticamente a la pantalla de login.",
            "Entrará a la zona privada pero como usuario \"Guest\" (Invitado)."
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen: Nivel Avanzado (Laravel MVC)",
        "pregunta": "En el siguiente fragmento, si un usuario logueado intenta eliminar una crítica escribiendo directamente en la barra de direcciones del navegador la URL /critica/5/borrar y pulsando Enter, ¿qué pasará?\n\nRoute::middleware(['auth'])->group(function () {\n    Route::get('/mi-perfil', [UsuarioController::class, 'zonaPrivada'])->name('privada');\n    Route::post('/critica/{id}/borrar', [CriticaControllerRMM::class, 'borrarCriticaRMM'])->name('borrar');\n});",
        "opciones": [
            "La crítica número 5 se borrará correctamente.",
            "Laravel mostrará un error de método no permitido (Method Not Allowed - 405) porque la ruta espera una petición POST y el navegador hace una petición GET.",
            "El middleware auth le denegará el acceso.",
            "Laravel pedirá confirmación de borrado automáticamente."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Nivel Avanzado (Laravel MVC)",
        "pregunta": "Mirando el siguiente fragmento, ¿en qué situación exacta se mostrará en pantalla el enlace \"Inicia sesión para valorar\"?\n\n@auth\n    <p>Hola, {{ Auth::user()->name }}</p>\n    @if($pelicula->criticas_count > 0)\n        <p>Nota media: {{ number_format($pelicula->criticas_avg_valoracion, 2) }}</p>\n    @endif\n@endauth\n\n@guest\n    <a href=\"{{ route('login') }}\" class=\"btn-secundario\">Inicia sesión para valorar</a>\n@endguest",
        "opciones": [
            "Siempre, pero el botón estará desactivado si el usuario ya hizo login.",
            "Únicamente cuando el usuario no esté autenticado, gracias a la directiva @guest.",
            "Cuando la variable $pelicula->criticas_count sea igual a 0.",
            "Solo si la contraseña del usuario ha caducado."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Nivel Avanzado (Laravel MVC)",
        "pregunta": "En el siguiente fragmento, ¿qué función cumple la sintaxis de dobles llaves {{ ... }} en Blade?\n\n@auth\n    <p>Hola, {{ Auth::user()->name }}</p>\n    @if($pelicula->criticas_count > 0)\n        <p>Nota media: {{ number_format($pelicula->criticas_avg_valoracion, 2) }}</p>\n    @endif\n@endauth\n\n@guest\n    <a href=\"{{ route('login') }}\" class=\"btn-secundario\">Inicia sesión para valorar</a>\n@endguest",
        "opciones": [
            "Sirve para ejecutar código SQL directamente en la vista.",
            "Es el equivalente a hacer un echo o print en PHP, imprimiendo el valor de la variable en el HTML protegiéndolo de ataques XSS (Cross-Site Scripting).",
            "Sirve para abrir y cerrar bucles @foreach.",
            "Es una etiqueta de comentarios, el texto dentro no se renderiza en el navegador."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Nivel Avanzado (Laravel MVC)",
        "pregunta": "En el siguiente fragmento, ¿qué hace exactamente la función compact('usuario', 'criticas') en el return view(...)?\n\npublic function zonaPrivada() {\n    $usuario = Auth::user();\n    $criticas = $usuario->criticas()->with('peliculaAsociada')->get();\n    \n    return view('privada.index', compact('usuario', 'criticas'));\n}",
        "opciones": [
            "Comprime las variables para que la página cargue más rápido en el navegador.",
            "Borra las variables de la memoria RAM una vez que la vista se ha cargado.",
            "Crea un array asociativo usando los nombres de las variables como claves, equivalente a ['usuario' => $usuario, 'criticas' => $criticas], para pasárselo a la vista.",
            "Concatena el usuario y las críticas en un solo string de texto."
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen: Nivel Avanzado (Laravel MVC)",
        "pregunta": "En el siguiente fragmento, se usa la clase Auth::user(). ¿De dónde saca Laravel la información de este usuario?\n\npublic function zonaPrivada() {\n    $usuario = Auth::user();\n    $criticas = $usuario->criticas()->with('peliculaAsociada')->get();\n    \n    return view('privada.index', compact('usuario', 'criticas'));\n}",
        "opciones": [
            "De los datos enviados por un formulario mediante el método POST.",
            "De la sesión del navegador, ya que el usuario ha tenido que autenticarse previamente.",
            "Del archivo .env de configuración global del servidor.",
            "Se la inventa generando un usuario aleatorio (Faker)."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Nivel Avanzado (Laravel MVC)",
        "pregunta": "En el siguiente fragmento, ¿para qué sirve la condición if (User::where(...)->count() == 0) antes de hacer el create()?\n\npublic function run(): void {\n    if (User::where('email', 'admin@videoclub.com')->count() == 0) {\n        User::create([\n            'name' => 'Admin',\n            'email' => 'admin@videoclub.com',\n            'password' => Hash::make('123456'),\n        ]);\n    }\n}",
        "opciones": [
            "Para asegurarse de que el usuario \"Admin\" no exista ya en la base de datos, evitando crear duplicados cada vez que se ejecuta el Seeder.",
            "Para comprobar que la tabla de usuarios está completamente vacía antes de insertar datos.",
            "Para borrar al usuario si ya existía y volver a crearlo desde cero.",
            "Para verificar que el correo electrónico tiene un formato válido (que lleva arroba)."
        ],
        "correcta": 0
    },
    {
        "tema": "Simulacro de Examen: Nivel Avanzado (Laravel MVC)",
        "pregunta": "En el siguiente fragmento, ¿por qué es obligatorio utilizar Hash::make('123456') al guardar la contraseña?\n\npublic function run(): void {\n    if (User::where('email', 'admin@videoclub.com')->count() == 0) {\n        User::create([\n            'name' => 'Admin',\n            'email' => 'admin@videoclub.com',\n            'password' => Hash::make('123456'),\n        ]);\n    }\n}",
        "opciones": [
            "Porque el campo password en la base de datos solo admite caracteres alfanuméricos especiales.",
            "Para que el usuario no pueda cambiar su contraseña en el futuro.",
            "Porque Laravel exige almacenar un resumen cifrado (hash) de la contraseña por seguridad, nunca el texto plano.",
            "Porque el comando artisan db:seed da error si los strings tienen menos de 8 caracteres."
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En el siguiente fragmento, ¿para qué sirve obligatoriamente la etiqueta @csrf dentro del formulario HTML?\n\nRoute::post('/critica/guardar', [CriticaControllerRMM::class, 'guardar'])->name('guardarcritica');\n\n<form action=\"{{ route('guardarcritica') }}\" method=\"POST\">\n    @csrf\n    <label>Comentario:</label>\n    <textarea name=\"comentario\"></textarea>\n    <button type=\"submit\">Enviar</button>\n</form>",
        "opciones": [
            "Sirve para darle estilos CSS predeterminados al formulario.",
            "Es una medida de seguridad obligatoria en Laravel para evitar ataques de falsificación de peticiones (evita que otra web envíe datos en nuestro nombre).",
            "Sirve para conectar el formulario con la base de datos automáticamente.",
            "Se usa para encriptar la contraseña del usuario antes de enviarla."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En el siguiente fragmento, vemos que la ruta web se ha definido usando Route::post en lugar de Route::get. ¿Por qué hacemos esto al enviar un formulario?\n\nRoute::post('/critica/guardar', [CriticaControllerRMM::class, 'guardar'])->name('guardarcritica');",
        "opciones": [
            "Porque POST hace que la página cargue más rápido.",
            "Porque Laravel no permite usar GET en los formularios.",
            "Porque vamos a enviar datos nuevos para guardarlos en el servidor, y el método GET solo debe usarse para consultar información, no para modificarla.",
            "Porque POST es obligatorio para todas las rutas que llevan la función ->name()."
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "Mirando el siguiente fragmento (el Modelo), ¿qué le estamos diciendo a Laravel exactamente con la línea protected $table = 'peliculas';?\n\nclass PeliculaRMM extends Model {\n    protected $table = 'peliculas';\n    protected $fillable = ['titulo', 'director', 'anio', 'genero'];\n}",
        "opciones": [
            "Que cree una tabla llamada 'peliculas' automáticamente cuando arranquemos el servidor.",
            "Que esta tabla solo puede ser modificada por usuarios administradores.",
            "Le indicamos el nombre exacto de la tabla en la base de datos, ya que el nombre de nuestra clase (PeliculaRMM) no coincide con el estándar en inglés que Laravel buscaría por defecto.",
            "Es una regla para indicar que la tabla 'peliculas' no se puede borrar."
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En el siguiente fragmento, la propiedad $fillable contiene campos como 'titulo', 'director' y 'anio'. En conceptos básicos, ¿qué significa esto?\n\nclass PeliculaRMM extends Model {\n    protected $table = 'peliculas';\n    protected $fillable = ['titulo', 'director', 'anio', 'genero'];\n}",
        "opciones": [
            "Son los únicos campos que Laravel nos permite imprimir en una vista Blade.",
            "Son los campos que Laravel rellena de forma automática por nosotros (como la fecha de creación).",
            "Son los campos que permitimos guardar de golpe (asignación masiva) cuando recibimos los datos del formulario, como medida de seguridad.",
            "Son los campos que no pueden dejarse en blanco (obligatorios) en la base de datos."
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En el siguiente fragmento (el Controlador), ¿qué acción realiza la instrucción PeliculaRMM::find($id) de forma básica?\n\npublic function verDetalle(int $id) {\n    $pelicula = PeliculaRMM::find($id);\n    return view('detallepelicula', compact('pelicula'));\n}",
        "opciones": [
            "Busca en la carpeta de vistas si existe un archivo con ese $id.",
            "Busca una película en la base de datos cuya clave primaria (el ID) coincida con el número pasado por parámetro.",
            "Busca si el usuario ha iniciado sesión.",
            "Genera un error si la base de datos está vacía."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En el siguiente fragmento, la función termina con la instrucción return view('detallepelicula', compact('pelicula'));. ¿Qué archivo físico buscará Laravel en el disco duro para mostrar esta pantalla?\n\npublic function verDetalle(int $id) {\n    $pelicula = PeliculaRMM::find($id);\n    return view('detallepelicula', compact('pelicula'));\n}",
        "opciones": [
            "detallepelicula.php",
            "detallepelicula.html",
            "detallepelicula.blade.php",
            "view_detallepelicula.php"
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En la tarea hemos creado un archivo llamado RMMSeeder.php. Saliéndonos del código y yendo a la teoría pura: ¿Para qué sirve un \"Seeder\" en Laravel?",
        "opciones": [
            "Para borrar todas las tablas de la base de datos y empezar de cero.",
            "Para rellenar (poblar) las tablas de la base de datos con datos de prueba o iniciales.",
            "Para crear las rutas de la aplicación de forma automática.",
            "Para diseñar la interfaz gráfica del videoclub."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En una vista de Laravel (Blade), si queremos imprimir por pantalla el título de una película (por ejemplo, en un encabezado h1), ¿cuál es la sintaxis básica correcta que debemos escribir?",
        "opciones": [
            "<h1> <?php echo $pelicula->titulo; ?> </h1>",
            "<h1> {{ $pelicula->titulo }} </h1>",
            "<h1> [[ $pelicula->titulo ]] </h1>",
            "<h1> @print($pelicula->titulo) </h1>"
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En la ruta del siguiente fragmento, ¿qué representa exactamente la parte {id} dentro de la URL /critica/{id}/borrar?\n\n// En routes/web.php\nRoute::get('/critica/{id}/borrar', [CriticaControllerRMM::class, 'confirmarBorrado'])->name('confirmarborrado');\n\n// En el controlador CriticaControllerRMM\npublic function confirmarBorrado(int $id) {\n    $critica = CriticaRMM::find($id);\n    return view('confirmarborradoRMM', compact('critica'));\n}",
        "opciones": [
            "Es el nombre de una carpeta física llamada \"id\" dentro del servidor.",
            "Es una medida de seguridad que pide la contraseña del usuario.",
            "Es un parámetro dinámico; Laravel atrapará el valor que se ponga ahí (por ejemplo un 5) y se lo pasará al método del controlador.",
            "Es un texto fijo, el usuario debe escribir literalmente \"{id}\" en su navegador para entrar."
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En el controlador del siguiente fragmento, vemos que la función recibe un parámetro: confirmarBorrado(int $id). En conceptos básicos de Laravel, ¿de dónde saca la función el valor de ese $id?\n\n// En routes/web.php\nRoute::get('/critica/{id}/borrar', [CriticaControllerRMM::class, 'confirmarBorrado'])->name('confirmarborrado');\n\n// En el controlador CriticaControllerRMM\npublic function confirmarBorrado(int $id) {\n    $critica = CriticaRMM::find($id);\n    return view('confirmarborradoRMM', compact('critica'));\n}",
        "opciones": [
            "Lo saca directamente de la URL de la ruta que el usuario ha visitado.",
            "Lo saca de un campo oculto <input type=\"hidden\"> del formulario.",
            "Se lo inventa Laravel de forma aleatoria.",
            "Lo saca de la función compact()."
        ],
        "correcta": 0
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "Mirando el siguiente fragmento, ¿para qué se utiliza la directiva @foreach en Laravel (Blade)?\n\n<tbody>\n    @foreach($peliculas as $pelicula)\n        <tr>\n            <td>{{ $pelicula->titulo }}</td>\n            <td>{{ $pelicula->direccion }}</td>\n            <td>{{ $pelicula->anio }}</td>\n        </tr>\n    @endforeach\n</tbody>",
        "opciones": [
            "Para crear una tabla nueva en la base de datos por cada película.",
            "Para recorrer un array o colección de datos (como $peliculas) y repetir el código HTML interior por cada elemento que encuentre.",
            "Para validar que el usuario ha iniciado sesión antes de mostrar la tabla.",
            "Para contar cuántas películas hay y mostrar un número total."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En el siguiente fragmento, ¿qué ocurriría de forma predeterminada si la variable $peliculas estuviera totalmente vacía (0 películas en la base de datos)?\n\n<tbody>\n    @foreach($peliculas as $pelicula)\n        <tr>\n            <td>{{ $pelicula->titulo }}</td>\n            <td>{{ $pelicula->direccion }}</td>\n            <td>{{ $pelicula->anio }}</td>\n        </tr>\n    @endforeach\n</tbody>",
        "opciones": [
            "La página mostraría un \"Error 500 - Server Error\" y se bloquearía.",
            "Laravel imprimiría automáticamente el texto \"No hay películas\" en la pantalla.",
            "El bucle @foreach simplemente no se ejecutaría y la tabla HTML quedaría vacía por dentro, sin dar error.",
            "Nos redirigiría automáticamente a la página de login."
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "Yendo a la teoría básica sobre el siguiente fragmento. ¿Cuál es el propósito fundamental de crear una \"Migración\" en Laravel?\n\npublic function up(): void{\n    Schema::create('peliculas', function (Blueprint $table) {\n        $table->id();\n        $table->string('titulo', 60);\n        $table->integer('anio');\n        $table->timestamps();\n    });\n}",
        "opciones": [
            "Mover (migrar) nuestra página web desde nuestro ordenador a un servidor real en Internet.",
            "Crear, modificar o eliminar la estructura de las tablas de la base de datos utilizando código PHP, sin tener que escribir sentencias SQL a mano.",
            "Trasladar a los usuarios de una base de datos antigua a una nueva.",
            "Es el archivo donde se configuran las rutas de la web."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En el siguiente fragmento de la migración, vemos la instrucción $table->timestamps();. ¿Qué hace esto en la base de datos?\n\npublic function up(): void{\n    Schema::create('peliculas', function (Blueprint $table) {\n        $table->id();\n        $table->string('titulo', 60);\n        $table->integer('anio');\n        $table->timestamps();\n    });\n}",
        "opciones": [
            "Crea una columna para guardar la duración de la película en minutos.",
            "Genera automáticamente dos columnas (created_at y updated_at) para registrar cuándo se creó y cuándo se modificó la fila por última vez.",
            "Borra la tabla si ha pasado mucho tiempo desde que se usó.",
            "Guarda la fecha y hora en la que el usuario hizo login."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "Pregunta general de Controladores: En tu práctica, tras guardar una crítica nueva en la base de datos mediante POST, ¿cuál es la acción correcta y más común que debe devolver el controlador?",
        "opciones": [
            "return view('formulariocritica');",
            "return redirect()->route('zonapublica');",
            "return \"Datos guardados correctamente\";",
            "return $critica;"
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "Pregunta general de Blade: Para no tener que repetir el menú de navegación y el pie de página en todos los archivos HTML de nuestro videoclub, creamos un Layout general. ¿Qué directiva básica de Blade usamos al principio de nuestras vistas para \"heredar\" ese diseño?",
        "opciones": [
            "@include('layouts.publico')",
            "<require src=\"layouts/publico\" />",
            "@extends('layouts.publico')",
            "@layout('publico')"
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen: Patrón MVC y Laravel (Unidad 5)",
        "pregunta": "Analizando el siguiente fragmento del controlador, y según el patrón MVC, ¿cuál es la responsabilidad principal que está cumpliendo esta función?\n\npublic function zonaPublica() {\n    $peliculas = PeliculaRMM::all();\n    return view('zonapublicaRMM', compact('peliculas'));\n}",
        "opciones": [
            "Crear la tabla de películas en la base de datos si esta no existe.",
            "Renderizar el código HTML final directamente sin necesidad de usar archivos Blade.",
            "Actuar como intermediario: pedir los datos al Modelo (PeliculaRMM) y enviárselos a la Vista (zonapublicaRMM) para que los presente.",
            "Validar que el usuario sea administrador antes de mostrar los datos."
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen: Patrón MVC y Laravel (Unidad 5)",
        "pregunta": "En el siguiente fragmento del Modelo de críticas, ¿por qué ha sido necesario pasarle explícitamente el segundo parámetro 'pelicula' al método belongsTo()?\n\npublic function peliculaAsociada(): BelongsTo{\n    return $this->belongsTo(PeliculaRMM::class, 'pelicula');\n}",
        "opciones": [
            "Porque en las relaciones de Laravel siempre es obligatorio escribir dos parámetros.",
            "Para indicar expresamente el nombre de la clave foránea en la base de datos, ya que por convención Laravel habría buscado una clave llamada 'pelicula_r_m_m_id'.",
            "Para indicar que el campo película no puede ser nulo en la base de datos.",
            "Para que la vista sepa imprimir el título de la película en pantalla."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Patrón MVC y Laravel (Unidad 5)",
        "pregunta": "En el siguiente fragmento de una vista Blade imprimimos el comentario de un usuario. ¿Qué beneficio de seguridad obtenemos automáticamente de la arquitectura de las Vistas en Laravel al usar la sintaxis de llaves {{ }}?\n\n<td>{{ $critica->comentario }}</td>",
        "opciones": [
            "Escapa el contenido convirtiéndolo a texto plano mediante htmlspecialchars, evitando ataques de inyección de scripts (XSS).",
            "Encripta el comentario en la base de datos para que los administradores no puedan leerlo.",
            "Traducción automática del comentario al idioma del navegador del usuario.",
            "Evita ataques CSRF al imprimir un token oculto junto al comentario."
        ],
        "correcta": 0
    },
    {
        "tema": "Simulacro de Examen: Patrón MVC y Laravel (Unidad 5)",
        "pregunta": "En el archivo de migración para las críticas, vemos la siguiente instrucción referida a la clave foránea. ¿Qué función cumple el método ->constrained('peliculas')?\n\n$table->foreignId('pelicula')->constrained('peliculas');",
        "opciones": [
            "Indica que el título de la película está restringido a 255 caracteres.",
            "Crea una restricción de clave foránea a nivel de base de datos, garantizando que el ID introducido exista previamente en la tabla 'peliculas'.",
            "Oculta las películas que tienen restricción de edad.",
            "Indica que si se borra la película, no se pueden borrar las críticas asociadas."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Patrón MVC y Laravel (Unidad 5)",
        "pregunta": "En el siguiente fragmento de código (inserción de una crítica), usamos el Facade Auth::id(). Según el ecosistema de Laravel, ¿qué devuelve esta función?\n\n$critica->pelicula = $pelicula_id;\n$critica->usuario = Auth::id();\n$critica->save();",
        "opciones": [
            "El nombre de usuario (username) en formato de texto plano.",
            "Un identificador aleatorio de sesión anónima.",
            "El ID de la película que el usuario ha seleccionado.",
            "El identificador único (ID) numérico del usuario que tiene la sesión activa (logueado) en ese momento."
        ],
        "correcta": 3
    },
    {
        "tema": "Simulacro de Examen: Patrón MVC y Laravel (Unidad 5)",
        "pregunta": "En el siguiente fragmento vemos la definición de una ruta. ¿Cuál es la ventaja principal de asignarle un nombre mediante el encadenamiento ->name('borrarcriticaRMM')?\n\nRoute::post('/critica/{id}/borrar', [CriticaControllerRMM::class, 'borrarCriticaRMM'])->name('borrarcriticaRMM');",
        "opciones": [
            "Es obligatorio para que el formulario Blade pueda usar el método POST.",
            "Si en el futuro cambiamos la URI física (ej. a '/eliminar/{id}'), no tendremos que modificar los enlaces en nuestras Vistas, ya que estas invocan a la ruta por su nombre y no por su URL.",
            "Aumenta la velocidad de carga porque Laravel guarda la ruta en memoria caché.",
            "Sirve para restringir la ruta a los usuarios administradores."
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Patrón MVC y Laravel (Unidad 5)",
        "pregunta": "En el siguiente fragmento del controlador validamos la petición. Si un usuario envía el formulario con una valoración de \"6\", ¿cómo actuará la arquitectura de Laravel por defecto ante el método validate()?\n\n$data = $request->validate([\n    'valoracion' => 'required|integer|min:1|max:5',\n    'comentario' => 'required|string|max:250',\n]);",
        "opciones": [
            "Guardará el número 6 pero lanzará un \"warning\" silencioso en los logs del servidor.",
            "Cambiará el valor a 5 automáticamente para cumplir la regla.",
            "Interrumpirá la ejecución de la función y redirigirá al usuario a la vista (formulario) anterior, enviando los mensajes de error a la sesión.",
            "Ignorará el fallo porque los datos vienen por método POST de forma segura."
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen: Patrón MVC y Laravel (Unidad 5)",
        "pregunta": "Siguiendo estrictamente los conceptos del patrón de diseño MVC en Laravel, ¿qué representa la clase PeliculaRMM mostrada en este fragmento dentro de la arquitectura de nuestra aplicación de videoclub?\n\nclass PeliculaRMM extends Model {\n    protected $table = 'peliculas';\n    protected $fillable = ['titulo', 'director', 'anio', 'genero'];\n}",
        "opciones": [
            "El Controlador: encauza las peticiones de los usuarios.",
            "La Vista: contiene la información para generar el HTML.",
            "La Base de Datos: actúa como el motor relacional puro MySQL.",
            "El Modelo: encapsula la capa de datos y la lógica de interacción con la tabla películas en la base de datos."
        ],
        "correcta": 3
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En el ecosistema de Laravel usamos mucho la terminal. ¿Cuál es el comando exacto de Artisan básico que usaríamos para generar el controlador de las críticas de nuestro videoclub?",
        "opciones": [
            "php artisan create:controller CriticaControllerRMM",
            "php artisan make:controller CriticaControllerRMM",
            "composer require CriticaControllerRMM",
            "php artisan build:controller CriticaControllerRMM"
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "Teoría fundamental: Cuando iniciamos un proyecto nuevo en Laravel y necesitamos conectar nuestra aplicación a la base de datos (por ejemplo, definir que el usuario es 'root' y la BBDD es 'videoclub'), ¿en qué archivo principal debemos configurar estos datos?",
        "opciones": [
            "En el archivo oculto .env de la raíz del proyecto.",
            "En el archivo routes/web.php.",
            "En el controlador principal Controller.php.",
            "En el archivo config/database.php obligatoriamente."
        ],
        "correcta": 0
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En el siguiente fragmento, queremos recuperar absolutamente todas las películas de la base de datos para mandarlas a la vista. ¿Qué método básico de Eloquent nos falta escribir en el hueco?\n\npublic function listarPeliculas() {\n    $peliculas = PeliculaRMM::_______();\n    return view('listado', compact('peliculas'));\n}",
        "opciones": [
            "get()",
            "findAll()",
            "all()",
            "select(*)"
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En el siguiente fragmento, queremos mostrar un mensaje en Blade SOLO si la película es posterior al año 2000. ¿Cuál es la sintaxis correcta en este motor de plantillas?\n\n_______($pelicula->anio > 2000)\n    <span class=\"badge\">Película moderna</span>\n_______",
        "opciones": [
            "<?php if($pelicula->anio > 2000) { ?> ... <?php } ?>",
            "@if($pelicula->anio > 2000) ... @endif",
            "{{ if($pelicula->anio > 2000) }} ... {{ endif }}",
            "@condition($pelicula->anio > 2000) ... @endcondition"
        ],
        "correcta": 1
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En el siguiente fragmento del controlador, el usuario ha enviado un formulario por POST y la función recibe el objeto $request. ¿Cómo extraemos de forma segura el valor del campo HTML llamado 'comentario'?\n\npublic function guardarCritica(Request $request) {\n    $texto = _______;\n    // ... \n}",
        "opciones": [
            "$request->input('comentario')",
            "$_POST['comentario']",
            "$request->get_post('comentario')",
            "$request->form('comentario')"
        ],
        "correcta": 0
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "Teoría fundamental: Laravel tiene varios archivos de rutas, pero nosotros siempre estamos programando dentro de routes/web.php. ¿Cuál es la característica principal de las rutas definidas en este archivo?",
        "opciones": [
            "Están diseñadas para conectarse únicamente con bases de datos no relacionales.",
            "No permiten el uso del motor de plantillas Blade.",
            "Tienen asignado el grupo de middleware 'web', lo que proporciona características como el estado de la sesión y la protección CSRF.",
            "Solo responden a peticiones que vienen de aplicaciones móviles, no de navegadores web."
        ],
        "correcta": 2
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En el siguiente fragmento de nuestro Layout (plantilla maestra), usamos la directiva @yield('contenido'). ¿Cuál es su propósito exacto?\n\n<body>\n    <header>Videoclub RMM</header>\n    <main>\n        @yield('contenido')\n    </main>\n</body>",
        "opciones": [
            "Define un marcador de posición (un hueco) donde las vistas hijas que extiendan de este layout inyectarán su propio código HTML.",
            "Detiene la ejecución de la página si ocurre un error.",
            "Incluye un archivo estático llamado 'contenido.blade.php'.",
            "Imprime el contenido de la base de datos de forma automática."
        ],
        "correcta": 0
    },
    {
        "tema": "Simulacro de Examen: Nivel Básico / Fundamental (Tema 5)",
        "pregunta": "En el siguiente fragmento para crear un registro, instanciamos el modelo, le asignamos valores y finalmente ejecutamos el método save(). ¿Qué hace internamente Eloquent cuando llamamos a este método?\n\n$critica = new CriticaRMM();\n$critica->valoracion = 5;\n$critica->comentario = '¡Me encantó!';\n$critica->save();",
        "opciones": [
            "Guarda los datos en la memoria caché del navegador del usuario.",
            "Genera un archivo de copia de seguridad (backup) del modelo.",
            "Comprueba si los datos son válidos pero no interactúa con la base de datos.",
            "Traduce la acción a una sentencia SQL (INSERT) y guarda la nueva fila físicamente en la tabla de la base de datos."
        ],
        "correcta": 3
    },
    {
"tema": "Examen 2025 tema 6",
"pregunta": "Dado el siguiente fragmento de rutas de un API REST (FRAGMENTO F7):\n\nRoute::get('/mascotas', [APIController::class,'listarMascotas']);\nRoute::post('/nuevamascota', [APIController::class,'crearMascota']);\nRoute::put( '/mascota/{mascota}', [APIController::class,'cambiarDescripcionMascota'])->whereNumber('mascota');\nRoute::delete('/mascota/{mascota}', [APIController::class,'borrarMascota'])->whereNumber('mascota');\n\nImagina que se puede registrar la fecha en la que una mascota fallece. ¿Qué método HTTP sería más conveniente en un API REST para que un usuario pudiese actualizar o registrar la fecha de fallecimiento de una mascota existente?",
"opciones": [
"Route::get",
"Route::put",
"Route::post",
"Route::delete"
],
"correcta": 1
},
{
"tema": "Examen 2025 tema 6",
"pregunta": "Dado el fragmento de código anterior (FRAGMENTO F7):\n\nRoute::get('/mascotas', [APIController::class,'listarMascotas']);\nRoute::post('/nuevamascota', [APIController::class,'crearMascota']);\n...\n\n¿En qué archivo de la arquitectura de Laravel encontraríamos habitualmente estas líneas de código para exponer nuestro servicio web?",
"opciones": [
"routes/web.php",
"app/http/controllers/api/APIController.php",
"routes/api.php",
"app/http/controllers/api/routes.php"
],
"correcta": 2
},
{
"tema": "Examen 2025 tema 6",
"pregunta": "Analizando el FRAGMENTO F7:\n\nRoute::get('/mascotas', [APIController::class,'listarMascotas']);\nRoute::post('/nuevamascota', [APIController::class,'crearMascota']);\nRoute::put('/mascota/{mascota}', ...)->whereNumber('mascota');\n\n¿Por qué NO se usa whereNumber en la segunda ruta (Route::post('/nuevamascota', ...))?",
"opciones": [
"Porque no es necesario, ya que el parámetro de ruta que tiene es un formulario y no un número.",
"Porque se entiende que en este caso es el método controlador quien verifica a través de Request si el parámetro de ruta es numérico o del tipo que sea.",
"Porque no se puede usar whereNumber en una ruta de tipo POST.",
"Porque la ruta no tiene un parámetro de ruta explícito (como podría ser {mascota})."
],
"correcta": 3
},
{
"tema": "Examen 2025 tema 6",
"pregunta": "Dado el FRAGMENTO F8 del controlador:\n\nfunction cambiarDescripcionMascota(Request $request, Mascota $mascota): JsonResponse\n{\n...\n}\n\nY su ruta asociada en el FRAGMENTO F7:\nRoute::put( '/mascota/{mascota}', [APIController::class,'cambiarDescripcionMascota']);\n\n¿Qué ocurriría si se cambia el segundo parámetro del método cambiarDescripcionMascota por int $dato?",
"opciones": [
"Habría que eliminar whereNumber de la ruta correspondiente, dado que ya no es necesario, y hacer las verificaciones oportunas dentro del método.",
"No tendría sentido dicho cambio, ya que el número se podría recoger a través de Request $request. Si se deja como está tienes la ventaja de que obtienes la instancia de Mascota directamente.",
"Dentro del método habría que buscar la mascota correspondiente a dicho número (perdiendo el autobinding de Laravel), y, si existe, hacer la operación oportuna.",
"No se podría hacer el cambio, ya que el segundo parámetro no puede ser un número en ningún caso."
],
"correcta": 2
},
{
"tema": "Examen 2025 tema 6",
"pregunta": "Dado el final del FRAGMENTO F8:\n\n$mascota->save();\nreturn response()->json('Mascota modificada correctamente.', 200);\n\nQueremos cambiar el retorno para devolver dos valores ($v1 y $v2) en la respuesta en formato JSON. ¿Cuál sería la forma más lógica (y recomendada en Laravel) de hacerlo?",
"opciones": [
"return response()->json(json_encode({$v1,$v2}),200);",
"return response()->json({$v1, $v2},200);",
"return response()->json(json_encode([$v1,$v2]),200);",
"return response()->json([$v1,$v2],200);"
],
"correcta": 3
},
{
"tema": "Examen 2025 tema 6",
"pregunta": "Dado el controlador (F8) que devuelve códigos 403, 400 o 200, y el cliente Guzzle (F9):\n\nswitch($response->getStatusCode()) {\n case 400: ... break;\n case 200: ... break;\n default: ... break;\n}\n\nSolo en una de las siguientes situaciones NO SE EJECUTA la rama 'default' del switch del FRAGMENTO F9, ¿sabrías decir cuál?",
"opciones": [
"Cuando la descripción se envía al servicio web como datos de un formulario normal y corriente (isJson() falla y devuelve 403).",
"Cuando la descripción tiene 300 caracteres (falla la validación del controlador y devuelve un 400).",
"Cuando el id de la mascota no corresponde a una mascota real (Autobinding devuelve 404).",
"Cuando se produce un error interno en nuestra aplicación y se retorna el código 500."
],
"correcta": 1
},
{
"tema": "Examen 2025 tema 6",
"pregunta": "Atendiendo al uso de Guzzle en el FRAGMENTO F9:\n\n$url='mascota/' . urlencode($id_mascota);\n$response = $gclient->put($url, ['json' => $datos]);\n\nSabiendo por el FRAGMENTO F8 que el servidor espera un campo llamado 'descripcion', ¿cómo podría ser el contenido correcto de la variable PHP $datos para que Guzzle la envíe correctamente?",
"opciones": [
"$datos = ['descripcion'=>'Nueva descripción','mascota'=>2];",
"$datos = json_encode(['descripcion'=>'Nueva descripción']);",
"$datos = ['descripcion'=>'Nueva descripción'];",
"$datos = json_encode(['descripcion'=>'Nueva descripción','mascota'=>2]);"
],
"correcta": 2
},
{
"tema": "Examen 2025 tema 6",
"pregunta": "Atendiendo al FRAGMENTO F7, la ruta es: Route::put('/mascota/{mascota}', ...).\n\nSi en el código del FRAGMENTO F9 tuviéramos que enviar los datos (alojados en un array $datos) como un formulario normal y corriente en lugar de JSON, ¿qué instrucción tendríamos que poner al usar el cliente HTTP Guzzle?",
"opciones": [
"$gclient->put($url, ['form_params' => json_decode($datos)])",
"$gclient->put($url, ['form_params' => $datos])",
"$gclient->post($url, ['form_params' => $datos])",
"$gclient->post($url, ['form_params' => json_decode($datos)])"
],
"correcta": 1
},
{
"tema": "tarea tema 6",
"pregunta": "En Laravel, para el desarrollo de un API REST, usamos el siguiente fragmento para registrar rutas: `Route::apiResource('canciones', CancionController::class);`. ¿En qué archivo debe ubicarse este código y qué peculiaridad tienen estas rutas respecto al método clásico `Route::resource`?",
"opciones": [
    "En el archivo routes/web.php e incluyen todas las rutas para crear vistas HTML interactivas.",
    "En el archivo routes/api.php. El método apiResource declara automáticamente las rutas CRUD excluyendo aquellas que presentan plantillas HTML como 'create' y 'edit'.",
    "En el archivo routes/api.php, pero es obligatorio definir cada verbo (GET, POST, PUT) individualmente debajo de esta línea.",
    "En el archivo app/Http/routes.php y funcionan exclusivamente para el consumo de servicios SOAP."
    ],
    "correcta": 1
},
{
    "tema": "tarea tema 6",
    "pregunta": "Al consumir una API REST con el cliente Guzzle en PHP, utilizamos el siguiente fragmento para configurarlo: `$client = new GuzzleHttp\\Client(['base_uri' => '...', 'http_errors' => false]);`[cite: 1679]. ¿Cuál es el propósito exacto de configurar `'http_errors' => false`?",
    "opciones": [
        "Deshabilita la validación de certificados SSL para poder conectar a servidores locales que no usen HTTPS.",
        "Convierte automáticamente los errores HTTP en excepciones de PHP para detener la ejecución del script inmediatamente.",
        "Evita que Guzzle lance excepciones automáticamente (como RequestException) cuando el servidor responde con códigos de error como 400 o 404, permitiéndonos procesar manualmente el código de estado en nuestra aplicación.",
        "Obliga al servidor Laravel a devolver siempre un código HTTP 200 OK independientemente de si la operación interna falla."
    ],
    "correcta": 2
},
{
    "tema": "tarea tema 6",
    "pregunta": "Observa el siguiente fragmento donde consumimos un servicio web REST mediante Guzzle para añadir una nueva canción: `$response = $client->request('POST', '', [ '???' => [ 'titulo' => 'Smells Like Teen Spirit' ] ]);`[cite: 507]. Si queremos que Guzzle envíe los datos estrictamente en formato JSON puro, ¿qué clave debe ir en lugar de '???'?",
    "opciones": [
        "form_params",
        "body",
        "query",
        "json"
    ],
    "correcta": 3
},
{
    "tema": "tarea tema 6",
    "pregunta": "En nuestro controlador API de Laravel, tenemos el siguiente fragmento para el método actualizar: `public function update(Request $request, string $id) { $cancion = Cancion::findOrFail($id); $cancion->update($request->all()); return ???; }`[cite: 549, 550]. ¿Cuál es la sintaxis correcta en Laravel para devolver el recurso actualizado en formato JSON junto con un código HTTP de éxito?",
    "opciones": [
        "return response()->json($cancion, 200); ",
        "return json_encode($cancion);",
        "echo json_encode($cancion); return 200;",
        "return response()->xml($cancion, 200);"
    ],
    "correcta": 0
},
{
    "tema": "tarea tema 6",
    "pregunta": "Durante la verificación del funcionamiento del servicio web, empleamos la herramienta de terminal HTTPie[cite: 324, 330]. Observa el siguiente fragmento: `http POST http://localhost:8000/api/canciones titulo='Shape of You' artista='Ed Sheeran' genero='Pop'`[cite: 565]. ¿Qué realiza exactamente este comando?",
    "opciones": [
        "Envía una petición POST al servidor simulando un archivo XML adjunto con los datos de la canción.",
        "Envía una petición con el método HTTP POST al endpoint de canciones, mandando los datos en formato JSON de forma nativa para que el API REST cree un nuevo recurso en la base de datos.",
        "Borra la canción 'Shape of You' utilizando el método POST en lugar de DELETE.",
        "Inicia un servidor local en el puerto 8000 para escuchar peticiones de la canción 'Shape of You'."
    ],
    "correcta": 1
},
{
    "tema": "tarea tema 6",
    "pregunta": "Imagina que estamos implementando un servicio web REST en PHP nativo sin Laravel. Cuando el cliente nos envía datos JSON en el cuerpo del mensaje de una petición POST, en el servidor utilizamos el fragmento: `$datos = file_get_contents('php://input');`[cite: 1754]. ¿Por qué usamos `php://input` en lugar del clásico array global `$_POST`?",
    "opciones": [
        "Porque el array `$_POST` se utiliza exclusivamente para almacenar las variables pasadas por la URL (Query String).",
        "Porque `$_POST` solo se autocompleta cuando los datos se envían con el formato de un formulario estándar, pero no procesa automáticamente los datos enviados en crudo (raw) como un documento JSON.",
        "Porque `php://input` es un flujo de datos que encripta la información y la protege contra ataques de inyección SQL.",
        "Porque el array `$_POST` es una característica exclusiva de SOAP y no existe en la arquitectura REST."
    ],
    "correcta": 1
},
{
    "tema": "creacion basica API REST tema 6",
    "pregunta": "En Laravel, al definir las rutas para una API RESTful, ¿qué método debes usar en el archivo routes/api.php para declarar automáticamente las rutas de todas las operaciones CRUD excluyendo aquellas que presentan plantillas HTML (como create y edit)?",
    "opciones": [
      "Route::resource('canciones', CancionController::class);",
      "Route::apiResource('canciones', CancionController::class);",
      "Route::rest('canciones', CancionController::class);",
      "Route::apiRoutes('canciones', CancionController::class);"
    ],
    "correcta": 1
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Al implementar el modelo en Laravel (por ejemplo, Cancion.php) para tu servicio web, ¿qué función cumple la propiedad 'protected $fillable = ['titulo', 'artista', 'genero'];'?",
    "opciones": [
      "Define los únicos campos que la API devolverá en las respuestas JSON al cliente HTTP.",
      "Indica a la base de datos qué columnas deben tener un índice de búsqueda para las consultas REST.",
      "Establece los campos que son obligatorios y lanza un error si el cliente no los envía en la petición.",
      "Especifica los campos que Laravel puede llenar automáticamente cuando creas o actualizas recursos (asignación masiva)."
    ],
    "correcta": 3
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Si deseas generar rápidamente un controlador en Laravel con los métodos necesarios para manejar las operaciones CRUD de tu API RESTful (index, store, show, update, destroy), ¿qué comando de Artisan utilizarías?",
    "opciones": [
      "php artisan make:controller CancionController --api",
      "php artisan make:api CancionController",
      "php artisan make:controller CancionController --resource",
      "php artisan generate:controller CancionController --rest"
    ],
    "correcta": 0
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Al consumir una API REST desde una aplicación cliente en PHP puro utilizando Guzzle, ¿cómo se debe realizar una petición GET para obtener un recurso pasando parámetros por la URL (query string), como por ejemplo un identificador?",
    "opciones": [
      "$client->request('GET', '', ['json' => ['id' => 1]]);",
      "$client->request('GET', '', ['form_params' => ['id' => 1]]);",
      "$client->request('GET', '', ['query' => ['id' => 1]]);",
      "$client->get('/api', ['body' => ['id' => 1]]);"
    ],
    "correcta": 2
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Al programar el método 'store' en un controlador de Laravel para crear un nuevo recurso a través de la API REST, ¿qué código de estado HTTP se devuelve típicamente junto con el objeto JSON para indicar el éxito en la creación del recurso?",
    "opciones": [
      "200",
      "201",
      "204",
      "404"
    ],
    "correcta": 1
  },
  {
        "tema": "tarea tema 6",
        "pregunta": "¿Qué significa el principio de \"comunicación sin estado\" (stateless) en una arquitectura de servicios web RESTful según la teoría estudiada?",
        "opciones": [
            "El servidor guarda una copia de seguridad del estado del cliente en la base de datos tras cada petición para garantizar la persistencia.",
            "Cada petición del cliente al servidor debe contener toda la información necesaria para que el servidor pueda procesarla, sin depender de sesiones previas almacenadas en el servidor.",
            "El cliente no puede almacenar información en caché temporalmente bajo ninguna circunstancia.",
            "El servidor procesa la petición pero no envía ningún código de estado HTTP en su respuesta final."
        ],
        "correcta": 1
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "Al comparar los protocolos y estilos arquitectónicos de servicios web, ¿cuál de las siguientes afirmaciones sobre SOAP y REST es correcta?",
        "opciones": [
            "REST es un protocolo de comunicación estricto basado exclusivamente en XML, mientras que SOAP es un estilo arquitectónico muy flexible.",
            "Ambos enfoques requieren obligatoriamente el uso de un archivo descriptor WSDL para que el cliente pueda invocar los métodos remotos.",
            "REST no puede funcionar sobre el protocolo de red HTTP, requiriendo usar obligatoriamente WebSockets para transmitir datos.",
            "SOAP es un protocolo que utiliza mensajes estructurados en formato XML (con Envelope, Header y Body), mientras que REST es un estilo arquitectónico que suele representar sus recursos frecuentemente con JSON."
        ],
        "correcta": 3
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "Durante la implementación de nuestra API REST con Laravel, en el modelo (por ejemplo, `Cancion.php`) definimos la propiedad: `protected $fillable = ['titulo', 'artista', 'genero'];`. ¿Qué utilidad tiene exactamente esta declaración al recibir una petición POST o PUT?",
        "opciones": [
            "Indicar a Laravel qué campos de la tabla deben ocultarse automáticamente por seguridad cuando el objeto se serialice y se devuelva al cliente en formato JSON.",
            "Crear una lista blanca de atributos que pueden ser asignados masivamente de forma segura, permitiendo usar métodos como `create()` o `update()` con los datos recibidos del Request.",
            "Evitar que la base de datos acepte campos que superen la longitud máxima de 255 caracteres.",
            "Activar la autenticación de usuarios mediante tokens, exigiendo que dichos campos sean validados criptográficamente en el servidor."
        ],
        "correcta": 1
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "En el código de nuestra aplicación cliente hecha con Guzzle en PHP, tras invocar el servicio web ejecutamos: `$codigo = $response->getStatusCode();`. Si queremos verificar con un condicional que el recurso al que intentamos acceder o modificar no existe en el servidor, ¿qué valor exacto esperaríamos en `$codigo`?",
        "opciones": [
            "200",
            "404",
            "500",
            "422"
        ],
        "correcta": 1
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "Para la verificación del funcionamiento de un servicio web, utilizamos la interfaz de línea de comandos HTTPie. Si nuestro API REST de Laravel expone un recurso de canciones y deseamos borrar físicamente la canción con el identificador 8, ¿qué comando de consola debemos ejecutar?",
        "opciones": [
            "http REMOVE http://localhost:8000/api/canciones/8",
            "http GET http://localhost:8000/api/canciones/8 action=delete",
            "http DELETE http://localhost:8000/api/canciones/8",
            "http POST http://localhost:8000/api/canciones/8 --delete"
        ],
        "correcta": 2
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "En el controlador de una API RESTful desarrollada con Laravel, tras almacenar con éxito un recurso nuevo a través del método `store()`, el programador añade este retorno final: `return response()->json($cancion, 201);`. ¿Qué nos indica exactamente el número 201 de esa función?",
        "opciones": [
            "Es el tamaño máximo en kilobytes que puede tener el documento JSON generado en la respuesta para no saturar la red.",
            "Es el código de estado HTTP estandarizado ('Created') que informa al cliente que la petición ha sido procesada con éxito y un nuevo recurso ha sido efectivamente creado.",
            "Es el ID autoincremental que la base de datos de MySQL acaba de asignarle a la nueva fila recién insertada.",
            "Es el número de milisegundos que el servidor ha tardado en procesar toda la validación y ejecución de la solicitud entrante."
        ],
        "correcta": 1
    },
    {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Observa el siguiente código donde usamos Guzzle para añadir una nueva canción a nuestra API REST:\n\n$client = new GuzzleHttp\\Client(['base_uri' => 'http://localhost/api/']);\n$datos = [\n    'titulo' => 'Smells Like Teen Spirit',\n    'artista' => 'Nirvana',\n    'genero' => 'Grunge'\n];\n\n¿Qué instrucción PHP es la correcta para enviar esta petición POST adjuntando los datos en formato JSON?",
    "opciones": [
      "$response = $client->post('canciones', ['body' => $datos]);",
      "$response = $client->post('canciones', ['json' => $datos]);",
      "$response = $client->post('canciones', ['form_data' => $datos]);",
      "$response = $client->post('canciones', json_encode($datos));"
    ],
    "correcta": 1
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "En el desarrollo de tu API REST con Laravel, estás implementando el método store() en el controlador CancionController para guardar un nuevo registro. Revisa el siguiente fragmento:\n\npublic function store(Request $request)\n{\n    $cancion = Cancion::create($request->all());\n    // LÍNEA FALTANTE\n}\n\n¿Qué código exacto debes insertar en la 'LÍNEA FALTANTE' para devolver el recurso recién creado en formato JSON junto con el código de estado HTTP adecuado para una creación exitosa?",
    "opciones": [
      "return response()->json($cancion, 201);",
      "return response()->json($cancion, 200);",
      "return $cancion->toJson(201);",
      "return response($cancion, 204);"
    ],
    "correcta": 0
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Tienes el siguiente código correspondiente al método destroy de un controlador API en Laravel:\n\npublic function destroy(string $id)\n{\n    // LÍNEA FALTANTE\n    return response('Deleted Successfully', 200);\n}\n\n¿Cuál es la instrucción correcta basada en Eloquent para buscar el recurso por su ID y eliminarlo, asegurando que falle automáticamente (lanzando una excepción) si el ID no existe?",
    "opciones": [
      "Cancion::find($id)->remove();",
      "Cancion::where('id', $id)->destroy();",
      "Cancion::findOrFail($id)->delete();",
      "Cancion::get($id)->delete();"
    ],
    "correcta": 2
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Atendiendo a la sintaxis del cliente Guzzle y basándonos en la documentación, si quieres actualizar la canción con ID 2 usando el método genérico request() en lugar del método abreviado put(), ¿cuál de los siguientes fragmentos de código es el correcto?",
    "opciones": [
      "$client->request('PUT', 'canciones/2', ['json' => ['titulo' => 'Smile']]);",
      "$client->request('UPDATE', 'canciones/2', ['data' => ['titulo' => 'Smile']]);",
      "$client->request('PATCH', 'canciones/2', json_encode(['titulo' => 'Smile']));",
      "$client->put('canciones/2', ['body' => 'titulo=Smile']);"
    ],
    "correcta": 0
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Al revisar el modelo Cancion.php en Laravel, te encuentras con este código:\n\nclass Cancion extends Model\n{\n    protected $table = 'canciones';\n    protected $fillable = ['titulo', 'artista', 'genero'];\n}\n\n¿Qué ocurre si el cliente Guzzle envía una petición POST (que llega al método store y usa $request->all()) adjuntando en su JSON un campo no contemplado, como por ejemplo 'año' => 1991?",
    "opciones": [
      "Laravel lanzará un error HTTP 500 porque el campo 'año' no existe en el array $fillable.",
      "Laravel ignorará automáticamente el campo 'año' y solo insertará 'titulo', 'artista' y 'genero', gracias a la protección de asignación masiva de $fillable.",
      "El campo 'año' se insertará en la tabla siempre y cuando exista la columna correspondiente en la base de datos física.",
      "Laravel devolverá un error HTTP 405 Method Not Allowed indicando que la estructura JSON es inválida."
    ],
    "correcta": 1
  },
  {
        "tema": "tarea tema 6",
        "pregunta": "En el desarrollo de una API REST con Laravel, observa el siguiente fragmento donde se define una ruta PUT y su método correspondiente en el controlador:\n\n// routes/api.php\nRoute::put('/libros/{libro}', [LibroController::class, 'update']);\n\n// LibroController.php\npublic function update(Request $request, Libro $libro) {\n    $libro->update($request->all());\n    return response()->json($libro, 200);\n}\n\n¿Qué característica de Laravel permite que el objeto `$libro` se recupere automáticamente de la base de datos sin tener que escribir explícitamente `Libro::find($id)` dentro del método?",
        "opciones": [
            "La inyección de dependencias genérica de PHP (Dependency Injection).",
            "El Route Model Binding implícito de Laravel.",
            "La configuración de Mass Assignment a través de la propiedad $fillable.",
            "El middleware 'api' que ejecuta el ORM Eloquent antes de cargar la ruta."
        ],
        "correcta": 1
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "Al crear una aplicación cliente con Guzzle para consumir un servicio web, utilizamos el siguiente fragmento de código:\n\n$cliente = new \\GuzzleHttp\\Client([\n    'base_uri' => 'http://localhost:8000/api/',\n    'http_errors' => true\n]);\n$respuesta = $cliente->get('recurso_inexistente');\n\nSi el servidor devuelve un código HTTP 404 (Not Found), ¿qué ocurrirá durante la ejecución de este script PHP?",
        "opciones": [
            "El script continuará su ejecución de forma normal y la variable `$respuesta` contendrá un objeto de respuesta con el código 404, listo para ser analizado con un switch.",
            "Guzzle ignorará el error del servidor y devolverá un código HTTP 200 OK con un cuerpo de respuesta completamente vacío.",
            "Al estar 'http_errors' configurado a true, Guzzle lanzará automáticamente una excepción (ClientException) que detendrá la ejecución del script a menos que se controle con un bloque try-catch.",
            "Se mostrará por pantalla la página de error HTML genérica generada por Laravel, pero el script PHP continuará ejecutando las líneas posteriores."
        ],
        "correcta": 2
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "Dado el siguiente fragmento de un controlador API en Laravel, donde se validan los datos de entrada para crear un recurso:\n\npublic function store(Request $request) {\n    $v = Validator::make($request->all(), [\n        'titulo' => 'required|string|max:100'\n    ]);\n    if ($v->fails()) {\n        return __________(['errores' => $v->errors()->all()], 422);\n    }\n    // ... creación del recurso ...\n}\n\n¿Qué código debe sustituir a la línea con subrayados (__________) para retornar correctamente los errores en formato JSON al cliente, tal y como se espera en una API REST?",
        "opciones": [
            "response()->json",
            "json_encode",
            "Response::make_json",
            "return_json_string"
        ],
        "correcta": 0
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "En nuestra aplicación cliente PHP, utilizamos Guzzle para enviar datos a la API mediante una petición POST. Observa el siguiente código:\n\n$datos = ['titulo' => '1984', 'autor' => 'George Orwell'];\n$respuesta = $cliente->post('libros', [\n    '_____' => $datos\n]);\n\nSi la API de Laravel está configurada para recibir el cuerpo de la petición estrictamente en formato JSON nativo (application/json), ¿qué clave debe sustituir a la línea subrayada (_____) en las opciones de Guzzle?",
        "opciones": [
            "body_params",
            "form_params",
            "json",
            "query"
        ],
        "correcta": 2
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "Analizando la creación de un modelo para nuestra API REST en Laravel, encontramos el siguiente fragmento:\n\nclass Pelicula extends Model {\n    protected $table = 'peliculas';\n    protected $fillable = ['titulo', 'director', 'anio'];\n}\n\n// En el PeliculaController:\nPelicula::create($request->all());\n\n¿Qué sucedería si el cliente malintencionadamente envía en su petición POST un campo extra llamado `'id' => 999` además del título, director y año?",
        "opciones": [
            "Laravel forzará la inserción del registro con el ID 999, sobreescribiendo el comportamiento autoincremental de la base de datos.",
            "Laravel ignorará el campo 'id' de forma segura y solo insertará 'titulo', 'director' y 'anio', protegiendo la base de datos porque 'id' no está definido en el array $fillable.",
            "Se producirá un error 500 fatal de base de datos porque el framework intentará insertar una columna que viola las restricciones de integridad.",
            "El framework lanzará una excepción indicando que los datos no coinciden exactamente con las propiedades de la tabla."
        ],
        "correcta": 1
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "En la aplicación cliente con Guzzle, recibimos una respuesta exitosa del servidor y queremos extraer sus datos:\n\n$respuesta = $cliente->get('peliculas/5');\n$cuerpo = $respuesta->getBody()->getContents();\n$datos_array = _______________________;\n\nSabiendo que la variable `$cuerpo` almacena la respuesta en crudo como una cadena de texto (string) en formato JSON, ¿qué instrucción nativa de PHP debe sustituir al espacio subrayado para convertir esa cadena en un array asociativo manipulable?",
        "opciones": [
            "json_decode($cuerpo, true)",
            "json_encode($cuerpo)",
            "json_decode($cuerpo, false)",
            "(array) $cuerpo"
        ],
        "correcta": 0
    },
    {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Atendiendo a la instanciación de un cliente Guzzle para consumir un servicio web, ¿qué código es el correcto para configurar la URL base de la API y evitar tener que escribirla completa en cada petición posterior?",
    "opciones": [
      "$client = new GuzzleHttp\\Client(['base_uri' => 'http://localhost/api_canciones.php']);",
      "$client = new GuzzleHttp\\Client('http://localhost/api_canciones.php');",
      "$client = GuzzleHttp\\Client::create(['url' => 'http://localhost/api_canciones.php']);",
      "$client = new GuzzleHttp\\Client(['host' => 'http://localhost/api_canciones.php']);"
    ],
    "correcta": 0
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Al recibir la respuesta de una API RESTful utilizando Guzzle, ¿cuál es el fragmento de código correcto para extraer el cuerpo de la respuesta y convertir el formato JSON devuelto por el servidor en un array asociativo de PHP?",
    "opciones": [
      "$datos = $response->getJson();",
      "$datos = json_decode($response->getBody(), true);",
      "$datos = json_decode($response, true);",
      "$datos = $response->getBody()->toJson();"
    ],
    "correcta": 1
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Basándote en el ejemplo de consumo del servicio web REST en PHP puro mediante Guzzle, ¿cómo se debe realizar la petición HTTP DELETE si el servidor espera recibir el ID del recurso a borrar (por ejemplo, el ID 3) dentro del cuerpo de la petición en formato JSON?",
    "opciones": [
      "$client->request('DELETE', '', ['json' => ['id' => 3]]);",
      "$client->delete('', ['query' => ['id' => 3]]);",
      "$client->request('REMOVE', '', json_encode(['id' => 3]));",
      "$client->delete(['id' => 3]);"
    ],
    "correcta": 0
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "En el archivo 'CancionController.php' de Laravel, estás definiendo el método 'update' para modificar un recurso existente. Observa el siguiente código:\n\npublic function update(Request $request, string $id)\n{\n    // LÍNEA 1\n    // LÍNEA 2\n    return response()->json($cancion, 200);\n}\n\n¿Qué código deben contener la LÍNEA 1 y la LÍNEA 2 para que Laravel busque el registro, lance error si no existe, y lo actualice con los datos recibidos?",
    "opciones": [
      "$cancion = Cancion::find($id);\n$cancion->save($request->all());",
      "Cancion::update($id, $request->all());\n$cancion = Cancion::get($id);",
      "$cancion = Cancion::where('id', $id);\n$cancion->put($request->all());",
      "$cancion = Cancion::findOrFail($id);\n$cancion->update($request->all());"
    ],
    "correcta": 3
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "En Laravel, al preparar la base de datos para la API REST, necesitas generar la estructura de la tabla 'canciones' mediante una migración. ¿Qué código es el correcto dentro del método 'up()' para definir los campos de texto 'titulo', 'artista' y 'genero'?",
    "opciones": [
      "$table->varchar('titulo');\n$table->varchar('artista');\n$table->varchar('genero');",
      "$table->string('titulo');\n$table->string('artista');\n$table->string('genero');",
      "$table->text('titulo')->required();\n$table->text('artista')->required();\n$table->text('genero')->required();",
      "$table->column('titulo', 'string');\n$table->column('artista', 'string');\n$table->column('genero', 'string');"
    ],
    "correcta": 1
  },
  {
        "tema": "tarea tema 6",
        "pregunta": "En el desarrollo de un cliente para consumir nuestra API con Guzzle, usamos el siguiente fragmento de código:\n\n$cliente = new \\GuzzleHttp\\Client(['base_uri' => 'http://localhost:8000/api/']);\n$respuesta = $cliente->post('eventos', [\n    'form_params' => [\n        'titulo' => 'Concierto Rock',\n        'precio' => 25.50\n    ]\n]);\n\n¿Cómo interpreta y envía Guzzle los datos indicados bajo la clave 'form_params' hacia el servidor Laravel?",
        "opciones": [
            "Los envía codificados internamente como un documento JSON puro (application/json).",
            "Los envía codificados simulando un formulario web tradicional (application/x-www-form-urlencoded).",
            "Los envía como parámetros directamente en la propia URL (Query String) como si fuera una petición GET.",
            "Los ignora por completo, ya que en una API REST estricta solo se permite el envío de datos mediante la clave 'json'."
        ],
        "correcta": 1
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "Observa el siguiente fragmento de un controlador API en Laravel destinado a borrar un evento:\n\npublic function destroy(string $id) {\n    $evento = Evento::find($id);\n    if (!$evento) {\n        return response()->json(['mensaje' => 'Evento no encontrado'], ___);\n    }\n    $evento->delete();\n    return response()->json(['mensaje' => 'Borrado exitoso'], 200);\n}\n\nSi el evento solicitado no existe en la base de datos, ¿qué código de estado HTTP estándar (que falta en el espacio subrayado ___) deberíamos devolver en el JSON para cumplir con las convenciones REST?",
        "opciones": [
            "404",
            "200",
            "500",
            "201"
        ],
        "correcta": 0
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "Al definir las rutas de nuestra API en Laravel, observamos el siguiente código dentro del archivo routes/api.php:\n\nRoute::prefix('v1')->group(function () {\n    Route::get('/tareas', [TareaController::class, 'index']);\n    Route::post('/tareas', [TareaController::class, 'store']);\n});\n\nSi nuestro servidor local está corriendo en http://localhost:8000, ¿cuál será la URL final completa que la aplicación cliente deberá utilizar para acceder al método 'store' y crear una nueva tarea?",
        "opciones": [
            "http://localhost:8000/tareas",
            "http://localhost:8000/v1/tareas",
            "http://localhost:8000/api/v1/tareas",
            "http://localhost:8000/api/tareas/store"
        ],
        "correcta": 2
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "En el código de la aplicación cliente con Guzzle, tenemos la siguiente implementación para el control de errores:\n\n$cliente = new Client(['http_errors' => false]);\n$respuesta = $cliente->delete('http://localhost:8000/api/usuarios/999');\n$codigo = $respuesta->getStatusCode();\n\nif ($codigo == 404) {\n    echo \"Error: El usuario especificado no existe.\";\n}\n\n¿Qué papel fundamental juega el parámetro 'http_errors' => false al instanciar el cliente frente a una respuesta 404 del servidor?",
        "opciones": [
            "Fuerza al servidor de Laravel a devolver siempre un código 200 OK en la cabecera, camuflando el error real.",
            "Evita que Guzzle lance una excepción fatal de PHP (ClientException), permitiendo que el script recoja pacíficamente el código 404 y lo evalúe en el condicional if.",
            "Detiene la petición HTTP antes de enviarla al servidor si intuye que la ruta solicitada está mal escrita.",
            "Desactiva las comprobaciones de seguridad SSL para poder realizar pruebas en un entorno local sin certificado de seguridad."
        ],
        "correcta": 1
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "Para la creación de un recurso en nuestra API, tenemos el modelo y el controlador configurados de la siguiente manera:\n\n// Evento.php (Modelo)\nclass Evento extends Model {\n    protected $fillable = ['titulo', 'fecha', 'aforo'];\n}\n\n// EventoController.php (Controlador API)\npublic function store(Request $request) {\n    $evento = Evento::create($request->all());\n    return response()->json($evento, 201);\n}\n\nUsando Eloquent para crear el registro masivamente ($request->all()), ¿qué pasará si el cliente maliciosamente incluye en su petición un campo extra llamado 'precio' => 50?",
        "opciones": [
            "El controlador devolverá automáticamente un error HTTP 422 Unprocessable Entity interrumpiendo el flujo.",
            "El campo 'precio' se insertará en la tabla de la base de datos porque se ha utilizado el método global $request->all().",
            "El campo 'precio' será filtrado y descartado silenciosamente por Eloquent porque no está declarado dentro del array $fillable del modelo.",
            "Laravel lanzará un error 500 fatal ya que la consulta SQL generada no cuadrará con las columnas de la tabla."
        ],
        "correcta": 2
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "En el archivo cliente.php, recibimos datos tras consultar a la API de Laravel de esta forma:\n\n$respuesta = $cliente->get('http://localhost:8000/api/productos');\n$cuerpo = $respuesta->getBody()->getContents();\n\n// Iteramos sobre los datos\nforeach($productos as $item) {\n    //...\n}\n\nSabiendo que '$cuerpo' almacena el JSON devuelto por la API pero en formato String (cadena de texto en crudo), ¿qué instrucción de PHP falta para poder iterar sobre los productos con el foreach?",
        "opciones": [
            "$productos = explode(\",\", $cuerpo);",
            "$productos = json_decode($cuerpo, true);",
            "$productos = json_encode($cuerpo);",
            "$productos = (array) $cuerpo;"
        ],
        "correcta": 1
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "En la configuración de nuestro cliente Guzzle (`index.php`), utilizamos el siguiente fragmento de código:\n\n$cliente = new GClientRMM([\n    'base_uri' => 'http://127.0.0.1:8000/api/',\n    'http_errors' => false,\n    'headers' => ['Accept' => 'application/json']\n]);\n\n¿Qué comportamiento específico logramos al establecer `'http_errors' => false` en nuestra tarea?",
        "opciones": [
            "Evita que Guzzle lance una excepción fatal de PHP interrumpiendo el script cuando el servidor Laravel devuelve códigos de error HTTP como 404 (No encontrado) o 422 (Entidad no procesable).",
            "Desactiva todas las respuestas del servidor, obligando a Guzzle a devolver únicamente el código de estado sin el cuerpo del mensaje.",
            "Obliga al servidor de Laravel a devolver siempre un código HTTP 200 OK, ignorando cualquier fallo interno de la base de datos.",
            "Impide que el servidor devuelva errores de validación, forzando la inserción de datos nulos en la tabla de películas."
        ],
        "correcta": 0
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "En el controlador de Laravel de nuestra tarea, implementamos el siguiente código para unificar los datos antes de validarlos:\n\n$datos = $request->all();\nif (!isset($datos['genero']) && isset($datos['genero_id'])) {\n    $datos['genero'] = $datos['genero_id'];\n}\n$v = Validator::make($datos, [\n    'titulo' => 'required|string|min:2',\n    'genero' => 'required|integer|exists:generos,id',\n    //...\n]);\n\n¿Por qué era estrictamente necesario extraer los datos a la variable `$datos` y pasar `$datos` al validador en lugar de usar directamente `$request->all()`?",
        "opciones": [
            "Porque `$request->all()` devuelve un objeto JSON bloqueado que el `Validator::make` no puede interpretar nativamente.",
            "Para permitir que nuestra API acepte indistintamente 'genero' o 'genero_id', modificando el array `$datos` y validando ese array unificado en lugar del `$request` original que es inmutable en ese contexto.",
            "Porque la regla `exists:generos,id` exige obligatoriamente que la variable que se le pasa al validador se llame `$datos`.",
            "Porque extraer los datos a un array nativo previene automáticamente los ataques de inyección SQL en Eloquent."
        ],
        "correcta": 1
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "Observa este fragmento de nuestro controlador API usando Autobinding y asignación masiva:\n\npublic function modificarArgumentoPeliculaRMM(PeliculaRMM $pelicula, Request $request): JsonResponse\n{\n    // ... validación ...\n    $pelicula->update(['argumento' => $request->argumento]);\n    return response()->json(['resultado' => 'OK'], 200);\n}\n\nPara que la instrucción `$pelicula->update(...)` funcione correctamente y guarde el cambio en la base de datos sin fallar silenciosamente, ¿qué requisito indispensable debe cumplir el modelo `PeliculaRMM`?",
        "opciones": [
            "El modelo debe tener un método `public function update()` sobrescrito manualmente para evitar conflictos con Guzzle.",
            "El campo 'argumento' debe estar incluido explícitamente dentro del array `protected $fillable` del modelo para permitir la asignación masiva (Mass Assignment).",
            "El modelo debe incluir la propiedad `protected $guarded = ['argumento']` para protegerlo de modificaciones externas.",
            "El modelo debe tener la propiedad `public $timestamps = false` activada."
        ],
        "correcta": 1
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "En nuestra clase cliente `RMM_Operaciones`, procesamos las respuestas de la API REST de la siguiente manera:\n\n$codigo = $operacion->getStatusCode();\n$cuerpo = json_decode($operacion->getBody()->getContents(), true);\n\nif ($codigo == 200) {\n    return \"Película creada con éxito.\";\n} elseif ($codigo == 422) {\n    $errores = $cuerpo['errores'] ?? ['Error de validación.'];\n    return \"Errores: <ul><li>\" . implode(\"</li><li>\", $errores) . \"</li></ul>\";\n}\n\n¿Cuál es el propósito exacto de capturar específicamente el código HTTP 422 en este flujo?",
        "opciones": [
            "Detectar cuándo el servidor de Laravel está apagado o inaccesible por falta de red.",
            "Capturar la respuesta 'Unprocessable Entity' devuelta por el validador de Laravel para desglosar y mostrar amigablemente los errores (como campos cortos o duplicados) al usuario final.",
            "Confirmar que la película que se intentó borrar o modificar no existe en la base de datos (Not Found).",
            "Verificar que la petición Guzzle superó las credenciales de autenticación del servidor web."
        ],
        "correcta": 1
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "En nuestro cliente Guzzle, añadimos un control de excepciones envolviendo las peticiones GET:\n\npublic static function RMM_OperacionListarPeliculas(GClientRMM $cliente) \n{\n    try {\n        $operacion = $cliente->get('listarPeliculasRMM');\n        if ($operacion->getStatusCode() != 200) {\n            return self::ERROR_SERVICIO_WEB;\n        }\n        return json_decode($operacion->getBody()->getContents(), true);\n    } catch (\\Exception $e) {\n        return self::ERROR_SERVICIO_WEB;\n    }\n}\n\nSabiendo que Guzzle se configuró con `'http_errors' => false`, ¿en qué escenario específico se ejecutará realmente el bloque `catch (\\Exception $e)` de este fragmento?",
        "opciones": [
            "Cuando la ruta en Laravel esté mal escrita y el servidor devuelva un error HTTP 404.",
            "Cuando el servidor de Laravel devuelva un error interno HTTP 500 debido a una consulta SQL errónea.",
            "Cuando exista un fallo crítico de red, como que el servidor de Laravel esté completamente apagado, lo que impide que Guzzle pueda siquiera establecer la conexión para obtener un código HTTP.",
            "Cuando el JSON devuelto por Laravel contenga una lista vacía de películas."
        ],
        "correcta": 2
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "En el archivo `index.php` del cliente, donde procesamos masivamente el texto de operaciones (CSV), implementamos la siguiente comprobación defensiva:\n\n$linea = str_getcsv($linea_str);\n\nif (!isset($linea[0]) || trim($linea[0]) === '') {\n    continue;\n}\n\nswitch ($linea[0]) {\n    case 'CREAR':\n//...\n\n¿Qué problema exacto previene esta instrucción de validación tan estricta antes de llegar al bloque `switch`?",
        "opciones": [
            "Previene que el bloque `switch` genere un 'Warning' en PHP si una línea está mal formada (ej. sólo contiene espacios invisibles o comas vacías), saltándola limpiamente para que la aplicación no falle.",
            "Impide que el método `str_getcsv` se ejecute si la línea contiene saltos de carro estilo Windows (\\r\\n).",
            "Verifica automáticamente que la película no exista previamente en la base de datos de Laravel, ahorrando una petición HTTP.",
            "Convierte automáticamente las operaciones desconocidas al caso 'default' del `switch` sin alterar la interfaz web."
        ],
        "correcta": 0
    },
    {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Estás desarrollando el controlador de tu API en Laravel (CancionController.php) y necesitas programar el método 'index()' para devolver el listado completo de canciones. ¿Qué fragmento de código es el correcto usando el modelo de Laravel (Eloquent)?",
    "opciones": [
      "return Cancion::getAll();",
      "return Cancion::all();",
      "return $cancion->fetchAll();",
      "return Cancion::get();"
    ],
    "correcta": 1
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "En tu aplicación cliente hecha con Guzzle, necesitas realizar una petición GET para solicitar a la API de Laravel la canción con el identificador 1 pasándolo por la cadena de consulta (query string). Sabiendo que la URI base ya está configurada, ¿cuál de las siguientes instrucciones es la correcta?",
    "opciones": [
      "$response = $client->request('GET', '', ['params' => ['id' => 1]]);",
      "$response = $client->request('GET', '', ['json' => ['id' => 1]]);",
      "$response = $client->request('GET', '', ['query' => ['id' => 1]]);",
      "$response = $client->request('GET', '', ['data' => ['id' => 1]]);"
    ],
    "correcta": 2
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Observa el siguiente código correspondiente al método 'show' de un controlador de API en Laravel:\n\npublic function show(string $id)\n{\n    // LÍNEA FALTANTE\n}\n\n¿Qué instrucción exacta debes colocar para que Laravel busque y devuelva la canción solicitada por su ID utilizando su modelo?",
    "opciones": [
      "return Cancion::find($id);",
      "return Cancion::getOne($id);",
      "return Cancion::whereId($id);",
      "return Cancion::search($id);"
    ],
    "correcta": 0
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Después de realizar una petición HTTP utilizando Guzzle, la variable $response almacena la respuesta del servidor. Si lo único que quieres es imprimir directamente en pantalla el cuerpo de la respuesta en crudo (el JSON tal cual llega), ¿qué código debes utilizar?",
    "opciones": [
      "echo $response->getContent();",
      "echo $response->getJson();",
      "echo $response->getBody();",
      "echo $response->text();"
    ],
    "correcta": 2
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Para comenzar a crear el modelo de datos en tu API RESTful con Laravel, debes utilizar la herramienta de línea de comandos Artisan. ¿Cuál es el comando correcto para generar automáticamente el esqueleto de la clase del modelo 'Cancion'?",
    "opciones": [
      "php artisan create:model Cancion",
      "php artisan make:model Cancion",
      "php artisan generate:model Cancion",
      "php artisan new:model Cancion"
    ],
    "correcta": 1
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Tienes el siguiente código en tu archivo 'routes/api.php' de Laravel para registrar las rutas de tu API REST:\n\nuse App\\Http\\Controllers\\CancionController;\n// LÍNEA FALTANTE\n\n¿Qué instrucción exacta debes colocar en la 'LÍNEA FALTANTE' para registrar automáticamente todas las rutas CRUD sin estado (index, store, show, update, destroy) omitiendo las rutas de vistas HTML (create y edit)?",
    "opciones": [
      "Route::resource('canciones', CancionController::class);",
      "Route::apiResource('canciones', CancionController::class);",
      "Route::api('canciones', CancionController::class);",
      "Route::get('/canciones', [CancionController::class, 'api']);"
    ],
    "correcta": 1
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Observa el siguiente fragmento de código donde se consume tu API REST usando Guzzle y se elimina un recurso:\n\n$response = $client->delete(\"/canciones/3\");\n\nSi quieres comprobar mediante una condición IF que la eliminación se ha realizado con éxito, obteniendo el código numérico de estado HTTP devuelto por el servidor (por ejemplo, 200 OK), ¿qué instrucción debes utilizar?",
    "opciones": [
      "if ($response->status() === 200)",
      "if ($response->getCode() == '200 OK')",
      "if ($response->getStatusCode() === 200)",
      "if ($response->headers['status'] === 200)"
    ],
    "correcta": 2
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "En el archivo 'CancionController.php', estás programando el método 'index()' para que la API devuelva todo el listado de canciones. Sabiendo que Laravel se encarga de convertir automáticamente la respuesta a JSON en los controladores API, ¿qué código es el correcto y más directo usando el modelo Eloquent?",
    "opciones": [
      "public function index() {\n    return response()->json(Cancion::get(), 200);\n}",
      "public function index() {\n    return Cancion::all();\n}",
      "public function index() {\n    return Cancion::getAll();\n}",
      "public function index() {\n    return json_encode(Cancion::select('*'));\n}"
    ],
    "correcta": 1
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Tienes una aplicación cliente PHP y quieres añadir una nueva canción a tu API de Laravel. ¿Cuál es la estructura correcta del código en Guzzle para enviar los datos por el método POST, sabiendo que el cliente HTTP ya está instanciado en la variable $client?",
    "opciones": [
      "$response = $client->request('POST', 'canciones', ['body' => ['titulo' => 'Canción 1']]);",
      "$response = $client->request('POST', 'canciones', ['json' => ['titulo' => 'Canción 1']]);",
      "$response = $client->request('POST', 'canciones', json_encode(['titulo' => 'Canción 1']));",
      "$response = $client->post('canciones', ['data' => ['titulo' => 'Canción 1']]);"
    ],
    "correcta": 1
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Al crear la base de datos para la API en Laravel, utilizas un archivo de migración. Observa el siguiente código:\n\nSchema::create('canciones', function (Blueprint $table) {\n    $table->id();\n    $table->string('titulo');\n    // LÍNEA FALTANTE\n});\n\n¿Qué método debes invocar en la 'LÍNEA FALTANTE' para que Laravel cree automáticamente las columnas requeridas (created_at y updated_at) que guardan la fecha de creación y de última actualización del recurso?",
    "opciones": [
      "$table->timestamps();",
      "$table->dates();",
      "$table->auditFields();",
      "$table->dateTime('created_at');\n$table->dateTime('updated_at');"
    ],
    "correcta": 0
  },
  {
        "tema": "tarea tema 6",
        "pregunta": "En el archivo `index.php` de nuestra aplicación cliente con Guzzle, empleamos el siguiente código de configuración:\n\n$cliente = new GClientRMM([\n    'base_uri' => 'http://127.0.0.1:8000/api/',\n    'http_errors' => false,\n    'headers' => ['Accept' => 'application/json']\n]);\n\n¿Cuál es la finalidad principal de haber establecido el parámetro `'http_errors' => false` en nuestra tarea?",
        "opciones": [
            "Evitar que Guzzle intercepte las peticiones y las envíe como formulario normal en lugar de JSON.",
            "Impedir que Guzzle lance una excepción fatal en PHP (ClientException) que detenga el script cuando el servidor Laravel devuelve códigos HTTP de error como 404 o 422, permitiendo así procesar esos códigos manualmente.",
            "Forzar al servidor de Laravel a devolver un código 200 OK en todas las respuestas para asegurar que el HTML del cliente siempre se renderice.",
            "Desactivar los mensajes de error en la consola del servidor de Laravel para mejorar el rendimiento de las operaciones masivas."
        ],
        "correcta": 1
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "Durante la implementación del método POST en nuestro `PeliculasControllerAPI`, realizamos el siguiente paso previo a la validación:\n\n$datos = $request->all();\nif (!isset($datos['genero']) && isset($datos['genero_id'])) {\n    $datos['genero'] = $datos['genero_id'];\n}\n$v = Validator::make($datos, [...]);\n\n¿Por qué es necesario pasar la variable `$datos` a la función `Validator::make` en lugar de pasar directamente `$request->all()`?",
        "opciones": [
            "Porque la clase Request no es compatible con el validador de Laravel en entornos de API REST.",
            "Porque al extraer los datos a un array (`$datos`), evitamos ataques de inyección SQL automáticamente.",
            "Porque `$request` es inmutable. Si modificamos el array `$datos` para unificar 'genero' y 'genero_id', debemos pasar ese array modificado al validador para que evalúe las claves correctas.",
            "Porque el método `all()` de la clase Request solo recupera los datos que viajan por la URL (Query String) y omite el cuerpo del mensaje."
        ],
        "correcta": 2
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "En la tarea, al procesar la respuesta de la API REST dentro del método `RMM_OperacionCrearPelicula`, escribimos la siguiente lógica:\n\nif ($codigo == 200) {\n    return \"Película creada con éxito.\";\n} elseif ($codigo == 422) {\n    $errores = $cuerpo['errores'] ?? ['Error de validación.'];\n    return \"Errores: <ul><li>\" . implode(\"</li><li>\", $errores) . \"</li></ul>\";\n}\n\n¿Qué nos indica la recepción específica del código de estado HTTP 422 en este flujo?",
        "opciones": [
            "El servidor web está caído o la red está inaccesible (Internal Server Error).",
            "La película que se intenta actualizar o borrar no existe en la base de datos (Not Found).",
            "El usuario no tiene permisos de autenticación válidos para consumir el servicio web (Unauthorized).",
            "La solicitud fue entendida, pero contiene errores semánticos o de validación (Unprocessable Entity), como un título demasiado corto o un registro duplicado."
        ],
        "correcta": 3
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "En el controlador de Laravel, al implementar la función de modificar el argumento, utilizamos el *Autobinding* (Route Model Binding) en la firma del método:\n\npublic function modificarArgumentoPeliculaRMM(PeliculaRMM $pelicula, Request $request): JsonResponse\n{\n    $pelicula->update(['argumento' => $request->argumento]);\n    return response()->json(['resultado' => 'OK'], 200);\n}\n\n¿Qué ventaja principal nos aporta haber inyectado el modelo `PeliculaRMM $pelicula` directamente en los parámetros de la función?",
        "opciones": [
            "Permite asignar masivamente todos los campos sin necesidad de declararlos en el array `$fillable`.",
            "Laravel busca automáticamente en la base de datos el registro cuyo ID coincida con el parámetro de la ruta. Si no lo encuentra, lanza un error 404 automáticamente sin que escribamos código extra.",
            "Convierte automáticamente la respuesta en un documento JSON compatible con Guzzle.",
            "Filtra la petición HTTP para garantizar que los datos viajan exclusivamente bajo el protocolo HTTPS."
        ],
        "correcta": 1
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "Para la actualización rápida del argumento mostrada en la pregunta anterior (`$pelicula->update(['argumento' => $request->argumento]);`), ¿qué condición debe cumplirse obligatoriamente en el archivo del modelo `PeliculaRMM.php` para que el cambio se guarde en la base de datos y no sea ignorado silenciosamente?",
        "opciones": [
            "El campo 'argumento' debe figurar dentro del array `protected $fillable` del modelo para permitir su asignación masiva (Mass Assignment).",
            "El campo 'argumento' debe figurar dentro del array `protected $guarded` para proteger su integridad.",
            "Debe existir una función pública llamada `setArgumento()` en el modelo.",
            "El modelo debe extender de `Illuminate\\Http\\Request` en lugar de `Model`."
        ],
        "correcta": 0
    },
    {
        "tema": "tarea tema 6",
        "pregunta": "En el archivo del cliente `index.php`, al procesar línea a línea el archivo de texto CSV que simula nuestras operaciones masivas, añadimos la siguiente instrucción defensiva:\n\n$linea = str_getcsv($linea_str);\nif (!isset($linea[0]) || trim($linea[0]) === '') {\n    continue;\n}\nswitch ($linea[0]) {\n   //...\n}\n\n¿Cuál es la finalidad de usar `trim($linea[0]) === ''` justo antes del `switch`?",
        "opciones": [
            "Traducir las operaciones (como 'crear' o 'borrar') a formato JSON antes de enviarlas al servidor de Laravel.",
            "Forzar la detención de la ejecución de PHP si encuentra una línea vacía en el archivo.",
            "Prevenir fallos de PHP (Warnings) evitando que el bloque `switch` intente evaluar líneas que estén mal formadas o contengan únicamente espacios en blanco tras la decodificación CSV.",
            "Comprobar con una llamada rápida al servidor si la operación indicada existe en el controlador de la API antes de consumirla."
        ],
        "correcta": 2
    },
    {
    "tema": "tarea tema 6",
    "pregunta": "En el desarrollo de nuestra API, utilizamos este fragmento para el método `store` en el `CancionController`:\n\npublic function store(Request $request)\n{\n    $cancion = Cancion::create($request->all());\n    return response()->json($cancion, 201);\n}\n\n¿Qué representa el número 201 en la función `response()->json($cancion, 201)` y por qué es el estándar en este caso?",
    "opciones": [
      "Es el código de estado HTTP 201 (Created), que indica que la solicitud ha tenido éxito y como resultado se ha creado un nuevo recurso.",
      "Es el número de milisegundos que el servidor tarda en procesar la inserción en la base de datos.",
      "Es el ID autoincremental que se le ha asignado a la nueva canción recién creada.",
      "Es el límite máximo de caracteres permitidos para el objeto JSON devuelto."
    ],
    "correcta": 0
  },
  {
    "tema": "tarea tema 6",
    "pregunta": "Observa el siguiente fragmento utilizado en nuestro `CancionController` para la actualización de datos:\n\npublic function update(Request $request, string $id)\n{\n    $cancion = Cancion::findOrFail($id);\n    $cancion->update($request->all());\n    return response()->json($cancion, 200);\n}\n\n¿Qué sucede si el cliente envía un ID que no existe en la base de datos cuando se ejecuta `Cancion::findOrFail($id)`?",
    "opciones": [
      "Laravel devuelve un array vacío `[]` y el código continúa ejecutándose hasta el `update()`.",
      "El método `findOrFail` lanza automáticamente una excepción `ModelNotFoundException`, lo que resulta en una respuesta de error 404 (Not Found) si no se captura.",
      "El código ignora el error y crea una nueva canción con el ID solicitado.",
      "El script PHP se detiene abruptamente sin devolver ninguna respuesta al cliente."
    ],
    "correcta": 1
  },
  {
    "tema": "tarea tema 6",
    "pregunta": "En nuestro cliente Guzzle para realizar operaciones masivas, procesamos las líneas del archivo CSV con este fragmento:\n\n$linea = str_getcsv($linea_str);\nif (!isset($linea[0]) || trim($linea[0]) === '') {\n    continue;\n}\nswitch ($linea[0]) {\n    case 'CREAR':\n        //...\n}\n\n¿Por qué es fundamental realizar la comprobación `if (!isset($linea[0]) || trim($linea[0]) === '')`?",
    "opciones": [
      "Porque sirve para autenticar que el usuario tiene permisos de administrador en la API.",
      "Para evitar errores de ejecución (PHP Warnings) al intentar acceder al índice `[0]` del array en líneas vacías o mal formadas del archivo CSV.",
      "Porque esta validación comunica al servidor Laravel que debe ignorar la petición y no registrarla en la base de datos.",
      "Porque el comando `str_getcsv` elimina automáticamente los comentarios, por lo que es redundante hacer esta comprobación."
    ],
    "correcta": 1
  },
  {
    "tema": "tarea tema 6",
    "pregunta": "Analiza la definición del modelo `Cancion` en nuestro proyecto:\n\nclass Cancion extends Model {\n    protected $table = 'canciones';\n    protected $fillable = ['titulo', 'artista', 'genero'];\n}\n\nSi un cliente envía una petición PUT con el JSON `{\"id\": 99, \"titulo\": \"Nuevo Título\"}`, ¿cómo maneja Eloquent el campo `id` durante la operación `update`?",
    "opciones": [
      "Actualiza el ID de la fila en la base de datos al valor 99.",
      "Lanza un error de seguridad impidiendo la actualización por intentar modificar la clave primaria.",
      "El campo `id` es ignorado automáticamente en la actualización porque no está incluido en el array `$fillable`.",
      "Genera una nueva fila en la tabla de canciones con el ID 99."
    ],
    "correcta": 2
  },
  {
    "tema": "tarea tema 6",
    "pregunta": "En nuestra clase cliente `RMM_Operaciones`, utilizamos este fragmento para capturar errores de la API:\n\n$codigo = $operacion->getStatusCode();\n$cuerpo = json_decode($operacion->getBody()->getContents(), true);\n\nif ($codigo == 422) {\n    $errores = $cuerpo['errores'] ?? ['Error de validación.'];\n    return \"Errores: <ul><li>\" . implode(\"</li><li>\", $errores) . \"</li></ul>\";\n}\n\n¿Qué tipo de respuesta del servidor Laravel estamos procesando correctamente al capturar el código 422?",
    "opciones": [
      "Un error interno del servidor (500) donde la base de datos no pudo ejecutar la consulta.",
      "Un error de validación de datos (Unprocessable Entity), donde los datos enviados no cumplen con las reglas definidas en el controlador.",
      "Una respuesta exitosa donde el servidor confirma que el recurso ha sido borrado.",
      "Una redirección HTTP 302 hacia la página principal de la aplicación."
    ],
    "correcta": 1
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Analiza el siguiente fragmento de código de un controlador API en Laravel:\n\npublic function show(string $id)\n{\n    return Cancion::find($id);\n}\n\nSi el cliente Guzzle invoca esta ruta correctamente mediante un GET, ¿cómo procesa Laravel esta instrucción de retorno según el temario?",
    "opciones": [
      "Lanza un error HTTP 500 porque es obligatorio envolver el resultado con el método explícito 'response()->json()'.",
      "Devuelve una vista HTML con los datos de la canción encontrada porque se está utilizando el método 'find()'.",
      "Al estar registrada en 'routes/api.php', Laravel detecta automáticamente el modelo obtenido por Eloquent y lo convierte a formato JSON en la respuesta.",
      "Devuelve un objeto nativo de PHP que provocará un error de formato en el cliente Guzzle porque no se aplicó 'json_encode()'."
    ],
    "correcta": 2
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "En una aplicación cliente usando Guzzle, ejecutas la siguiente petición para leer las canciones:\n\n$response = $client->request('GET', '/api/canciones');\n// LÍNEA FALTANTE\n\n¿Qué código exacto debes insertar en la 'LÍNEA FALTANTE' para extraer el contenido JSON recibido y convertirlo en un array asociativo de PHP listo para usarse?",
    "opciones": [
      "$datos = (array) $response->getBody();",
      "$datos = json_decode($response->getBody(), true);",
      "$datos = $response->getJsonAsArray();",
      "$datos = json_decode($response, true);"
    ],
    "correcta": 1
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Revisa el siguiente modelo básico en Laravel:\n\nclass Cancion extends Model\n{\n    protected $table = 'canciones';\n}\n\nSi en tu controlador intentas crear un nuevo registro a partir del JSON que llega de Guzzle ejecutando '$cancion = Cancion::create($request->all());', ¿qué ocurrirá?",
    "opciones": [
      "El registro se insertará de forma segura tomando exactamente los mismos campos que el cliente envíe en el JSON.",
      "Fallará por protección contra asignación masiva (Mass Assignment), ya que falta definir obligatoriamente la propiedad '$fillable' con los campos permitidos.",
      "Laravel creará automáticamente las columnas faltantes en la base de datos basándose en las claves del JSON entrante.",
      "Lanzará un error de sintaxis porque el método 'create()' de Eloquent solo acepta objetos de tipo JSON, no el array devuelto por '$request->all()'."
    ],
    "correcta": 1
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Necesitas consumir tu API con Guzzle realizando una petición GET, pero en lugar de pasar el ID en la propia estructura de la URL, el servidor requiere que se lo pases como un parámetro 'query string' (por ejemplo: ?userId=2). ¿Cuál de los siguientes fragmentos de código es el correcto?",
    "opciones": [
      "$client->get('/posts', ['query' => ['userId' => 2]]);",
      "$client->get('/posts', ['json' => ['userId' => 2]]);",
      "$client->get('/posts?userId=2', ['params' => ['userId' => 2]]);",
      "$client->get('/posts', ['body' => 'userId=2']);"
    ],
    "correcta": 0
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Observa la inicialización de Guzzle en el script del cliente:\n\n$client = new GuzzleHttp\\Client(['base_uri' => 'http://localhost/api_canciones.php']);\n\nY la posterior petición para borrar la canción 3:\n\n// LÍNEA FALTANTE\n\nSegún los ejemplos del temario, ¿cuál de los siguientes códigos en la LÍNEA FALTANTE realizará correctamente la petición DELETE pasando el ID encapsulado dentro del cuerpo de la petición en formato JSON?",
    "opciones": [
      "$response = $client->delete('', ['body' => ['id' => 3]]);",
      "$response = $client->request('DELETE', '3');",
      "$response = $client->delete(['id' => 3]);",
      "$response = $client->request('DELETE', '', ['json' => ['id' => 3]]);"
    ],
    "correcta": 3
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Al registrar la ruta 'Route::apiResource('canciones', CancionController::class);' dentro del archivo 'routes/api.php', ¿qué características aplica Laravel automáticamente a estos endpoints según los apuntes?",
    "opciones": [
      "Se configuran con estado (stateful), usan cookies de sesión y devuelven vistas HTML.",
      "Son sin estado (stateless), utilizan el middleware api, devuelven respuestas en formato JSON y aplican limitación de tasa.",
      "Requieren obligatoriamente autenticación OAuth 2.0 y deshabilitan el formato JSON.",
      "Solo permiten los métodos GET y POST, bloqueando PUT y DELETE por seguridad."
    ],
    "correcta": 1
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Estás creando el archivo 'cliente.php' para consumir tu API con Guzzle y escribes directamente el siguiente código:\n\n$client = new GuzzleHttp\\Client(['base_uri' => 'http://localhost/api/']);\n\nAl ejecutarlo, PHP lanza un error fatal indicando que no encuentra la clase Client. ¿Qué instrucción obligatoria te falta incluir al principio del archivo según el temario?",
    "opciones": [
      "include_once 'GuzzleHttp.php';",
      "require 'guzzle.php';",
      "require 'vendor/autoload.php';",
      "import GuzzleHttp\\Client;"
    ],
    "correcta": 2
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Para preparar la base de datos de tu API, debes ejecutar las migraciones. Observa los siguientes comandos de Artisan:\n\nA) php artisan migrate\nB) php artisan migrate:fresh\n\n¿Cuál es la diferencia exacta entre ambos comandos según se indica en el temario de Laravel?",
    "opciones": [
      "El comando A ejecuta migraciones pendientes, mientras que el B restablece la base de datos eliminando todas las tablas antes de aplicar nuevamente las migraciones.",
      "El comando A crea la base de datos desde cero, mientras que el B solo actualiza los registros modificados recientemente.",
      "Ambos comandos hacen exactamente lo mismo, pero el B fuerza la ejecución saltándose las advertencias de seguridad.",
      "El comando A se usa para bases de datos MySQL, mientras que el B es exclusivo para bases de datos SQLite."
    ],
    "correcta": 0
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Observa el siguiente código donde se actualiza un recurso consumiendo una API RESTful con Guzzle. En lugar de usar el método genérico request(), usamos el método HTTP abreviado:\n\n$updatedPost = ['title' => 'Título actualizado'];\n$postId = 5;\n// LÍNEA FALTANTE\n\n¿Qué instrucción debe ir en la LÍNEA FALTANTE para enviar la petición PUT correctamente adjuntando los datos?",
    "opciones": [
      "$response = $client->put(\"/posts/{$postId}\", json_encode($updatedPost));",
      "$response = $client->put(\"/posts/{$postId}\", ['body' => $updatedPost]);",
      "$response = $client->put(\"/posts/{$postId}\", ['json' => $updatedPost]);",
      "$response = $client->update(\"/posts/{$postId}\", ['data' => $updatedPost]);"
    ],
    "correcta": 2
  },
  {
    "tema": "creacion basica API REST tema 6",
    "pregunta": "Analiza el siguiente método 'destroy' dentro del controlador de Laravel (CancionController.php):\n\npublic function destroy(string $id)\n{\n    Cancion::findOrFail($id)->delete();\n    // LÍNEA FALTANTE\n}\n\nSegún el código exacto del temario, ¿qué instrucción debe ir en la LÍNEA FALTANTE para devolver al cliente HTTP la respuesta indicando la eliminación exitosa y el código de estado 200?",
    "opciones": [
      "return response()->json('Deleted Successfully', 204);",
      "return response('Deleted Successfully', 200);",
      "return Cancion::response(200);",
      "return true;"
    ],
    "correcta": 1
  },
  {
    "tema": "tarea tema 6",
    "pregunta": "En nuestra tarea, configuramos el cliente Guzzle con `'http_errors' => false`:\n\n$cliente = new GClientRMM([\n    'base_uri' => 'http://127.0.0.1:8000/api/',\n    'http_errors' => false,\n    'headers' => ['Accept' => 'application/json']\n]);\n\n¿Por qué es necesario esta configuración al consumir nuestra API REST en lugar de dejar el valor por defecto?",
    "opciones": [
      "Para aumentar la velocidad de la petición eliminando la verificación SSL.",
      "Porque, al estar en `false`, evitamos que Guzzle lance excepciones automáticas ante errores HTTP (404, 422), permitiéndonos procesar manualmente el código de estado y el JSON de error devuelto por Laravel.",
      "Para obligar a Laravel a devolver siempre un código 200, independientemente de si la operación falla.",
      "Para que Guzzle convierta automáticamente los errores 500 en respuestas 200."
    ],
    "correcta": 1
  },
  {
    "tema": "tarea tema 6",
    "pregunta": "En el controlador de nuestra API, utilizamos este fragmento para unificar la entrada de datos del género:\n\n$datos = $request->all();\nif (!isset($datos['genero']) && isset($datos['genero_id'])) {\n    $datos['genero'] = $datos['genero_id'];\n}\n$v = Validator::make($datos, ['genero' => 'required|integer|exists:generos,id']);\n\n¿Qué lógica sigue este código al interactuar con el validador de Laravel?",
    "opciones": [
      "Fuerza a que Laravel lance un error 500 si no se envía la clave 'genero'.",
      "Ignora cualquier dato que no sea 'genero_id' para evitar inyecciones SQL.",
      "Permite flexibilidad en la API aceptando el ID tanto con el nombre 'genero' como con 'genero_id', unificando el dato antes de aplicar las reglas de validación sobre el array `$datos`.",
      "Sobreescribe la base de datos cada vez que se detecta una diferencia entre 'genero' y 'genero_id'."
    ],
    "correcta": 2
  },
  {
    "tema": "tarea tema 6",
    "pregunta": "En nuestro `CancionController`, empleamos este método para actualizar una canción:\n\npublic function update(Request $request, string $id) {\n    $cancion = Cancion::findOrFail($id);\n    $cancion->update($request->all());\n    return response()->json($cancion, 200);\n}\n\nSi el cliente envía un JSON que contiene un campo 'id' que no existe en la base de datos, ¿qué ocurre exactamente al llamar a `Cancion::findOrFail($id)`?",
    "opciones": [
      "Devuelve un objeto vacío y el código continúa hasta ejecutar `update()`.",
      "Lanza automáticamente una excepción `ModelNotFoundException`, lo que resulta en una respuesta 404 Not Found si no se captura.",
      "El servidor ignora el error y crea una nueva canción con el ID enviado.",
      "El servidor responde con un error 500 fatal e inmediatamente detiene el servicio."
    ],
    "correcta": 1
  },
  {
    "tema": "tarea tema 6",
    "pregunta": "Para la validación de errores en nuestro cliente Guzzle, usamos este fragmento:\n\n$codigo = $operacion->getStatusCode();\n$cuerpo = json_decode($operacion->getBody()->getContents(), true);\nif ($codigo == 422) {\n    $errores = $cuerpo['errores'] ?? ['Error de validación.'];\n    return \"Errores: <ul><li>\" . implode(\"</li><li>\", $errores) . \"</li></ul>\";\n}\n\n¿Qué tipo de respuesta de Laravel estamos procesando correctamente al capturar el código 422?",
    "opciones": [
      "Una respuesta de éxito donde el recurso se ha modificado correctamente.",
      "Un error interno del servidor (500) donde la base de datos ha fallado.",
      "Una respuesta de 'Unprocessable Entity' donde los datos enviados no cumplen las reglas de validación (por ejemplo, longitud mínima no alcanzada o datos duplicados).",
      "Una redirección HTTP que indica que el endpoint ha cambiado de dirección."
    ],
    "correcta": 2
  },
  {
    "tema": "tarea tema 6",
    "pregunta": "Al implementar la ruta para nuestra API en `routes/api.php`, utilizamos el siguiente comando:\n\nRoute::apiResource('canciones', CancionController::class);\n\n¿Por qué es recomendable utilizar `apiResource` en lugar de `resource` al crear un servicio web RESTful en Laravel?",
    "opciones": [
      "Porque `apiResource` incluye automáticamente las vistas Blade de creación y edición (create y edit).",
      "Porque `apiResource` excluye automáticamente las rutas destinadas a mostrar formularios HTML (como create y edit), ya que en una API REST solo nos interesan las operaciones CRUD sobre los datos.",
      "Porque `apiResource` es necesario para poder usar los middlewares de autenticación de Sanctum.",
      "Porque el método `resource` solo funciona con peticiones GET y POST, prohibiendo el uso de PUT o DELETE."
    ],
    "correcta": 1
  },
  {
        "tema": "Unidad 7 examen 2025",
        "pregunta": "Dado el siguiente código en PHP y HTML de una aplicación JAXON, ¿qué habría que añadir en el HTML para que se muestre el mensaje en caso de que se elimine el libro?\n\nfunction borrarLibro($isbn) {\n  $response = new Response();\n  $mensaje=\"Libro eliminado (ISBN=$isbn)\";\n  $response->assign('mensaje','innerHTML',$mensaje);\n  return $response;\n}\n\n<form id=\"eliminarLibro\" onSubmit=\"return false;\">\n  ISBN:<input id=\"isbn\" type=\"text\" name=\"isbn\">\n  <!-- ¿Qué falta aquí para visualizar el mensaje? -->\n</form>",
        "opciones": [
            "<P data-id=\"mensaje\"></H1>",
            "<P name=\"mensaje\"></H1>",
            "<H1 id=\"mensaje\"></H1>",
            "<P>{$mensaje}</H1>"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 examen 2025",
        "pregunta": "Dado el siguiente botón en un formulario HTML, ¿cuál de los siguientes códigos JavaScript sería el equivalente exacto al método rq()->call() usado en su atributo onclick?\n\n<form id=\"eliminarLibro\" onSubmit=\"return false;\">\n  <input id=\"isbn\" type=\"text\" name=\"isbn\">\n  <input type=\"button\" value=\"Borrar\" onclick=\"<?=rq()->call('borrarLibro',pm()->input('isbn'))?>\";>\n</form>",
        "opciones": [
            "onclick=\"<?=jaxon_call('borrarLibro',jaxon.$('isbn').value);?>\"",
            "onclick=\"<?=jaxon_borrarLibro(pm()->input('isbn'));?>\"",
            "onclick=\"jaxon_borrarLibro(document.getElementById('isbn').value);\"",
            "onclick=\"let v=document.getElementById('mascota').value; jaxon.borrarLibro(v);\""
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 examen 2025",
        "pregunta": "En JAXON-PHP, dada la siguiente función, ¿qué hace exactamente la línea que comienza por $response->assign?\n\nfunction borrarLibro($isbn) {\n  $response = new Response();\n  $mensaje=\"Libros eliminados (ISBN=$isbn)\";\n  $response->assign('mensaje','innerHTML',$mensaje);\n  return $response;\n}",
        "opciones": [
            "Establece el valor de la variable $mensaje como contenido del elemento HTML con name=\"mensaje\".",
            "Establece el valor de la variable $mensaje como contenido del elemento HTML con data-id=\"mensaje\".",
            "Ninguna de las otras opciones es correcta.",
            "Establece el valor de la variable $mensaje como contenido del elemento HTML con id=\"mensaje\"."
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad 7 examen 2025",
        "pregunta": "Dado el siguiente registro de una función usando JAXON, ¿tiene sentido declarar la función `registrarLibro` con el modificador de visibilidad `private` (ej: `private function registrarLibro (...)`)?\n\n$jaxon->register(Jaxon::CALLABLE_FUNCTION, 'registrarLibro');",
        "opciones": [
            "No tiene sentido, ya que la función no se va a definir dentro de una clase.",
            "No tiene sentido. Si se pone la función es privada y no es accesible vía AJAX.",
            "No, ya que están en el mismo archivo donde se registran. Aunque se ponga private, se puede registrar igualmente.",
            "Solo tiene sentido si la función se va usar después de que el usuario se haya autenticado."
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 7 examen 2025",
        "pregunta": "Dado el siguiente fragmento en el archivo backend de JAXON, ¿cuál es el propósito del método `register`?\n\n$jaxon->register(Jaxon::CALLABLE_FUNCTION, 'borrarLibro');",
        "opciones": [
            "Registrar una función JavaScript para que pueda ser llamada vía AJAX usando JAXON desde el servidor.",
            "Registrar una función PHP para que pueda ser llamada desde el backend usando JAXON-PHP.",
            "Registrar una función PHP para que pueda ser llamada vía AJAX desde el cliente web.",
            "Registrar una función JavaScript para que pueda ser llamada desde el servidor web para obtener información del cliente web."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 examen 2025",
        "pregunta": "Teniendo en cuenta el uso de peticiones AJAX (como JAXON) para eliminar un registro desde un formulario sin recargar la página:\n\n<form onSubmit=\"jaxon_borrarLibro(jaxon.$('isbn').value); return false;\" >\n\n¿Qué ventajas tiene esta técnica sobre una aplicación web tradicional?",
        "opciones": [
            "Se sobrecarga menos el servidor, dado que la eliminación del libro se hace en el cliente web.",
            "La actualización de la interfaz de usuario es más segura, dado que se envía la mínima información al servidor (solo el ISBN) y no la página completa.",
            "Se sobrecarga menos el cliente, dado que todo el código se ejecuta en el servidor y no en el cliente.",
            "La actualización de la interfaz de usuario es más rápida ya que solo se actualiza el contenido necesario. En cualquier caso, puede complementar la forma de funcionamiento más tradicional."
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad 7 examen 2025",
        "pregunta": "¿Qué ocurría si los datos del siguiente formulario se enviaran al backend vía POST tradicional en vez de usar las funciones asíncronas de JAXON-JS?\n\n<form id=\"eliminarLibro\" action=\"script.php\" method=\"POST\">\n  ISBN del libro:<input id=\"isbn\" type=\"text\" name=\"isbn\">\n  <input type=\"submit\" value=\"Borrar\">\n</form>",
        "opciones": [
            "En ese caso los datos se reciben por JAXON-PHP como un array asociativo, y habría que usar filter_input o equivalente dentro de la función borrarLibro para acceder a los datos.",
            "En ese caso los datos se reciben por JAXON-PHP como un array asociativo y el mismo se encarga de transformarlos a lo que necesita la función registrada.",
            "Tendríamos que preparar un script PHP aparte para recibir los datos del formulario, procesarlos y devolver una respuesta al cliente que contuviera el HTML completo que deseamos que se muestre al cliente.",
            "Usar envío de formularios tradicional no es compatible con JAXON-PHP ni JAXON-JS, por lo que generaría error PHP."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 examen 2025",
        "pregunta": "En una aplicación de JAXON, imagina que la función PHP registrada en el backend responde con un texto directo (`return \"ERROR: revisa ISBN\";`) en vez de retornar una instancia de la clase Response (`$response = new Response(); ... return $response;`). ¿Qué ocurriría en el cliente web?",
        "opciones": [
            "La cadena retornada es en sí misma una cadena en formato JSON, por lo que JAXON-JS lo interpretará como un texto que hay que mostrar en el navegador en la salida por defecto. La salida por defecto es la consola de log del navegador.",
            "Lo más probable es que provoque un fallo en el cliente web, modifique la estructura DOM del documento HTML de forma inadecuada y deje de funcionar.",
            "JAXON-PHP va a transformar de forma automática el texto en cuestión en un mensaje JSON que acepta JAXON-JS, con lo que JAXON-JS lo interpretará adecuadamente.",
            "La página que está visualizando el usuario simplemente no se modifica, al no recibir una respuesta JSON apropiadamente formateada JAXON-JS no puede interpretar el contenido y no se altera el DOM del documento."
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "¿Cuál de las siguientes llamadas a métodos de la clase Response se utiliza en JAXON-PHP para limpiar completamente el contenido de un div?\n\n<div id=\"lista\">123</div>",
        "opciones": [
            "$response->empty('lista');",
            "$response->clear('lista');",
            "$response->assign('lista', 'innerHTML', '');",
            "$response->remove('lista');"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "En el siguiente fragmento JavaScript usando fetch(), ¿qué línea indica correctamente que estamos enviando una petición tipo POST con los datos de un formulario?\n\nfunction nuevoNumero() {\n  const formData = new FormData(document.getElementById('nuevonumero'));\n  fetch('backend/nuevonumero.php', {\n    // LÍNEA A COMPLETAR\n  })\n  .then(response => response.json());\n}",
        "opciones": [
            "method: 'POST', body: formData",
            "type: 'POST', data: formData",
            "form_params: 'POST', cookies: formData",
            "method: 'POST', body: JSON.stringify(formData)"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "Dado el siguiente código usando el cliente HTTP Guzzle en PHP, ¿cómo se obtienen los datos del cuerpo de la respuesta para poder manipularlos como texto?\n\n$clienteHTTP = new GuzzleHttp\\Client();\n$respuesta = $clienteHTTP->request('GET', \"http://miservicio.com/api\");",
        "opciones": [
            "$respuesta->getText();",
            "$respuesta->readBody();",
            "$respuesta->getHeaders('Content-Type');",
            "$respuesta->getBody()->getContents();"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "Dado el siguiente fragmento de código PHP que inicializa JAXON, ¿qué variables debes imprimir obligatoriamente (usando `echo`) dentro del HTML para que se incluyan las definiciones de las funciones registradas y la librería Javascript que gestiona las peticiones?\n\n<?php\nrequire_once __DIR__.'/setup.php';\nuse function Jaxon\\jaxon;\njaxon()->setOption('core.request.uri', 'backend.php');\n$jaxonCss = jaxon()->getCss();\n$jaxonJs = jaxon()->getJs();\n$jaxonScript = jaxon()->getScript();\n?>\n<!DOCTYPE html>\n<html>\n<head>...</head>\n<body>\n... \n<!-- INYECCIÓN DE CÓDIGO -->\n</body>\n</html>",
        "opciones": [
            "Solo `$jaxonCss` en el `<head>` es suficiente.",
            "Solamente `$jaxonScript` al principio del archivo.",
            "`$jaxonJs` (código de la librería Jaxon-JS) y `$jaxonScript` (código generado con las funciones PHP registradas).",
            "`jaxon()->getFormValues()` en cada etiqueta `<form>` del HTML."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "En un script denominado `backend.php` (el encargado de recibir y despachar las peticiones AJAX generadas por JAXON-JS en el cliente web), ¿qué código debe usarse estrictamente para interceptar, procesar la petición y enviarla a la función o clase PHP registrada correspondiente?\n\n<?php\n// backend.php\nrequire_once __DIR__.'/setup.php';\nuse function Jaxon\\jaxon;\n// ¿Qué código falta aquí?\n?>",
        "opciones": [
            "if(jaxon()->canProcessRequest()) { jaxon()->processRequest(); }",
            "jaxon()->register(Jaxon::CALLABLE_FUNCTION, 'backend');",
            "$response = jaxon()->newResponse(); return $response;",
            "jaxon()->setOption('core.request.uri', 'backend.php');"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "Sabiendo que tienes la librería JQuery cargada en el cliente web, ¿cuál de las siguientes instrucciones usarías en JAXON-PHP para cambiar el color de fondo a verde de un `div` con la clase `caja` usando sintaxis propia de selectores JQuery directamente desde el backend?\n\nfunction modificarCaja() {\n  $response = jaxon()->newResponse();\n  // LÍNEA A COMPLETAR\n  return $response;\n}",
        "opciones": [
            "$response->assign('div.caja', 'style', 'background-color: green;');",
            "$response->jq('div.caja')->css('background-color','green');",
            "$response->css('div.caja', 'background-color', 'green');",
            "$response->style('caja', 'green');"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "Dado el siguiente formulario HTML, ¿qué código Javascript proporciona JAXON-JS de forma nativa para recoger automáticamente un objeto o array asociativo con todos los datos introducidos en el formulario y pasárselos a la función `jaxon_guardarUsuario`?\n\n<form id=\"datosUsuario\" onSubmit=\"jaxon_guardarUsuario( /* ¿Qué poner aquí? */ ); return false;\">\n  Nombre: <input id=\"nombre\" type=\"text\" name=\"nombre\"><br>\n  Edad: <input id=\"edad\" type=\"text\" name=\"edad\"><br>\n  <input type=\"submit\" value=\"Guardar\">\n</form>",
        "opciones": [
            "jaxon.$('datosUsuario').values()",
            "document.getElementById('datosUsuario').getAll()",
            "jaxon.getFormValues('datosUsuario')",
            "<?=pm()->input('datosUsuario')?>"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "Usando las fábricas de peticiones de JAXON-PHP (Request Factory y Parameter Factory) intercaladas en el HTML, ¿cuál de las siguientes opciones genera el código JavaScript adecuado para llamar a la función registrada `borrarnumero` recogiendo el valor del input `id_borrar` y pedir una confirmación previa al usuario?\n\n<?php\nuse function Jaxon\\pm;\nuse function Jaxon\\rq;\n?>\n<input type=\"button\" value=\"¡Borrar!\" onclick=\"/* LÍNEA A COMPLETAR */\">",
        "opciones": [
            "<?=rq()->call('borrarnumero',pm()->input('id_borrar'))->confirm('¿Estas seguro?');?>",
            "<?=jaxon_borrarnumero(pm()->val('id_borrar'))->alert('¿Estas seguro?');?>",
            "<?=pm()->confirm('¿Estas seguro?')->call('borrarnumero', 'id_borrar');?>",
            "if(confirm('¿Estas seguro?')) { rq()->call('borrarnumero', 'id_borrar'); }"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "Dado el siguiente fragmento JAXON-PHP, y suponiendo que en el documento HTML original existe el bloque `<div id=\"notificaciones\"><p>Aviso antiguo</p></div>`, ¿cuál será el resultado exacto en el DOM del navegador web tras ejecutarse la respuesta AJAX?\n\nfunction actualizarMensajes() {\n  $response = jaxon()->newResponse();\n  $response->prepend('notificaciones', 'innerHTML', '<p>Nuevo aviso</p>');\n  return $response;\n}",
        "opciones": [
            "Se sobrescribirá por completo: `<div id=\"notificaciones\"><p>Nuevo aviso</p></div>`",
            "Se añadirá al final: `<div id=\"notificaciones\"><p>Aviso antiguo</p><p>Nuevo aviso</p></div>`",
            "Se añadirá al principio: `<div id=\"notificaciones\"><p>Nuevo aviso</p><p>Aviso antiguo</p></div>`",
            "Lanzará un error en la consola, ya que prepend solo sirve para la propiedad className y no para innerHTML."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "¿Qué método de la clase `Response` de JAXON-PHP debes usar si quieres instruir al navegador del cliente para que ejecute directamente una función Javascript específica (por ejemplo, `mostrarModal`) que el programador front-end ya ha definido previamente en el HTML?\n\nfunction notificarUsuario() {\n  $response = jaxon()->newResponse();\n  // LÍNEA A COMPLETAR\n  return $response;\n}",
        "opciones": [
            "$response->script('mostrarModal');",
            "$response->call('mostrarModal');",
            "$response->trigger('mostrarModal');",
            "$response->execute('mostrarModal()');"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9",
        "pregunta": "En JAXON-PHP, ¿qué componente permite generar código JavaScript dinámicamente desde PHP para recoger el valor de un campo de formulario, usando por ejemplo la instrucción `pm()->input('numero')`?",
        "opciones": [
            "Request Factory",
            "Parameter Factory",
            "Response Factory",
            "Jaxon-JS Core"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9",
        "pregunta": "Si utilizas el método `$response->jq('div.alerta')->css('background-color', 'red');` en una función del backend para modificar el DOM, ¿qué requisito indispensable debe cumplir el documento HTML (frontend)?",
        "opciones": [
            "No requiere nada extra, JAXON incluye las librerías necesarias por defecto.",
            "Debe incluir una etiqueta `<script>` apuntando al CDN oficial de JAXON-CSS.",
            "Debe tener cargada previamente la librería JavaScript de JQuery.",
            "Debe ejecutar `jaxon()->getJQuery()` en el setup inicial del script."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9",
        "pregunta": "Al configurar el archivo que procesa las peticiones (por ejemplo `backend.php`), ¿cuál es el propósito de llamar al método `jaxon()->getScript()` y plasmar su resultado en el HTML?",
        "opciones": [
            "Obtener el código JavaScript generado por Jaxon con las funciones registradas para que puedan ser invocadas remotamente.",
            "Generar el código CSS necesario para dar estilo a las respuestas de JAXON.",
            "Establecer la ruta del archivo JavaScript principal de Jaxon-JS.",
            "Ejecutar código de validación en el servidor antes de generar el DOM."
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9",
        "pregunta": "Dentro del código de una función PHP registrada en JAXON para procesar una petición AJAX, ¿qué tipo de objeto se debe retornar de forma obligatoria para evitar estropear la respuesta JSON generada?",
        "opciones": [
            "Un array asociativo nativo de PHP.",
            "Un string con formato XML o JSON.",
            "Una instancia de la clase genérica stdClass.",
            "Una instancia de la clase Response."
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9",
        "pregunta": "¿Qué componente de JAXON-PHP se utiliza para generar código JavaScript directamente desde PHP que permita realizar invocaciones remotas al backend (desencadenar peticiones AJAX), como por ejemplo al usar `rq()->call('borrarNumero')`?",
        "opciones": [
            "Parameter Factory",
            "Request Factory",
            "Response Builder",
            "Jaxon Plugin Manager"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9",
        "pregunta": "¿Para qué sirve exactamente el método `jaxon.getFormValues('id_formulario')` cuando estamos configurando una petición AJAX en el lado del cliente con JAXON-JS?",
        "opciones": [
            "Para recopilar automáticamente todos los datos del formulario especificado por su ID y enviarlos en la petición AJAX.",
            "Para validar en el cliente que todos los campos del formulario tienen el formato correcto antes de enviarlos.",
            "Para limpiar (resetear) todos los valores de los inputs dentro de un formulario tras una respuesta exitosa.",
            "Para transformar los datos de un formulario tradicional en un array asociativo dentro del backend PHP."
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "Dado el siguiente código usando la librería Leaflet para mostrar un mapa híbrido en el cliente, ¿cuál es la instrucción correcta para centrar el mapa en unas coordenadas concretas con un nivel de zoom determinado?\n\nlet mapa = L.map('mapa_div');\nlet latitud = 36.8401;\nlet longitud = -2.4699;\nlet zoom = 14;\n// ¿Qué línea falta aquí?",
        "opciones": [
            "mapa.setCenter([latitud, longitud], zoom);",
            "mapa.setView([latitud, longitud], zoom);",
            "L.centerMap(mapa, latitud, longitud, zoom);",
            "mapa.addLayer(latitud, longitud).zoom(14);"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "Observa el siguiente código para añadir un marcador a un mapa de Leaflet. ¿Qué método debes encadenar para que al hacer clic sobre el marcador se abra un pequeño cuadro de información (popup)?\n\nlet latitud = 36.5293;\nlet longitud = -6.2940;\nlet marcador = L.marker([latitud, longitud]).addTo(map);\n// ¿Qué instrucción asocia un texto informativo al marcador?",
        "opciones": [
            "marcador.setInfo('Catedral de Cádiz');",
            "marcador.addTooltip('Catedral de Cádiz');",
            "marcador.bindPopup('Catedral de Cádiz');",
            "marcador.showText('Catedral de Cádiz');"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "Al desarrollar un cliente PHP con Guzzle para consumir un servicio web REST que exige autenticación HTTP Basic, ¿cómo se deben configurar las cabeceras en la petición HTTP?\n\n$clienteHTTP = new GuzzleHttp\\Client();\n$usuario = 'admin';\n$password = '1234';\n// LÍNEA A COMPLETAR\n$response = $clienteHTTP->request('GET', $url, ['headers' => $headers]);",
        "opciones": [
            "$headers = ['Authorization' => 'Basic ' . base64_encode($usuario . ':' . $password)];",
            "$headers = ['WWW-Authenticate' => 'Basic ' . $usuario . ':' . $password];",
            "$headers = ['Auth-Basic' => base64_encode($usuario . ':' . $password)];",
            "$headers = ['Authorization' => 'Bearer ' . $usuario . ':' . $password];"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "¿Qué protocolo estándar se utiliza habitualmente en aplicaciones web híbridas para permitir que un usuario otorgue su consentimiento expreso y autorice a nuestra aplicación a acceder a su información privada en otro servicio (como Google Drive), sin necesidad de que nos ceda su contraseña?\n\n// El protocolo implica redirigir al usuario al proveedor de servicio para que inicie sesión allí y nos devuelva un código de autorización.",
        "opciones": [
            "SOAP",
            "SAML",
            "OAuth2",
            "HTTP Digest"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "Dado el siguiente script de un servicio web REST en PHP que atiende peticiones PUT o DELETE, ¿qué código debe usarse en la línea comentada para leer correctamente los datos en crudo (JSON) que se envían en el cuerpo de la petición HTTP?\n\n<?php\nsession_start();\nif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {\n  // LÍNEA A COMPLETAR\n  if ($datos !== false && isset($datos->id)) {\n     // Proceder a borrar\n  }\n}",
        "opciones": [
            "$datos = json_decode($_POST['data']);",
            "$datos = json_decode(file_get_contents('php://input'));",
            "$datos = json_decode($GLOBALS['HTTP_RAW_POST_DATA']);",
            "$datos = json_decode(filter_input(INPUT_POST, 'json'));"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "Usando la librería Guzzle en PHP, quieres añadir un nuevo recurso (un monumento) realizando una petición POST a una API REST que espera recibir la carga útil en formato JSON puro. ¿Cuál es la forma correcta de enviar los datos en la petición?\n\n$clienteHTTP = new GuzzleHttp\\Client();\n$datosNuevoMonumento = [\n  'provincia' => 'Almería',\n  'nombre' => 'El cable inglés'\n];\n// ¿Cómo se envía la petición correctamente?",
        "opciones": [
            "$response = $clienteHTTP->post($url, ['form_params' => $datosNuevoMonumento]);",
            "$response = $clienteHTTP->post($url, ['body' => $datosNuevoMonumento]);",
            "$response = $clienteHTTP->post($url, ['json' => $datosNuevoMonumento]);",
            "$response = $clienteHTTP->post($url, ['headers' => ['Content-Type' => 'application/json', 'data' => $datosNuevoMonumento]]);"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "En una aplicación web híbrida en PHP, se utiliza la librería SimpleXML para consumir un feed RSS público (XML) sobre noticias. ¿Qué función nativa de PHP debes usar para cargar directamente el documento XML desde una URL y convertirlo en un objeto manipulable?\n\n$url = \"http://www.juntadeandalucia.es/.../rss/...\";\n// LÍNEA A COMPLETAR\nforeach ($xml->item as $noticia) {\n  echo $noticia->title;\n}",
        "opciones": [
            "$xml = simplexml_load_string(file_get_contents($url));",
            "$xml = simplexml_load_file($url);",
            "$xml = new SimpleXMLElement($url);",
            "Tanto la opción 0 como la opción 1 son métodos válidos para lograrlo."
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad 7 - RA 8 y 9",
        "pregunta": "En una petición HTTP con Guzzle, si la autenticación falla (por ejemplo, credenciales incorrectas en HTTP Basic) el servidor web remoto retorna un código 401. ¿Cómo se debe gestionar este error de forma adecuada en el código PHP?\n\ntry {\n  $response = $clienteHTTP->request('GET', $url, ['headers' => $headers]);\n} catch (/* EXCEPCIÓN A CAPTURAR */ $e) {\n  if ($e->getResponse()->getStatusCode() == 401) {\n     echo \"Usuario y/o contraseña incorrectos\";\n  }\n}",
        "opciones": [
            "GuzzleHttp\\Exception\\RequestException",
            "GuzzleHttp\\Exception\\AuthException",
            "GuzzleHttp\\Exception\\HttpError",
            "Exception"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9 (Práctica)",
        "pregunta": "En tu función auxiliar `logMessage`, utilizas el siguiente método de JAXON:\n\n$r->prepend('log', 'innerHTML', '<div><strong>'.date('Y-m-d H:i:s.u').'</strong>:'. print_r($dato, true) . '</div>');\n\n¿Qué efecto tiene exactamente el método `prepend` sobre el elemento HTML con id='log'?",
        "opciones": [
            "Sobrescribe por completo todo el contenido del elemento.",
            "Añade el mensaje de log al final del contenido que ya tuviera el elemento.",
            "Añade el mensaje de log al principio del contenido que ya tuviera el elemento.",
            "Elimina el elemento con id='log' y lo vuelve a crear con el nuevo contenido."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9 (Práctica)",
        "pregunta": "En la función `registrarPeliculaRMM`, antes de validar los datos del formulario, ejecutas este bucle:\n\n$campos = ['titulo', 'genero', 'direccion', 'duracion', 'argumento', 'anio'];\nforeach($campos as $campo) {\n  $response->assign($campo.'_errores', 'innerHTML', '');\n}\n\n¿Cuál es el objetivo principal de estas líneas?",
        "opciones": [
            "Borrar el valor que el usuario escribió en los inputs del formulario para que empiece de cero.",
            "Limpiar visualmente cualquier mensaje de error anterior de la interfaz, dejándola en blanco antes de validar de nuevo.",
            "Eliminar las variables PHP de la memoria del servidor para evitar duplicados en la base de datos.",
            "Asignar un array vacío a los errores devueltos por el modelo Pelicula."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9 (Práctica)",
        "pregunta": "En tu función `buscarPeliculasOMDBRMM`, configuras el cliente HTTP de Guzzle de la siguiente manera:\n\n$client = new \\GuzzleHttp\\Client(['http_errors' => false]);\n$res = $client->request('GET', $url);\n\n¿Por qué es de gran utilidad la opción `['http_errors' => false]` en este contexto?",
        "opciones": [
            "Para que Guzzle lance una excepción (Exception) automáticamente y detenga el script si la API devuelve un código 404 o 500.",
            "Para ignorar los errores de sintaxis en tu propio código PHP e intentar compilarlo igualmente.",
            "Para forzar a la API remota de OMDB a devolver siempre un código HTTP 200 OK pase lo que pase.",
            "Para evitar que Guzzle lance excepciones ante errores HTTP (como 404) y permitirte procesar la respuesta manualmente evaluando `$res->getStatusCode()`."
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9 (Práctica)",
        "pregunta": "Tras insertar correctamente una película en la base de datos, tu función `registrarPeliculaRMM` ejecuta la siguiente instrucción:\n\n$response->script('jaxon_listarPeliculasRMM();');\n\n¿Qué consigue exactamente esta línea en la aplicación?",
        "opciones": [
            "Registra internamente la función en el servidor para que Jaxon sepa que existe.",
            "Ordena al navegador del cliente que ejecute esa función Javascript, lo que desencadenará otra petición AJAX para recargar la tabla de películas automáticamente.",
            "Imprime una etiqueta `<script>` en el archivo logs.txt del servidor.",
            "Muestra un mensaje emergente de alerta (alert) en el navegador del usuario avisando de que se va a listar."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9 (Práctica)",
        "pregunta": "Al recibir la respuesta de la API externa de OMDB, procesas el cuerpo del mensaje (JSON) utilizando una función nativa de PHP:\n\n$datos = json_decode($body, true);\n\n¿Qué tipo de dato devuelve esta función gracias a que has incluido el segundo parámetro a `true`?",
        "opciones": [
            "Un objeto de la clase estándar de PHP (stdClass).",
            "Una cadena de texto (string) con el JSON saneado.",
            "Un array asociativo nativo de PHP.",
            "Un objeto instanciado de la clase Jaxon\\Response."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9 (Práctica)",
        "pregunta": "En tu archivo index, para enviar todos los datos del formulario de nueva película a la función `registrarPeliculaRMM` usando el generador de código de JAXON, utilizas:\n\n<?=rq()->call('registrarPeliculaRMM', pm()->form('nuevaPelicula'))?>\n\n¿Qué estructura de datos recibe exactamente el parámetro `$formulario` en la función PHP del backend correspondiente al usar `pm()->form(...)`?",
        "opciones": [
            "Un objeto JSON en crudo (`application/json`).",
            "Un array asociativo de PHP donde las claves son los atributos `name` de los inputs.",
            "Un objeto de la clase `FormData` nativo de PHP.",
            "Una cadena de texto con los parámetros codificados en la URL (query string)."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9 (Práctica)",
        "pregunta": "En tu función `buscarPeliculasOMDBRMM`, tras realizar la petición a la API externa con Guzzle y decodificar el cuerpo con `json_decode`, realizas la siguiente comprobación:\n\n$datos = json_decode($body, true);\nif (json_last_error() !== JSON_ERROR_NONE) {\n   logMessage($response, \"Error: El formato JSON recibido de OMDB no es válido.\");\n   return $response;\n}\n\n¿Cuál es el propósito exacto de usar la función `json_last_error()` aquí?",
        "opciones": [
            "Comprobar si Guzzle ha devuelto un error 404 o 500 al realizar la petición HTTP remota.",
            "Verificar que la API externa de OMDB no haya devuelto una lista vacía de películas.",
            "Confirmar que la respuesta recibida se ha podido transformar en un array asociativo en PHP sin errores de sintaxis en el JSON.",
            "Forzar a PHP a que lance una excepción de red si el JSON devuelto supera la memoria disponible en el servidor."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9 (Práctica)",
        "pregunta": "Al procesar de forma exitosa los resultados de la API de OMDB en `buscarPeliculasOMDBRMM`, utilizas la siguiente instrucción del objeto Response de JAXON para hacer visible el contenedor de la tabla en el navegador:\n\n$response->assign('peliculasOMDB_encontradas', 'style.display', 'block');\n\n¿Qué está modificando exactamente el método `assign` al utilizar estos parámetros?",
        "opciones": [
            "El contenido interno (innerHTML) de la etiqueta, reemplazándolo por la palabra 'block'.",
            "El atributo de clase (className) añadiéndole una nueva clase CSS llamada 'block'.",
            "La propiedad `display` del objeto de estilos (`style`) asociado a ese elemento dentro del DOM.",
            "El atributo `visible` nativo de las etiquetas semánticas de HTML5."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9 (Práctica)",
        "pregunta": "Observa el modelo de tu base de datos para borrar una película (`Pelicula::borrar($id)`). Tras ejecutar la consulta SQL utilizando un parámetro `?`, retornas una comprobación sobre las filas afectadas:\n\n$filasAfectadas = DB::doSQL($conexion, $sql, [$id]);\nreturn ($filasAfectadas > 0);\n\n¿Qué ocurrirá con exactitud si a esta función se le pasa un ID de película que no existe en la base de datos?",
        "opciones": [
            "Lanzará una excepción o error crítico (Exception) deteniendo de inmediato la ejecución del script PHP.",
            "La función retornará `false` porque la base de datos indicará que el número de filas borradas fue 0.",
            "La función retornará `true` porque la conexión con la base de datos y la sintaxis SQL fueron exitosas (aunque no borrara nada).",
            "Retornará un array vacío `[]` indicando que no se encontraron resultados coincidentes."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9 (Práctica)",
        "pregunta": "En la parte final de la vista de tu aplicación (`index.php`), justo antes de cerrar el `<body>`, incluyes un bloque con el siguiente código JavaScript:\n\n<script>\n// Carga automática del listado de películas al entrar en la página\njaxon_listarPeliculasRMM();\n</script>\n\nSabiendo que esta función está previamente registrada en el *backend*, ¿qué ocurre en el entorno del cliente cuando el navegador web lee y ejecuta esa línea por primera vez?",
        "opciones": [
            "Se ejecuta directamente la consulta a la base de datos (SELECT) en el propio navegador web interpretando PHP como texto plano.",
            "La librería Jaxon-JS intercepta la llamada y envía una petición AJAX asíncrona al servidor web para que este ejecute el método PHP y devuelva los comandos de actualización del DOM.",
            "El navegador detiene la carga visual y envía automáticamente todos los formularios de la página por el método POST para sincronizarse.",
            "Se genera un error por consola, ya que las llamadas a funciones autogeneradas por Jaxon-JS solo pueden estar asociadas al evento `onclick` de un componente visible."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9 (Práctica)",
        "pregunta": "Analizando la función `listarPeliculasRMM` de la tarea, se genera un botón para borrar películas con el siguiente código[cite: 5]:\n\n$htmlPeliculas .= \"<button onclick='if(confirm(\\\"¿Estás seguro de que deseas borrar esta película?\\\")) { jaxon_borrarPeliculaRMM({$pelicula['id']}); }'>Borrar</button>\";\n\n¿Qué ocurre exactamente al pulsar este botón en el cliente web si el usuario acepta la confirmación?",
        "opciones": [
            "Se recarga la página HTML por completo y se envía el ID mediante una petición POST tradicional para borrar la película.",
            "Se ejecuta una función JavaScript autogenerada por JAXON que lanza una petición AJAX asíncrona al servidor para invocar la función PHP registrada `borrarPeliculaRMM`.",
            "Se borra la película directamente del DOM del navegador mediante JavaScript sin necesidad de comunicarse con el servidor backend.",
            "Se genera un error, porque la función `jaxon_borrarPeliculaRMM` debe escribirse en PHP nativo y no puede ser llamada desde un evento `onclick` de HTML."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9 (Práctica)",
        "pregunta": "En la función PHP `registrarPeliculaRMM($formulario)` de la tarea, cuando falla la validación de un campo, se ejecuta la siguiente instrucción usando la instancia `$response` de Jaxon[cite: 23]:\n\n$response->assign($campo.'_errores', 'innerHTML', $mensaje);\n\n¿Qué efecto tiene esta llamada sobre el documento HTML que el usuario visualiza tras procesarse la respuesta AJAX?",
        "opciones": [
            "Asigna el mensaje de error directamente a la propiedad 'value' de los inputs del formulario para que el usuario tenga que sobreescribirlos.",
            "Muestra una ventana emergente tipo modal bloqueante en el navegador con el contenido de la variable `$mensaje`.",
            "Sustituye el contenido HTML interno (innerHTML) del elemento del DOM cuyo atributo ID coincide con `$campo.'_errores'` por el texto del mensaje de error.",
            "Crea automáticamente un nuevo div oculto en el DOM llamado 'errores' y le inyecta el texto del mensaje mediante la función prepend."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9 (Práctica)",
        "pregunta": "Observando el código de la tarea, una vez insertada o borrada correctamente una película en la base de datos desde el backend, se ejecuta la siguiente línea en JAXON-PHP antes de retornar la respuesta[cite: 29, 33]:\n\n$response->script('jaxon_listarPeliculasRMM();');\n\nSegún la teoría de JAXON, ¿cuál es el objetivo de utilizar el método `script()` en este contexto particular?",
        "opciones": [
            "Obligar al navegador cliente a ejecutar la función JavaScript `jaxon_listarPeliculasRMM();`, la cual desencadenará instantáneamente otra petición AJAX para refrescar la tabla de la interfaz.",
            "Registrar la función `listarPeliculasRMM` en el servidor PHP para que pueda ser visible por el router en la siguiente recarga de la aplicación web.",
            "Inyectar todo el código PHP encargado de listar películas directamente como texto plano dentro del objeto JSON de la respuesta AJAX.",
            "Ejecutar un script SQL de forma remota en la base de datos del servidor web utilizando JAXON-JS como puente."
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9 (Práctica)",
        "pregunta": "En la función `buscarPeliculasOMDBRMM` que consume una API REST externa (OMDB) utilizando Guzzle, se incluye el siguiente bloque para procesar el cuerpo de la respuesta HTTP[cite: 39, 40, 41]:\n\n$body = $res->getBody();\n$datos = json_decode($body, true);\nif (json_last_error() !== JSON_ERROR_NONE) {\n  logMessage($response, \"Error: El formato JSON recibido de OMDB no es válido.\");\n  return $response;\n}\n\nSegún los conceptos de integración y consumo de APIs de la Unidad 7, ¿para qué sirve exactamente pasar el parámetro `true` en la función `json_decode($body, true)`?",
        "opciones": [
            "Para indicar explícitamente a PHP que los datos devueltos por la API son seguros y han pasado la validación SSL.",
            "Para forzar a que la cadena JSON recibida se convierta y decodifique como un array asociativo de PHP en lugar de un objeto tipo stdClass.",
            "Para realizar un chequeo estricto que devuelva un booleano `true` si el JSON está bien formado, o `false` si tiene errores de sintaxis.",
            "Para asegurar que JAXON entienda automáticamente la respuesta y la asigne directamente al frontend sin necesidad de la clase Response."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - RAs 8 y 9 (Práctica)",
        "pregunta": "Analizando la parte final del archivo de configuración principal (`setup.docx`) de la tarea, encontramos el registro de las funciones [cite: 50]:\n\n$jaxon->register(Jaxon::CALLABLE_FUNCTION, 'registrarPeliculaRMM');\n\nSabiendo que esta función PHP espera recibir un parámetro `$formulario` que contenga todos los datos introducidos por el usuario, ¿cómo se debería recoger toda esa información desde el frontend web usando JAXON-JS para enviarla correctamente al backend? [cite: 542]",
        "opciones": [
            "Usando la llamada `jaxon_registrarPeliculaRMM(jaxon.getFormValues('id_del_formulario'));`, la cual recopila automáticamente los inputs de dicho formulario.",
            "Mediante la instrucción `jaxon_registrarPeliculaRMM(document.getElementById('id_del_formulario').innerHTML);`",
            "Pasando directamente la variable superglobal `$_POST` como argumento: `jaxon_registrarPeliculaRMM($_POST);`",
            "Usando el Request Factory desde el propio cliente web: `jaxon_registrarPeliculaRMM(rq()->call('id_del_formulario'));`"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 7 - JAXON Básico",
        "pregunta": "Al desarrollar una aplicación con la librería Jaxon, la comunicación asíncrona se gestiona mediante dos componentes fundamentales. ¿Cuáles son?",
        "opciones": [
            "Jaxon-HTML y Jaxon-CSS, encargados de la maquetación y el diseño web.",
            "Jaxon-PHP (que recibe y procesa la petición en el servidor) y Jaxon-JS (que interpreta la respuesta en el navegador).",
            "Jaxon-React y Jaxon-Angular, frameworks para el desarrollo de interfaces de usuario.",
            "Jaxon-XML y Jaxon-JSON, formatos de datos para la transferencia de información."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - JAXON Básico",
        "pregunta": "Cuando creamos una función PHP en el backend para ser invocada mediante Jaxon, ¿qué tipo de objeto debe retornar obligatoriamente la función para que la respuesta AJAX no se corrompa?",
        "opciones": [
            "Un array asociativo convertido mediante json_encode().",
            "Una cadena de texto plana (string) con las etiquetas HTML a mostrar.",
            "Un objeto instanciado de la clase Jaxon\\Response (ej: $response = jaxon()->newResponse();).",
            "Un objeto estándar nativo de PHP (stdClass) con los atributos a modificar."
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 - JAXON Básico",
        "pregunta": "¿Cuál es la instrucción correcta en el código PHP para registrar una función y permitir que Jaxon la pueda invocar de forma remota vía AJAX desde el cliente?",
        "opciones": [
            "jaxon()->register(Jaxon::CALLABLE_FUNCTION, 'nombreDeLaFuncion');",
            "jaxon()->export(Jaxon::AJAX, 'nombreDeLaFuncion');",
            "jaxon()->add('nombreDeLaFuncion');",
            "jaxon()->bind('nombreDeLaFuncion', Jaxon::JAVASCRIPT);"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 7 - JAXON Básico",
        "pregunta": "En el archivo 'backend.php' (o el script encargado de recibir las peticiones de Jaxon), ¿qué método se debe llamar para que la librería capture, procese la petición AJAX entrante y devuelva la respuesta al navegador?",
        "opciones": [
            "jaxon()->receiveData();",
            "jaxon()->processRequest();",
            "jaxon()->executeAjax();",
            "jaxon()->startSession();"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - JAXON Básico",
        "pregunta": "Si dentro de la respuesta de Jaxon-PHP necesitas cambiar el contenido (innerHTML) de un elemento HTML concreto localizado mediante su 'id', ¿qué método de la clase Response debes utilizar?",
        "opciones": [
            "$response->setHTML('id_del_elemento', 'nuevo contenido');",
            "$response->write('id_del_elemento', 'nuevo contenido');",
            "$response->assign('id_del_elemento', 'innerHTML', 'nuevo contenido');",
            "$response->updateDOM('id_del_elemento', 'nuevo contenido');"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 - JAXON Básico",
        "pregunta": "Jaxon-PHP proporciona fábricas (factories) como pm() [Parameter Factory] y rq() [Request Factory]. ¿Cuál es su utilidad principal a un nivel básico?",
        "opciones": [
            "Se utilizan para generar dinámicamente desde PHP el código JavaScript necesario para realizar llamadas remotas y recoger datos de los formularios sin tener que escribir JavaScript puro.",
            "Sirven para conectar la aplicación directamente con la base de datos MySQL eludiendo el uso de modelos PDO.",
            "Comprueban y validan de forma automática si un usuario tiene iniciada la sesión (Autenticación) en el servidor web.",
            "Permiten generar archivos CSS dinámicos desde el servidor para cambiar los colores de la aplicación."
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 7 - JAXON Básico",
        "pregunta": "Una vez que registras la función PHP `guardarDatos()` mediante Jaxon, la librería generará automáticamente una función JavaScript equivalente que el desarrollador podrá invocar desde el navegador. Por defecto, ¿cómo se llamará esa función en JavaScript?",
        "opciones": [
            "ajax_guardarDatos()",
            "jaxon_guardarDatos()",
            "call_guardarDatos()",
            "js_guardarDatos()"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - JAXON Básico",
        "pregunta": "¿Qué ocurre si en una función PHP registrada con Jaxon utilizas la instrucción `echo 'Hola Mundo';` en lugar de utilizar los métodos de la clase Response?",
        "opciones": [
            "Se mostrará una ventana emergente (alert) nativa del navegador con el mensaje 'Hola Mundo'.",
            "El texto 'Hola Mundo' se escribirá correctamente en la parte superior del documento HTML visualizado.",
            "La estructura del mensaje JSON de Jaxon se corromperá, el cliente Jaxon-JS no podrá interpretar la respuesta adecuadamente y fallará la actualización en el navegador.",
            "Se creará automáticamente una capa transparente sobre el mapa (Leaflet) para mostrar el mensaje flotante."
        ],
        "correcta": 2
    },
     {
        "tema": "Unidad 7 - JAXON Sintaxis Básica",
        "pregunta": "En el archivo principal donde configuras la vista de tu aplicación web (frontend), ¿cómo le indicas a JAXON cuál es la ruta del archivo PHP (el backend) que se encargará de recibir y procesar las peticiones AJAX?",
        "opciones": [
            "jaxon()->setOption('core.request.uri', 'backend.php');",
            "jaxon()->setUrl('backend.php');",
            "A través del atributo 'action' de la etiqueta <form action='backend.php'>.",
            "jaxon()->register(Jaxon::BACKEND_URL, 'backend.php');"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 7 - JAXON Sintaxis Básica",
        "pregunta": "A la hora de incluir JAXON en nuestra página web, necesitamos imprimir varias variables en el HTML. ¿Qué método nos devuelve el código JavaScript generado automáticamente con las funciones PHP que hemos registrado para poder invocarlas desde el cliente?",
        "opciones": [
            "jaxon()->getJs()",
            "jaxon()->getFunctions()",
            "jaxon()->getScript()",
            "jaxon()->exportJavascript()"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 7 - JAXON Sintaxis Básica",
        "pregunta": "Dado el siguiente código de un archivo 'backend.php' encargado de despachar peticiones AJAX, ¿qué método es el adecuado para comprobar si realmente hay una petición JAXON entrante lista para ser procesada?\n\nif ( /* LÍNEA A COMPLETAR */ ) {\n  jaxon()->processRequest();\n}",
        "opciones": [
            "jaxon()->isAjaxRequest()",
            "jaxon()->canProcessRequest()",
            "jaxon()->hasData()",
            "jaxon()->checkRequest()"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - JAXON Sintaxis Básica",
        "pregunta": "Dentro de una función PHP registrada con JAXON, ¿qué instrucción exacta debemos usar sobre el objeto de respuesta para que el navegador del usuario muestre una ventana emergente nativa con el texto 'Operación completada'?",
        "opciones": [
            "$response->window('Operación completada');",
            "$response->popup('Operación completada');",
            "echo \"<script>alert('Operación completada');</script>\";",
            "$response->alert('Operación completada');"
        ],
        "correcta": 3
    },
    {
        "tema": "Unidad 7 - JAXON Sintaxis Básica",
        "pregunta": "Imagina que registras una función en JAXON-PHP para ser invocada vía AJAX. En lugar de instanciar y retornar un objeto de la clase Response, decides mostrar un mensaje directamente usando la instrucción `echo 'Hola Mundo';`. ¿Qué ocurrirá en la aplicación?",
        "opciones": [
            "El mensaje 'Hola Mundo' se mostrará sin problemas en la parte superior del documento HTML.",
            "El código JSON de la respuesta de Jaxon se corromperá o estropeará, haciendo que el cliente web no pueda actualizar la interfaz.",
            "JAXON detectará automáticamente el 'echo' y lo convertirá en un objeto Response de forma interna.",
            "Aparecerá un mensaje de alerta nativo de Javascript en el navegador con el texto 'Hola Mundo'."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - JAXON Sintaxis Básica",
        "pregunta": "Dada la siguiente función registrada en el backend, ¿qué modificará exactamente en el documento HTML del cliente cuando se reciba la respuesta asíncrona?\n\nfunction actualizarCaja() {\n  $response = jaxon()->newResponse();\n  $response->assign('caja', 'innerHTML', 'Actualizado');\n  return $response;\n}",
        "opciones": [
            "Creará un nuevo elemento <div> con el atributo id='caja' al final del documento.",
            "Cambiará el contenido interno (innerHTML) del elemento que tenga el atributo id='caja', sustituyéndolo por 'Actualizado'.",
            "Buscará todos los elementos que tengan la clase css 'caja' y los actualizará.",
            "Modificará el valor (value) de un formulario cuyo nombre (name) sea 'caja'."
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 7 - JAXON Sintaxis Básica",
        "pregunta": "Haciendo uso de las fábricas (Request Factory y Parameter Factory) de JAXON-PHP dentro de la vista HTML, ¿cuál de las siguientes opciones es la sintaxis correcta para invocar a la función registrada 'borrarnumero' enviándole el valor introducido por el usuario en el campo `<input id='numeroABorrar'>`?",
        "opciones": [
            "<?=rq()->call('borrarnumero', pm()->input('numeroABorrar'))?>",
            "<?=jaxon->call('borrarnumero', getElementById('numeroABorrar'))?>",
            "<?=jaxon_borrarnumero(pm()->val('numeroABorrar'))?>",
            "<?=rq()->invoke('borrarnumero', jaxon.$('numeroABorrar').value)?>"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Según el archivo de configuración de tu tarea, ¿qué fichero se utiliza en Laravel para definir las credenciales de acceso a la base de datos (DB_DATABASE, DB_USERNAME, etc.)?",
        "opciones": [
            "config.php",
            "database.php",
            ".env",
            "db_config.json"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En el archivo .env de tu tarea aparece la línea 'DB_CONNECTION=mysql'. ¿Qué indica este parámetro?",
        "opciones": [
            "El nombre de la base de datos a la que conectarse.",
            "El sistema gestor de bases de datos que utilizará Laravel.",
            "La contraseña del usuario de MySQL.",
            "El nombre de la tabla principal de la aplicación."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Teniendo en cuenta lo dicho por el profesor sobre las migraciones, ¿cuál es el propósito principal del método up() en el archivo de migración de 'peliculas'?",
        "opciones": [
            "Rellenar la tabla 'peliculas' con datos de prueba.",
            "Eliminar la tabla 'peliculas' si ya existe.",
            "Definir la estructura, campos y relaciones de la tabla 'peliculas' en la base de datos.",
            "Validar los datos del formulario de películas."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En la migración de 'criticas' de la tarea se usa '$table->timestamps();'. ¿Qué efecto tiene esta instrucción en la base de datos?",
        "opciones": [
            "Crea automáticamente los campos 'created_at' y 'updated_at'.",
            "Crea un campo para guardar la duración de la película en minutos.",
            "Guarda la fecha exacta en la que se ejecuta la migración.",
            "Crea un campo id autoincremental."
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En el archivo de migración de criticas vemos la línea: '$table->foreignId('pelicula')->constrained('peliculas')'. ¿Qué hace esta línea?",
        "opciones": [
            "Crea una nueva tabla llamada 'pelicula'.",
            "Establece una clave primaria compuesta en la tabla críticas.",
            "Genera un campo 'pelicula' que actúa como clave foránea vinculada a la tabla 'peliculas'.",
            "Elimina la restricción de clave foránea de la tabla películas."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "¿Qué comando de Artisan (mencionado en el temario) se utiliza para aplicar en la base de datos los cambios definidos en los archivos de migración?",
        "opciones": [
            "php artisan make:migration",
            "php artisan db:seed",
            "php artisan migrate",
            "php artisan serve"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Según la videoconferencia, a diferencia de las migraciones, ¿cuál es la finalidad del archivo 'RMMSeeder.php' en tu tarea?",
        "opciones": [
            "Definir las rutas de acceso públicas y privadas.",
            "Poblar o rellenar las tablas de la base de datos con datos iniciales (usuarios, géneros y películas).",
            "Crear las tablas vacías en la base de datos MySQL.",
            "Validar las críticas que insertan los usuarios."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En 'RMMSeeder.php' usas la instrucción 'Hash::make('RMM1')'. ¿Para qué sirve este código?",
        "opciones": [
            "Para generar un token CSRF para el formulario.",
            "Para encriptar la contraseña del usuario antes de guardarla en la base de datos.",
            "Para validar que el email sea único.",
            "Para crear un nuevo id aleatorio."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "El profesor destacó el uso de Eloquent. ¿Qué es Eloquent en Laravel?",
        "opciones": [
            "El sistema de enrutamiento web.",
            "El motor de plantillas para generar el HTML.",
            "El ORM que permite interactuar con la base de datos usando clases y objetos PHP.",
            "Una herramienta para encriptar contraseñas."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En el modelo 'GeneroRMM.php', tienes la instrucción 'protected $table = 'generos';'. ¿Por qué se utiliza esto?",
        "opciones": [
            "Para indicar los campos que se pueden asignar masivamente.",
            "Para especificar el nombre exacto de la tabla en la base de datos si no sigue la convención automática de Laravel.",
            "Para evitar que la tabla pueda ser borrada por error.",
            "Para ocultar la tabla en las consultas."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Si observamos el modelo 'PeliculaRMM.php', vemos 'protected $fillable = [...]'. ¿Cuál de las siguientes afirmaciones es la que explicó el profesor sobre esta variable?",
        "opciones": [
            "Contiene los campos de la tabla que NO pueden rellenarse de forma masiva.",
            "Es un array con los campos obligatorios del formulario.",
            "Contiene los campos que Laravel rellenará automáticamente (como timestamps).",
            "Es un array con los campos de la tabla que SÍ se pueden rellenar de forma masiva."
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En el modelo 'PeliculaRMM.php', defines la función 'criticas(): HasMany'. Esto establece que una película...",
        "opciones": [
            "Pertenece a una única crítica.",
            "Tiene muchas críticas (relación 1:N).",
            "Pertenece a muchos géneros (relación N:M).",
            "No puede tener críticas asociadas."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En el modelo 'CriticaRMM.php', usas el método 'belongsTo(PeliculaRMM::class, 'pelicula')'. Según la teoría de Eloquent, esto significa que:",
        "opciones": [
            "Una crítica pertenece a una única película (relación N:1 o inversa de 1:N).",
            "Una crítica tiene muchas películas.",
            "La tabla críticas se va a unir masivamente con la tabla películas.",
            "La crítica será borrada automáticamente si la película no existe."
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Si en el controlador 'CriticaControllerRMM.php' utilizamos 'PeliculaRMM::find($pelicula_id)', ¿qué hace exactamente este código?",
        "opciones": [
            "Borra la película con ese ID.",
            "Busca todas las películas que contengan ese texto en el título.",
            "Busca y devuelve una única instancia del modelo PeliculaRMM cuyo ID coincida con el proporcionado.",
            "Genera una nueva película con ese ID."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En la creación de la crítica (CriticaControllerRMM), se hace '$critica = new CriticaRMM();' y luego '$critica->save();'. ¿Para qué sirve el método 'save()'?",
        "opciones": [
            "Para borrar la crítica anterior.",
            "Para guardar la nueva instancia (objeto) como un registro en la tabla de la base de datos.",
            "Para validar los datos del objeto.",
            "Para descargar un archivo JSON con la crítica."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Para eliminar una crítica en el método 'borrarCriticaRMM', ¿qué método de Eloquent se invoca sobre el objeto '$critica' recuperado?",
        "opciones": [
            "$critica->remove();",
            "$critica->drop();",
            "$critica->delete();",
            "$critica->destroy();"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "El profesor recalcó el flujo de un controlador. Cuando se reciben datos por POST en 'crearNuevaCriticaRMM', ¿mediante qué objeto se capturan los datos enviados en el formulario?",
        "opciones": [
            "El objeto Session",
            "El objeto Model",
            "El objeto Request ($request)",
            "El objeto Response"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En 'CriticaControllerRMM.php', encontramos el bloque '$request->validate([...])'. ¿Cuál es su objetivo principal?",
        "opciones": [
            "Verificar si el usuario tiene sesión iniciada.",
            "Comprobar que los datos del formulario cumplen con unas reglas específicas antes de procesarlos.",
            "Modificar los datos del formulario para evitar inyección SQL.",
            "Guardar directamente los datos en la base de datos."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Dentro de la validación del controlador tienes la regla 'required|integer|between:1,5' para la valoración. ¿Qué significa 'required'?",
        "opciones": [
            "Que el campo debe ser un número entero.",
            "Que el campo puede dejarse en blanco.",
            "Que el campo es obligatorio y debe enviarse en la petición.",
            "Que el valor debe estar entre 1 y 5."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Si los datos enviados en el formulario no pasan la validación '$request->validate()', ¿qué comportamiento automático realiza Laravel?",
        "opciones": [
            "Muestra una pantalla en blanco con un error 500.",
            "Guarda los datos igualmente pero con valores nulos.",
            "Redirige al usuario de vuelta a la página anterior (el formulario) llevando los mensajes de error.",
            "Cierra la sesión del usuario por seguridad."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "¿Cómo recuperas en el controlador el valor que el usuario introdujo en el campo 'comentario' del formulario?",
        "opciones": [
            "$_POST['comentario']",
            "$request->input('comentario')",
            "$comentario->get()",
            "Auth::comentario()"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En los controladores usas 'Auth::id()'. ¿Para qué sirve esta instrucción en la lógica de tu aplicación?",
        "opciones": [
            "Genera un nuevo ID para un usuario aleatorio.",
            "Obtiene el ID del usuario que tiene la sesión iniciada actualmente.",
            "Comprueba si el ID introducido en el formulario es válido.",
            "Autentica a un usuario usando un ID en lugar del correo."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Para devolver una vista al usuario desde el controlador, ¿qué sintaxis utilizas en tu código?",
        "opciones": [
            "return HTML('nombrevista');",
            "echo view('nombrevista');",
            "return view('nombrevista');",
            "redirect('nombrevista');"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "El profesor incidió en saber pasar variables a la vista. En 'CriticaControllerRMM', usas: return view('mensaje', ['mensaje' => \"Texto...\"]); ¿Qué hace el segundo parámetro?",
        "opciones": [
            "Define el nombre del archivo de la vista.",
            "Es un array que pasa datos desde el controlador para que puedan ser usados dentro de la plantilla Blade.",
            "Valida que el mensaje sea correcto.",
            "Fuerza a la vista a mostrar un error."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Respecto a las rutas de Laravel, si quisieras definir una ruta para responder al envío de un formulario de creación de críticas, ¿qué verbo HTTP debes usar en web.php?",
        "opciones": [
            "Route::get",
            "Route::post",
            "Route::put",
            "Route::delete"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Dada la ruta: Route::get('/mis-criticas', [CriticaControllerRMM::class, 'misCriticas'])->name('zonaprivada'); ¿Para qué sirve el método ->name('zonaprivada')?",
        "opciones": [
            "Para asignar un nombre al controlador.",
            "Para validar que solo los usuarios privados entren.",
            "Para darle un alias o nombre a la ruta, permitiendo referenciarla fácilmente en las vistas y redirecciones.",
            "Para cambiar el título de la página en el navegador."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En las vistas usas la directiva '@extends('layouts.publico')'. Según el repaso del profesor sobre Blade, ¿qué función tiene esta directiva?",
        "opciones": [
            "Importa un archivo CSS.",
            "Indica que la vista actual hereda la estructura de la plantilla maestra 'publico' dentro de la carpeta 'layouts'.",
            "Crea una nueva plantilla maestra.",
            "Incluye un fragmento de código repetitivo."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Al heredar de una plantilla, utilizas '@section('contenido')'. ¿Cuál de las siguientes afirmaciones es cierta?",
        "opciones": [
            "Debe cerrarse obligatoriamente con @endsection.",
            "Sustituye la etiqueta <body> del HTML.",
            "Se usa para definir variables PHP en la vista.",
            "Termina la ejecución de la vista."
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En tu plantilla base 'layouts.publico' (archivo layouts/publico.blade.php), usas la directiva '@yield('contenido')'. ¿Cuál es su finalidad?",
        "opciones": [
            "Detener la carga de la página si no hay contenido.",
            "Mostrar el contenido literal de la palabra 'contenido'.",
            "Definir un hueco o marcador en la plantilla base donde se inyectará el contenido de las vistas hijas (las que usan @section).",
            "Crear un bucle para recorrer contenidos."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Para imprimir el título de una película en tu vista Blade, usas el código {{ $pelicula->titulo }}. ¿A qué equivale esto en PHP puro?",
        "opciones": [
            "<?php print_r($pelicula->titulo); ?>",
            "<?php echo htmlspecialchars($pelicula->titulo); ?>",
            "<?php return $pelicula->titulo; ?>",
            "<?php var_dump($pelicula->titulo); ?>"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En la vista 'principal.blade.php' usas un bucle para recorrer la lista de películas. ¿Cuál es la sintaxis correcta en Blade?",
        "opciones": [
            "@for ($peliculasRMM as $pelicula)",
            "<?php foreach($peliculasRMM as $pelicula): ?>",
            "@foreach ($peliculasRMM as $pelicula)",
            "@loop ($peliculasRMM)"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Para verificar condiciones en Blade usas directivas de control. ¿Cómo inicias una condición que verifique si la película tiene críticas?",
        "opciones": [
            "@check($pelicula->criticas_count > 0)",
            "@if($pelicula->criticas_count > 0)",
            "{{ if($pelicula->criticas_count > 0) }}",
            "<?php if($pelicula->criticas_count > 0) ?>"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Para generar un enlace HTML hacia una ruta con nombre desde una vista Blade, como el botón 'Volver al inicio', ¿qué sintaxis has usado?",
        "opciones": [
            "<a href=\"@url('zonapublica')\">",
            "<a href=\"{{ link('zonapublica') }}\">",
            "<a href=\"{{ route('zonapublica') }}\">",
            "<a href=\"{{ path('zonapublica') }}\">"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Dentro del formulario de 'formnuevacriticaRMM.blade.php' incluyes la directiva '@csrf'. ¿Por qué es fundamental que esté ahí?",
        "opciones": [
            "Porque cifra la contraseña del usuario.",
            "Porque genera un token de seguridad oculto que Laravel exige para procesar peticiones POST y proteger contra falsificación de peticiones.",
            "Porque sin ella el navegador no sabe que es un formulario.",
            "Porque da estilo CSS al formulario automáticamente."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En la vista Blade, para mostrar si un usuario está autenticado y decidir si mostrar el botón 'Cerrar sesión' o 'Iniciar sesión', ¿qué directivas usas?",
        "opciones": [
            "@user y @enduser",
            "@auth y @endauth (o @else)",
            "@login y @endlogin",
            "@session y @endsession"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Si en un formulario de Blade quieres mantener el valor que el usuario escribió en un campo de texto tras un error de validación, ¿qué función de ayuda utilizas (como se ve en tu textarea)?",
        "opciones": [
            "{{ previous('comentario') }}",
            "{{ keep('comentario') }}",
            "{{ old('comentario') }}",
            "{{ last('comentario') }}"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En tu controlador 'LoginController', tras autenticar, usas '$request->session()->regenerate();'. ¿Cuál es la razón de seguridad para hacer esto?",
        "opciones": [
            "Para vaciar la cesta de la compra.",
            "Para renovar el identificador de la sesión y evitar ataques de fijación de sesión (session fixation).",
            "Para guardar la contraseña en texto plano en la sesión.",
            "Para cerrar la sesión anterior automáticamente."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "El controlador 'LoginController' usa el método 'Auth::attempt($credentials)'. ¿Qué comprueba exactamente este método?",
        "opciones": [
            "Comprueba si el usuario tiene permiso de administrador.",
            "Busca al usuario por su email y verifica si el password desencriptado coincide con la base de datos.",
            "Inicia sesión forzosamente sin pedir contraseña.",
            "Recupera la contraseña si se ha olvidado."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En la vista 'formnuevacriticaRMM.blade.php' muestras los errores de validación. La directiva que evalúa si existe algún error es:",
        "opciones": [
            "@if ($errors->any())",
            "@if ($errors->exist())",
            "@if (hasErrors())",
            "@if ($validation->fails())"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Cuando quieres pasar un parámetro obligatorio en la URL de una ruta para editar o borrar un elemento concreto (por ejemplo la crítica), ¿cómo se define en web.php (según la teoría)?",
        "opciones": [
            "Route::get('/critica/?id', ...)",
            "Route::get('/critica/{id}', ...)",
            "Route::get('/critica/$id', ...)",
            "Route::get('/critica/id', ...)"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En el modelo 'User', la función 'criticas()' retorna '$this->hasMany(CriticaRMM::class, 'usuario')'. Al llamarla desde la vista (ej. {{ Auth::user()->criticas }}), ¿qué tipo de dato devuelve Laravel?",
        "opciones": [
            "Un único objeto CriticaRMM.",
            "Un array de strings con los comentarios.",
            "Una Colección (Collection) de objetos CriticaRMM.",
            "Un error de sintaxis."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Imagina que tienes una colección de películas. Para obtener la propiedad 'titulo' del objeto relacionado 'genero', ¿cuál es la sintaxis que empleas en tu vista Blade?",
        "opciones": [
            "{{ $pelicula->genero->nombre }} (asumiendo que genero es la función de relación)",
            "{{ $pelicula['genero']['nombre'] }}",
            "{{ $pelicula::genero::nombre }}",
            "{{ $pelicula->get('genero')->nombre }}"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Al hacer 'Auth::logout();' en el controlador de Login, ¿qué proceso interno ocurre en Laravel?",
        "opciones": [
            "Se borra la cuenta del usuario de la base de datos.",
            "Se cierra la sesión actual en el gestor de autenticación (guard).",
            "Se cambia la contraseña a nula.",
            "Se redirige forzosamente a la página de Google."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En las rutas se puede aplicar un filtro o 'middleware' para restringir el acceso a usuarios no identificados. Según la teoría, ¿cómo se llamaría este middleware de autenticación por defecto?",
        "opciones": [
            "->middleware('guest')",
            "->middleware('auth')",
            "->middleware('login')",
            "->middleware('secure')"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "En Eloquent, si tienes el modelo 'PeliculaRMM' y ejecutas 'PeliculaRMM::all()', ¿qué estás haciendo?",
        "opciones": [
            "Borrando todas las películas de la tabla.",
            "Recuperando todos los registros de la tabla películas como una colección de objetos.",
            "Actualizando masivamente todas las películas.",
            "Generando un archivo JSON con todas las películas."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Al validar el formulario en el controlador, tienes reglas concatenadas como 'required|string|max:255'. ¿Qué carácter se usa para separar múltiples reglas de validación en una sola cadena?",
        "opciones": [
            "Coma (,)",
            "Punto y coma (;)",
            "Barra vertical o pipe (|)",
            "Espacio en blanco"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Si un checkbox en HTML no está marcado, no se envía en la petición. En tu método de borrado validas si el usuario marcó la confirmación mediante:",
        "opciones": [
            "if (!$request->has('confirmacion'))",
            "if ($request->empty('confirmacion'))",
            "if (!isset($_POST['confirmacion']))",
            "if ($request->input('confirmacion') == false)"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Teniendo en cuenta que el profesor recomienda identificar las acciones de la tarea, ¿dónde colocarías habitualmente el código PHP que responde a una ruta y se comunica con Eloquent?",
        "opciones": [
            "En el archivo .env",
            "En la plantilla base de Blade (layouts)",
            "En una clase Controlador (app/Http/Controllers/)",
            "En el archivo de migración"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "Si quieres devolver una redirección después de guardar una película, en lugar de devolver la vista directamente, el código en el controlador será parecido a:",
        "opciones": [
            "return view()->route('mis-peliculas');",
            "return redirect()->route('mis-peliculas');",
            "redirect view('mis-peliculas');",
            "header('Location: mis-peliculas');"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5",
        "pregunta": "¿Qué directiva de Blade usarías si quisieras incluir el contenido de una sub-vista pequeña (ej. un menú) dentro de una plantilla más grande sin heredar de ella?",
        "opciones": [
            "@include('nombre_subvista')",
            "@require('nombre_subvista')",
            "@insert('nombre_subvista')",
            "@yield('nombre_subvista')"
        ],
        "correcta": 0
    },
    {
    "tema": "repaso tarea 5",
    "pregunta": "¿En qué archivo de un proyecto Laravel se configuran los parámetros de conexión a la base de datos (DB_DATABASE, DB_USERNAME, etc.)?",
    "opciones": [
      "En el archivo config.php",
      "En el archivo database.php",
      "En el archivo .env",
      "En el archivo composer.json"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Cuál es el propósito principal de una 'migración' en Laravel según lo explicado por el profesor?",
    "opciones": [
      "Insertar datos de prueba masivos en la base de datos.",
      "Crear, modificar o eliminar la estructura de las tablas de la base de datos.",
      "Mapear los objetos de PHP a código JavaScript.",
      "Gestionar las rutas web del proyecto."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Según la videoconferencia, ¿cuál es el propósito de un 'Seeder' (como RMMSeeder)?",
    "opciones": [
      "Poblar o rellenar las tablas de la base de datos con datos iniciales o de prueba.",
      "Crear la estructura de la base de datos.",
      "Validar los formularios del usuario.",
      "Enrutar las peticiones GET y POST."
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Qué comando de Artisan utilizamos para ejecutar las migraciones pendientes y crear las tablas en la base de datos?",
    "opciones": [
      "php artisan make:migration",
      "php artisan migrate",
      "php artisan db:seed",
      "php artisan serve"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Si queremos borrar todas las tablas existentes y volver a ejecutar todas las migraciones desde cero, ¿qué comando usamos?",
    "opciones": [
      "php artisan migrate:fresh",
      "php artisan migrate:rollback",
      "php artisan make:model",
      "php artisan db:clear"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "En un archivo de migración, ¿qué métodos principales encontramos para aplicar y deshacer cambios en la base de datos?",
    "opciones": [
      "start() y stop()",
      "create() y destroy()",
      "up() y down()",
      "run() y rollback()"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "En la migración de 'peliculas', ¿qué hace la instrucción $table->timestamps();?",
    "opciones": [
      "Guarda la duración de la película en formato de tiempo.",
      "Genera automáticamente las columnas created_at y updated_at.",
      "Establece un límite de tiempo para la sesión del usuario.",
      "Crea un campo para el año de publicación."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Qué ORM utiliza Laravel por defecto para interactuar con la base de datos mediante objetos?",
    "opciones": [
      "Hibernate",
      "Doctrine",
      "Query Builder",
      "Eloquent"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Si tenemos el modelo PeliculaRMM, ¿para qué se utiliza la propiedad protegida $table dentro de la clase?",
    "opciones": [
      "Para indicar el nombre exacto de la tabla en la base de datos si no sigue la convención por defecto.",
      "Para definir las columnas que se muestran en la vista Blade.",
      "Para listar los campos que son obligatorios en los formularios.",
      "Para establecer la clave foránea del modelo."
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "En Eloquent, ¿qué relación se define utilizando el método return $this->hasMany(...);?",
    "opciones": [
      "Una relación de Uno a Uno.",
      "Una relación de Varios a Varios.",
      "Una relación de Uno a Varios (este modelo tiene muchos del otro).",
      "Una relación inversa de Varios a Uno."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "En el modelo CriticaRMM, vemos la función public function usuarioAsociado(): BelongsTo. ¿Qué significa esto?",
    "opciones": [
      "Que una crítica tiene muchos usuarios.",
      "Que una crítica pertenece a un único usuario.",
      "Que una crítica puede ser borrada por cualquier usuario.",
      "Que un usuario tiene muchas críticas."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Dado el código: Route::get('/mis-criticas', [CriticaControllerRMM::class, 'mostrarCriticasUsuario'])->name('zonaprivada'); ¿Qué hace el método name('zonaprivada')?",
    "opciones": [
      "Crea una variable llamada zonaprivada.",
      "Aplica un middleware de autenticación a la ruta.",
      "Le asigna un alias a la ruta para poder referenciarla fácilmente en vistas y controladores.",
      "Llama a la vista zonaprivada.blade.php directamente."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Cómo redirigimos en un controlador a una ruta que hemos nombrado con ->name('zonapublica')?",
    "opciones": [
      "return redirect()->name('zonapublica');",
      "return redirect()->route('zonapublica');",
      "return view('zonapublica');",
      "return route('zonapublica');"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Dentro de un controlador, ¿qué método usamos para comprobar si los datos que llegan por un formulario POST cumplen con las reglas establecidas (ej. required, max:255)?",
    "opciones": [
      "$request->validate()",
      "Auth::check()",
      "$request->verify()",
      "Validator::make()"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Qué ocurre por defecto en Laravel si la validación $request->validate() falla?",
    "opciones": [
      "Se detiene la ejecución y muestra una pantalla de error 500.",
      "Ignora los campos erróneos y guarda el resto en la base de datos.",
      "Redirige automáticamente de vuelta a la página anterior (el formulario) llevando los mensajes de error.",
      "Ejecuta el método down() de las migraciones."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "En el controlador, utilizamos Auth::id(). ¿Para qué sirve esta instrucción?",
    "opciones": [
      "Para generar un nuevo identificador aleatorio de sesión.",
      "Para obtener el ID de la película que se está criticando.",
      "Para obtener el identificador (ID) del usuario que ha iniciado sesión actualmente.",
      "Para validar que un identificador es un número entero."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Si queremos saber si un usuario está autenticado (logueado) o es un invitado, ¿qué instrucción usamos en el controlador?",
    "opciones": [
      "Auth::id()",
      "Auth::user()",
      "Auth::check()",
      "Auth::logout()"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Cuál es el sistema de plantillas que utiliza Laravel para las vistas?",
    "opciones": [
      "Smarty",
      "Twig",
      "Blade",
      "JSX"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "En una vista Blade, ¿qué directiva se utiliza para heredar de una plantilla principal (layout)?",
    "opciones": [
      "@extends",
      "@include",
      "@section",
      "@yield"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Para definir el contenido que se insertará dentro de un @yield('contenido') del layout principal, ¿qué usamos en la vista hija?",
    "opciones": [
      "@push('contenido') ... @endpush",
      "@section('contenido') ... @endsection",
      "@content('contenido') ... @endcontent",
      "@insert('contenido') ... @endinsert"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "En una plantilla Blade, si quiero mostrar el contenido de una variable llamada $pelicula->titulo escapando ataques XSS, ¿qué sintaxis utilizo?",
    "opciones": [
      "<?php echo $pelicula->titulo; ?>",
      "{$pelicula->titulo}",
      "{{ $pelicula->titulo }}",
      "{!! $pelicula->titulo !!}"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Si un formulario en Blade envía datos mediante POST, PUT o DELETE, ¿qué directiva es OBLIGATORIA incluir por motivos de seguridad (evitar ataques Cross-Site Request Forgery)?",
    "opciones": [
      "@auth",
      "@csrf",
      "@secure",
      "@method('POST')"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Qué hace la directiva @auth en una plantilla Blade?",
    "opciones": [
      "Cierra la sesión del usuario actual.",
      "Valida que el formulario enviado es seguro.",
      "Verifica los permisos de administrador en la base de datos.",
      "Muestra el bloque de código HTML contenido dentro solo si el usuario ha iniciado sesión."
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Qué directiva Blade se utiliza como alternativa a @auth para mostrar contenido ÚNICAMENTE a los usuarios no logueados (invitados)?",
    "opciones": [
      "@guest",
      "@else",
      "@unauth",
      "@if(!Auth::check())"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "En el archivo web.php se ve: Route::post('/critica/borrar', [CriticaControllerRMM::class, 'borrarCriticaRMM']); ¿Qué indica esta línea?",
    "opciones": [
      "Define una ruta que responde al método GET ejecutando la función borrarCriticaRMM.",
      "Define una ruta que responde al método POST ejecutando el método borrarCriticaRMM del controlador.",
      "Crea una vista llamada borrarCriticaRMM.",
      "Borra una crítica automáticamente cuando se visita esa URL."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Qué método del objeto $request se utiliza para recuperar un dato enviado por formulario (por ejemplo, el campo 'comentario')?",
    "opciones": [
      "$request->get('comentario')",
      "$request->input('comentario')",
      "$request->post('comentario')",
      "Ambas A y B son válidas en la práctica de Laravel, aunque input() es más específico."
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Para instanciar y guardar una nueva crítica en Eloquent, el orden correcto de las sentencias es:",
    "opciones": [
      "$critica = new CriticaRMM(); $critica->comentario = '...'; $critica->save();",
      "$critica = CriticaRMM::save(); $critica->comentario = '...';",
      "CriticaRMM::new()->save('comentario' => '...');",
      "$critica = new CriticaRMM(); $critica->save(); $critica->comentario = '...';"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "En el controlador, vemos: CriticaRMM::where('usuario', Auth::id())->count(); ¿Qué hace esta línea?",
    "opciones": [
      "Cuenta cuántos usuarios están conectados actualmente.",
      "Devuelve el número de críticas que ha hecho el usuario logueado.",
      "Borra las críticas del usuario logueado.",
      "Cuenta los campos de la tabla críticas."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Si quiero buscar una crítica por su Clave Primaria (id) usando Eloquent, ¿qué método debo utilizar?",
    "opciones": [
      "CriticaRMM::search($id);",
      "CriticaRMM::get($id);",
      "CriticaRMM::find($id);",
      "CriticaRMM::where('id', $id)->all();"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Para qué sirve el método $critica->delete(); ejecutado sobre un modelo de Eloquent?",
    "opciones": [
      "Vacía todos los campos del objeto pero lo mantiene en la base de datos.",
      "Borra la tabla entera de la base de datos.",
      "Elimina el registro de esa crítica concreta de la base de datos.",
      "Cierra la sesión del usuario que hizo la crítica."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "En un controlador, la sentencia return view('errores', ['mensaje' => 'Error de seguridad']); tiene como objetivo:",
    "opciones": [
      "Redirigir a la ruta /errores.",
      "Generar un log de error en la consola.",
      "Llamar a la vista errores.blade.php pasándole la variable $mensaje con ese texto.",
      "Mostrar un pop-up de JavaScript en el navegador."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "En la migración de 'criticas', se observa $table->foreignId('usuario')->constrained('users')->onDelete('cascade'); ¿Qué significa onDelete('cascade')?",
    "opciones": [
      "Que si se borra la tabla críticas, se borra el usuario.",
      "Que si se borra el usuario en la tabla users, se borrarán automáticamente todas sus críticas.",
      "Que no se puede borrar el usuario si tiene críticas.",
      "Que las críticas se borrarán solas al cerrar sesión."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Cómo se escribe un bloque 'if-else' en una plantilla Blade?",
    "opciones": [
      "<?php if($condicion): ?> ... <?php else: ?> ... <?php endif; ?>",
      "{if $condicion} ... {else} ... {/if}",
      "@if($condicion) ... @else ... @endif",
      "{{ if($condicion) }} ... {{ else }} ... {{ endif }}"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Dentro del array de reglas de validación vemos: 'valoracion' => 'required|integer|between:1,5'. ¿Qué comprueba 'between:1,5'?",
    "opciones": [
      "Que el string tenga entre 1 y 5 caracteres.",
      "Que el número enviado esté comprendido entre 1 y 5 (ambos inclusive).",
      "Que el usuario haya iniciado sesión entre 1 y 5 veces.",
      "Que la película seleccionada tenga ID 1 o 5."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Cómo se indica en Laravel que un método del controlador espere recibir la instancia de la Request?",
    "opciones": [
      "Pasando $this->request como parámetro.",
      "Usando Inyección de Dependencias, es decir, definiendo public function metodo(Request $request).",
      "Llamando a $_POST o $_GET globalmente.",
      "Heredando de la clase Request."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Cuál es la función del comando php artisan make:controller MiControlador?",
    "opciones": [
      "Crear un archivo de configuración en /config.",
      "Crear una clase en el directorio app/Http/Controllers/ que manejará la lógica de la aplicación.",
      "Crear una vista llamada MiControlador.blade.php.",
      "Definir las rutas automáticamente en web.php."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Según los contenidos, el patrón que sigue Laravel para separar la lógica, los datos y las vistas es:",
    "opciones": [
      "Modelo-Vista-Controlador (MVC).",
      "Front Controller.",
      "Patrón Observer.",
      "Modelo-Plantilla-Ruta."
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Al intentar autenticar a un usuario, utilizamos Auth::attempt($credentials). ¿Qué devuelve este método?",
    "opciones": [
      "Un objeto con los datos del usuario si tiene éxito, y un error si falla.",
      "Un valor booleano (true si las credenciales son correctas y se inicia la sesión, false en caso contrario).",
      "La vista del área privada.",
      "El token CSRF de la sesión."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Después de un inicio de sesión correcto, el controlador ejecuta: $request->session()->regenerate(); ¿Para qué sirve esto?",
    "opciones": [
      "Para vaciar el carrito de compras.",
      "Para renovar el ID de la sesión y prevenir ataques de fijación de sesión (session hijacking/fixation).",
      "Para borrar la caché de las vistas Blade.",
      "Para regenerar la contraseña del usuario en la base de datos."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Qué ocurre cuando llamamos a Auth::logout()?",
    "opciones": [
      "Se elimina el usuario de la base de datos.",
      "Se bloquea la cuenta del usuario.",
      "Se cierra la sesión del usuario autenticado actual.",
      "Se borran todas las críticas hechas por ese usuario."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Qué kit de inicio oficial de Laravel se ha utilizado para dotar al proyecto rápidamente de registro e inicio de sesión?",
    "opciones": [
      "Laravel Forge",
      "Laravel Envoyer",
      "Laravel Breeze",
      "Laravel Passport"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Para recorrer un array de elementos (como películas) en una vista Blade, la sintaxis correcta es:",
    "opciones": [
      "<?php foreach($peliculas as $pelicula) { ... } ?>",
      "@for($peliculas as $pelicula) ... @endfor",
      "@foreach($peliculas as $pelicula) ... @endforeach",
      "{{ foreach($peliculas as $pelicula) }} ... {{ endforeach }}"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Si en la base de datos tenemos una tabla 'generos', por convención en inglés (y asumiendo que Eloquent pluraliza), ¿cómo buscará el modelo 'Genero' la tabla por defecto si no le indicamos la propiedad $table?",
    "opciones": [
      "generos",
      "generoes",
      "generos_table",
      "genero"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "En Eloquent, el método all(), por ejemplo PeliculaRMM::all();, ¿qué resultado produce?",
    "opciones": [
      "Borra todas las películas.",
      "Recupera una colección (Collection) con todos los registros de la tabla películas.",
      "Busca la primera película que coincida con 'all'.",
      "Devuelve un array asociativo vacío."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Para qué sirve el método ->first() al final de una consulta Eloquent, como en Genero::where('nombre', 'animación')->first();?",
    "opciones": [
      "Ordena los resultados alfabéticamente.",
      "Devuelve la primera coincidencia que encuentre en la base de datos como un único objeto del modelo.",
      "Borra el primer registro de la tabla.",
      "Devuelve el ID de la primera fila."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "En el código de la Tarea 5, vimos cómo se define una clave primaria autoincremental en las migraciones usando Blueprint. ¿Cuál es el método habitual?",
    "opciones": [
      "$table->primaryKey('id');",
      "$table->autoIncrement('id');",
      "$table->id();",
      "$table->increment();"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "¿Cómo se indica que un campo no puede dejarse en blanco al momento de validarlo en un formulario?",
    "opciones": [
      "Con la regla 'must_exist'",
      "Con la regla 'not_null'",
      "Con la regla 'required'",
      "Con la regla 'mandatory'"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Si un formulario nos devuelve a la página porque la validación falló, ¿cómo podemos rellenar automáticamente un campo input de texto con el valor que el usuario había escrito previamente (usando Blade)?",
    "opciones": [
      "value=\"{{ old('nombre_del_campo') }}\"",
      "value=\"{{ $request->nombre_del_campo }}\"",
      "value=\"{{ session('nombre_del_campo') }}\"",
      "value=\"{{ previous('nombre_del_campo') }}\""
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Cuando usamos return back()->withErrors(...), ¿dónde están disponibles esos errores en la vista Blade?",
    "opciones": [
      "En la variable de sesión $_SESSION['errors']",
      "En la variable global $errores",
      "En la variable $errors (instancia de MessageBag)",
      "Los errores se muestran en un pop-up automáticamente."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5",
    "pregunta": "Si en la Tarea 5 hubieras querido definir que una Película y un Usuario tienen una relación Varios a Varios (para hacer listas de favoritos, por ejemplo), ¿qué método de relación se utilizaría en Eloquent?",
    "opciones": [
      "hasMany()",
      "belongsTo()",
      "belongsToMany()",
      "hasOneOrMany()"
    ],
    "correcta": 2
  },
  {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En el archivo '.env' de la tarea, ¿cuál es el valor asignado a la variable de entorno DB_DATABASE? [5]",
        "opciones": [
            "laravel_db",
            "2526_dwes05",
            "videoclub_db",
            "mysql"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "Según el archivo '.env' de la tarea, ¿qué driver o sistema se utiliza para gestionar la sesión (SESSION_DRIVER)? [5]",
        "opciones": [
            "database",
            "redis",
            "file",
            "cookie"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En la migración de la tabla 'generos', ¿qué longitud máxima en caracteres se define para el campo 'nombre' mediante `$table->string('nombre', 45);`? [6]",
        "opciones": [
            "45 caracteres",
            "255 caracteres",
            "Ilimitada",
            "60 caracteres"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "Revisando la migración de 'criticas', ¿qué tipo de dato en la base de datos se asigna al campo 'comentario'? [7]",
        "opciones": [
            "string",
            "text",
            "tinyText",
            "varchar"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En la migración de 'criticas', ¿qué comportamiento define la instrucción `onDelete('cascade')` para la clave foránea 'pelicula'? [8]",
        "opciones": [
            "Impide que la película sea borrada si tiene críticas.",
            "Borra automáticamente la crítica si la película asociada es eliminada.",
            "Oculta la crítica temporalmente.",
            "Pone el valor de 'pelicula' a nulo."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En el archivo de migración de 'peliculas', ¿qué tipo de dato se usa para el campo 'duracion'? [9]",
        "opciones": [
            "time",
            "string",
            "integer",
            "decimal"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En la creación de la tabla 'peliculas', ¿qué modificador se usa para asegurar que la clave foránea 'genero' sea un entero numérico compatible con las claves primarias (id)? [10]",
        "opciones": [
            "unsignedBigInteger",
            "foreignInteger",
            "tinyInteger",
            "bigId"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En todas las migraciones de la tarea, ¿cuál es el propósito del método `down()` que contiene instrucciones como `Schema::dropIfExists('generos');`? [11]",
        "opciones": [
            "Vaciar los datos de la tabla.",
            "Crear una copia de seguridad de la tabla.",
            "Deshacer los cambios de la migración, eliminando la tabla si existe.",
            "Actualizar la estructura de la tabla."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En 'RMMSeeder.php', ¿qué función o método nativo de Laravel se utiliza para obtener y guardar la fecha y hora actual en el campo 'email_verified_at'? [12]",
        "opciones": [
            "time()",
            "date('Y-m-d H:i:s')",
            "now()",
            "Carbon::today()"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En 'RMMSeeder.php', ¿cómo verificas si el usuario 'RMM1@email.RMM' ya existe antes de insertarlo en la base de datos? [12]",
        "opciones": [
            "if (!User::find('RMM1@email.RMM'))",
            "if (User::where('email', 'RMM1@email.RMM')->count() == 0)",
            "if (User::exists('RMM1@email.RMM') == false)",
            "if (empty(User::get('RMM1@email.RMM')))"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En el seeder de la tarea, ¿qué clase o fachada se usa para encriptar la contraseña del usuario antes de guardarla (ej. `Hash::make('RMM1')`)? [12, 13]",
        "opciones": [
            "Crypt",
            "Bcrypt",
            "Hash",
            "Password"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En 'RMMSeeder.php', al ir a insertar las películas, ¿cómo obtienes previamente el objeto del género 'animación' para poder asignar su ID? [14]",
        "opciones": [
            "GeneroRMM::where('nombre', 'animación')->first();",
            "GeneroRMM::find('animación');",
            "GeneroRMM::get('nombre', 'animación');",
            "GeneroRMM::search('animación');"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "Al insertar 'Toy Story' en el seeder, le asignas el género de animación. ¿Qué propiedad del objeto `$genAnimacion` se le pasa al campo `$p1->genero`? [15]",
        "opciones": [
            "$genAnimacion->nombre",
            "$genAnimacion->id",
            "$genAnimacion->key",
            "$genAnimacion->value"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En el modelo 'User.php', ¿qué atributo protegido se usa para ocultar el campo 'password' y 'remember_token' en las serializaciones (por ejemplo, al devolver JSON)? [16]",
        "opciones": [
            "protected $invisible",
            "protected $secret",
            "protected $hidden",
            "protected $guarded"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En el modelo 'User.php', ¿qué hace el array protegido `$casts` con el campo 'password'? [16]",
        "opciones": [
            "Lo convierte a texto plano.",
            "Indica a Eloquent que debe transformarlo internamente como 'hashed' (encriptado).",
            "Permite recuperar la contraseña olvidada.",
            "Valida que tenga al menos 8 caracteres."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "El modelo 'CriticaRMM' incluye `$fillable = ['valoracion', 'comentario', 'pelicula', 'usuario'];`. ¿Qué impide esta instrucción de Eloquent? [17]",
        "opciones": [
            "Impide que esos campos sean mostrados en las vistas.",
            "Impide que cualquier otro campo de la tabla sufra vulnerabilidades de asignación masiva (Mass Assignment).",
            "Impide que se borre la crítica accidentalmente.",
            "Impide que la crítica esté vacía al insertarse."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En 'CriticaRMM.php', ¿cuál es el nombre del método que has definido para crear la relación donde una crítica pertenece a un usuario? [18]",
        "opciones": [
            "user()",
            "usuario()",
            "usuarioAsociado()",
            "perteneceUsuario()"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En el modelo 'GeneroRMM', el método `peliculas()` retorna `$this->hasMany(PeliculaRMM::class, 'genero');`. ¿Qué representa el segundo parámetro 'genero'? [19]",
        "opciones": [
            "El nombre de la tabla de géneros.",
            "La columna que sirve como clave foránea en la tabla 'peliculas' relacionada en la migración.",
            "Un campo que se asigna automáticamente.",
            "El nombre de la vista a cargar."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En 'PeliculaRMM.php', antes de definir las relaciones inversas o N:1, ¿qué clase específica de Eloquent importas al inicio del archivo con 'use'? [20]",
        "opciones": [
            "Illuminate\\Database\\Eloquent\\Relations\\BelongsTo",
            "Illuminate\\Support\\Facades\\DB",
            "Illuminate\\Http\\Request",
            "App\\Models\\Pelicula"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "Todos tus modelos, como 'CriticaRMM', incluyen dentro de la clase la instrucción `use HasFactory;`. ¿Qué es 'HasFactory' en Laravel? [17]",
        "opciones": [
            "Un controlador de autenticación.",
            "Un rasgo (trait) que habilita la creación de datos de prueba estructurados mediante factorías.",
            "Una clase para validar formularios.",
            "Un comando de Artisan."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En el método `mostrarFormularioCriticaRMM` del controlador, ¿qué compruebas con `if(!$pelicula)` tras hacer un find() por el ID? [21]",
        "opciones": [
            "Si la película tiene comentarios.",
            "Si el usuario está autorizado a ver la película.",
            "Si la película se ha encontrado en la base de datos o no existe.",
            "Si la película es de pago."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En el controlador de críticas, ejecutas `CriticaRMM::where('usuario', Auth::id())->where('pelicula', $pelicula_id)->count();`. ¿Cuál es el propósito exacto de esta consulta? [22]",
        "opciones": [
            "Contar cuántas películas ha visto el usuario.",
            "Comprobar si el usuario autenticado ya ha valorado anteriormente esa misma película.",
            "Calcular la nota media de la película.",
            "Borrar las críticas duplicadas."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En la validación de `crearNuevaCriticaRMM`, usas la regla `'valoracion' => 'required|integer|between:1,5'`. ¿Qué indica `between:1,5`? [23]",
        "opciones": [
            "Que el texto de valoración debe tener entre 1 y 5 caracteres.",
            "Que la película debe pertenecer a las categorías 1 a 5.",
            "Que el valor numérico enviado debe estar obligatoriamente en el rango del 1 al 5.",
            "Que el usuario puede enviar entre 1 y 5 críticas al día."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "Al validar en `CriticaControllerRMM`, le pasas un segundo parámetro al método `$request->validate()`. ¿Qué contiene ese segundo parámetro o array? [23, 24]",
        "opciones": [
            "Mensajes de error personalizados en español que reemplazarán a los textos por defecto en inglés si falla una regla.",
            "Un array vacío por cuestiones de compatibilidad.",
            "Las redirecciones hacia las que debe ir en caso de fallo.",
            "Los datos antiguos para repoblar el formulario."
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "Al insertar la nueva crítica en el controlador, le asignas el usuario con la instrucción `$critica->usuario = Auth::id();`. ¿De dónde extrae Laravel este ID? [25]",
        "opciones": [
            "De un campo oculto del formulario.",
            "De la URL que envió el usuario.",
            "De la sesión del usuario que está actualmente autenticado.",
            "De una variable global de PHP."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "Tras insertar la crítica correctamente, devuelves `return view('mensaje', ['mensaje' => \"Crítica insertada...\"]);`. ¿Qué información estás enviando a la vista? [25]",
        "opciones": [
            "Todo el objeto de la crítica.",
            "Un array asociativo con una variable 'mensaje' y su texto, para proyectarlo en el HTML.",
            "El ID del nuevo registro insertado.",
            "Un error de compilación."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En el método `mostrarFormularioBorradoRMM`, ¿por qué usas la condición de seguridad `if ($critica->usuario !== Auth::id())`? [26]",
        "opciones": [
            "Para forzar al usuario a que cambie su contraseña.",
            "Para verificar que la crítica que se intenta borrar pertenece realmente al usuario autenticado y evitar borrados no autorizados.",
            "Para asignar la crítica al usuario administrador.",
            "Para comprobar si la sesión ha caducado."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En el controlador `CriticaControllerRMM`, para procesar el borrado definitivo en `borrarCriticaRMM`, se realiza una comprobación con `$request->has('confirmacion')`. ¿Qué significa esto? [27]",
        "opciones": [
            "Que la película está confirmada en cartelera.",
            "Verifica si en el formulario (por POST) el usuario marcó la casilla o checkbox obligatoria de 'confirmacion' para proceder.",
            "Genera un token de confirmación en la base de datos.",
            "Que el usuario tiene un email confirmado."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En `borrarCriticaRMM`, cuando pasas todas las verificaciones, ejecutas `$critica->delete();`. ¿A qué elemento de la arquitectura pertenece este método `delete()`? [28]",
        "opciones": [
            "A una vista de Blade.",
            "Al archivo de configuración .env.",
            "A la clase Request HTTP.",
            "Al ORM Eloquent, que elimina esa instancia específica de la base de datos."
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En `LoginController`, cuando falla la autenticación, devuelves `return back()->withErrors([...]);`. ¿Qué efecto tiene `withErrors`? [29]",
        "opciones": [
            "Detiene el servidor Apache.",
            "Muestra una ventana emergente de JavaScript.",
            "Inyecta los mensajes de error en la sesión temporal (flash) para que puedan ser mostrados en la vista Blade.",
            "Borra la base de datos por seguridad."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "También en `LoginController`, encadenas la instrucción `->onlyInput('email')` al fallo del login. ¿Para qué se utiliza? [29]",
        "opciones": [
            "Para que devuelva a la vista únicamente el email introducido por el usuario y así poder autocompletar la caja de texto (old value).",
            "Para borrar todos los campos excepto el email.",
            "Para validar que el email tiene el formato correcto.",
            "Para actualizar el email en la base de datos."
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En `LoginController`, cuando un usuario cierra sesión utilizas `Auth::logout();`. ¿Qué sucede internamente? [30]",
        "opciones": [
            "Se elimina su cuenta permanentemente.",
            "Se cierra la sesión activa en el gestor de autenticación y se desvincula al usuario.",
            "Se redirige automáticamente a Google.",
            "Se pausa su suscripción temporalmente."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "Por seguridad, al hacer logout en la tarea invocas `$request->session()->invalidate();`. ¿Qué propósito tiene esta línea? [30]",
        "opciones": [
            "Invalidar todos los comentarios del usuario.",
            "Destruir todos los datos guardados en la sesión actual, dejándola inutilizable para un atacante.",
            "Hacer que el usuario tenga que cambiar su contraseña.",
            "Eliminar la memoria caché de las vistas Blade."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En el cierre de sesión también ejecutas `$request->session()->regenerateToken();`. ¿A qué aspecto de seguridad pertenece este token? [30]",
        "opciones": [
            "A la validación del correo electrónico.",
            "A la generación de claves de la API.",
            "A la protección contra la falsificación de peticiones en sitios cruzados (CSRF).",
            "Al cifrado de contraseñas Bcrypt."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "Cuando el login es exitoso, rediriges con `return redirect()->intended(route('zonaprivada'));`. ¿Qué característica tiene el método `intended()`? [29]",
        "opciones": [
            "Envía un correo con la intención del usuario.",
            "Comprueba la intensidad de la conexión a la base de datos.",
            "Redirige al usuario a la URL a la que intentaba acceder antes de ser interceptado por la autenticación, y si no hay ninguna guardada, usa la de 'zonaprivada'.",
            "Muestra una alerta intencionada de éxito."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En la vista Blade `confirmarborradoRMM.blade.php`, inicias con `@extends('layouts.privado')`. ¿Qué consigues con esta directiva? [31]",
        "opciones": [
            "Heredar y aplicar todo el diseño (HTML base, menús y estilos) definido en la plantilla 'privado.blade.php' de la carpeta 'layouts'.",
            "Extender la fecha de expiración de la sesión privada.",
            "Cargar librerías de PHP privadas.",
            "Ocultar el código fuente a los motores de búsqueda."
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En tus 'layouts' de Blade, usas la instrucción `{{ Auth::user()->name }}`. ¿Qué información proyecta este código en la pantalla del usuario? [32]",
        "opciones": [
            "La URL de su perfil público.",
            "La contraseña en texto plano.",
            "El nombre del usuario actualmente autenticado (iniciado sesión) sacado del modelo User.",
            "El nombre de la aplicación configurado en el archivo .env."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En `layouts.publico`, para mostrar distintos enlaces en el menú superior, ¿qué estructura de control de Blade usas para distinguir entre visitantes anónimos y usuarios registrados? [32, 33]",
        "opciones": [
            "@user y @anon",
            "@if(login) y @else",
            "@session y @endsession",
            "@auth y @else (cerrando con @endauth)"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En tu archivo de plantilla `privado.blade.php`, incluyes el archivo CSS externo mediante `href=\"{{ asset('css/estilos.css') }}\"`. ¿Qué hace la función `asset()`? [34]",
        "opciones": [
            "Convierte el CSS a código PHP.",
            "Genera la URL absoluta completa (incluyendo dominio http://...) hacia el archivo alojado en la carpeta 'public'.",
            "Comprime el archivo CSS para que ocupe menos.",
            "Verifica si el usuario tiene permiso para ver el estilo."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En `principal.blade.php`, muestras la cantidad de críticas de una película usando `{{ $pelicula->criticas_count }}`. ¿Cómo se llama esta convención generada por Eloquent al usar withCount? [35]",
        "opciones": [
            "Colección dinámica.",
            "Atributo virtual (o propiedad mágica de conteo) generada por Laravel para las relaciones.",
            "Variable de sesión estática.",
            "Identificador autoincremental de Blade."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "También en `principal.blade.php`, imprimes la media con `{{ number_format($pelicula->criticas_avg_valoracion, 2) }}`. ¿Qué hace `number_format(..., 2)` que es nativo de PHP? [35]",
        "opciones": [
            "Multiplica la valoración por 2.",
            "Devuelve siempre el número 2.",
            "Da formato al número asegurando que se muestre exactamente con 2 decimales.",
            "Transforma el número a una cadena de texto en sistema binario."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En `principal.blade.php` tienes este bloque de código oculto: `{{-- Si hay críticas, mostramos la media... --}}`. ¿Qué representa esta sintaxis en Blade? [35]",
        "opciones": [
            "Una consulta SQL embebida en la vista.",
            "Una etiqueta que se convertirá en un enlace HTML.",
            "Un comentario de Blade que no se renderizará, por lo que nunca aparecerá en el código fuente HTML final enviado al navegador.",
            "Una variable de configuración inyectada desde el archivo .env."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En la tabla de `principal.blade.php`, ¿qué directiva iterativa de Blade se encarga de crear cada fila (tr) HTML por cada película recibida en la colección? [36]",
        "opciones": [
            "@loop ($peliculasRMM -> $pelicula)",
            "@foreach ($peliculasRMM as $pelicula)",
            "<?php for($i=0; $i<count($peliculasRMM); $i++) ?>",
            "@while ($peliculasRMM)"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En el formulario de `formnuevacriticaRMM.blade.php`, mandas un dato que el usuario no ve mediante `<input type=\"hidden\" name=\"pelicula_id\" value=\"{{ $pelicula->id }}\">`. ¿Cuál es su utilidad? [37]",
        "opciones": [
            "Generar el token de seguridad CSRF.",
            "Ocultar errores de validación de la película.",
            "Permitir al controlador (cuando se envíe el POST) saber a qué película exacta se le está asignando esta crítica.",
            "Redirigir automáticamente a la página de la película."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En `formnuevacriticaRMM.blade.php`, imprimes en bloque todos los fallos detectados con la siguiente condición de Laravel: `@if ($errors->any())`. ¿Qué devuelve el método `any()`? [38]",
        "opciones": [
            "True si no hubo ningún error.",
            "El mensaje literal del primer error.",
            "True si la validación del controlador encontró al menos un error (la colección de errores no está vacía).",
            "Un array con los campos validados correctamente."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "Para la caja de texto en `formnuevacriticaRMM.blade.php`, incluyes en el HTML: `<textarea ...>{{ old('comentario') }}</textarea>`. ¿Qué función cumple el helper `old()`? [39]",
        "opciones": [
            "Recuperar el valor introducido por el usuario en el intento de envío anterior si la validación falló, evitando que tenga que reescribirlo.",
            "Muestra el comentario de la persona más anciana registrada.",
            "Recupera un dato de la base de datos que ya ha sido eliminado.",
            "Traduce el comentario a un idioma antiguo."
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En `errores.blade.php`, al imprimir el título de la página pones `{{ $titulo ?? 'Upps! Acción no permitida.' }}`. ¿Qué hace el operador de doble interrogación `??` (Null Coalescing)? [40]",
        "opciones": [
            "Calcula probabilidades booleanas.",
            "Realiza una pregunta interactiva al usuario en la vista.",
            "Aplica un estilo CSS aleatorio al texto.",
            "Imprime el contenido de la variable `$titulo` si existe, y si es nula o no se pasó, imprime el texto literal que viene a la derecha."
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En `errores.blade.php` tienes un código opcional para listas de fallos: `@if(isset($errores))`. ¿A qué equivale `isset()` en PHP nativo usado dentro de Blade? [40]",
        "opciones": [
            "Inyecta una variable nueva.",
            "Comprueba si la variable `$errores` ha sido declarada y su valor es distinto de nulo.",
            "Establece (sets) un valor predeterminado para errores.",
            "Borra el array de la memoria."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 segunda parte",
        "pregunta": "En `privada_principal.blade.php`, tienes una directiva `@if($totalCriticas == 0)`. ¿Qué muestra la vista si se cumple esta condición? [41]",
        "opciones": [
            "Un error fatal 500.",
            "Una advertencia para que el usuario borre su cuenta.",
            "Un bloque HTML (div) con el texto: 'No tienes críticas todavía. ¡Anímate y critica alguna película!'.",
            "La tabla de críticas vacía."
        ],
        "correcta": 2
    },
    {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En el archivo RMMSeeder, ¿qué función se utiliza para encriptar la contraseña 'RMM1' antes de guardarla en la base de datos?",
    "opciones": [
      "encrypt('RMM1')",
      "md5('RMM1')",
      "Hash::make('RMM1')",
      "bcrypt_password('RMM1')"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En el modelo User de la Tarea 5, existe un array protegido llamado $hidden. ¿Cuál es su propósito principal?",
    "opciones": [
      "Ocultar el modelo a los usuarios no autenticados.",
      "Evitar que ciertos atributos (como la contraseña) se expongan cuando el modelo se convierte a un array o a formato JSON.",
      "Esconder campos en los formularios de Blade automáticamente.",
      "Proteger la base de datos de inyecciones SQL."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "Dentro del modelo User, vemos la propiedad: protected $casts = ['email_verified_at' => 'datetime', 'password' => 'hashed']. ¿Qué hace el 'casting' en Eloquent?",
    "opciones": [
      "Convierte el tipo de dato de la base de datos a un tipo de dato nativo de PHP al acceder a él.",
      "Crea copias de seguridad de esos campos automáticamente.",
      "Transmite los datos a otros controladores mediante eventos.",
      "Cifra los correos electrónicos para que no sean legibles en la base de datos."
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En el RMMSeeder de la Tarea 5, se usa la instrucción if (User::where('email', 'RMM1@email.RMM')->count() == 0). ¿Por qué se hace esta comprobación antes de hacer el insert?",
    "opciones": [
      "Para comprobar si el usuario tiene permisos de administrador.",
      "Para evitar insertar el mismo usuario duplicado si el seeder se ejecuta varias veces.",
      "Para contar cuántas contraseñas tiene el usuario.",
      "Para verificar que el correo electrónico tenga un formato válido."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En el archivo de migración de la tabla películas, ¿qué tipo de columna genera la instrucción $table->tinyText('argumento');?",
    "opciones": [
      "Una columna para guardar textos muy largos, de tamaño ilimitado.",
      "Una columna de texto corto, útil para almacenar resúmenes pequeños en la base de datos.",
      "Una columna booleana (verdadero o falso).",
      "Una columna numérica para el número de argumentos de la película."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "¿Qué especifica el número 60 en la instrucción $table->string('titulo', 60); dentro de una migración?",
    "opciones": [
      "El número mínimo de caracteres que debe tener el título.",
      "El valor por defecto del título de la película.",
      "El número máximo de caracteres (longitud) permitidos para la columna 'titulo' (VARCHAR(60)).",
      "El ID de la película por defecto."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En la migración de críticas, al definir la clave foránea, se añade ->onUpdate('cascade'). ¿Qué efecto tiene esto en la base de datos?",
    "opciones": [
      "Si se actualiza el ID del registro padre (ej. el usuario), se actualizará automáticamente el ID en las críticas hijas.",
      "Si se modifica el comentario, se actualiza el timestamp.",
      "Borra en cascada todos los registros hijos si se actualiza la tabla.",
      "Actualiza la página web del usuario en tiempo real."
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En el método down() de las migraciones, se usa Schema::dropIfExists('criticas');. ¿Cuándo se ejecuta este método?",
    "opciones": [
      "Cuando un usuario elimina su cuenta.",
      "Cuando la base de datos pierde la conexión.",
      "Cuando se lanza el comando para deshacer migraciones (por ejemplo, php artisan migrate:rollback).",
      "Automáticamente cada vez que guardamos un archivo."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En el controlador de críticas, al borrar, se comprueba: if (!$request->has('confirmacion')). ¿Para qué sirve el método has() del objeto Request?",
    "opciones": [
      "Para verificar si el usuario tiene sesión iniciada.",
      "Para comprobar si el campo 'confirmacion' está presente en los datos enviados por el formulario.",
      "Para hashear la confirmación.",
      "Para ver si la base de datos tiene espacio suficiente."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En el LoginController, después de un fallo de autenticación, vemos return back()->withErrors(...)->onlyInput('email');. ¿Qué hace ->onlyInput('email')?",
    "opciones": [
      "Borra el email de la base de datos.",
      "Valida que el input sea solo texto.",
      "Guarda temporalmente en sesión (flash data) únicamente el valor introducido en 'email' para repoblar el formulario en la vista.",
      "Permite al usuario loguearse solo con su email sin contraseña."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "Durante el logout (cerrar sesión), se ejecuta $request->session()->invalidate();. ¿Cuál es su función?",
    "opciones": [
      "Invalidar el usuario en la base de datos para que no vuelva a entrar.",
      "Borrar todos los datos asociados a la sesión actual del usuario en el servidor.",
      "Mostrar un mensaje de error de validación.",
      "Bloquear la IP del usuario."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "También durante el logout, se usa $request->session()->regenerateToken();. ¿Por qué se realiza esta acción?",
    "opciones": [
      "Para enviar un nuevo email de confirmación.",
      "Para generar un nuevo token JWT de API.",
      "Para crear un nuevo token CSRF, evitando que la sesión antigua pueda ser explotada.",
      "Para cambiar la contraseña del usuario."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En el LoginController, si el login es exitoso, se ejecuta return redirect()->intended(route('zonaprivada'));. ¿Qué hace el método intended()?",
    "opciones": [
      "Intenta redirigir, pero si falla muestra un error 404.",
      "Redirige a la URL que el usuario intentaba visitar antes de ser interceptado por el middleware de autenticación, o a 'zonaprivada' por defecto.",
      "Abre una nueva pestaña en el navegador web.",
      "Es una directiva de Blade para intenciones de usuario."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En la validación de nueva crítica, vemos que el método validate() recibe dos arrays. ¿Qué contiene el segundo array?",
    "opciones": [
      "Los datos de la base de datos.",
      "Las reglas de validación adicionales.",
      "Los mensajes de error personalizados (ej. 'valoracion.required' => 'Debes seleccionar...').",
      "La configuración de la vista Blade a la que redirigir."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En el archivo .env proporcionado en la tarea, figura APP_DEBUG=true. ¿Qué implica esto en el entorno de desarrollo?",
    "opciones": [
      "Que el modo mantenimiento está activado.",
      "Que los errores detallados con la traza de ejecución se mostrarán en pantalla si ocurre un fallo.",
      "Que las contraseñas se guardan en texto plano para poder depurarlas.",
      "Que la aplicación funcionará más rápido."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "¿Qué indica el valor DB_CONNECTION=mysql en el archivo .env de la Tarea 5?",
    "opciones": [
      "Que la base de datos se almacena en memoria RAM.",
      "Que estamos usando SQLite.",
      "El controlador (driver) del sistema gestor de base de datos que Laravel debe usar, en este caso MySQL o MariaDB.",
      "El nombre de la base de datos."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "¿Cuál es la utilidad del parámetro APP_KEY en el archivo .env (ej. base64:bemjw...)?",
    "opciones": [
      "Es la clave para iniciar sesión como superadministrador.",
      "Se usa para encriptar sesiones, cookies y datos firmados en Laravel, garantizando la seguridad.",
      "Es la contraseña de la base de datos.",
      "Es la licencia comercial de Laravel."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "¿Cuál es la diferencia entre Auth::user() y Auth::id() en un controlador?",
    "opciones": [
      "Auth::id() devuelve el nombre de usuario, Auth::user() devuelve el correo.",
      "Son exactamente lo mismo y devuelven un string.",
      "Auth::user() devuelve el objeto completo del usuario logueado, mientras que Auth::id() devuelve únicamente su clave primaria (ID).",
      "Auth::user() es para invitados y Auth::id() para registrados."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "Cuando en el controlador se devuelve return view('formnuevacriticaRMM', ['pelicula' => $pelicula]);, ¿cómo se accede a esa variable en Blade?",
    "opciones": [
      "A través del array asociativo $_GET['pelicula']",
      "Usando directamente la variable $pelicula, por ejemplo {{ $pelicula->titulo }}",
      "Mediante la función blade('pelicula')",
      "Con la sintaxis @pelicula"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "La directiva @csrf en el formulario de la Tarea 5, al renderizarse en el navegador, ¿en qué se convierte?",
    "opciones": [
      "En un texto visible que dice 'Seguro'.",
      "En un campo de formulario oculto (input type=\"hidden\") con un token único generado por Laravel.",
      "En una cookie encriptada de sesión.",
      "En un script de JavaScript."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En las vistas de la Tarea 5, ¿cuál es la diferencia principal entre los helpers {{ route('nombre.ruta') }} y {{ url('/ruta/exacta') }}?",
    "opciones": [
      "route() genera una URL basada en el nombre asignado a la ruta, mientras que url() genera la URL basada en la ruta o path literal.",
      "route() es solo para métodos GET y url() para métodos POST.",
      "route() redirige automáticamente, url() solo pinta texto.",
      "No hay diferencia, son alias idénticos."
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "¿En qué carpeta del proyecto Laravel se almacenan por defecto los archivos con extensión .blade.php de la Tarea 5?",
    "opciones": [
      "app/Views",
      "public/views",
      "resources/views",
      "storage/framework/views"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "Según la arquitectura explicada, ¿dónde se ubica el archivo CriticaControllerRMM.php en la estructura de directorios?",
    "opciones": [
      "config/Controllers",
      "resources/Controllers",
      "routes/Controllers",
      "app/Http/Controllers"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "¿Dónde se almacenan los modelos de Eloquent (como PeliculaRMM o GeneroRMM) por defecto en las versiones modernas de Laravel (8+)?",
    "opciones": [
      "app/Models",
      "app/Database",
      "database/models",
      "resources/models"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En PHP 8/Laravel, cuando un método de relación en un modelo finaliza con : BelongsTo, ¿qué significa ese tipado de retorno?",
    "opciones": [
      "Indica que la tabla de la base de datos está bloqueada.",
      "Es una validación estricta de PHP que asegura que el método devolverá una instancia de la clase Illuminate\\Database\\Eloquent\\Relations\\BelongsTo.",
      "Es un comentario para que lo lea el desarrollador, pero el intérprete PHP lo ignora.",
      "Obliga al modelo a pertenecer a otro usuario."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "De igual manera, el tipado de retorno : HasMany en la relación criticas() del modelo PeliculaRMM indica que...",
    "opciones": [
      "Devuelve un array simple de PHP con críticas.",
      "Es una relación de muchos a muchos.",
      "El método retornará un objeto de relación de Eloquent de tipo HasMany.",
      "Cuenta el número de críticas directamente."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "HTML estándar solo soporta formularios GET y POST. Si una ruta de Laravel requiere el método DELETE, ¿cómo lo indicamos dentro del formulario en la vista Blade?",
    "opciones": [
      "Cambiando el method del formulario: <form method=\"DELETE\">",
      "Usando la directiva @method('DELETE') dentro del formulario.",
      "Añadiendo el sufijo /delete a la URL de acción.",
      "Con la directiva @delete('FORM')"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "¿Qué comando de Artisan emplearías para generar el archivo RMMSeeder?",
    "opciones": [
      "php artisan create:seeder RMMSeeder",
      "php artisan make:seeder RMMSeeder",
      "php artisan new:seeder RMMSeeder",
      "php artisan generate:seeder RMMSeeder"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "Si un desarrollador quiere ver en la terminal la lista de todas las rutas definidas y sus nombres asignados (como 'zonaprivada'), ¿qué comando Artisan debe ejecutar?",
    "opciones": [
      "php artisan show:routes",
      "php artisan route:list",
      "php artisan list:web",
      "php artisan print:routes"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En el LoginController, ¿qué devuelve el método Auth::attempt($credentials) si las credenciales NO coinciden con ningún registro de la base de datos?",
    "opciones": [
      "Lanza una excepción fatal de PHP.",
      "Devuelve un objeto vacío.",
      "Redirige a la página 404.",
      "Devuelve false."
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En el controlador de críticas se hace CriticaRMM::where(...)->count(); ¿Qué diferencia habría si usáramos ->get() en lugar de ->count()?",
    "opciones": [
      "get() devuelve el número de registros en formato string, y count() en entero.",
      "get() obtiene todos los registros (una Colección de objetos), mientras que count() realiza una consulta optimizada COUNT() devolviendo solo un número.",
      "No hay diferencia, ambos devuelven un número entero.",
      "get() borra los registros obtenidos, count() solo los cuenta."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En el modelo PeliculaRMM, se definió: return $this->belongsTo(GeneroRMM::class, 'genero');. ¿Qué indica el segundo parámetro 'genero'?",
    "opciones": [
      "El nombre de la base de datos foránea.",
      "Es el nombre explícito de la columna de la clave foránea en la tabla peliculas, evitando que Laravel asuma que se llama 'genero_rmm_id'.",
      "Es el tipo de ordenación de los resultados.",
      "El controlador asociado al género."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "Al diseñar migraciones en Laravel, ¿cuál es el nombre de la columna que asume Eloquent por defecto como clave primaria de una tabla?",
    "opciones": [
      "pk",
      "uuid",
      "id",
      "key"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En caso de fallar la validación, Laravel redirige automáticamente con errores. En Blade, ¿cómo comprobamos si hay errores y los iteramos?",
    "opciones": [
      "Usando foreach($_SESSION['errors'] as $error)",
      "Usando @foreach ($errors->all() as $error)",
      "Con la directiva @getErrors",
      "Los errores se imprimen solos sin necesidad de código adicional."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En los formularios de la Tarea 5, para recuperar un valor que el usuario tecleó pero no pasó la validación (evitando que se borre el formulario), ¿qué función helper de Blade usamos?",
    "opciones": [
      "{{ previous('comentario') }}",
      "{{ last('comentario') }}",
      "{{ old('comentario') }}",
      "{{ session('comentario') }}"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En la regla de validación 'comentario' => 'required|string|max:255', ¿qué valida específicamente 'max:255'?",
    "opciones": [
      "Que el ID del comentario no sea mayor a 255.",
      "Que el texto introducido no supere los 255 caracteres de longitud.",
      "Que haya como máximo 255 palabras en el comentario.",
      "Que no puedan haber más de 255 críticas en toda la base de datos."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "Cuando se recupera un modelo desde la base de datos (ej. $critica = CriticaRMM::find($id);) y luego se ejecuta $critica->delete();, ¿qué SQL ejecuta internamente Laravel?",
    "opciones": [
      "DROP TABLE criticas",
      "TRUNCATE criticas",
      "DELETE FROM criticas WHERE id = X",
      "UPDATE criticas SET deleted = 1"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "La función Auth::logout() de Laravel, aparte de eliminar la información de sesión del servidor, ¿qué otra acción realiza por defecto en los sistemas de cookies?",
    "opciones": [
      "Elimina la cookie 'remember_me' del navegador del usuario si existiese.",
      "Guarda un log de conexión en el equipo local.",
      "Limpia el historial del navegador.",
      "Deshabilita temporalmente el uso de cookies en el explorador."
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En el seeder de géneros, se itera un array clave-valor. Si usamos GeneroRMM::where('nombre', $nombre)->first(), ¿qué nos devuelve esta consulta?",
    "opciones": [
      "Un array con todos los géneros que coincidan.",
      "Solo el primer registro de la tabla géneros como objeto Eloquent, o null si no lo encuentra.",
      "El número total de géneros.",
      "Verdadero o falso."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En RMMSeeder vemos: $p1->genero = $genAnimacion->id; ¿Por qué se asocia de esta forma en lugar de poner el número de ID a mano?",
    "opciones": [
      "Para evitar problemas de IDs estáticos; busca el género por nombre, coge el ID asignado por la base de datos y lo asocia dinámicamente a la película.",
      "Porque Eloquent no permite escribir números enteros.",
      "Porque Blade requiere objetos completos.",
      "Para cifrar la relación."
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "El comando php artisan migrate:rollback analizado en los contenidos, ¿qué acción realiza exactamente?",
    "opciones": [
      "Deshace absolutamente todas las migraciones ejecutadas históricamente.",
      "Deshace únicamente el último 'lote' (batch) de migraciones que se ejecutaron juntas.",
      "Elimina la base de datos completa y crea una nueva.",
      "Hace una copia de seguridad en formato SQL de la tabla actual."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "Según la Tarea 5, para enviar datos sensibles o formularios que modifiquen el servidor, en el archivo de rutas (web.php) se prefiere usar:",
    "opciones": [
      "Route::get",
      "Route::view",
      "Route::post (o sus equivalentes put/patch/delete)",
      "Route::redirect"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "Si un grupo de rutas en web.php está envuelto en Route::middleware(['auth'])->group(function () { ... });, ¿qué significa?",
    "opciones": [
      "Que solo pueden acceder usuarios administradores (auth_level 1).",
      "Que solo los invitados (no logueados) pueden acceder a las rutas dentro de ese grupo.",
      "Que todas las rutas contenidas exigirán que el usuario haya iniciado sesión correctamente para poder visitarlas.",
      "Que se pedirá un token API en formato JSON en cada petición."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En Blade, cuando encerramos una variable entre llaves dobles {{ $variable }}, ¿qué hace Laravel internamente por seguridad?",
    "opciones": [
      "Usa la función htmlspecialchars() de PHP para evitar inyecciones XSS (escapado de código HTML/JS).",
      "Convierte la variable a formato JSON.",
      "Elimina todos los espacios en blanco.",
      "Cifra la variable usando AES-256."
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En las plantillas layout de la Tarea 5 (ej. layouts/privado.blade.php), usamos @yield('contenido'). ¿Para qué sirve esto?",
    "opciones": [
      "Para importar variables PHP desde el controlador.",
      "Para definir un marcador de posición (hueco) donde las vistas hijas inyectarán su código HTML personalizado usando @section('contenido').",
      "Para crear un bucle repetitivo de contenido.",
      "Para detener la ejecución si no hay contenido."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "Al devolver una vista desde el controlador con return view('errores');, no se escribe '.blade.php'. ¿Por qué?",
    "opciones": [
      "Porque no es una vista, es un modelo.",
      "Porque Laravel automáticamente asume y busca el sufijo '.blade.php' (o '.php') en la carpeta de recursos.",
      "Porque las vistas se guardan en la base de datos, no en archivos.",
      "Porque el servidor Apache elimina las extensiones por defecto."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En los controladores, se emplea Auth::check() para redirigir si no hay sesión. ¿Qué tipo de valor retorna Auth::check()?",
    "opciones": [
      "Un array con los roles del usuario.",
      "Una redirección al login.",
      "Un booleano (true si está autenticado, false si no lo está).",
      "El objeto del usuario."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "¿Cómo se llama el motor de plantillas integrado que utiliza Laravel, responsable de directivas como @extends o @foreach?",
    "opciones": [
      "Twig",
      "Smarty",
      "Blade",
      "EJS"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 tercera parte",
    "pregunta": "En el archivo .env de tu Tarea 5, está configurado DB_DATABASE=2526_dwes05. ¿Qué le indica esta variable a Laravel?",
    "opciones": [
      "El usuario con el que debe conectar al motor MySQL.",
      "El prefijo de las tablas (ej. 2526_dwes05_users).",
      "El nombre exacto de la base de datos física donde debe crear las tablas y realizar las consultas.",
      "La contraseña del puerto 3306."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Dado el siguiente fragmento del LoginController:\n\nif (Auth::attempt($credentials)) {\n    $request->session()->___();\n    return redirect()->intended(route('zonaprivada'));\n}\n\n¿Qué método falta en el hueco '___' para renovar el ID de la sesión tras un login exitoso?",
    "opciones": [
      "start",
      "refresh",
      "regenerate",
      "restart"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el LoginController, en caso de fallo, se devuelve el siguiente código:\n\nreturn back()->___([\n    'email' => 'El email o la contraseña no son válidos.',\n])->onlyInput('email');\n\n¿Qué método completa el hueco para enviar el array de errores a la vista?",
    "opciones": [
      "withErrors",
      "sendErrors",
      "flashErrors",
      "putErrors"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Observa el cierre de sesión en LoginController:\n\n$request->session()->invalidate();\n$request->session()->___();\n\n¿Qué método se ejecuta a continuación para evitar ataques CSRF renovando el token?",
    "opciones": [
      "clearToken",
      "regenerateToken",
      "destroyToken",
      "refreshToken"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Identifica qué método falta en la validación del LoginController:\n\n$credentials = $request->___([\n    'email' => 'required|email',\n    'password' => 'required',\n]);",
    "opciones": [
      "verify",
      "check",
      "validate",
      "sanitize"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En LoginController, tras un login correcto vemos:\n\nreturn redirect()->___(route('zonaprivada'));\n\n¿Qué método asegura que, si el usuario intentaba acceder a una URL protegida antes de loguearse, sea redirigido a esa URL en lugar de la ruta por defecto?",
    "opciones": [
      "target",
      "intended",
      "route",
      "previous"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En CriticaControllerRMM, dentro del método crearNuevaCriticaRMM, vemos esta regla:\n\n$request->validate([\n    'valoracion' => 'required|___|between:1,5',\n    ...\n]);\n\n¿Qué regla de validación falta para asegurar que la valoración sea un número sin decimales?",
    "opciones": [
      "numeric",
      "number",
      "int",
      "integer"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el CriticaControllerRMM, se busca la crítica a borrar de esta manera:\n\n$critica = CriticaRMM::___($critica_id);\n\n¿Qué método de Eloquent falta para buscar un registro directamente por su Clave Primaria (id)?",
    "opciones": [
      "find",
      "get",
      "whereId",
      "search"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Dado el siguiente fragmento para comprobar si un usuario ya votó:\n\n$existeCritica = CriticaRMM::where('usuario', Auth::id())\n    ->where('pelicula', $pelicula_id)\n    ->___();\n\n¿Qué método falta al final para obtener el número total de coincidencias?",
    "opciones": [
      "sum()",
      "total()",
      "count()",
      "get()"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el borrado de críticas, hay un 'doble check' de seguridad:\n\nif ($critica->usuario !== ___) {\n    return view('errores', [...]);\n}\n\n¿Qué código falta para compararlo con el identificador del usuario conectado?",
    "opciones": [
      "Auth::user()",
      "Session::id()",
      "Auth::id()",
      "User::current()"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Para comprobar que se ha marcado el checkbox de confirmación al borrar:\n\nif (!$request->___('confirmacion')) {\n    return view('errores', [...]);\n}\n\n¿Qué método de la clase Request falta para verificar si el campo 'confirmacion' está presente en la petición?",
    "opciones": [
      "has",
      "exists",
      "contains",
      "isset"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Una vez validadas todas las comprobaciones de borrado:\n\n$critica->___();\nreturn view('mensaje', [...]);\n\n¿Qué método de Eloquent ejecuta el comando DELETE en la base de datos para ese registro?",
    "opciones": [
      "destroy",
      "remove",
      "drop",
      "delete"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En CriticaControllerRMM, para cargar el formulario de nueva crítica se devuelve:\n\nreturn ___('formnuevacriticaRMM', [\n    'pelicula' => $pelicula\n]);\n\n¿Qué función global falta para renderizar la plantilla Blade?",
    "opciones": [
      "render",
      "template",
      "view",
      "display"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el archivo RMMSeeder, al crear el Usuario 1:\n\n$u1->password = ___::make('RMM1');\n\n¿Qué Facade se usa para encriptar la contraseña?",
    "opciones": [
      "Crypt",
      "Bcrypt",
      "Hash",
      "Password"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el RMMSeeder, se evita duplicar usuarios con:\n\nif (User::___('email', 'RMM1@email.RMM')->count() == 0) {\n    ...\n}\n\n¿Qué método de Eloquent va en el hueco para filtrar por la columna 'email'?",
    "opciones": [
      "find",
      "filter",
      "where",
      "select"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En RMMSeeder, para obtener el objeto del género 'animación' y asignar su ID después:\n\n$genAnimacion = GeneroRMM::where('nombre', 'animación')->___();\n\n¿Qué método usamos para obtener solo el primer registro que coincida?",
    "opciones": [
      "get()",
      "all()",
      "one()",
      "first()"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Siguiendo con el RMMSeeder, ¿cómo se asigna la clave foránea a la película?\n\n$p1->genero = $genAnimacion->___;\n\n¿Qué propiedad del objeto `$genAnimacion` necesitamos?",
    "opciones": [
      "id",
      "nombre",
      "pk",
      "value"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En la migración de 'peliculas', para crear la columna 'duracion' (en minutos):\n\n$table->___('duracion');\n\n¿Qué tipo de columna se utiliza en este caso?",
    "opciones": [
      "time",
      "integer",
      "float",
      "number"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En la migración de 'criticas', se crea la clave foránea a 'peliculas' en una sola línea:\n\n$table->___('pelicula')->constrained('peliculas')->onDelete('cascade');\n\n¿Qué método de Blueprint permite crear la columna y prepararla como clave foránea de forma simplificada?",
    "opciones": [
      "foreign",
      "foreignKey",
      "foreignId",
      "relation"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En la migración de 'peliculas', se usa la forma tradicional para la clave foránea:\n\n$table->foreign('genero')->___('id')->on('generos');\n\n¿Qué método de Blueprint falta para indicar a qué columna de la tabla externa apunta?",
    "opciones": [
      "pointsTo",
      "references",
      "target",
      "connects"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Para limitar el título de la película a 60 caracteres en la migración:\n\n$table->___('titulo', 60);\n\n¿Qué método se emplea para crear un VARCHAR?",
    "opciones": [
      "varchar",
      "text",
      "string",
      "char"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En la migración de 'peliculas', el campo 'argumento' no es muy largo. Según el código de la Tarea 5:\n\n$table->___('argumento');\n\n¿Qué método se usó para almacenar el resumen de la película?",
    "opciones": [
      "longText",
      "tinyText",
      "string",
      "text"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Al final de cada método up() en las migraciones vemos:\n\n$table->___();\n\n¿Qué método genera automáticamente las columnas created_at y updated_at?",
    "opciones": [
      "dates()",
      "time()",
      "timestamps()",
      "createdAt()"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el método down() de las migraciones:\n\npublic function down(): void {\n    Schema::___('peliculas');\n}\n\n¿Qué método se llama para borrar la tabla si existe al revertir la migración?",
    "opciones": [
      "delete",
      "dropIfExists",
      "truncate",
      "removeTable"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el modelo CriticaRMM:\n\npublic function usuarioAsociado(): ___ \n{\n    return $this->belongsTo(User::class, 'usuario');\n}\n\nSegún PHP 8, ¿cuál es el tipado de retorno correcto (que falta en el hueco)?",
    "opciones": [
      "User",
      "HasOne",
      "BelongsTo",
      "Object"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el modelo User:\n\npublic function criticas(): ___ \n{\n    return $this->hasMany(CriticaRMM::class, 'usuario');\n}\n\n¿Cuál es el tipado de retorno correcto para una relación 'Un usuario tiene MUCHAS críticas'?",
    "opciones": [
      "HasMany",
      "BelongsToMany",
      "Array",
      "Collection"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el modelo User, ¿cómo se llama la propiedad que convierte 'email_verified_at' en un objeto datetime y la 'password' en un string hasheado?\n\nprotected $___ = [\n    'email_verified_at' => 'datetime',\n    'password' => 'hashed',\n];",
    "opciones": [
      "types",
      "conversions",
      "casts",
      "mutators"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el modelo User, para evitar que la contraseña se envíe al serializar el modelo a JSON:\n\nprotected $___ = [\n    'password',\n    'remember_token',\n];",
    "opciones": [
      "private",
      "hidden",
      "guarded",
      "protected"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el modelo PeliculaRMM:\n\nreturn $this->belongsTo(GeneroRMM::class, '___');\n\n¿Qué valor contiene el segundo parámetro si queremos indicar el nombre exacto de la clave foránea en la tabla peliculas?",
    "opciones": [
      "id_genero",
      "generos_id",
      "genero",
      "generoRMM_id"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En las vistas de la tarea (ej. formnuevacriticaRMM.blade.php), la primera línea es:\n\n___('layouts.publico')\n\n¿Qué directiva Blade indica que esta vista hereda de una plantilla base?",
    "opciones": [
      "@include",
      "@layout",
      "@extends",
      "@master"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Inmediatamente después de extender el layout en Blade:\n\n___('titulo', 'Valorar película')\n\n¿Qué directiva asigna el texto 'Valorar película' a la sección 'titulo' del layout?",
    "opciones": [
      "@yield",
      "@section",
      "@set",
      "@title"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Dentro del `<form method=\"POST\" ...>` en Blade, ¿qué directiva es imperativa incluir para que Laravel no rechace la petición con un error 419?\n\n___",
    "opciones": [
      "@csrf",
      "@token",
      "@secure",
      "@auth"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En layouts/publico.blade.php, se evalúa si hay usuario conectado:\n\n___\n   Cerrar sesión\n@else\n   Hola, invitado\n@endauth\n\n¿Qué directiva inicia este bloque if especial para autenticación?",
    "opciones": [
      "@if(Auth::check())",
      "@guest",
      "@auth",
      "@user"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el archivo `.env`, se configura la variable para ver errores detallados durante el desarrollo:\n\nAPP_DEBUG=___\n\n¿Qué valor tiene en tu archivo de la Tarea 5?",
    "opciones": [
      "false",
      "1",
      "true",
      "on"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el archivo `.env`, el nombre de la base de datos a la que se conecta Laravel es:\n\nDB_DATABASE=___\n\nSegún la Tarea 5, el valor es:",
    "opciones": [
      "laravel",
      "peliculas_db",
      "2526_dwes05",
      "tarea5"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Si en un controlador ejecuto:\n\nreturn view('mensaje', [\n    'mensaje' => \"Has valorado con un \" . $critica->___ . \"/5.\"\n]);\n\n¿A qué atributo del objeto `$critica` accedemos para mostrar la nota numérica?",
    "opciones": [
      "puntuacion",
      "nota",
      "valor",
      "valoracion"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el array de mensajes personalizados de `validate()` del CriticaControllerRMM:\n\n[\n    'valoracion.required' => 'Debes seleccionar una valoración del desplegable.',\n    ...\n]\n\n¿En qué posición de los argumentos de la función `validate($arg1, $arg2)` se pasa este array?",
    "opciones": [
      "Como primer argumento.",
      "Como segundo argumento.",
      "Como tercer argumento.",
      "No se pasa a validate(), se define en el modelo."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el controlador de críticas, si al crear se detecta que ya existe una:\n\nif($existeCritica > 0){\n    return view('___', ['mensaje' => \"Ya habías criticado esta película\"]);\n}\n\n¿A qué vista genérica de la Tarea 5 se está redirigiendo para mostrar el problema?",
    "opciones": [
      "fallo",
      "errores",
      "principal",
      "publico"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En los layouts de la Tarea 5 (ej. privado.blade.php), para indicar dónde se debe volcar el código de la vista hija:\n\n@___('contenido')",
    "opciones": [
      "yield",
      "section",
      "include",
      "content"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el controlador, para recuperar un dato enviado por POST, como en `mostrarFormularioBorradoRMM`:\n\n$critica_id = $request->___('critica_id');\n\n¿Qué método del objeto $request extrae el valor?",
    "opciones": [
      "value",
      "get",
      "input",
      "fetch"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En una vista Blade, para crear un enlace hacia una ruta que en `web.php` definimos con `->name('zonaprivada')`:\n\n<a href=\"{{ ___('zonaprivada') }}\">\n\n¿Qué función helper se usa dentro de las llaves?",
    "opciones": [
      "url",
      "link",
      "path",
      "route"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En las migraciones, vemos encadenamientos en las claves foráneas. ¿Qué hace falta para que también se actualice en cascada?\n\n->onDelete('cascade')->___('cascade');",
    "opciones": [
      "onModify",
      "onChange",
      "onUpdate",
      "onEdit"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Al pasar datos a una vista desde el controlador:\n\nreturn view('formnuevacriticaRMM', [\n    '___' => $pelicula\n]);\n\nSi en la vista Blade imprimimos `{{ $pelicula->titulo }}`, ¿cuál es la clave del array asociativo en el controlador?",
    "opciones": [
      "data",
      "pelicula",
      "item",
      "p"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En RMMSeeder, iteramos sobre un array asociativo:\n\n$generos = ['animación' => '...', 'drama' => '...'];\nforeach ($generos as $___ => $descripcion)\n\n¿Qué nombre recibe la variable de la clave del array en este bucle?",
    "opciones": [
      "key",
      "id",
      "nombre",
      "tipo"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Observa el namespace importado en el modelo PeliculaRMM para el retorno de HasMany:\n\nuse Illuminate\\Database\\Eloquent\\Relations\\___;\n\n¿Qué clase se importa para que PHP 8 reconozca el tipado `: HasMany`?",
    "opciones": [
      "HasMany",
      "Relation",
      "Collection",
      "EloquentHasMany"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el modelo User, los atributos que se pueden rellenar de forma masiva (mass assignment) se definen en un array llamado:\n\nprotected $___ = [\n    'name', 'email', 'password',\n];",
    "opciones": [
      "guarded",
      "fillable",
      "allowed",
      "inputs"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el RMMSeeder, para obtener la fecha y hora actual y marcar un email como verificado:\n\n$u1->email_verified_at = ___();\n\n¿Qué función helper de Laravel devuelve una instancia de Carbon con la hora actual?",
    "opciones": [
      "time",
      "date",
      "current",
      "now"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el método `crearNuevaCriticaRMM`, vemos que se encadenan varios métodos where:\n\nCriticaRMM::where('usuario', Auth::id())\n    ->___('pelicula', $pelicula_id)\n    ->count();\n\n¿Qué método se utiliza para añadir una segunda condición AND a la consulta SQL generada?",
    "opciones": [
      "andWhere",
      "where",
      "add",
      "filter"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En la migración `criticas`, además del ID de la película y el usuario, al final se incluye:\n\n$table->___();\n\nEsto es indispensable para que Eloquent pueda gestionar automáticamente cuándo se escribió la crítica.",
    "opciones": [
      "dates()",
      "timestamps()",
      "created_at()",
      "datetime()"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el controlador `LoginController`, el método de cierre de sesión se llama:\n\npublic function ___(Request $request)\n{\n    Auth::logout();\n    ...\n}\n\n¿Cómo nombraste el método según el archivo de tu tarea?",
    "opciones": [
      "logout",
      "cerrarSesion",
      "logoutRMM",
      "exit"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el layout `publico.blade.php`, se evalúa la autenticación de esta forma:\n\n@auth\n   Cerrar sesión\n___\n   Hola, invitado\n@endauth\n\n¿Qué directiva Blade falta para la condición 'si no' (el equivalente a un bloque else)?",
    "opciones": [
      "@elseif",
      "@guest",
      "@else",
      "@otherwise"
    ],
    "correcta": 2
  },{
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Dado el siguiente fragmento del LoginController:\n\nif (Auth::attempt($credentials)) {\n    $request->session()->___();\n    return redirect()->intended(route('zonaprivada'));\n}\n\n¿Qué método falta en el hueco '___' para renovar el ID de la sesión tras un login exitoso?",
    "opciones": [
      "start",
      "refresh",
      "regenerate",
      "restart"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el LoginController, en caso de fallo, se devuelve el siguiente código:\n\nreturn back()->___([\n    'email' => 'El email o la contraseña no son válidos.',\n])->onlyInput('email');\n\n¿Qué método completa el hueco para enviar el array de errores a la vista?",
    "opciones": [
      "withErrors",
      "sendErrors",
      "flashErrors",
      "putErrors"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Observa el cierre de sesión en LoginController:\n\n$request->session()->invalidate();\n$request->session()->___();\n\n¿Qué método se ejecuta a continuación para evitar ataques CSRF renovando el token?",
    "opciones": [
      "clearToken",
      "regenerateToken",
      "destroyToken",
      "refreshToken"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Identifica qué método falta en la validación del LoginController:\n\n$credentials = $request->___([\n    'email' => 'required|email',\n    'password' => 'required',\n]);",
    "opciones": [
      "verify",
      "check",
      "validate",
      "sanitize"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En LoginController, tras un login correcto vemos:\n\nreturn redirect()->___(route('zonaprivada'));\n\n¿Qué método asegura que, si el usuario intentaba acceder a una URL protegida antes de loguearse, sea redirigido a esa URL en lugar de la ruta por defecto?",
    "opciones": [
      "target",
      "intended",
      "route",
      "previous"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En CriticaControllerRMM, dentro del método crearNuevaCriticaRMM, vemos esta regla:\n\n$request->validate([\n    'valoracion' => 'required|___|between:1,5',\n    ...\n]);\n\n¿Qué regla de validación falta para asegurar que la valoración sea un número sin decimales?",
    "opciones": [
      "numeric",
      "number",
      "int",
      "integer"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el CriticaControllerRMM, se busca la crítica a borrar de esta manera:\n\n$critica = CriticaRMM::___($critica_id);\n\n¿Qué método de Eloquent falta para buscar un registro directamente por su Clave Primaria (id)?",
    "opciones": [
      "find",
      "get",
      "whereId",
      "search"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Dado el siguiente fragmento para comprobar si un usuario ya votó:\n\n$existeCritica = CriticaRMM::where('usuario', Auth::id())\n    ->where('pelicula', $pelicula_id)\n    ->___();\n\n¿Qué método falta al final para obtener el número total de coincidencias?",
    "opciones": [
      "sum()",
      "total()",
      "count()",
      "get()"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el borrado de críticas, hay un 'doble check' de seguridad:\n\nif ($critica->usuario !== ___) {\n    return view('errores', [...]);\n}\n\n¿Qué código falta para compararlo con el identificador del usuario conectado?",
    "opciones": [
      "Auth::user()",
      "Session::id()",
      "Auth::id()",
      "User::current()"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Para comprobar que se ha marcado el checkbox de confirmación al borrar:\n\nif (!$request->___('confirmacion')) {\n    return view('errores', [...]);\n}\n\n¿Qué método de la clase Request falta para verificar si el campo 'confirmacion' está presente en la petición?",
    "opciones": [
      "has",
      "exists",
      "contains",
      "isset"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Una vez validadas todas las comprobaciones de borrado:\n\n$critica->___();\nreturn view('mensaje', [...]);\n\n¿Qué método de Eloquent ejecuta el comando DELETE en la base de datos para ese registro?",
    "opciones": [
      "destroy",
      "remove",
      "drop",
      "delete"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En CriticaControllerRMM, para cargar el formulario de nueva crítica se devuelve:\n\nreturn ___('formnuevacriticaRMM', [\n    'pelicula' => $pelicula\n]);\n\n¿Qué función global falta para renderizar la plantilla Blade?",
    "opciones": [
      "render",
      "template",
      "view",
      "display"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el archivo RMMSeeder, al crear el Usuario 1:\n\n$u1->password = ___::make('RMM1');\n\n¿Qué Facade se usa para encriptar la contraseña?",
    "opciones": [
      "Crypt",
      "Bcrypt",
      "Hash",
      "Password"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el RMMSeeder, se evita duplicar usuarios con:\n\nif (User::___('email', 'RMM1@email.RMM')->count() == 0) {\n    ...\n}\n\n¿Qué método de Eloquent va en el hueco para filtrar por la columna 'email'?",
    "opciones": [
      "find",
      "filter",
      "where",
      "select"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En RMMSeeder, para obtener el objeto del género 'animación' y asignar su ID después:\n\n$genAnimacion = GeneroRMM::where('nombre', 'animación')->___();\n\n¿Qué método usamos para obtener solo el primer registro que coincida?",
    "opciones": [
      "get()",
      "all()",
      "one()",
      "first()"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Siguiendo con el RMMSeeder, ¿cómo se asigna la clave foránea a la película?\n\n$p1->genero = $genAnimacion->___;\n\n¿Qué propiedad del objeto `$genAnimacion` necesitamos?",
    "opciones": [
      "id",
      "nombre",
      "pk",
      "value"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En la migración de 'peliculas', para crear la columna 'duracion' (en minutos):\n\n$table->___('duracion');\n\n¿Qué tipo de columna se utiliza en este caso?",
    "opciones": [
      "time",
      "integer",
      "float",
      "number"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En la migración de 'criticas', se crea la clave foránea a 'peliculas' en una sola línea:\n\n$table->___('pelicula')->constrained('peliculas')->onDelete('cascade');\n\n¿Qué método de Blueprint permite crear la columna y prepararla como clave foránea de forma simplificada?",
    "opciones": [
      "foreign",
      "foreignKey",
      "foreignId",
      "relation"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En la migración de 'peliculas', se usa la forma tradicional para la clave foránea:\n\n$table->foreign('genero')->___('id')->on('generos');\n\n¿Qué método de Blueprint falta para indicar a qué columna de la tabla externa apunta?",
    "opciones": [
      "pointsTo",
      "references",
      "target",
      "connects"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Para limitar el título de la película a 60 caracteres en la migración:\n\n$table->___('titulo', 60);\n\n¿Qué método se emplea para crear un VARCHAR?",
    "opciones": [
      "varchar",
      "text",
      "string",
      "char"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En la migración de 'peliculas', el campo 'argumento' no es muy largo. Según el código de la Tarea 5:\n\n$table->___('argumento');\n\n¿Qué método se usó para almacenar el resumen de la película?",
    "opciones": [
      "longText",
      "tinyText",
      "string",
      "text"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Al final de cada método up() en las migraciones vemos:\n\n$table->___();\n\n¿Qué método genera automáticamente las columnas created_at y updated_at?",
    "opciones": [
      "dates()",
      "time()",
      "timestamps()",
      "createdAt()"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el método down() de las migraciones:\n\npublic function down(): void {\n    Schema::___('peliculas');\n}\n\n¿Qué método se llama para borrar la tabla si existe al revertir la migración?",
    "opciones": [
      "delete",
      "dropIfExists",
      "truncate",
      "removeTable"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el modelo CriticaRMM:\n\npublic function usuarioAsociado(): ___ \n{\n    return $this->belongsTo(User::class, 'usuario');\n}\n\nSegún PHP 8, ¿cuál es el tipado de retorno correcto (que falta en el hueco)?",
    "opciones": [
      "User",
      "HasOne",
      "BelongsTo",
      "Object"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el modelo User:\n\npublic function criticas(): ___ \n{\n    return $this->hasMany(CriticaRMM::class, 'usuario');\n}\n\n¿Cuál es el tipado de retorno correcto para una relación 'Un usuario tiene MUCHAS críticas'?",
    "opciones": [
      "HasMany",
      "BelongsToMany",
      "Array",
      "Collection"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el modelo User, ¿cómo se llama la propiedad que convierte 'email_verified_at' en un objeto datetime y la 'password' en un string hasheado?\n\nprotected $___ = [\n    'email_verified_at' => 'datetime',\n    'password' => 'hashed',\n];",
    "opciones": [
      "types",
      "conversions",
      "casts",
      "mutators"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el modelo User, para evitar que la contraseña se envíe al serializar el modelo a JSON:\n\nprotected $___ = [\n    'password',\n    'remember_token',\n];",
    "opciones": [
      "private",
      "hidden",
      "guarded",
      "protected"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el modelo PeliculaRMM:\n\nreturn $this->belongsTo(GeneroRMM::class, '___');\n\n¿Qué valor contiene el segundo parámetro si queremos indicar el nombre exacto de la clave foránea en la tabla peliculas?",
    "opciones": [
      "id_genero",
      "generos_id",
      "genero",
      "generoRMM_id"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En las vistas de la tarea (ej. formnuevacriticaRMM.blade.php), la primera línea es:\n\n___('layouts.publico')\n\n¿Qué directiva Blade indica que esta vista hereda de una plantilla base?",
    "opciones": [
      "@include",
      "@layout",
      "@extends",
      "@master"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Inmediatamente después de extender el layout en Blade:\n\n___('titulo', 'Valorar película')\n\n¿Qué directiva asigna el texto 'Valorar película' a la sección 'titulo' del layout?",
    "opciones": [
      "@yield",
      "@section",
      "@set",
      "@title"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Dentro del `<form method=\"POST\" ...>` en Blade, ¿qué directiva es imperativa incluir para que Laravel no rechace la petición con un error 419?\n\n___",
    "opciones": [
      "@csrf",
      "@token",
      "@secure",
      "@auth"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En layouts/publico.blade.php, se evalúa si hay usuario conectado:\n\n___\n   Cerrar sesión\n@else\n   Hola, invitado\n@endauth\n\n¿Qué directiva inicia este bloque if especial para autenticación?",
    "opciones": [
      "@if(Auth::check())",
      "@guest",
      "@auth",
      "@user"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el archivo `.env`, se configura la variable para ver errores detallados durante el desarrollo:\n\nAPP_DEBUG=___\n\n¿Qué valor tiene en tu archivo de la Tarea 5?",
    "opciones": [
      "false",
      "1",
      "true",
      "on"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el archivo `.env`, el nombre de la base de datos a la que se conecta Laravel es:\n\nDB_DATABASE=___\n\nSegún la Tarea 5, el valor es:",
    "opciones": [
      "laravel",
      "peliculas_db",
      "2526_dwes05",
      "tarea5"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Si en un controlador ejecuto:\n\nreturn view('mensaje', [\n    'mensaje' => \"Has valorado con un \" . $critica->___ . \"/5.\"\n]);\n\n¿A qué atributo del objeto `$critica` accedemos para mostrar la nota numérica?",
    "opciones": [
      "puntuacion",
      "nota",
      "valor",
      "valoracion"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el array de mensajes personalizados de `validate()` del CriticaControllerRMM:\n\n[\n    'valoracion.required' => 'Debes seleccionar una valoración del desplegable.',\n    ...\n]\n\n¿En qué posición de los argumentos de la función `validate($arg1, $arg2)` se pasa este array?",
    "opciones": [
      "Como primer argumento.",
      "Como segundo argumento.",
      "Como tercer argumento.",
      "No se pasa a validate(), se define en el modelo."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el controlador de críticas, si al crear se detecta que ya existe una:\n\nif($existeCritica > 0){\n    return view('___', ['mensaje' => \"Ya habías criticado esta película\"]);\n}\n\n¿A qué vista genérica de la Tarea 5 se está redirigiendo para mostrar el problema?",
    "opciones": [
      "fallo",
      "errores",
      "principal",
      "publico"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En los layouts de la Tarea 5 (ej. privado.blade.php), para indicar dónde se debe volcar el código de la vista hija:\n\n@___('contenido')",
    "opciones": [
      "yield",
      "section",
      "include",
      "content"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el controlador, para recuperar un dato enviado por POST, como en `mostrarFormularioBorradoRMM`:\n\n$critica_id = $request->___('critica_id');\n\n¿Qué método del objeto $request extrae el valor?",
    "opciones": [
      "value",
      "get",
      "input",
      "fetch"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En una vista Blade, para crear un enlace hacia una ruta que en `web.php` definimos con `->name('zonaprivada')`:\n\n<a href=\"{{ ___('zonaprivada') }}\">\n\n¿Qué función helper se usa dentro de las llaves?",
    "opciones": [
      "url",
      "link",
      "path",
      "route"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En las migraciones, vemos encadenamientos en las claves foráneas. ¿Qué hace falta para que también se actualice en cascada?\n\n->onDelete('cascade')->___('cascade');",
    "opciones": [
      "onModify",
      "onChange",
      "onUpdate",
      "onEdit"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Al pasar datos a una vista desde el controlador:\n\nreturn view('formnuevacriticaRMM', [\n    '___' => $pelicula\n]);\n\nSi en la vista Blade imprimimos `{{ $pelicula->titulo }}`, ¿cuál es la clave del array asociativo en el controlador?",
    "opciones": [
      "data",
      "pelicula",
      "item",
      "p"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En RMMSeeder, iteramos sobre un array asociativo:\n\n$generos = ['animación' => '...', 'drama' => '...'];\nforeach ($generos as $___ => $descripcion)\n\n¿Qué nombre recibe la variable de la clave del array en este bucle?",
    "opciones": [
      "key",
      "id",
      "nombre",
      "tipo"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "Observa el namespace importado en el modelo PeliculaRMM para el retorno de HasMany:\n\nuse Illuminate\\Database\\Eloquent\\Relations\\___;\n\n¿Qué clase se importa para que PHP 8 reconozca el tipado `: HasMany`?",
    "opciones": [
      "HasMany",
      "Relation",
      "Collection",
      "EloquentHasMany"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el modelo User, los atributos que se pueden rellenar de forma masiva (mass assignment) se definen en un array llamado:\n\nprotected $___ = [\n    'name', 'email', 'password',\n];",
    "opciones": [
      "guarded",
      "fillable",
      "allowed",
      "inputs"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el RMMSeeder, para obtener la fecha y hora actual y marcar un email como verificado:\n\n$u1->email_verified_at = ___();\n\n¿Qué función helper de Laravel devuelve una instancia de Carbon con la hora actual?",
    "opciones": [
      "time",
      "date",
      "current",
      "now"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el método `crearNuevaCriticaRMM`, vemos que se encadenan varios métodos where:\n\nCriticaRMM::where('usuario', Auth::id())\n    ->___('pelicula', $pelicula_id)\n    ->count();\n\n¿Qué método se utiliza para añadir una segunda condición AND a la consulta SQL generada?",
    "opciones": [
      "andWhere",
      "where",
      "add",
      "filter"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En la migración `criticas`, además del ID de la película y el usuario, al final se incluye:\n\n$table->___();\n\nEsto es indispensable para que Eloquent pueda gestionar automáticamente cuándo se escribió la crítica.",
    "opciones": [
      "dates()",
      "timestamps()",
      "created_at()",
      "datetime()"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el controlador `LoginController`, el método de cierre de sesión se llama:\n\npublic function ___(Request $request)\n{\n    Auth::logout();\n    ...\n}\n\n¿Cómo nombraste el método según el archivo de tu tarea?",
    "opciones": [
      "logout",
      "cerrarSesion",
      "logoutRMM",
      "exit"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 cuarta parte",
    "pregunta": "En el layout `publico.blade.php`, se evalúa la autenticación de esta forma:\n\n@auth\n   Cerrar sesión\n___\n   Hola, invitado\n@endauth\n\n¿Qué directiva Blade falta para la condición 'si no' (el equivalente a un bloque else)?",
    "opciones": [
      "@elseif",
      "@guest",
      "@else",
      "@otherwise"
    ],
    "correcta": 2
  },
  {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Observa este código de la migración de 'generos':\n$table->____('nombre', 45);\n¿Qué método falta para indicar que 'nombre' es una cadena de texto de máximo 45 caracteres?",
        "opciones": [
            "text",
            "varchar",
            "string",
            "char"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En la migración de 'peliculas', para relacionar la clave foránea 'genero', el código es:\n$table->foreign('genero')->____('id')->on('generos');\n¿Qué palabra falta para completar la relación?",
        "opciones": [
            "references",
            "pointsTo",
            "constrained",
            "links"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En la migración de 'criticas', usaste una forma más corta para las claves foráneas:\n$table->foreignId('pelicula')->____('peliculas')->onDelete('cascade');\n¿Qué método falta en el hueco?",
        "opciones": [
            "references",
            "constrained",
            "onTable",
            "linkedTo"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En todas las migraciones, dentro del método down(), aparece esto:\nSchema::____('criticas');\n¿Qué instrucción borra la tabla si existe?",
        "opciones": [
            "deleteTable",
            "removeIfExists",
            "dropIfExists",
            "destroy"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'RMMSeeder.php', para encriptar la contraseña de los usuarios usaste:\n$u1->password = ____::make('RMM1');\n¿Qué clase de Laravel o Facade se usa aquí?",
        "opciones": [
            "Crypt",
            "Hash",
            "Bcrypt",
            "Password"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En el seeder, para verificar si un usuario ya existe antes de crearlo, pones:\nif (User::____('email', 'RMM1@email.RMM')->count() == 0)\n¿Qué método falta?",
        "opciones": [
            "find",
            "search",
            "where",
            "get"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Para obtener el género 'animación' en el seeder y poder asignarlo a una película, el código es:\n$genAnimacion = GeneroRMM::where('nombre', 'animación')->____();\n¿Qué método finaliza la consulta devolviendo el primer resultado?",
        "opciones": [
            "get",
            "first",
            "all",
            "takeOne"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Al insertar la película en el seeder, le asignas el género así:\n$p1->genero = $genAnimacion->____;\n¿Qué propiedad del objeto '$genAnimacion' debes extraer para guardarla como clave foránea?",
        "opciones": [
            "id",
            "nombre",
            "key",
            "value"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En el modelo 'CriticaRMM.php', la declaración de la clase es:\nclass CriticaRMM extends ____ { ... }\n¿De qué clase base de Eloquent deben heredar los modelos?",
        "opciones": [
            "Controller",
            "Migration",
            "Model",
            "Eloquent"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En los modelos utilizas: `use HasFactory;`. ¿Qué es exactamente 'HasFactory' en la estructura del código PHP?",
        "opciones": [
            "Un controlador",
            "Una interfaz",
            "Un Trait",
            "Un Facade"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En el modelo 'User', tienes esto para proteger contraseñas en serializaciones:\nprotected $____ = ['password', 'remember_token'];\n¿Cómo se llama la propiedad?",
        "opciones": [
            "hidden",
            "invisible",
            "protected",
            "secret"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "También en 'User', tienes la propiedad `$casts`:\nprotected $casts = ['password' => '____'];\n¿Qué valor se asigna para que Laravel encripte automáticamente la contraseña?",
        "opciones": [
            "encrypted",
            "hashed",
            "bcrypt",
            "secure"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'CriticaRMM.php', la relación N:1 hacia PeliculaRMM se define con:\npublic function peliculaAsociada(): ____ { ... }\n¿Qué tipo de retorno debe indicarse?",
        "opciones": [
            "HasOne",
            "BelongsTo",
            "HasMany",
            "BelongsToMany"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'PeliculaRMM.php', la relación 1:N hacia las críticas se define con:\npublic function criticas(): ____ { ... }\n¿Qué tipo de retorno debe indicarse?",
        "opciones": [
            "HasMany",
            "HasOne",
            "BelongsTo",
            "BelongsToMany"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En el controlador 'CriticaControllerRMM', recuperas el ID de la película así:\n$pelicula_id = $request->____('pelicula_id') ?? old('pelicula_id');\n¿Qué método de Request extrae el valor?",
        "opciones": [
            "get",
            "post",
            "input",
            "value"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Si la película no existe en 'mostrarFormularioCriticaRMM', devuelves:\nreturn ____('errores', ['mensaje' => \"La película no existe\"]);\n¿Qué helper falta?",
        "opciones": [
            "redirect",
            "response",
            "view",
            "blade"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Para verificar si el usuario ya votó, usaste:\nCriticaRMM::where('usuario', Auth::____())->where(...)->count();\n¿Cómo extraes el ID del usuario logueado?",
        "opciones": [
            "user_id()",
            "id()",
            "get()",
            "key()"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En la validación de 'crearNuevaCriticaRMM', escribiste:\n'valoracion' => 'required|____|between:1,5'\n¿Qué regla exige que el dato sea un número sin decimales?",
        "opciones": [
            "number",
            "numeric",
            "integer",
            "digits"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Al instanciar la crítica en el controlador, el código correcto es:\n$critica = ____ CriticaRMM();\n¿Qué palabra reservada de PHP crea el objeto?",
        "opciones": [
            "create",
            "make",
            "new",
            "insert"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Tras rellenar los datos de '$critica', ¿qué método invocas para guardarlo en la base de datos?\n$critica->____();",
        "opciones": [
            "insert",
            "store",
            "push",
            "save"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En el controlador de borrado, verificas el checkbox de confirmación con:\nif (!$request->____('confirmacion')) { ... }\n¿Qué método comprueba si ese campo está presente en la petición?",
        "opciones": [
            "exists",
            "has",
            "contains",
            "filled"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'borrarCriticaRMM', para eliminar físicamente el registro de la BD usas:\n$critica->____();",
        "opciones": [
            "delete",
            "remove",
            "destroy",
            "drop"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'LoginController', para intentar loguear al usuario se usa:\nif (Auth::____($credentials)) { ... }",
        "opciones": [
            "login",
            "check",
            "attempt",
            "verify"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'LoginController', si el login es correcto, el código es:\n$request->session()->____();\n¿Qué método regenera el ID de la sesión por seguridad?",
        "opciones": [
            "restart",
            "regenerate",
            "renew",
            "start"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'LoginController', tras el login exitoso rediriges con:\nreturn redirect()->____(route('zonaprivada'));\n¿Qué método envía a la URL que el usuario intentaba visitar antes de que le pidieran login?",
        "opciones": [
            "intended",
            "previous",
            "back",
            "to"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Si falla el login, el controlador devuelve:\nreturn back()->withErrors(...)->____('email');\n¿Qué método de redirección mantiene el email que el usuario había escrito?",
        "opciones": [
            "keepInput",
            "withInput",
            "onlyInput",
            "preserve"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En el método 'logoutRMM', lo primero que ejecutas es:\nAuth::____();",
        "opciones": [
            "logout",
            "exit",
            "close",
            "destroy"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Para cerrar sesión completamente, también invalidas la sesión:\n$request->session()->____();",
        "opciones": [
            "destroy",
            "clear",
            "invalidate",
            "flush"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Y para rematar el cierre de sesión, proteges contra CSRF regenerando el token:\n$request->session()->____();",
        "opciones": [
            "regenerateCsrf",
            "regenerateToken",
            "newToken",
            "resetToken"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Pasando a las vistas, en 'formnuevacriticaRMM.blade.php', la primera línea es:\n@____('layouts.publico')\n¿Qué directiva hereda de la plantilla base?",
        "opciones": [
            "include",
            "extends",
            "inherits",
            "layout"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Para indicar el título de la página en Blade, usas:\n@____('titulo', 'Valorar película')",
        "opciones": [
            "section",
            "yield",
            "slot",
            "title"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En la plantilla base ('layouts/publico.blade.php'), para indicar dónde va el contenido principal pones:\n@____('contenido')",
        "opciones": [
            "show",
            "section",
            "yield",
            "content"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En Blade, para imprimir el título de la película de forma segura escapando caracteres HTML, el código exacto es:",
        "opciones": [
            "{!! $pelicula->titulo !!}",
            "{{ $pelicula->titulo }}",
            "<?php echo $pelicula->titulo ?>",
            "@print($pelicula->titulo)"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En los enlaces, para generar la URL hacia la zona pública usando su nombre, pones:\n<a href=\"{{ ____('zonapublica') }}\">",
        "opciones": [
            "url",
            "path",
            "route",
            "link"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Dentro del `<form>` de nueva crítica, es obligatorio poner el token de seguridad. ¿Qué fragmento de código usas?",
        "opciones": [
            "@token",
            "{{ csrf_field() }}",
            "@csrf",
            "<input type='hidden' name='csrf'>"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Para verificar en la vista si la validación del controlador falló, pones:\n@if ($errors->____())",
        "opciones": [
            "exist",
            "fails",
            "has",
            "any"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Para recorrer e imprimir los errores de validación en la vista, usas el código:\n@foreach ($errors->____() as $error)",
        "opciones": [
            "get",
            "all",
            "list",
            "messages"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En el formulario, para que el textarea no pierda lo que escribió el usuario tras un error de validación, usas:\n<textarea ...>{{ ____('comentario') }}</textarea>",
        "opciones": [
            "old",
            "previous",
            "keep",
            "back"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En el menú de navegación ('layouts.publico'), muestras el botón de 'Iniciar sesión' o el de 'Cerrar sesión' dependiendo de si el usuario está identificado. El bloque es:\n@____\n  Hola, {{ Auth::user()->name }}\n@else\n  Hola, invitado\n@endauth",
        "opciones": [
            "if(Auth::check())",
            "login",
            "auth",
            "user"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Para cargar tu archivo CSS en el layout, usas:\n<link rel=\"stylesheet\" href=\"{{ ____('css/estilos.css') }}\">",
        "opciones": [
            "url",
            "public",
            "asset",
            "file"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'principal.blade.php', imprimes la media de valoraciones asegurando 2 decimales usando una función nativa de PHP. ¿Cuál es el código exacto?",
        "opciones": [
            "{{ round($pelicula->criticas_avg_valoracion, 2) }}",
            "{{ format_number($pelicula->criticas_avg_valoracion, 2) }}",
            "{{ number_format($pelicula->criticas_avg_valoracion, 2) }}",
            "{{ $pelicula->criticas_avg_valoracion->format(2) }}"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'principal.blade.php' tienes el siguiente código:\n{{-- Si hay críticas, mostramos la media... --}}\n¿Qué hace exactamente este fragmento?",
        "opciones": [
            "Es una función condicional oculta.",
            "Es un comentario HTML visible en el código fuente.",
            "Es un comentario de Blade, ignorado al procesar la vista y oculto para el navegador.",
            "Es una directiva para depurar variables."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'errores.blade.php', para mostrar el título usas:\n<h1>{{ $titulo ____ 'Upps! Acción no permitida.' }}</h1>\n¿Qué operador completa el código para dar un valor por defecto si $titulo es nulo?",
        "opciones": [
            "||",
            "or",
            "??",
            "?:"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'confirmarborradoRMM.blade.php', envías el ID de la crítica en la URL de acción del formulario así:\n<form action=\"{{ route('borrarcriticaRMM', $critica->____) }}\" method=\"POST\">",
        "opciones": [
            "id",
            "key",
            "index",
            "val"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'principal.blade.php', el bucle para iterar sobre todas las películas enviadas por el controlador es:\n@foreach ($peliculasRMM ____ $pelicula)\n¿Qué palabra reservada de PHP falta en el hueco?",
        "opciones": [
            "to",
            "in",
            "as",
            "->"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'formnuevacriticaRMM.blade.php', necesitas que el controlador sepa a qué película se refiere la crítica enviada por POST. Para ello, usas un campo oculto. Identifica el código correcto:",
        "opciones": [
            "<input type=\"hidden\" name=\"pelicula_id\" value=\"{{ $pelicula->id }}\">",
            "<input type=\"hide\" id=\"pelicula_id\" value=\"{{ $pelicula->id }}\">",
            "{{ Form::hidden('pelicula_id', $pelicula->id) }}",
            "<!-- pelicula_id = {{ $pelicula->id }} -->"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'privada_principal.blade.php', accedes al título de la película asociada a una crítica para mostrarlo en la tabla con este fragmento:\n<td><strong>{{ $critica->____->titulo }}</strong></td>\n¿Qué método de relación (definido en el modelo) usaste en el hueco?",
        "opciones": [
            "pelicula",
            "peliculaAsociada",
            "relPelicula",
            "getPelicula"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En tu controlador 'CriticaControllerRMM', ¿cómo recuperas si el usuario pulsó el checkbox 'confirmacion' para borrar la crítica?",
        "opciones": [
            "$request->checkbox('confirmacion')",
            "$request->has('confirmacion')",
            "$_POST['confirmacion']",
            "isset($confirmacion)"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'LoginController', al validar los datos, usas:\n$credentials = $request->validate([\n  'email' => 'required|____',\n  'password' => 'required',\n]);\n¿Qué regla asegura que el formato sea un correo electrónico?",
        "opciones": [
            "mail",
            "email",
            "correo",
            "format:email"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En tu vista 'principal.blade.php', el hueco `@____` al final del bucle foreach cierra correctamente la iteración:",
        "opciones": [
            "endfor",
            "stopforeach",
            "endforeach",
            "finish"
        ],
        "correcta": 2
    },{
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Observa este código de la migración de 'generos':\n$table->____('nombre', 45);\n¿Qué método falta para indicar que 'nombre' es una cadena de texto de máximo 45 caracteres?",
        "opciones": [
            "text",
            "varchar",
            "string",
            "char"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En la migración de 'peliculas', para relacionar la clave foránea 'genero', el código es:\n$table->foreign('genero')->____('id')->on('generos');\n¿Qué palabra falta para completar la relación?",
        "opciones": [
            "references",
            "pointsTo",
            "constrained",
            "links"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En la migración de 'criticas', usaste una forma más corta para las claves foráneas:\n$table->foreignId('pelicula')->____('peliculas')->onDelete('cascade');\n¿Qué método falta en el hueco?",
        "opciones": [
            "references",
            "constrained",
            "onTable",
            "linkedTo"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En todas las migraciones, dentro del método down(), aparece esto:\nSchema::____('criticas');\n¿Qué instrucción borra la tabla si existe?",
        "opciones": [
            "deleteTable",
            "removeIfExists",
            "dropIfExists",
            "destroy"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'RMMSeeder.php', para encriptar la contraseña de los usuarios usaste:\n$u1->password = ____::make('RMM1');\n¿Qué clase de Laravel o Facade se usa aquí?",
        "opciones": [
            "Crypt",
            "Hash",
            "Bcrypt",
            "Password"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En el seeder, para verificar si un usuario ya existe antes de crearlo, pones:\nif (User::____('email', 'RMM1@email.RMM')->count() == 0)\n¿Qué método falta?",
        "opciones": [
            "find",
            "search",
            "where",
            "get"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Para obtener el género 'animación' en el seeder y poder asignarlo a una película, el código es:\n$genAnimacion = GeneroRMM::where('nombre', 'animación')->____();\n¿Qué método finaliza la consulta devolviendo el primer resultado?",
        "opciones": [
            "get",
            "first",
            "all",
            "takeOne"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Al insertar la película en el seeder, le asignas el género así:\n$p1->genero = $genAnimacion->____;\n¿Qué propiedad del objeto '$genAnimacion' debes extraer para guardarla como clave foránea?",
        "opciones": [
            "id",
            "nombre",
            "key",
            "value"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En el modelo 'CriticaRMM.php', la declaración de la clase es:\nclass CriticaRMM extends ____ { ... }\n¿De qué clase base de Eloquent deben heredar los modelos?",
        "opciones": [
            "Controller",
            "Migration",
            "Model",
            "Eloquent"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En los modelos utilizas: `use HasFactory;`. ¿Qué es exactamente 'HasFactory' en la estructura del código PHP?",
        "opciones": [
            "Un controlador",
            "Una interfaz",
            "Un Trait",
            "Un Facade"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En el modelo 'User', tienes esto para proteger contraseñas en serializaciones:\nprotected $____ = ['password', 'remember_token'];\n¿Cómo se llama la propiedad?",
        "opciones": [
            "hidden",
            "invisible",
            "protected",
            "secret"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "También en 'User', tienes la propiedad `$casts`:\nprotected $casts = ['password' => '____'];\n¿Qué valor se asigna para que Laravel encripte automáticamente la contraseña?",
        "opciones": [
            "encrypted",
            "hashed",
            "bcrypt",
            "secure"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'CriticaRMM.php', la relación N:1 hacia PeliculaRMM se define con:\npublic function peliculaAsociada(): ____ { ... }\n¿Qué tipo de retorno debe indicarse?",
        "opciones": [
            "HasOne",
            "BelongsTo",
            "HasMany",
            "BelongsToMany"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'PeliculaRMM.php', la relación 1:N hacia las críticas se define con:\npublic function criticas(): ____ { ... }\n¿Qué tipo de retorno debe indicarse?",
        "opciones": [
            "HasMany",
            "HasOne",
            "BelongsTo",
            "BelongsToMany"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En el controlador 'CriticaControllerRMM', recuperas el ID de la película así:\n$pelicula_id = $request->____('pelicula_id') ?? old('pelicula_id');\n¿Qué método de Request extrae el valor?",
        "opciones": [
            "get",
            "post",
            "input",
            "value"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Si la película no existe en 'mostrarFormularioCriticaRMM', devuelves:\nreturn ____('errores', ['mensaje' => \"La película no existe\"]);\n¿Qué helper falta?",
        "opciones": [
            "redirect",
            "response",
            "view",
            "blade"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Para verificar si el usuario ya votó, usaste:\nCriticaRMM::where('usuario', Auth::____())->where(...)->count();\n¿Cómo extraes el ID del usuario logueado?",
        "opciones": [
            "user_id()",
            "id()",
            "get()",
            "key()"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En la validación de 'crearNuevaCriticaRMM', escribiste:\n'valoracion' => 'required|____|between:1,5'\n¿Qué regla exige que el dato sea un número sin decimales?",
        "opciones": [
            "number",
            "numeric",
            "integer",
            "digits"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Al instanciar la crítica en el controlador, el código correcto es:\n$critica = ____ CriticaRMM();\n¿Qué palabra reservada de PHP crea el objeto?",
        "opciones": [
            "create",
            "make",
            "new",
            "insert"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Tras rellenar los datos de '$critica', ¿qué método invocas para guardarlo en la base de datos?\n$critica->____();",
        "opciones": [
            "insert",
            "store",
            "push",
            "save"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En el controlador de borrado, verificas el checkbox de confirmación con:\nif (!$request->____('confirmacion')) { ... }\n¿Qué método comprueba si ese campo está presente en la petición?",
        "opciones": [
            "exists",
            "has",
            "contains",
            "filled"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'borrarCriticaRMM', para eliminar físicamente el registro de la BD usas:\n$critica->____();",
        "opciones": [
            "delete",
            "remove",
            "destroy",
            "drop"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'LoginController', para intentar loguear al usuario se usa:\nif (Auth::____($credentials)) { ... }",
        "opciones": [
            "login",
            "check",
            "attempt",
            "verify"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'LoginController', si el login es correcto, el código es:\n$request->session()->____();\n¿Qué método regenera el ID de la sesión por seguridad?",
        "opciones": [
            "restart",
            "regenerate",
            "renew",
            "start"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'LoginController', tras el login exitoso rediriges con:\nreturn redirect()->____(route('zonaprivada'));\n¿Qué método envía a la URL que el usuario intentaba visitar antes de que le pidieran login?",
        "opciones": [
            "intended",
            "previous",
            "back",
            "to"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Si falla el login, el controlador devuelve:\nreturn back()->withErrors(...)->____('email');\n¿Qué método de redirección mantiene el email que el usuario había escrito?",
        "opciones": [
            "keepInput",
            "withInput",
            "onlyInput",
            "preserve"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En el método 'logoutRMM', lo primero que ejecutas es:\nAuth::____();",
        "opciones": [
            "logout",
            "exit",
            "close",
            "destroy"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Para cerrar sesión completamente, también invalidas la sesión:\n$request->session()->____();",
        "opciones": [
            "destroy",
            "clear",
            "invalidate",
            "flush"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Y para rematar el cierre de sesión, proteges contra CSRF regenerando el token:\n$request->session()->____();",
        "opciones": [
            "regenerateCsrf",
            "regenerateToken",
            "newToken",
            "resetToken"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Pasando a las vistas, en 'formnuevacriticaRMM.blade.php', la primera línea es:\n@____('layouts.publico')\n¿Qué directiva hereda de la plantilla base?",
        "opciones": [
            "include",
            "extends",
            "inherits",
            "layout"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Para indicar el título de la página en Blade, usas:\n@____('titulo', 'Valorar película')",
        "opciones": [
            "section",
            "yield",
            "slot",
            "title"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En la plantilla base ('layouts/publico.blade.php'), para indicar dónde va el contenido principal pones:\n@____('contenido')",
        "opciones": [
            "show",
            "section",
            "yield",
            "content"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En Blade, para imprimir el título de la película de forma segura escapando caracteres HTML, el código exacto es:",
        "opciones": [
            "{!! $pelicula->titulo !!}",
            "{{ $pelicula->titulo }}",
            "<?php echo $pelicula->titulo ?>",
            "@print($pelicula->titulo)"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En los enlaces, para generar la URL hacia la zona pública usando su nombre, pones:\n<a href=\"{{ ____('zonapublica') }}\">",
        "opciones": [
            "url",
            "path",
            "route",
            "link"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Dentro del `<form>` de nueva crítica, es obligatorio poner el token de seguridad. ¿Qué fragmento de código usas?",
        "opciones": [
            "@token",
            "{{ csrf_field() }}",
            "@csrf",
            "<input type='hidden' name='csrf'>"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Para verificar en la vista si la validación del controlador falló, pones:\n@if ($errors->____())",
        "opciones": [
            "exist",
            "fails",
            "has",
            "any"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Para recorrer e imprimir los errores de validación en la vista, usas el código:\n@foreach ($errors->____() as $error)",
        "opciones": [
            "get",
            "all",
            "list",
            "messages"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En el formulario, para que el textarea no pierda lo que escribió el usuario tras un error de validación, usas:\n<textarea ...>{{ ____('comentario') }}</textarea>",
        "opciones": [
            "old",
            "previous",
            "keep",
            "back"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En el menú de navegación ('layouts.publico'), muestras el botón de 'Iniciar sesión' o el de 'Cerrar sesión' dependiendo de si el usuario está identificado. El bloque es:\n@____\n  Hola, {{ Auth::user()->name }}\n@else\n  Hola, invitado\n@endauth",
        "opciones": [
            "if(Auth::check())",
            "login",
            "auth",
            "user"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "Para cargar tu archivo CSS en el layout, usas:\n<link rel=\"stylesheet\" href=\"{{ ____('css/estilos.css') }}\">",
        "opciones": [
            "url",
            "public",
            "asset",
            "file"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'principal.blade.php', imprimes la media de valoraciones asegurando 2 decimales usando una función nativa de PHP. ¿Cuál es el código exacto?",
        "opciones": [
            "{{ round($pelicula->criticas_avg_valoracion, 2) }}",
            "{{ format_number($pelicula->criticas_avg_valoracion, 2) }}",
            "{{ number_format($pelicula->criticas_avg_valoracion, 2) }}",
            "{{ $pelicula->criticas_avg_valoracion->format(2) }}"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'principal.blade.php' tienes el siguiente código:\n{{-- Si hay críticas, mostramos la media... --}}\n¿Qué hace exactamente este fragmento?",
        "opciones": [
            "Es una función condicional oculta.",
            "Es un comentario HTML visible en el código fuente.",
            "Es un comentario de Blade, ignorado al procesar la vista y oculto para el navegador.",
            "Es una directiva para depurar variables."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'errores.blade.php', para mostrar el título usas:\n<h1>{{ $titulo ____ 'Upps! Acción no permitida.' }}</h1>\n¿Qué operador completa el código para dar un valor por defecto si $titulo es nulo?",
        "opciones": [
            "||",
            "or",
            "??",
            "?:"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'confirmarborradoRMM.blade.php', envías el ID de la crítica en la URL de acción del formulario así:\n<form action=\"{{ route('borrarcriticaRMM', $critica->____) }}\" method=\"POST\">",
        "opciones": [
            "id",
            "key",
            "index",
            "val"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'principal.blade.php', el bucle para iterar sobre todas las películas enviadas por el controlador es:\n@foreach ($peliculasRMM ____ $pelicula)\n¿Qué palabra reservada de PHP falta en el hueco?",
        "opciones": [
            "to",
            "in",
            "as",
            "->"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'formnuevacriticaRMM.blade.php', necesitas que el controlador sepa a qué película se refiere la crítica enviada por POST. Para ello, usas un campo oculto. Identifica el código correcto:",
        "opciones": [
            "<input type=\"hidden\" name=\"pelicula_id\" value=\"{{ $pelicula->id }}\">",
            "<input type=\"hide\" id=\"pelicula_id\" value=\"{{ $pelicula->id }}\">",
            "{{ Form::hidden('pelicula_id', $pelicula->id) }}",
            "<!-- pelicula_id = {{ $pelicula->id }} -->"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'privada_principal.blade.php', accedes al título de la película asociada a una crítica para mostrarlo en la tabla con este fragmento:\n<td><strong>{{ $critica->____->titulo }}</strong></td>\n¿Qué método de relación (definido en el modelo) usaste en el hueco?",
        "opciones": [
            "pelicula",
            "peliculaAsociada",
            "relPelicula",
            "getPelicula"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En tu controlador 'CriticaControllerRMM', ¿cómo recuperas si el usuario pulsó el checkbox 'confirmacion' para borrar la crítica?",
        "opciones": [
            "$request->checkbox('confirmacion')",
            "$request->has('confirmacion')",
            "$_POST['confirmacion']",
            "isset($confirmacion)"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En 'LoginController', al validar los datos, usas:\n$credentials = $request->validate([\n  'email' => 'required|____',\n  'password' => 'required',\n]);\n¿Qué regla asegura que el formato sea un correo electrónico?",
        "opciones": [
            "mail",
            "email",
            "correo",
            "format:email"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 quinta parte",
        "pregunta": "En tu vista 'principal.blade.php', el hueco `@____` al final del bucle foreach cierra correctamente la iteración:",
        "opciones": [
            "endfor",
            "stopforeach",
            "endforeach",
            "finish"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En la migración de géneros, para crear la tabla usas el siguiente código:\n\nSchema::create('generos', function (Blueprint $table) {\n    $table->____('nombre', 45);\n});\n\n¿Qué método completa el código para indicar que 'nombre' es una cadena de texto?",
        "opciones": [
            "varchar",
            "string",
            "text",
            "char"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Observa el código de la migración de la tabla críticas:\n\n$table->foreignId('pelicula')->____('peliculas')->onDelete('cascade');\n\n¿Qué método de Laravel se usa en el hueco para vincular la clave foránea a la tabla 'peliculas'?",
        "opciones": [
            "references",
            "linkedTo",
            "constrained",
            "onTable"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En todas las migraciones, el método down() se encarga de revertir los cambios. Observa el código:\n\npublic function down(): void\n{\n    Schema::____('criticas');\n}\n\n¿Qué método falta para eliminar la tabla si existe?",
        "opciones": [
            "deleteTable",
            "dropIfExists",
            "remove",
            "destroyIfExists"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En la migración de películas, se define otra forma de hacer la clave foránea:\n\n$table->foreign('genero')->____('id')->on('generos');\n\n¿Qué palabra completa la sintaxis clásica de claves foráneas?",
        "opciones": [
            "references",
            "points",
            "key",
            "matches"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En la migración de películas, tienes el siguiente campo:\n\n$table->____('duracion');\n\nSabiendo que la duración es en minutos, ¿qué tipo de dato debes usar en el hueco?",
        "opciones": [
            "time",
            "float",
            "string",
            "integer"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En la migración de críticas, el texto que introduce el usuario se guarda así:\n\n$table->____('comentario');\n\n¿Qué tipo de dato de Laravel aparece en tu tarea para este campo?",
        "opciones": [
            "string",
            "tinyText",
            "varchar",
            "longText"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Al final de la creación de las tablas, siempre incluyes este método:\n\n$table->____();\n\n¿Qué método de Blueprint genera automáticamente las columnas 'created_at' y 'updated_at'?",
        "opciones": [
            "dates",
            "times",
            "timestamps",
            "sysdates"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Las migraciones tienen dos métodos principales. Observa este fragmento:\n\npublic function ____(): void\n{\n    Schema::create('peliculas', ...);\n}\n\n¿Cuál es el nombre del método encargado de ejecutar los cambios en la base de datos?",
        "opciones": [
            "run",
            "up",
            "create",
            "make"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Fíjate en la primera línea de la clase anónima de una migración:\n\nreturn new class extends ____\n{\n...\n}\n\n¿De qué clase padre hereda para poder funcionar?",
        "opciones": [
            "Migration",
            "Model",
            "Seeder",
            "Controller"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En la migración de películas, para preparar el campo 'genero' como clave foránea, usaste:\n\n$table->____('genero');\n\n¿Qué tipo de entero específico exige Laravel por defecto para las claves referenciales (IDs)?",
        "opciones": [
            "integer",
            "unsignedBigInteger",
            "bigInteger",
            "foreignInteger"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Pasando al seeder 'RMMSeeder.php', la declaración de la clase es:\n\nclass RMMSeeder extends ____\n{\n...\n}\n\n¿Qué clase de Laravel debe extender un archivo de sembrado de datos?",
        "opciones": [
            "Factory",
            "Model",
            "Seeder",
            "Migration"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En el seeder, proteges la contraseña del usuario con este código:\n\n$u1->password = ____::make('RMM1');\n\n¿Qué Facade (clase estática) de Laravel realiza el encriptado?",
        "opciones": [
            "Crypt",
            "Hash",
            "Bcrypt",
            "Password"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En 'RMMSeeder.php', verificas la hora en la que el usuario verificó su email:\n\n$u1->email_verified_at = ____();\n\n¿Qué helper de Laravel utilizaste para obtener la fecha y hora actual?",
        "opciones": [
            "time",
            "date",
            "now",
            "today"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Para evitar insertar usuarios duplicados en el seeder, haces esta comprobación:\n\nif (User::where('email', 'RMM1@email.RMM')->____() == 0) {\n\n¿Qué método de Eloquent devuelve la cantidad de registros encontrados?",
        "opciones": [
            "size",
            "length",
            "total",
            "count"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En el seeder, necesitas recuperar el género 'animación' para usarlo. Lo haces así:\n\n$genAnimacion = GeneroRMM::where('nombre', 'animación')->____();\n\n¿Qué método de Eloquent ejecuta la consulta y devuelve únicamente el primer objeto que coincida?",
        "opciones": [
            "first",
            "get",
            "all",
            "one"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Una vez recuperado el objeto `$genAnimacion` en el seeder, lo usas para asignar la clave foránea a la película:\n\n$p1->genero = $genAnimacion->____;\n\n¿Qué propiedad del objeto `$genAnimacion` necesitas guardar en la tabla películas?",
        "opciones": [
            "nombre",
            "id",
            "key",
            "value"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Tras rellenar todas las propiedades de la nueva película `$p1` en el seeder, ejecutas este comando:\n\n$p1->____();\n\n¿Qué método inserta definitivamente el objeto en la base de datos?",
        "opciones": [
            "push",
            "insert",
            "update",
            "save"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Al principio de tu seeder, para poder usar el modelo User, debes incluir la ruta a la clase:\n\nuse App\\Models\\____;\n\n¿Cuál es el nombre exacto de la clase del modelo de usuario por defecto en Laravel?",
        "opciones": [
            "Usuario",
            "User",
            "UserModel",
            "Account"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "El método principal dentro de una clase Seeder, donde colocas todo el código de inserción, es:\n\npublic function ____(): void\n{\n    // INSERTAR USUARIOS...\n}\n\n¿Qué nombre tiene este método?",
        "opciones": [
            "execute",
            "seed",
            "run",
            "up"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En los modelos de la tarea, como en 'GeneroRMM', se usa esta propiedad para asociarlo a su tabla en la base de datos:\n\nprotected $____ = 'generos';\n\n¿Qué nombre tiene esta variable en Eloquent?",
        "opciones": [
            "db_table",
            "collection",
            "name",
            "table"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En los modelos, para permitir que se asignen datos de forma masiva (mass assignment), configuras un array:\n\nprotected $____ = ['nombre', 'descripcion'];\n\n¿Cómo se llama esta propiedad?",
        "opciones": [
            "fillable",
            "guarded",
            "allowed",
            "inputs"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En el modelo 'GeneroRMM.php', defines que un género tiene muchas películas usando la relación 1:N:\n\npublic function peliculas(): ____\n\n¿Qué tipo de retorno debe indicarse en la firma del método?",
        "opciones": [
            "BelongsTo",
            "HasOne",
            "HasMany",
            "Array"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Dentro del método de relación en 'GeneroRMM.php', la instrucción interna es:\n\nreturn $this->____(PeliculaRMM::class, 'genero');\n\n¿Qué método de Eloquent ejecuta la relación 'Tiene muchos'?",
        "opciones": [
            "hasMany",
            "belongsTo",
            "hasOne",
            "belongsToMany"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En el modelo 'PeliculaRMM.php', para establecer que pertenece a un único género (N:1), la firma es:\n\npublic function generoAsociado(): ____\n\n¿Qué tipo de retorno usas?",
        "opciones": [
            "HasMany",
            "HasOne",
            "BelongsTo",
            "Belongs"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Y dentro de ese método en 'PeliculaRMM.php', la instrucción interna de relación inversa es:\n\nreturn $this->____(GeneroRMM::class, 'genero');\n\n¿Qué método de Eloquent ejecuta la relación 'Pertenece a'?",
        "opciones": [
            "hasMany",
            "hasOne",
            "belongs",
            "belongsTo"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En el modelo 'User.php', para que contraseñas y tokens no se expongan en respuestas JSON, usas:\n\nprotected $____ = ['password', 'remember_token'];\n\n¿Cómo se llama esta propiedad protegida?",
        "opciones": [
            "hidden",
            "invisible",
            "secret",
            "protected"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En el modelo 'User.php', configuras el array `$casts` para indicarle a Laravel cómo tratar internamente la contraseña:\n\nprotected $casts = ['password' => '____'];\n\n¿Qué valor pones en el hueco?",
        "opciones": [
            "encrypted",
            "hashed",
            "bcrypt",
            "secret"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Todos tus modelos, como 'CriticaRMM', incluyen este Trait para permitir la generación de datos de prueba:\n\nuse ____;\n\n¿Qué rasgo habilitaste en el interior de la clase?",
        "opciones": [
            "HasFactory",
            "IsFactory",
            "HasSeeders",
            "MakeFactory"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Pasando al controlador 'CriticaControllerRMM', el primer parámetro que recibe un método para obtener datos del formulario o URL suele ser:\n\npublic function mostrarFormularioCriticaRMM(____ $request)\n\n¿Qué clase inyecta Laravel aquí?",
        "opciones": [
            "Input",
            "Session",
            "Form",
            "Request"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Dentro del controlador, para obtener el valor del ID de la película que ha venido en la petición HTTP, usas:\n\n$pelicula_id = $request->____('pelicula_id');\n\n¿Qué método extrae el dato?",
        "opciones": [
            "get",
            "input",
            "fetch",
            "post"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Para recuperar el objeto película completo desde la base de datos usando Eloquent en el controlador:\n\n$pelicula = PeliculaRMM::____($pelicula_id);\n\n¿Qué método busca directamente por la clave primaria?",
        "opciones": [
            "find",
            "search",
            "get",
            "whereId"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Si la película no existe, el controlador devuelve la pantalla de error así:\n\nreturn ____('errores', ['mensaje' => \"La película no existe\"]);\n\n¿Qué función de ayuda (helper) genera el HTML de la plantilla?",
        "opciones": [
            "route",
            "redirect",
            "html",
            "view"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En el controlador, para proteger la inserción, validas los datos del Request con reglas de formato:\n\n$request->____([\n    'valoracion' => 'required|integer|between:1,5',\n    'comentario' => 'required|string|max:255'\n]);\n\n¿Qué método invocas?",
        "opciones": [
            "check",
            "validate",
            "verify",
            "confirm"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Una vez superada la validación, creas el nuevo objeto crítica en el controlador:\n\n$critica = ____ CriticaRMM();\n\n¿Qué palabra reservada de PHP falta para instanciar la clase?",
        "opciones": [
            "create",
            "build",
            "new",
            "make"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Para asignar a la crítica el usuario que la ha creado, usas la fachada Auth:\n\n$critica->usuario = Auth::____();\n\n¿Qué método devuelve el identificador numérico del usuario logueado?",
        "opciones": [
            "id",
            "user_id",
            "get",
            "session"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En el controlador, para confirmar el borrado de la crítica, verificas si el usuario marcó el checkbox:\n\nif (!$request->____('confirmacion')) { ... }\n\n¿Qué método comprueba la presencia de este campo en la petición?",
        "opciones": [
            "exists",
            "checked",
            "has",
            "contains"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Tras pasar todos los controles de seguridad en 'borrarCriticaRMM', eliminas el objeto de la base de datos con:\n\n$critica->____();\n\n¿Qué método de Eloquent ejecuta el borrado?",
        "opciones": [
            "remove",
            "destroy",
            "drop",
            "delete"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En 'LoginController', intentas iniciar sesión comprobando las credenciales (email y password) contra la BD:\n\nif (Auth::____($credentials)) { ... }\n\n¿Qué método intenta loguear al usuario?",
        "opciones": [
            "login",
            "attempt",
            "check",
            "verify"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En 'LoginController', si la autenticación falla, rediriges de vuelta a la página anterior:\n\nreturn ____()->withErrors([...]);\n\n¿Qué helper devuelve al usuario a la URL de donde venía?",
        "opciones": [
            "previous",
            "return",
            "redirect",
            "back"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En 'LoginController', para cerrar sesión en la aplicación, ejecutas:\n\nAuth::____();\n\n¿Qué método destruye la autenticación del usuario?",
        "opciones": [
            "logout",
            "exit",
            "close",
            "destroy"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Entrando a las plantillas (Blade), en 'formnuevacriticaRMM.blade.php' indicas que hereda del layout público así:\n\n@____('layouts.publico')\n\n¿Qué directiva de Blade usas?",
        "opciones": [
            "include",
            "extends",
            "inherits",
            "layout"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En esa misma vista, envías el texto 'Valorar película' al hueco del título del layout maestro:\n\n@____('titulo', 'Valorar película')\n\n¿Qué directiva de Blade inyecta contenido en un bloque definido?",
        "opciones": [
            "section",
            "yield",
            "put",
            "title"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Y en el layout maestro 'layouts/publico.blade.php', ¿cómo defines el hueco donde se inyectará el contenido HTML principal de las demás vistas?\n\n@____('contenido')\n\n¿Qué directiva de Blade usas?",
        "opciones": [
            "show",
            "section",
            "yield",
            "include"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En la vista Blade, usas el objeto `$pelicula` enviado desde el controlador para imprimir su título:\n\n<p><strong>Título:</strong> {{ $pelicula->____ }}</p>\n\n¿Qué atributo (definido en la BD) imprimes?",
        "opciones": [
            "nombre",
            "title",
            "encabezado",
            "titulo"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Dentro del `<form>` en Blade, configuras el atributo 'action' para que envíe los datos a una ruta por su nombre:\n\n<form action=\"{{ ____('crearnuevacriticaRMM', $pelicula->id) }}\" method=\"POST\">\n\n¿Qué helper de Laravel genera la URL desde el nombre?",
        "opciones": [
            "route",
            "url",
            "path",
            "link"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Dentro de un formulario POST en Blade, es obligatorio incluir el token de seguridad. Lo haces con una única directiva:\n\n@____\n\n¿Qué directiva genera el input oculto contra falsificación de peticiones?",
        "opciones": [
            "token",
            "auth",
            "csrf",
            "secure"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En 'formnuevacriticaRMM.blade.php', muestras una caja roja si el controlador detectó fallos al validar. Empieza así:\n\n@if ($errors->____())\n\n¿Qué método verifica si hay al menos un error?",
        "opciones": [
            "exist",
            "fails",
            "has",
            "any"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "Para evitar que el usuario tenga que volver a escribir el comentario si la validación falla, usas:\n\n<textarea name=\"comentario\">{{ ____('comentario') }}</textarea>\n\n¿Qué helper devuelve el valor de la petición anterior?",
        "opciones": [
            "old",
            "previous",
            "keep",
            "back"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En 'layouts/publico.blade.php', verificas si el usuario ha iniciado sesión para mostrarle su nombre, usando una directiva de Blade específica para autenticación:\n\n@____\nHola, <span class=\"usuario-bold\">{{ Auth::user()->name }}</span>\n\n¿Qué directiva inicia este bloque if?",
        "opciones": [
            "login",
            "user",
            "auth",
            "check"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tarea 5 sexta parte",
        "pregunta": "En la cabecera del HTML maestro (layout), cargas tu archivo CSS asegurando que la ruta sea absoluta:\n\n<link rel=\"stylesheet\" href=\"{{ ____('css/estilos.css') }}\">\n\n¿Qué helper de Laravel utilizaste?",
        "opciones": [
            "url",
            "asset",
            "public",
            "style"
        ],
        "correcta": 1
    },
    {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el archivo .env, vemos la siguiente configuración:\n\nDB_CONNECTION=___\n\n¿Qué valor se indica en el hueco para establecer que la base de datos es MySQL?",
    "opciones": ["mysql", "mariadb", "pdo", "sqlite"],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el archivo .env de la tarea, ¿cómo se indica el puerto por defecto de la base de datos?\n\nDB_PORT=___",
    "opciones": ["8000", "8080", "3306", "1025"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el archivo .env de la Tarea 5, ¿cuál es el nombre de la base de datos configurado?\n\nDB_DATABASE=___",
    "opciones": ["laravel", "2526_dwes05", "peliculas_db", "tarea5"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el archivo .env, para poder ver los errores detallados durante el desarrollo, ¿qué variable se ajusta a 'true'?\n\nAPP_DEBUG=___",
    "opciones": ["true", "false", "1", "on"],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el archivo .env, el entorno de la aplicación está definido como local de la siguiente forma:\n\nAPP_ENV=___",
    "opciones": ["development", "local", "production", "testing"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En la migración de 'peliculas', dentro de la función down(), ¿qué método se utiliza para borrar la tabla si se revierte la migración?\n\nSchema::___('peliculas');",
    "opciones": ["delete", "dropIfExists", "truncate", "remove"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En las migraciones, al final de la definición de la tabla se añaden automáticamente las columnas created_at y updated_at con:\n\n$table->___();",
    "opciones": ["times()", "dates()", "timestamps()", "createdAt()"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En las migraciones de la tarea, para definir la clave primaria autoincremental por defecto se utiliza:\n\n$table->___();",
    "opciones": ["primaryKey('id')", "id()", "increment('id')", "autoIncrement()"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En la migración de 'peliculas', para el título se define un tamaño máximo de caracteres:\n\n$table->string('titulo', ___);",
    "opciones": ["100", "50", "255", "60"],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En la migración de 'peliculas', ¿qué método se usa para guardar el argumento (resumen pequeño)?\n\n$table->___('argumento');",
    "opciones": ["text", "longText", "tinyText", "string"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En la migración de 'peliculas', para crear el campo 'anio' (año de estreno) se emplea:\n\n$table->___('anio');",
    "opciones": ["date", "year", "integer", "number"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Al crear la clave foránea 'genero' en 'peliculas' de forma manual, se inicia con:\n\n$table->___('genero')->references('id')->on('generos');",
    "opciones": ["foreignId", "foreign", "key", "relation"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En la migración de 'peliculas', para indicar a qué tabla apunta la clave foránea 'genero' se usa:\n\n$table->foreign('genero')->references('id')->___('generos');",
    "opciones": ["table", "on", "in", "to"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En la migración de 'peliculas', para asegurar que si se borra un género se borren sus películas:\n\n->___('cascade')",
    "opciones": ["onDelete", "onRemove", "ifDelete", "cascadeOnDelete"],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "De igual manera, para actualizar en cascada la clave foránea:\n\n->onDelete('cascade')->___('cascade');",
    "opciones": ["onModify", "onChange", "onUpdate", "onEdit"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En la migración de 'criticas', la clave foránea se define de forma simplificada usando:\n\n$table->___('pelicula')->constrained('peliculas');",
    "opciones": ["foreign", "foreignId", "id", "relationId"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En la migración de 'criticas', el método que asocia la clave foránea con la tabla destino automáticamente es:\n\n$table->foreignId('pelicula')->___('peliculas');",
    "opciones": ["constrained", "references", "on", "connectedTo"],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En la migración de géneros, el método down() elimina la tabla si existe:\n\nSchema::___('generos');",
    "opciones": ["drop", "truncate", "dropIfExists", "delete"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el modelo User, ¿qué propiedad protege ciertos campos para que no se muestren al serializar el modelo?\n\nprotected $___ = ['password', 'remember_token'];",
    "opciones": ["fillable", "hidden", "guarded", "private"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el modelo User, ¿qué propiedad indica los campos que se pueden rellenar de forma masiva?\n\nprotected $___ = ['name', 'email', 'password'];",
    "opciones": ["allowed", "fillable", "visible", "inputs"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el modelo User, ¿qué propiedad convierte los tipos de datos nativos automáticamente?\n\nprotected $___ = ['email_verified_at' => 'datetime'];",
    "opciones": ["mutators", "types", "casts", "conversions"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En la propiedad $casts del modelo User, ¿qué valor toma 'password' para que Laravel sepa que es un hash?\n\n'password' => '___'",
    "opciones": ["hash", "hashed", "bcrypt", "encrypted"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el modelo User de la Tarea 5, ¿a qué tipo se convierte (cast) 'email_verified_at'?\n\n'email_verified_at' => '___'",
    "opciones": ["date", "time", "datetime", "timestamp"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el modelo User, la relación con críticas indica que un usuario tiene MUCHAS críticas:\n\npublic function criticas(): ___ { ... }",
    "opciones": ["HasMany", "BelongsTo", "HasOne", "BelongsToMany"],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el modelo PeliculaRMM, para indicar a qué género pertenece (relación N:1):\n\npublic function generoAsociado(): ___ { return $this->belongsTo(GeneroRMM::class, 'genero'); }",
    "opciones": ["HasOne", "HasMany", "BelongsTo", "Model"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el modelo PeliculaRMM, una película tiene muchas críticas:\n\nreturn $this->___(CriticaRMM::class, 'pelicula');",
    "opciones": ["hasOne", "belongsToMany", "hasMany", "belongsTo"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el modelo CriticaRMM, para indicar a qué usuario pertenece:\n\nreturn $this->___(User::class, 'usuario');",
    "opciones": ["hasMany", "belongsTo", "owns", "hasOne"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el modelo GeneroRMM, para indicar que tiene muchas películas:\n\nreturn $this->___(PeliculaRMM::class, 'genero');",
    "opciones": ["belongsTo", "hasOne", "hasMany", "hasAll"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En los modelos de Laravel, ¿de qué clase extienden (heredan) todas las entidades de Eloquent?\n\nuse Illuminate\\Database\\Eloquent\\___;",
    "opciones": ["Schema", "Model", "Controller", "Table"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En los modelos de Laravel 8+, para tipar el retorno de las relaciones se importa:\n\nuse Illuminate\\Database\\Eloquent\\Relations\\___;",
    "opciones": ["Model", "BelongsTo", "Table", "Query"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En LoginController, ¿qué método valida los datos del formulario de inicio de sesión?\n\n$credentials = $request->___([ 'email' => 'required|email' ... ]);",
    "opciones": ["check", "validate", "verify", "sanitize"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En LoginController, para comprobar si las credenciales coinciden con la base de datos e iniciar sesión:\n\nif (Auth::___($credentials)) {",
    "opciones": ["login", "check", "attempt", "verify"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En LoginController, si el login es correcto, se renueva la sesión por seguridad:\n\n$request->session()->___();",
    "opciones": ["restart", "start", "regenerate", "refresh"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En LoginController, para redirigir a la ruta a la que el usuario intentaba ir antes del login:\n\nreturn redirect()->___(route('zonaprivada'));",
    "opciones": ["back", "intended", "route", "to"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Dentro del redirect del LoginController, ¿cómo se obtiene la URL de la zona privada mediante su nombre?\n\nreturn redirect()->intended(___('zonaprivada'));",
    "opciones": ["url", "path", "route", "link"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Si falla la autenticación, se devuelve a la página anterior enviando errores:\n\nreturn back()->___([ 'email' => '...' ]);",
    "opciones": ["withErrors", "sendErrors", "pushErrors", "flashErrors"],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Al fallar el login, se mantiene el email que el usuario escribió para no tener que repetirlo:\n\n->___('email');",
    "opciones": ["keepInput", "flashInput", "oldInput", "onlyInput"],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el método logoutRMM, ¿qué instrucción cierra la sesión en el gestor de autenticación?\n\nAuth::___();",
    "opciones": ["exit", "close", "logout", "destroy"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Durante el logout, se borran los datos de la sesión actual con:\n\n$request->session()->___();",
    "opciones": ["destroy", "invalidate", "clear", "delete"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el logout, para evitar ataques CSRF, se renueva el token:\n\n$request->session()->___();",
    "opciones": ["clearToken", "regenerateToken", "refreshToken", "newToken"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Al finalizar el logout, se redirige a la zona pública:\n\nreturn redirect(route('___'));",
    "opciones": ["home", "inicio", "zonapublica", "publico"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En CriticaControllerRMM, para buscar las críticas hechas por el usuario conectado:\n\nCriticaRMM::where('usuario', Auth::___())",
    "opciones": ["user()", "id()", "check()", "name()"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En CriticaControllerRMM, ¿qué método devuelve el número total de coincidencias de la consulta?\n\n->where('pelicula', $pelicula_id)->___();",
    "opciones": ["get", "all", "count", "sum"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Si el usuario ya valoró la película, se le redirige a la vista de errores:\n\nif($existeCritica > 0){ return ___('errores', [...]); }",
    "opciones": ["redirect", "route", "view", "display"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para pasar el objeto película a la vista del formulario:\n\nreturn view('formnuevacriticaRMM', ['___' => $pelicula]);",
    "opciones": ["data", "pelicula", "item", "var"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En crearNuevaCriticaRMM, Laravel inyecta automáticamente la película por su ID (Route Model Binding). ¿De qué tipo es el parámetro?\n\npublic function crearNuevaCriticaRMM(___ $pelicula, ...)",
    "opciones": ["int", "String", "PeliculaRMM", "Model"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En la validación de la nueva crítica, para asegurar que la valoración es un número entero:\n\n'valoracion' => 'required|___|between:1,5'",
    "opciones": ["number", "integer", "numeric", "int"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En la validación de la crítica, ¿qué regla limita la longitud máxima a 255 caracteres?\n\n'comentario' => 'required|string|___:255'",
    "opciones": ["length", "size", "max", "limit"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En `$request->validate([reglas], [mensajes])`, ¿qué posición ocupa el array de mensajes de error personalizados (ej. 'valoracion.required' => '...')?",
    "opciones": ["Primer argumento", "Segundo argumento", "Tercer argumento", "No se pasa como argumento"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para crear una instancia vacía del modelo y guardarla en la base de datos:\n\n$critica = ___ CriticaRMM();",
    "opciones": ["create", "insert", "new", "make"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para recuperar el valor del campo 'valoracion' enviado en el formulario:\n\n$critica->valoracion = $request->___('valoracion');",
    "opciones": ["get", "post", "input", "value"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Al guardar la crítica, asignamos la clave foránea de la película extrayendo el ID del objeto `$pelicula`:\n\n$critica->pelicula = $pelicula->___;",
    "opciones": ["id", "pk", "key", "pelicula_id"],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Una vez configuradas las propiedades del objeto `$critica`, ¿qué método lo guarda en MySQL?\n\n$critica->___();",
    "opciones": ["store", "update", "insert", "save"],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Al mostrar el mensaje de éxito, se concatena la valoración elegida:\n\n'mensaje' => \"Crítica insertada... con un \" . $critica->___ . \"/5.\"",
    "opciones": ["nota", "puntuacion", "valoracion", "estrellas"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En mostrarFormularioBorradoRMM, el controlador recibe la petición (Request). ¿Cuál es la sintaxis correcta?\n\npublic function mostrarFormularioBorradoRMM(___ $request)",
    "opciones": ["Request", "Response", "Input", "Form"],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para extraer el ID de la crítica oculta en el formulario de borrado:\n\n$critica_id = $request->input('___');",
    "opciones": ["id", "critica_id", "pk", "hidden_id"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para buscar el registro de la crítica en la BBDD a partir de su Clave Primaria (ID):\n\n$critica = CriticaRMM::___($critica_id);",
    "opciones": ["get", "search", "where", "find"],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para comprobar de forma segura que el dueño de la crítica es el usuario logueado:\n\nif ($critica->usuario !== ___)",
    "opciones": ["Auth::user()", "Auth::id()", "Session::id()", "User::current()"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Al cargar el formulario de confirmación, pasamos el objeto `$critica` a la vista:\n\nreturn view('confirmarborradoRMM', ['___' => $critica]);",
    "opciones": ["data", "item", "critica", "c"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el borrado definitivo, se espera tanto el modelo como el Request. ¿Cuál es el tipo del primer parámetro?\n\npublic function borrarCriticaRMM(___ $critica, Request $request)",
    "opciones": ["Model", "CriticaRMM", "Object", "int"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para verificar si el checkbox de confirmación ha sido marcado y enviado en el request:\n\nif (!$request->___('confirmacion'))",
    "opciones": ["has", "exists", "contains", "isset"],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Finalmente, para borrar la crítica de la base de datos se llama al método:\n\n$critica->___();",
    "opciones": ["remove", "destroy", "delete", "drop"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Tras borrar con éxito, se carga la vista de mensajes:\n\nreturn ___('mensaje', [...]);",
    "opciones": ["redirect", "route", "view", "display"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En RMMSeeder, comprobamos si el usuario ya existe filtrando por email:\n\nif (User::___('email', 'RMM1@email.RMM')->count() == 0)",
    "opciones": ["find", "search", "filter", "where"],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para crear un nuevo usuario en RMMSeeder:\n\n$u1 = ___ User;",
    "opciones": ["create", "insert", "new", "make"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para encriptar la contraseña del usuario en el seeder:\n\n$u1->password = Hash::___('RMM1');",
    "opciones": ["crypt", "make", "encrypt", "hash"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para obtener la fecha y hora actual en Laravel y marcar el email como verificado:\n\n$u1->email_verified_at = ___();",
    "opciones": ["date", "time", "now", "current"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para guardar el usuario creado en el seeder en la base de datos:\n\n$u1->___();",
    "opciones": ["insert", "save", "store", "create"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En RMMSeeder iteramos un array asociativo `$generos`. ¿Cómo se nombra a la clave (nombre del género)?\n\nforeach ($generos as $___ => $descripcion)",
    "opciones": ["key", "id", "index", "nombre"],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Dentro del bucle de géneros en el seeder, asignamos el nombre al objeto:\n\n$g = new GeneroRMM; $g->___ = $nombre;",
    "opciones": ["name", "titulo", "nombre", "id"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "También asignamos la descripción al objeto del género:\n\n$g->___ = $descripcion;",
    "opciones": ["desc", "resumen", "descripcion", "texto"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En RMMSeeder, para obtener el primer registro que coincida con el nombre 'animación':\n\n$genAnimacion = GeneroRMM::where('nombre', 'animación')->___();",
    "opciones": ["get", "all", "first", "one"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para comprobar si la película 'Toy Story' ya existe (evitar duplicados):\n\nif (PeliculaRMM::where('titulo', 'Toy Story')->___() == 0)",
    "opciones": ["sum", "total", "count", "exists"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para instanciar la nueva película en el seeder:\n\n$p1 = ___ PeliculaRMM;",
    "opciones": ["new", "create", "make", "insert"],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Al insertar la película, le asignamos la clave foránea del género obteniendo el ID del objeto $genAnimacion:\n\n$p1->genero = $genAnimacion->___;",
    "opciones": ["pk", "key", "id", "genero_id"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Al configurar la película en el seeder, el año se asigna como número entero. ¿Qué sintaxis es la correcta según la tarea?\n\n$p1->anio = ___;",
    "opciones": ["\"1995\"", "'1995'", "1995", "[1995]"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En la clase DatabaseSeeder (o similares), ¿qué método se ejecuta por defecto al llamar a `db:seed`?\n\npublic function ___(): void",
    "opciones": ["execute", "start", "run", "seed"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En las vistas Blade, para indicar que esta vista hereda del layout 'publico':\n\n@___('layouts.publico')",
    "opciones": ["layout", "include", "master", "extends"],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para inyectar un texto corto ('Valorar película') en la sección 'titulo' del layout principal:\n\n@___('titulo', 'Valorar película')",
    "opciones": ["yield", "section", "set", "title"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Dentro del formulario de 'formnuevacriticaRMM', es obligatorio incluir un token de seguridad con la directiva:\n\n@___",
    "opciones": ["secure", "auth", "csrf", "token"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para finalizar un bloque `@section('contenido')` en Blade, se utiliza:\n\n@___",
    "opciones": ["endsection", "stop", "close", "Ambas A y B son válidas, aunque endsection es más semántica."],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el layout 'publico', para mostrar 'Cerrar sesión' SOLO si el usuario está logueado:\n\n@___\n   Cerrar sesión",
    "opciones": ["if(Auth::user())", "auth", "login", "check"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el bloque auth del layout 'publico', ¿cómo se especifica la condición contraria (si es un invitado)?\n\n@___\n   Hola, invitado",
    "opciones": ["guest", "else", "elseif", "unauth"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para cerrar el bloque condicional de autenticación en Blade (@auth ... @else ...):\n\n@___",
    "opciones": ["endif", "endguest", "endauth", "closeauth"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En la vista Blade, para generar un enlace a la zona pública utilizando el nombre de la ruta:\n\n<a href=\"{{ ___('zonapublica') }}\">",
    "opciones": ["url", "link", "route", "path"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En un bloque Blade, si imprimimos la valoración numérica de la crítica `$critica`:\n\n{{ $critica->___ }}",
    "opciones": ["nota", "puntuacion", "estrellas", "valoracion"],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "El archivo `confirmarborradoRMM.blade.php` hereda del layout privado:\n\n@extends('layouts.___')",
    "opciones": ["publico", "principal", "privado", "core"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "El archivo `principal.blade.php` (Listado de Películas) hereda del layout público:\n\n@extends('layouts.___')",
    "opciones": ["publico", "privado", "app", "base"],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En los archivos de rutas de Laravel, para proteger rutas y exigir que el usuario haya iniciado sesión:\n\nRoute::get(...)->___('auth');",
    "opciones": ["middleware", "secure", "protect", "login"],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el controlador, cuando se borra, se exige que se inyecte la instancia del modelo. ¿Cuál es el tipo correcto?\n\npublic function borrarCriticaRMM(___ $critica, Request $request)",
    "opciones": ["Critica", "Model", "CriticaRMM", "PeliculaRMM"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En crearNuevaCriticaRMM, el segundo parámetro recoge todos los datos del formulario:\n\npublic function crearNuevaCriticaRMM(PeliculaRMM $pelicula, ___ $request)",
    "opciones": ["FormRequest", "Input", "Response", "Request"],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En los controladores, para usar Auth::id(), ¿qué Facade debemos importar arriba del archivo?\n\nuse Illuminate\\Support\\Facades\\___;",
    "opciones": ["Authentication", "User", "Auth", "Session"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Para usar la función Hash::make() en el seeder, importamos su Facade:\n\nuse Illuminate\\Support\\Facades\\___;",
    "opciones": ["Crypt", "Bcrypt", "Hash", "Password"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Al deshacer la migración de 'peliculas', se borra la tabla si existe:\n\nSchema::___('peliculas');",
    "opciones": ["drop", "truncate", "dropIfExists", "delete"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En la migración de 'criticas', se crea la estructura de la tabla llamando a:\n\nSchema::___('criticas', function (Blueprint $table) {",
    "opciones": ["build", "create", "make", "generate"],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En la migración de 'peliculas', se llama al mismo método para estructurar la tabla:\n\nSchema::___('peliculas', function (Blueprint $table) {",
    "opciones": ["create", "add", "new", "init"],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En `web.php`, para asignar un alias a la ruta de borrado y poder llamarla con route():\n\nRoute::post('/critica/borrar', [...])->___('borrarcritica');",
    "opciones": ["alias", "id", "name", "as"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En el enrutador de Laravel, si la URL solo sirve para mostrar información (ej. listar críticas), el método HTTP adecuado es:\n\nRoute::___('/mis-criticas', [...])",
    "opciones": ["post", "put", "get", "view"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "Si un formulario envía datos (como el borrado de críticas con CSRF), el método HTTP en web.php debe coincidir:\n\nRoute::___('/critica/borrar', [...])",
    "opciones": ["delete", "get", "post", "send"],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 5 séptima parte",
    "pregunta": "En las vistas de la Tarea 5, para cerrar una directiva `@if`, se utiliza:\n\n@if(Route::is('...'))\n   Añadir\n@___",
    "opciones": ["end", "stop", "endif", "close"],
    "correcta": 2
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente fragmento de rutas de un API REST (F1):\n\nRoute::controller(XYZPeliculasControllerAPI::class)->group(function () {\n  Route::get('/listarPeliculas', 'listarPeliculas');\n  Route::post('/crearPelicula', 'crearPelicula');\n});\n\n¿Qué ventaja principal aporta el uso de `Route::controller(...)` envolviendo a este grupo de rutas?",
    "opciones": [
      "Permite que todas las rutas del grupo devuelvan automáticamente una respuesta en formato JSON.",
      "Evita tener que repetir la clase del controlador (`[XYZPeliculasControllerAPI::class, 'metodo']`) en cada una de las rutas del grupo.",
      "Añade automáticamente el prefijo '/api' a todas las rutas definidas dentro del grupo.",
      "Valida que las peticiones a estas rutas provengan únicamente de clientes autenticados."
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Analizando el fragmento de código de rutas (F2):\n\nRoute::put('/modificarArgumento/{pelicula}', 'modificarArgumento')->whereNumber('pelicula');\n\nSi un cliente realiza una petición PUT a la URL `/api/modificarArgumento/batman`, ¿qué ocurrirá antes de llegar al controlador?",
    "opciones": [
      "El controlador recibirá la cadena 'batman' y deberá devolver un error 400 por no ser numérico.",
      "Laravel lanzará una excepción fatal de base de datos al intentar buscar la película 'batman'.",
      "La ruta no coincidirá debido a la restricción `whereNumber`, por lo que Laravel devolverá automáticamente un error 404 Not Found.",
      "Laravel ignorará la restricción `whereNumber` porque las rutas PUT no soportan validación de parámetros en la URL."
    ],
    "correcta": 2
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente fragmento de código en un controlador de Laravel (F3):\n\npublic function crearPelicula(Request $request): JsonResponse {\n  $v = Validator::make($request->all(), [\n    'titulo' => 'required|string|max:60',\n    'duracion' => 'required|numeric'\n  ]);\n  // ...\n}\n\nSi queremos comprobar si la validación ha fallado para devolver un error al cliente, ¿qué método debemos llamar sobre el objeto `$v`?",
    "opciones": [
      "if ($v->isInvalid()) { ... }",
      "if (!$v->isValid()) { ... }",
      "if ($v->fails()) { ... }",
      "if ($v->hasErrors()) { ... }"
    ],
    "correcta": 2
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Observa el siguiente código de respuesta de un controlador API (F4):\n\nif ($v->fails()) {\n  return response()->json([\n    'errores' => Arr::flatten($v->errors()->getMessages())\n  ], _______);\n}\n\n¿Qué código de estado HTTP (espacio en blanco) es el estándar y más adecuado para indicar que la validación de los datos enviados por el cliente ha fallado?",
    "opciones": [
      "200",
      "404",
      "422",
      "500"
    ],
    "correcta": 2
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Dado este código de cliente HTTP con Guzzle (F5):\n\n$operacion = $cliente->get('existePelicula', [\n  '_______' => [\n    'titulo' => 'Avatar',\n    'anio' => 2009\n  ]\n]);\n\n¿Qué clave debemos usar en el espacio en blanco para que Guzzle envíe estos parámetros en la URL de una petición GET (ej: `?titulo=Avatar&anio=2009`)?",
    "opciones": [
      "json",
      "form_params",
      "query",
      "body"
    ],
    "correcta": 2
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Analizando este envío de datos con Guzzle en un cliente (F6):\n\n$operacion = $cliente->post('crearPelicula', [\n  'form_params' => [\n    'titulo' => 'Dune',\n    'genero_id' => 3\n  ]\n]);\n\n¿En qué formato viajarán los datos en el cuerpo de la petición HTTP hacia el servidor API?",
    "opciones": [
      "application/json",
      "multipart/form-data",
      "application/x-www-form-urlencoded",
      "text/plain"
    ],
    "correcta": 2
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente fragmento de un controlador API (F7):\n\nfunction modificarArgumento(Pelicula $pelicula, Request $request): JsonResponse {\n  if (!$request->isJson()) {\n    return response()->json(['errores' => ['Formato incorrecto']], 403);\n  }\n  // ...\n}\n\n¿Qué verifica exactamente la instrucción `$request->isJson()` en este contexto?",
    "opciones": [
      "Comprueba que el cuerpo de la petición contiene una cadena JSON válida, independientemente de las cabeceras.",
      "Verifica que la cabecera 'Content-Type' de la petición HTTP especifique 'application/json'.",
      "Comprueba que el cliente que hace la petición acepta JSON como respuesta ('Accept: application/json').",
      "Intenta decodificar el cuerpo de la petición; si no da error, devuelve true."
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Observa cómo se obtiene el cuerpo de la respuesta con Guzzle (F8):\n\n$operacion = $cliente->get('listarPeliculas');\nif ($operacion->getStatusCode() == 200) {\n  $datos = json_decode($operacion->getBody()->_______, true);\n}\n\n¿Qué método falta en el espacio en blanco para extraer el contenido en bruto (texto) de la respuesta de Guzzle antes de pasarlo a `json_decode`?",
    "opciones": [
      "getText()",
      "read()",
      "getContents()",
      "__toString()"
    ],
    "correcta": 2
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "En un cliente Guzzle, tenemos la siguiente llamada (F9):\n\n$datos = json_decode($operacion->getBody()->getContents(), true);\n\n¿Para qué sirve el segundo parámetro `true` en la función `json_decode`?",
    "opciones": [
      "Para que decodifique los caracteres especiales (como acentos o eñes) en UTF-8.",
      "Para forzar que si hay un error en el JSON, lance una excepción en lugar de devolver null.",
      "Para que el resultado se devuelva como un array asociativo de PHP en lugar de un objeto (stdClass).",
      "Para permitir la decodificación de JSON anidados con profundidad mayor a 512 niveles."
    ],
    "correcta": 2
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Dado el controlador para borrar una película (F10):\n\nfunction borrarPelicula($pelicula): JsonResponse {\n  $peliculaObj = Pelicula::find($pelicula);\n  if (!$peliculaObj) {\n    return response()->json(['errores' => ['No existe']], _______);\n  }\n  $peliculaObj->delete();\n  return response()->json(['resultado' => 1], 200);\n}\n\n¿Qué código de estado HTTP (espacio en blanco) es el estándar REST para indicar que el recurso que se intenta borrar no existe?",
    "opciones": [
      "400",
      "401",
      "404",
      "500"
    ],
    "correcta": 2
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Si en Guzzle usamos la opción `json` para enviar datos (F11):\n\n$operacion = $cliente->put('modificar/' . $id, [\n  'json' => [ 'argumento' => 'Nuevo argumento' ]\n]);\n\n¿Qué hace Guzzle internamente además de poner los datos en el cuerpo de la petición?",
    "opciones": [
      "Codifica el array con `json_encode` y añade automáticamente la cabecera `Content-Type: application/json`.",
      "Envía los datos como si fueran parámetros en la URL pero encriptados.",
      "Añade la cabecera `Accept: application/json` para asegurar que el servidor responda en ese formato.",
      "Transforma el array en formato XML y lo comprime antes de enviarlo."
    ],
    "correcta": 0
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Analizando la ruta del servidor (F12):\n\nRoute::delete('/pelicula/{id}', 'borrarPelicula');\n\n¿Cómo sería la invocación correcta desde el cliente Guzzle para eliminar la película con ID 5?",
    "opciones": [
      "$cliente->request('DELETE', '/pelicula', ['query' => ['id' => 5]]);",
      "$cliente->delete('/pelicula/5');",
      "$cliente->post('/pelicula/delete/5');",
      "$cliente->delete('/pelicula', ['form_params' => ['id' => 5]]);"
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Observa el final de este controlador (F13):\n\n$pelicula = Pelicula::create($datos);\nreturn response()->json(['resultado' => $pelicula->id], 201);\n\n¿Por qué se usa habitualmente el código HTTP 201 en lugar de 200 en este escenario?",
    "opciones": [
      "Porque 201 indica 'No Content', ideal si no devolvemos una vista HTML.",
      "Porque 201 indica 'Created', siendo el código estándar REST al crear exitosamente un nuevo recurso.",
      "Porque 201 fuerza al navegador del cliente a refrescar la página tras guardar el registro.",
      "Porque 200 solo se permite en peticiones GET, no en peticiones POST."
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "En el código del cliente Guzzle vemos esto (F14):\n\nif ($operacion->getStatusCode() != 200) {\n  return self::ERROR_SERVICIO_WEB;\n}\n\nSabiendo que Guzzle lanza excepciones por defecto ante respuestas 4xx o 5xx, ¿qué configuración previa del cliente Guzzle asume este código para que no se interrumpa la ejecución y podamos leer el StatusCode?",
    "opciones": [
      "El cliente Guzzle debe instanciarse con la opción `['exceptions' => false]` o `['http_errors' => false]`.",
      "El cliente Guzzle debe estar configurado con `['verify' => false]` para saltarse los errores HTTP.",
      "Se ha usado la función `set_error_handler` de PHP para ignorar los errores.",
      "No asume ninguna configuración, Guzzle nunca lanza excepciones con los códigos 4xx y 5xx."
    ],
    "correcta": 0
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente validador en el controlador (F15):\n\n$v = Validator::make($request->all(), [\n  'genero_id' => 'required|numeric|exists:generos,id'\n]);\n\n¿Qué comprueba exactamente la regla `exists:generos,id`?",
    "opciones": [
      "Comprueba que el array devuelto por `$request->all()` contenga una clave 'generos' con un subelemento 'id'.",
      "Verifica en la base de datos que exista un registro en la tabla 'generos' cuyo campo 'id' coincida con el valor enviado.",
      "Verifica que el archivo físico 'generos.php' contenga una variable llamada 'id'.",
      "Comprueba que el modelo `Generos` exista y tenga definida una clave primaria llamada 'id'."
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Al analizar el siguiente fragmento del cliente Guzzle (F16):\n\n$operacion = $cliente->put('modificarPelicula/' . $id, [\n  'form_params' => [ 'titulo' => 'Nuevo' ]\n]);\n\n¿Qué ocurriría si el servidor (Laravel) está esperando recibir los datos estrictamente en formato JSON (`$request->isJson()`)?",
    "opciones": [
      "Laravel convertiría automáticamente los datos 'form_params' a JSON en el servidor antes de validarlos.",
      "El servidor procesaría la petición normalmente porque PUT y form_params es equivalente a JSON.",
      "El servidor rechazaría la petición (probablemente con un 403 o 400, dependiendo del código) porque el cliente está enviando 'application/x-www-form-urlencoded'.",
      "Guzzle daría un error fatal antes de enviar la petición porque no se puede usar 'form_params' con el método PUT."
    ],
    "correcta": 2
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Dado el código de guardado en el controlador de Laravel (F17):\n\n$pelicula->argumento = $datos['argumento'];\n$pelicula->save();\nif ($pelicula->wasChanged()) {\n  return response()->json(['resultado' => 1], 200);\n}\n\n¿Qué utilidad tiene el método `$pelicula->wasChanged()` en este contexto?",
    "opciones": [
      "Saber si el nuevo argumento que se ha asignado es exactamente igual al que ya existía en la base de datos, evitando notificar un cambio si no lo hubo.",
      "Verificar que la sentencia UPDATE no ha generado ninguna excepción a nivel de la base de datos MariaDB/MySQL.",
      "Comprobar si el registro ha sido borrado por otro usuario durante el proceso de guardado.",
      "Asegurar que los datos han pasado la validación antes de realizar el guardado en base de datos."
    ],
    "correcta": 0
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Observando el siguiente fragmento de rutas en Laravel (F18):\n\nRoute::get('/listar', 'listar');\nRoute::get('/buscar/{id}', 'buscar');\n\nSi ambas rutas pertenecen al mismo controlador y hacemos una petición `GET /api/listar`, ¿qué podría pasar si invertimos el orden de definición de estas dos rutas en el archivo `api.php`?",
    "opciones": [
      "Laravel lanzaría un error de rutas duplicadas porque ambas usan el método GET.",
      "La ruta `/listar` sería capturada por `/buscar/{id}` si no ponemos restricciones, tratando 'listar' como si fuera un ID.",
      "No pasaría nada, en este caso concreto el orden no altera el resultado porque 'listar' es una ruta estática y tiene prioridad sobre el parámetro dinámico '{id}'.",
      "Dejarían de funcionar ambas rutas porque Laravel exige definir primero las rutas con parámetros dinámicos."
    ],
    "correcta": 2
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Tenemos este código en Laravel para retornar datos (F19):\n\nreturn response()->json($peliculas, 200);\n\nSi `$peliculas` es una colección de modelos Eloquent obtenida con `Pelicula::all()`, ¿qué formato tendrá el JSON resultante en el cliente?",
    "opciones": [
      "Será un objeto JSON con una única clave 'data' que contiene la lista de películas.",
      "Será un array JSON (con corchetes `[]`) donde cada elemento es un objeto JSON representando una película.",
      "Laravel dará un error porque `response()->json` no admite colecciones Eloquent, hay que usar `json_encode` primero.",
      "Será un texto plano separado por comas, ya que las colecciones no se serializan solas a JSON."
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Dado el validador en el controlador API (F20):\n\n$v = Validator::make($request->all(), [\n  'titulo' => 'required|max:60'\n], [\n  'titulo.required' => 'El título es obligatorio'\n]);\n\n¿Para qué sirve el tercer parámetro (el array con el mensaje 'El título es obligatorio') en el método `make`?",
    "opciones": [
      "Para definir los valores por defecto si el cliente no envía el campo 'titulo'.",
      "Para personalizar los mensajes de error de validación que se enviarán de vuelta al cliente en lugar de usar los que tiene Laravel por defecto en inglés.",
      "Para inyectar cabeceras HTTP personalizadas en la respuesta de error.",
      "Para forzar que el cliente vea ese mensaje como un 'hint' o ayuda, aunque la validación sea correcta."
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Si vemos esta invocación en el cliente Guzzle (F21):\n\n$operacion = $cliente->delete('borrarPelicula/' . $id_pelicula);\n\n¿Cuál de las siguientes afirmaciones sobre el cuerpo de la petición (body) es cierta por lo general en las peticiones DELETE en REST?",
    "opciones": [
      "Guzzle siempre enviará un cuerpo JSON vacío (`{}`) por seguridad.",
      "Las peticiones DELETE no deben llevar cuerpo (body), la información del recurso a borrar va en la propia URL.",
      "Es obligatorio adjuntar un 'form_params' con un token de borrado, de lo contrario Guzzle da error.",
      "Las peticiones DELETE deben incluir el cuerpo completo del objeto que se va a borrar para que el servidor compruebe si ha cambiado."
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "En un controlador Laravel tenemos el siguiente código (F22):\n\n$datos = $request->json()->all();\n\n¿Qué ocurre si la petición enviada por el cliente Guzzle usó `['form_params' => [...]]` en vez de `['json' => [...]]`?",
    "opciones": [
      "`$datos` estará vacío o será nulo, ya que el método `json()` busca específicamente el payload decodificado a partir del cuerpo JSON de la petición.",
      "`$datos` contendrá la información del formulario porque Laravel es inteligente y hace el cast automático.",
      "Se producirá una excepción 500 porque el método `json()` no existe en la clase Request.",
      "Laravel lanzará una excepción 'FormFormatMismatch' que debe ser capturada con un try/catch."
    ],
    "correcta": 0
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "En el cliente PHP con Guzzle (F23):\n\n$operacion = $cliente->get('listarGeneros');\n$lista = json_decode($operacion->getBody()->getContents(), true);\n\nSi el servidor Laravel devolvió un array vacío `[]` con código 200, ¿qué valor tendrá la variable `$lista` en PHP?",
    "opciones": [
      "null",
      "false",
      "Un objeto vacío (stdClass)",
      "Un array vacío (array())"
    ],
    "correcta": 3
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente fragmento del servidor (F24):\n\n$existe = Pelicula::where('titulo', $request->titulo)->exists();\nif ($existe) {\n  return response()->json(['errores' => ['Ya existe']], 422);\n}\n\n¿Cuál es la diferencia de usar `exists()` en lugar de usar `first()` en este escenario?",
    "opciones": [
      "Ninguna, a nivel de rendimiento y consulta SQL ejecutan exactamente lo mismo.",
      "`exists()` devuelve true/false realizando una consulta SQL optimizada (ej: `SELECT 1... LIMIT 1`), mientras que `first()` descarga todo el registro de la base de datos a memoria, lo cual es ineficiente si solo queremos saber si existe.",
      "`first()` solo busca el primer registro insertado históricamente, mientras que `exists()` busca en toda la tabla.",
      "`exists()` solo se puede utilizar en la clase DB, no a través del ORM Eloquent."
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Observando la respuesta de error de validación en Laravel (F25):\n\nreturn response()->json(['errores' => $v->errors()->all()], 422);\n\nSi fallan 3 reglas de validación en distintos campos, ¿qué tipo de estructura devolverá `$v->errors()->all()`?",
    "opciones": [
      "Un objeto asociativo cuyas claves son los nombres de los campos que fallaron.",
      "Un string largo con todos los mensajes de error concatenados por comas.",
      "Un array simple (lista) conteniendo los 3 mensajes de error de texto plano.",
      "Un booleano `true` indicando que existen errores múltiples."
    ],
    "correcta": 2
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "En una petición Guzzle para comprobar existencia (F26):\n\n$cliente->get('existe', [\n  'query' => ['titulo' => 'Alien']\n]);\n\n¿Cómo podemos acceder al valor del título enviado por el cliente desde el controlador de Laravel?",
    "opciones": [
      "$request->header('titulo')",
      "$request->query('titulo') o $request->titulo o $request->input('titulo')",
      "$request->body('titulo')",
      "$request->route('titulo')"
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Observa el fragmento de código (F27):\n\nRoute::put('/pelicula/{id}', 'actualizar');\n\nSi llamamos a esta ruta pero utilizamos el método POST en nuestro cliente HTTP, ¿qué responderá Laravel por defecto?",
    "opciones": [
      "200 OK (Laravel convierte POST a PUT automáticamente si hay parámetros).",
      "404 Not Found (no encuentra la ruta).",
      "405 Method Not Allowed (La ruta existe pero el método HTTP usado no está definido para ella).",
      "419 Page Expired (Falla el token CSRF)."
    ],
    "correcta": 2
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "En la función de crear película (F28):\n\n$datos = $v->validated();\n$pelicula = Pelicula::create($datos);\n\n¿Qué contiene la variable `$datos` devuelta por `$v->validated()`?",
    "opciones": [
      "Todos los datos de la petición original `$request->all()`, independientemente de la validación.",
      "Solo un valor booleano indicando que la validación fue un éxito.",
      "Únicamente los datos del request que pasaron explícitamente por alguna regla de validación definida en el Validator.",
      "Los modelos Eloquent de las relaciones que han sido validadas (como los géneros)."
    ],
    "correcta": 2
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "En Guzzle, si usamos este fragmento de configuración (F29):\n\n$cliente = new Client([\n  'base_uri' => 'http://localhost/api/'\n]);\n$cliente->get('peliculas');\n\n¿A qué URL final se hará la petición GET?",
    "opciones": [
      "http://localhost/api/peliculas",
      "http://localhost/peliculas",
      "http://localhost/api/?url=peliculas",
      "Dará error porque la ruta relativa 'peliculas' debe empezar obligatoriamente con una barra '/peliculas'."
    ],
    "correcta": 0
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente controlador en Laravel para listar datos (F30):\n\npublic function listarGeneros() {\n  return response()->json(Genero::all(), 200);\n}\n\n¿Qué ocurrirá si ejecutamos esta ruta y la tabla `generos` está totalmente vacía?",
    "opciones": [
      "Devolverá un error HTTP 404.",
      "Devolverá un JSON con un array vacío `[]` y código 200.",
      "Devolverá un error interno 500 porque `all()` no puede procesar tablas vacías.",
      "Devolverá un JSON nulo `null` y código 204 No Content."
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Analizando la ruta del API de Laravel (F31):\n\nRoute::post('/crear', [ApiController::class, 'crear']);\n\n¿Es necesario incluir en el cliente HTTP el token `@csrf` al hacer esta petición a través de la API, sabiendo que la ruta está en `routes/api.php`?",
    "opciones": [
      "Sí, todas las rutas de tipo POST en Laravel exigen el token CSRF por seguridad.",
      "Solo es necesario si el cliente que hace la petición es un navegador web.",
      "No, las rutas definidas en `routes/api.php` están protegidas por JWT automáticamente y no usan CSRF.",
      "No, el middleware asociado al archivo `api.php` por defecto excluye la validación del token CSRF (ya que las APIs son 'stateless')."
    ],
    "correcta": 3
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Observa el siguiente manejo de error en el cliente PHP con Guzzle (F32):\n\ntry {\n  $cliente->post('crear', ['json' => $datos]);\n} catch (ClientException $e) {\n  $respuesta = $e->getResponse();\n  echo $respuesta->getStatusCode();\n}\n\nSi Guzzle sí lanza excepciones y el servidor Laravel responde un error de validación (422), ¿qué imprimirá el `echo` del bloque catch?",
    "opciones": [
      "500 (ya que es una excepción)",
      "422",
      "Nada, la ejecución se detiene fatalmente en la excepción.",
      "200 (porque Guzzle captura el error y lo convierte a correcto)."
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente bloque de validación (F33):\n\n'anio' => 'required|numeric|min:1965|max:' . date('Y')\n\nSi el cliente envía en la petición `'anio' => 'hola'`, ¿qué regla fallará primero en Laravel por defecto?",
    "opciones": [
      "required",
      "numeric",
      "min",
      "max"
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "En un controlador de actualización tenemos lo siguiente (F34):\n\nfunction actualizar(Request $request, $id) {\n  $pelicula = Pelicula::find($id);\n  //...\n}\n\n¿Por qué es preferible usar la firma `function actualizar(Request $request, Pelicula $pelicula)` en lugar de recuperar el ID y hacer `Pelicula::find($id)` manualmente?",
    "opciones": [
      "Porque consume menos memoria en el servidor.",
      "Porque Laravel realiza automáticamente el 'Route Model Binding' (Autobinding), buscando la película en la base de datos o devolviendo un 404 automáticamente si no existe.",
      "Porque de otra forma no se pueden guardar los cambios al usar el método `update()`.",
      "No hay ninguna diferencia, ambas formas funcionan exactamente igual en todos los casos."
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Al leer el cuerpo de una respuesta JSON de un error (F35):\n\n$datos = json_decode($operacion->getBody()->getContents(), true);\nreturn $datos['errores'];\n\n¿Qué tipo de error de PHP o fallo se puede dar en esa segunda línea si el servidor devolvió accidentalmente una cadena de texto vacía y el código 500?",
    "opciones": [
      "Aviso de clave 'errores' no definida (Undefined array key) porque `$datos` será nulo o no tendrá esa clave al haber fallado el json_decode.",
      "Excepción de acceso a memoria no válida.",
      "Ninguno, PHP automáticamente creará un array con la clave 'errores' vacía.",
      "Guzzle volverá a intentar la petición al detectar un json_decode fallido."
    ],
    "correcta": 0
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Observa el paso de parámetros en GET usando Guzzle (F36):\n\n$cliente->get('buscar', ['query' => ['titulo' => 'Dune']]);\n\nSi tuviéramos que enviar el mismo dato pero a través de la propia cadena de la URL sin usar el array 'query', ¿cómo sería?",
    "opciones": [
      "$cliente->get('buscar/titulo/Dune');",
      "$cliente->get('buscar?titulo=Dune');",
      "$cliente->get('buscar:titulo=Dune');",
      "$cliente->get('buscar[titulo]=Dune');"
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "En Laravel, para validar un campo opcional que no es obligatorio pero que, si se envía, debe ser numérico, usamos el siguiente string de validación (F37):\n\n'valoracion' => '_______|numeric'\n\n¿Qué palabra falta en el espacio en blanco?",
    "opciones": [
      "nullable",
      "optional",
      "sometimes",
      "if_present"
    ],
    "correcta": 0
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente uso de Guzzle (F38):\n\n$operacion = $cliente->delete('pelicula/' . $id);\n\nSi el servidor no soporta el método DELETE en el servidor web (por configuración del firewall, por ejemplo), ¿qué opción nativa de HTML/HTTP nos permite 'simular' el DELETE mediante una petición POST en servicios web basados en Laravel?",
    "opciones": [
      "Añadir el parámetro `?_method=DELETE` en la URL de la petición POST.",
      "Enviar el parámetro en el cuerpo `_type=DELETE`.",
      "No se puede, hay que configurar el servidor obligatoriamente.",
      "Añadir la cabecera `X-Delete-Request: true`."
    ],
    "correcta": 0
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Analizando la creación del cliente de Guzzle (F39):\n\n$cliente = new Client(['timeout' => 2.0]);\n\n¿Para qué sirve el parámetro `timeout` en esta configuración del cliente HTTP?",
    "opciones": [
      "Establece el número máximo de veces que intentará conectar en caso de fallo.",
      "Define el tiempo en segundos que el cliente esperará como máximo para obtener una respuesta del servidor antes de lanzar un error por tiempo excedido.",
      "Define los segundos que debe esperar el cliente antes de enviar la petición.",
      "Controla el tiempo máximo de vida de la sesión o cookie del servidor remoto."
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "En el controlador de Laravel, queremos devolver los datos eliminados en la respuesta JSON (F40):\n\n$pelicula = Pelicula::find($id);\n$pelicula->delete();\nreturn response()->json(['resultado' => 1, 'eliminada' => _______ ], 200);\n\n¿Qué podemos poner en el espacio en blanco para enviar todos los atributos originales de la película eliminada?",
    "opciones": [
      "$pelicula->getAll()",
      "$pelicula",
      "$pelicula->toArray()",
      "$pelicula->jsonSerialize()"
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Analizando el método del modelo Laravel en la función de modificación (F41):\n\n$pelicula->update($request->all());\n\nPara que esta instrucción funcione y no lance una excepción `MassAssignmentException`, ¿qué propiedad debe estar definida en el modelo `Pelicula`?",
    "opciones": [
      "protected $guarded = []; o protected $fillable = [...];",
      "protected $massAssignment = true;",
      "protected $table = 'peliculas';",
      "public $timestamps = false;"
    ],
    "correcta": 0
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Dado el cliente Guzzle y la opción HTTP (F42):\n\n$operacion = $cliente->request('PATCH', 'pelicula/' . $id, ['json' => ['titulo' => 'Dune 2']]);\n\nEn la arquitectura REST, ¿cuál es la diferencia semántica principal entre usar PUT y usar PATCH para actualizar un recurso?",
    "opciones": [
      "PUT requiere los datos en formato de formulario y PATCH requiere JSON.",
      "PUT se usa para actualizar el recurso completo (reemplazándolo), mientras que PATCH se usa para realizar actualizaciones parciales (solo los campos enviados).",
      "PATCH solo se permite si el recurso acaba de ser creado, PUT se usa para el resto.",
      "No existe diferencia semántica, son sinónimos absolutos y en Laravel se rutean igual."
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Dado el fragmento de código (F43):\n\nRoute::apiResource('peliculas', PeliculasController::class);\n\nEsta directiva es un atajo para definir varias rutas. ¿Qué ruta NO se genera automáticamente al usar `apiResource` a diferencia de usar simplemente `resource`?",
    "opciones": [
      "GET /peliculas (index)",
      "GET /peliculas/create (create)",
      "POST /peliculas (store)",
      "DELETE /peliculas/{pelicula} (destroy)"
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Observa el comportamiento de las respuestas en Laravel (F44):\n\nreturn Pelicula::all();\n\nSi desde un controlador en `routes/api.php` devolvemos directamente una colección Eloquent como en la línea anterior, ¿qué hace Laravel internamente?",
    "opciones": [
      "Devuelve un error porque no se ha invocado el método `response()->json()`.",
      "Lo convierte automáticamente a JSON y lo devuelve con el código HTTP 200.",
      "Lo serializa como una cadena en formato XML por defecto.",
      "Devuelve la representación de memoria de los objetos PHP, que no puede ser leída por Guzzle."
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "En un controlador, vemos esta línea de validación (F45):\n\n'duracion' => 'required|integer|min:10|max:300'\n\n¿Qué comprueban las reglas min:10 y max:300 teniendo en cuenta que la regla anterior es `integer`?",
    "opciones": [
      "Comprueba que el número enviado tenga entre 10 y 300 caracteres de longitud.",
      "Comprueba que el valor numérico enviado sea mayor o igual a 10 y menor o igual a 300.",
      "Comprueba que la base de datos tenga capacidad entre 10 y 300 Bytes para guardar ese entero.",
      "Comprueba que el valor enviado esté dentro del array con identificador 10 al 300."
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Observa el análisis de errores en el cliente Guzzle (F46):\n\nif ($operacion->getStatusCode() == 404) {\n  return self::ERROR_PELICULA_NO_EXISTE;\n}\n\nSi el servidor devuelve un 404 debido a que se hizo una petición a un endpoint de la API mal escrito (ej: `/api/peliculaz`), ¿qué problema lógico tendría el código cliente anterior?",
    "opciones": [
      "Ninguno, procesará correctamente el error 404 y entenderá que la película no existe.",
      "Que asumirá que la película no existe, cuando en realidad lo que no existe es la ruta (URL) solicitada del API.",
      "Que Guzzle nunca lee códigos 404, devolverá un 500 por defecto.",
      "Que los errores 404 de Laravel no devuelven body, haciendo fallar el cliente antes de ese 'if'."
    ],
    "correcta": 1
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Para la petición de login desde el cliente hacia nuestra API, usamos Guzzle (F47):\n\n$cliente->post('login', [\n  'auth' => ['usuario_admin', 'clave_supersecreta']\n]);\n\n¿Qué cabecera HTTP estándar inyecta Guzzle automáticamente cuando se utiliza la opción de array `'auth'` de esta forma?",
    "opciones": [
      "Authorization: Bearer ...",
      "X-Auth-Token: ...",
      "Authorization: Basic ...",
      "Content-Type: auth/credentials"
    ],
    "correcta": 2
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente método para devolver una respuesta JSON en caso de error de servidor inesperado (F48):\n\ntry {\n  //...\n} catch (\\Exception $e) {\n  return response()->json(['error' => 'Fallo interno del servidor'], _______);\n}\n\n¿Cuál es el código HTTP adecuado para rellenar en el hueco indicando 'Internal Server Error'?",
    "opciones": [
      "400",
      "401",
      "403",
      "500"
    ],
    "correcta": 3
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "Al diseñar nuestro servicio web REST, utilizamos los sustantivos en plural para las rutas según el estándar (F49):\n\nRoute::get('/api/_______', [PeliculaController::class, 'index']);\n\nSegún las buenas prácticas RESTful analizadas en el temario de clase para listar el catálogo general, ¿cuál es el texto más adecuado para rellenar el espacio?",
    "opciones": [
      "obtenerTodasLasPeliculas",
      "listarPeliculas",
      "pelicula",
      "peliculas"
    ],
    "correcta": 3
  },
  {
    "tema": "Repaso tarea 6 primera parte",
    "pregunta": "En el cliente, si la variable `$datos` contiene `['titulo' => 'Alien', 'duracion' => 110]`, y ejecutamos esto (F50):\n\n$json_string = json_encode($datos);\n\n¿Qué formato exacto tendrá la cadena resultante alojada en `$json_string`?",
    "opciones": [
      "\"['titulo' => 'Alien', 'duracion' => 110]\"",
      "\"{'titulo': 'Alien', 'duracion': 110}\"",
      "\"{\\\"titulo\\\":\\\"Alien\\\",\\\"duracion\\\":110}\"",
      "\"titulo=Alien&duracion=110\""
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente fragmento de definición de rutas para un API:\n\nRoute::____('/peliculas', 'listarPeliculasPROF');\n\nSabiendo que esta ruta debe devolver al cliente un listado en formato JSON con todas las películas, ¿qué método HTTP debe completar el espacio en blanco según las convenciones REST explicadas por el profesor?",
    "opciones": [
      "post",
      "get",
      "put",
      "delete"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente fragmento de definición de rutas para un API:\n\nRoute::____('/crearPelicula', 'crearPeliculaPROF');\n\nSi el objetivo de este endpoint es recibir datos del cliente para insertar un nuevo registro en la base de datos, ¿qué método HTTP es el adecuado?",
    "opciones": [
      "get",
      "post",
      "update",
      "patch"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente fragmento de rutas en Laravel:\n\nRoute::delete('/borrarPeliculaPROF/____', 'borrarPeliculaPROF');\n\nPara indicar que la ruta debe recibir el identificador de la película a borrar como parámetro en la URL, ¿cómo se debe completar el fragmento?",
    "opciones": [
      "[pelicula]",
      "$pelicula",
      "{pelicula}",
      "<pelicula>"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "En un controlador de nuestra API (por ejemplo `XYZPeliculasControllerAPI`), tenemos el siguiente inicio de método:\n\npublic function listarPeliculasPROF(): ________\n\nSegún la videoconferencia, el controlador en vez de retornar una vista HTML debe retornar un documento en un formato específico. ¿Qué tipo de retorno de Laravel completa correctamente la declaración del método?",
    "opciones": [
      "View",
      "JsonResponse",
      "String",
      "Array"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente fragmento de un controlador API:\n\nreturn response()->____([\n  'resultado' => $pelicula->id\n], 200);\n\n¿Qué método de Laravel se utiliza para asegurar que la respuesta HTTP tenga el formato correcto y la cabecera `Content-Type: application/json`?",
    "opciones": [
      "json",
      "send",
      "view",
      "text"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Analiza el siguiente fragmento de código (FRAGMENTO A):\n\n$v = Validator::make($request->all(), [\n  'titulo' => 'required|string|max:60',\n  ...\n]);\n\nSi queremos comprobar si los datos enviados por el cliente NO cumplen con estas reglas de validación, ¿qué método del objeto Validator debemos usar en un condicional `if`?",
    "opciones": [
      "$v->errors()",
      "$v->invalid()",
      "$v->fails()",
      "$v->passed()"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Imagina que en el FRAGMENTO A anterior la validación falla (`$v->fails()`). Según las indicaciones del profesor sobre emitir la respuesta con el código de estado adecuado, ¿qué código HTTP se debe devolver habitualmente cuando hay un error de validación de datos en una petición REST?",
    "opciones": [
      "200 OK",
      "404 Not Found",
      "422 Unprocessable Entity",
      "500 Internal Server Error"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente fragmento en un controlador que procesa una actualización:\n\nif (!$request->____()) {\n  return response()->json(['errores' => ['Los datos enviados deben ser JSON']], 403);\n}\n\n¿Qué método del objeto Request se usa para comprobar si el cliente ha enviado la petición indicando que el contenido es JSON?",
    "opciones": [
      "hasJson",
      "isJson",
      "wantsJson",
      "expectsJson"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Queremos crear una ruta PUT que obligue a que el parámetro de la URL sea numérico. ¿Qué fragmento de código (FRAGMENTO B) debe añadirse al final de la ruta?\n\nRoute::put('/modificar/{id}', 'modificarPelicula')->________;",
    "opciones": [
      "isNumeric('id')",
      "whereNumber('id')",
      "validate('id', 'numeric')",
      "where('id', 'int')"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "En el archivo donde definimos nuestra API REST, el profesor indica que las rutas no están en el mismo archivo que las vistas web. ¿En qué archivo de la arquitectura de Laravel debemos registrar estas rutas (`Route::get`, `Route::post`, etc.) para un servicio web?",
    "opciones": [
      "routes/web.php",
      "routes/api.php",
      "app/Http/routes.php",
      "config/api.php"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Dado este código de validación:\n\nValidator::make($request->all(), [\n  'genero_id' => 'required|string|exists:____,id'\n]);\n\nSi queremos asegurarnos de que el 'genero_id' enviado coincida con un ID válido de una tabla existente en la base de datos llamada 'generos', ¿qué debemos poner en el espacio en blanco?",
    "opciones": [
      "GeneroPROF",
      "database",
      "generos",
      "table"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Observa el siguiente fragmento de código de un controlador (FRAGMENTO C):\n\n$pelicula = PeliculaPROF::____($id);\nif (!$pelicula) {\n  return response()->json(['errores' => ['No existe la película']], 404);\n}\n\n¿Qué método del modelo Eloquent de Laravel se utiliza habitualmente para intentar recuperar un registro por su clave primaria, devolviendo null si no lo encuentra?",
    "opciones": [
      "search",
      "get",
      "find",
      "where"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Tras procesar y guardar los datos correctamente en la creación de un nuevo recurso (método POST), devolvemos el ID de la nueva película al cliente. ¿Qué código HTTP es el más representativo para indicar que una petición de creación o procesamiento fue exitosa y se devuelve información correctamente?",
    "opciones": [
      "200",
      "400",
      "404",
      "500"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Si un cliente intenta acceder a la ruta DELETE `/api/borrarPeliculaPROF/999` pero el ID 999 no existe en nuestra base de datos. En nuestro controlador verificamos esto y devolvemos un JSON de error. Según el profesor, ¿qué código de estado HTTP se debe incluir en esta respuesta?",
    "opciones": [
      "200",
      "403",
      "404",
      "422"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Observa el siguiente fragmento para definir múltiples rutas en un controlador API (FRAGMENTO D):\n\nRoute::____(XYZPeliculasControllerAPI::class)->group(function () {\n  Route::get('/listar', 'listar');\n  Route::post('/crear', 'crear');\n});\n\n¿Qué método permite agrupar todas estas rutas bajo un mismo controlador de forma óptima en Laravel 9/10?",
    "opciones": [
      "controller",
      "class",
      "group",
      "apiResource"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "En la validación de la creación de una película, queremos extraer solo los datos que han pasado la validación exitosamente para usarlos en la creación del modelo. Si tenemos `$v = Validator::make(...)` y este pasa (`!$v->fails()`), ¿qué método usamos para recuperar los datos limpios?",
    "opciones": [
      "$v->clean()",
      "$v->get()",
      "$v->validated()",
      "$request->all()"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente fragmento (FRAGMENTO E):\n\nreturn response()->json([\n  'errores' => Arr::____($v->errors()->getMessages())\n], 422);\n\nEl profesor utiliza un método de la clase auxiliar `Arr` de Laravel para convertir un array multidimensional de mensajes de error en un array plano de una sola dimensión. ¿Cuál es ese método?",
    "opciones": [
      "collapse",
      "map",
      "merge",
      "flatten"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "En Laravel, para crear directamente un registro en la base de datos usando Eloquent enviándole un array de atributos validados, se utiliza un método estático del modelo:\n\n$pelicula = PeliculaPROF::____($datos);\n\n¿Cuál es ese método que inserta el registro y devuelve la instancia creada?",
    "opciones": [
      "insert",
      "create",
      "new",
      "save"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Si un cliente envía datos malformados o si el JSON está vacío al intentar realizar una petición PUT, y controlamos esto en el controlador enviando un código HTTP, ¿cuál de los siguientes códigos significa \"Prohibido\" y se usa en el ejemplo del profesor cuando no se envían datos JSON (`!$request->isJson()`)?",
    "opciones": [
      "401",
      "403",
      "405",
      "500"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Para borrar una película en Eloquent, primero la buscamos con `$pelicula = PeliculaPROF::find($id);`. Si existe, ¿qué método invocamos sobre el objeto `$pelicula` para eliminar el registro de la base de datos?",
    "opciones": [
      "$pelicula->remove();",
      "$pelicula->destroy();",
      "$pelicula->delete();",
      "$pelicula->drop();"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Para modificar un modelo en base de datos, en el método PUT recibimos la película (ya sea buscándola por ID o inyectándola) y luego actualizamos su atributo:\n\n$pelicula->argumento = $datos['argumento'];\n$pelicula->____();\n\n¿Qué método final guarda realmente los cambios del objeto en la base de datos?",
    "opciones": [
      "update()",
      "store()",
      "save()",
      "push()"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Dado el código de Laravel:\n\n$pelicula->save();\nif ($pelicula->____()) {\n  return response()->json(['resultado' => 1], 200);\n} else {\n  return response()->json(['resultado' => 0], 200);\n}\n\n¿Qué método de Eloquent permite saber si el modelo realmente sufrió modificaciones en sus atributos tras llamar a save()?",
    "opciones": [
      "isDirty()",
      "wasChanged()",
      "hasChanges()",
      "isUpdated()"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Para listar los géneros, solo queremos enviar al cliente los campos 'id', 'nombre' y 'descripcion', evitando enviar los 'timestamps'. ¿Qué método usamos antes de `->get()` para lograrlo?\n\nreturn response()->json(GeneroPROF::____('id', 'nombre', 'descripcion')->get());",
    "opciones": [
      "pluck",
      "only",
      "select",
      "choose"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "En un servicio web implementado con Laravel, ¿qué hace el método estático `Validator::make(...)`?",
    "opciones": [
      "Crea el registro en la base de datos si los datos son correctos.",
      "Devuelve directamente un error 422 si los datos fallan.",
      "Construye una instancia del validador con los datos y las reglas especificadas, lista para ser comprobada.",
      "Lanza una excepción automática que detiene el script."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Al definir reglas de validación para un campo 'titulo' en la creación de películas:\n\n'titulo' => 'required|string|max:60|min:2'\n\n¿Qué significa exactamente la regla `required` en el contexto de la recepción de datos en el controlador?",
    "opciones": [
      "Que el campo puede ir vacío pero debe estar presente en la petición JSON.",
      "Que el campo es obligatorio, no puede estar vacío, ni faltar en la petición enviada por el cliente.",
      "Que el título debe ser único en la base de datos.",
      "Que el campo debe ser requerido en el formulario HTML, aunque sea un API."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente código:\n\npublic function crearPeliculaPROF(____ $request): JsonResponse\n\n¿Qué clase de Laravel debemos inyectar (colocar en el espacio en blanco) para poder acceder a los datos que el cliente ha enviado en su petición HTTP (por ejemplo en un POST)?",
    "opciones": [
      "Response",
      "Client",
      "Request",
      "JSON"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Cuando usamos `Route::apiResource('canciones', CancionController::class);` en Laravel, se crean varias rutas REST automáticamente. Según los apuntes, a diferencia de `Route::resource`, ¿qué operaciones NO se incluyen porque no se usan plantillas HTML en un API?",
    "opciones": [
      "index y show",
      "store y destroy",
      "create y edit",
      "update y patch"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Si en una API queremos evitar devolver todas las películas si un cliente olvida pasar el ID, y decidimos comprobar que el dato de búsqueda es numérico antes de usar Eloquent:\n\nif (!____($pelicula)) {\n  $errores = ['No se ha recibido un id numérico'];\n}\n\n¿Qué función nativa de PHP se utiliza frecuentemente aquí para validar que el ID es un número antes de pasarlo a `find()`?",
    "opciones": [
      "is_int",
      "is_numeric",
      "ctype_digit",
      "is_number"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Observa cómo se obtienen los datos JSON validados de un objeto Request:\n\n$v = Validator::make($request->____()->all(), ['argumento' => 'required']);\n\n¿Qué método del Request usamos explícitamente en Laravel para leer la carga útil (payload) cuando sabemos que el formato de entrada es estrictamente JSON?",
    "opciones": [
      "input",
      "json",
      "content",
      "payload"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Según la videoconferencia, el bloque del Tema 6 será un examen tipo test. El objetivo de la parte del Servidor / API en Laravel es reconocer los flujos. ¿Cuál de los siguientes flujos es el habitual correcto descrito por el profesor para un método de controlador de API?",
    "opciones": [
      "Recibir datos -> Retornar vista HTML -> Guardar en BBDD",
      "Recibir datos -> Validarlos -> Accionar modelo (BD) -> Emitir respuesta JSON con código HTTP",
      "Emitir JSON -> Recibir validación HTTP -> Conectar a Guzzle",
      "Validar modelo HTTP -> Renderizar JSON con Smarty -> Devolver 200 OK"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "En Laravel, al devolver `response()->json(['resultado' => 1], 200);`, ¿qué formato interno utiliza PHP automáticamente para transformar el array asociativo PHP `['resultado' => 1]` en la cadena de texto de la respuesta?",
    "opciones": [
      "serialize()",
      "json_encode()",
      "json_decode()",
      "XML conversion"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "En la parte del servidor, definimos un validador con un tercer argumento (opcional) que es un array asociativo. ¿Para qué sirve este array extra en el método `Validator::make($datos, $reglas, $mensajes_personalizados)`?",
    "opciones": [
      "Para añadir nuevas reglas de validación en tiempo de ejecución.",
      "Para definir los tipos de datos en la base de datos.",
      "Para especificar los mensajes de error en español que se devolverán al cliente si la validación falla.",
      "Para establecer el código HTTP (422) por defecto."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Si queremos borrar un recurso existente en una API RESTful, el cliente debe usar el verbo HTTP DELETE. En nuestro controlador, ¿qué código de estado es el más correcto si el cliente intenta borrar un recurso proporcionando un ID que NO existe en la base de datos?",
    "opciones": [
      "404",
      "200",
      "401",
      "500"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Queremos verificar si ya existe una película en la BD con exactamente el mismo título, año y dirección antes de crear una nueva:\n\n$resultado = PeliculaPROF::where('titulo', trim($datos['titulo']))\n  ->where('anio', intval($datos['anio']))\n  ->where('direccion', trim($datos['direccion']))\n  ->____();\n\n¿Qué método terminador de Eloquent devuelve un booleano (true o false) indicando si hay algún registro que cumpla esas condiciones?",
    "opciones": [
      "first",
      "get",
      "exists",
      "count"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Si `$resultado` de la pregunta anterior es `true`, la película ya existe. Devolvemos un error al cliente:\n\nreturn response()->json([\n  'errores' => ['La película ya existe']\n], ____);\n\n¿Qué código HTTP se usa en la tarea para indicar que la validación semántica de negocio (como datos duplicados) ha fallado?",
    "opciones": [
      "200",
      "403",
      "422",
      "404"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "En los archivos del servidor, vemos que hay un prefijo `api/` en todas las rutas cuando las consumimos con Guzzle (ej. `http://localhost/api/listarGeneros`). Sin embargo, en el archivo `routes/api.php` escribimos solo `Route::get('/listarGeneros', ...);`. ¿Por qué ocurre esto?",
    "opciones": [
      "Porque el archivo se llama api.php.",
      "Porque Guzzle añade automáticamente el prefijo 'api/'.",
      "Porque Laravel aplica automáticamente el prefijo 'api/' y un middleware sin estado a todas las rutas declaradas en routes/api.php.",
      "Porque Apache/XAMPP redirige todo el tráfico web hacia la carpeta /api."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "En Laravel, ¿qué propiedad del modelo Eloquent especifica los campos que pueden ser asignados masivamente al usar métodos como `Model::create($datos)`?",
    "opciones": [
      "$hidden",
      "$fillable",
      "$guarded",
      "$table"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Dado un endpoint `GET /api/listarPeliculas`, el controlador hace lo siguiente:\n\nreturn response()->json(PeliculaPROF::all());\n\n¿Qué información espera el cliente obtener como resultado?",
    "opciones": [
      "Un mensaje de texto confirmando la existencia de la tabla.",
      "Un array JSON que contiene objetos con los atributos de todas las películas de la base de datos.",
      "Una vista HTML con una tabla renderizada de las películas.",
      "Un archivo XML con los datos estructurados."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Imagina que estamos actualizando (PUT) solo el argumento de la película.\nEl validador se escribe así: `Validator::make($request->json()->all(), ['argumento' => 'required|string|max:255|min:10'])`.\nSi el cliente envía un texto de 5 caracteres, ¿qué ocurrirá en el controlador?",
    "opciones": [
      "Se lanzará un error 500 en el servidor y la ejecución se cortará.",
      "La validación fallará ($v->fails() será true) y deberemos devolver un JSON con el mensaje de error y código 422.",
      "Se cortará el texto a 10 caracteres automáticamente y se guardará.",
      "La base de datos rechazará la consulta lanzando una SQL Exception."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Según el profesor en la videoconferencia, en la Tarea 6 diseñamos un controlador enfocado a un API. ¿Cuál es la diferencia principal entre un controlador web clásico y un controlador API REST en Laravel?",
    "opciones": [
      "El controlador web no puede usar base de datos.",
      "El controlador API usa funciones estáticas exclusivamente.",
      "El controlador API en vez de retornar una vista (HTML), retorna un documento serializado, habitualmente en formato JSON.",
      "El controlador API no utiliza modelos MVC."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "En la tarea se implementa el borrado seguro. Si la película a borrar SÍ existe y es borrada correctamente (`$pelicula->delete()`), ¿cuál es la estructura de retorno JSON definida por el profesor en la tarea para indicar éxito?",
    "opciones": [
      "return response()->json(['resultado' => 1], 200);",
      "return response()->json(['error' => false], 404);",
      "return response()->json(['borrado' => true], 201);",
      "return response()->view('exito');"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Si se envía una petición GET a un endpoint que solo está definido para POST (ej. `Route::post('/crearPelicula', ...)`), ¿qué error HTTP lanzará el framework automáticamente?",
    "opciones": [
      "404 Not Found",
      "405 Method Not Allowed",
      "422 Unprocessable Entity",
      "500 Internal Server Error"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Al realizar una inserción de película, recibimos `$request->all()`. Si uno de los campos recibidos tiene espacios al principio y final y queremos asegurarnos de limpiarlo antes de usarlo en un `where` para comprobar su existencia, ¿qué función básica de PHP usamos, como se vio en el ejemplo de la tarea?",
    "opciones": [
      "clean()",
      "strip_tags()",
      "trim()",
      "htmlspecialchars()"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Para la validación del 'anio' (año) en la creación de una película, las reglas son `'anio' => 'required|numeric|min:1965|max:' . date('Y')`.\nSi un cliente envía `\"anio\": \"1980\"` como cadena JSON, ¿pasará la regla `numeric`?",
    "opciones": [
      "No, porque Laravel requiere estrictamente el tipo integer (int) si se usa 'numeric'.",
      "Sí, porque Laravel puede interpretar cadenas que contienen números válidos como numéricos.",
      "No, porque 1980 es menor que 1965.",
      "Sí, siempre y cuando no se use date('Y')."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Dado el siguiente fragmento de rutas:\n\nRoute::____('/mascota/{id}', 'ActualizarMascota');\nRoute::____('/mascota/{id}', 'ModificarMascotaParcial');\n\nEn la teoría REST, ¿qué dos métodos HTTP se utilizan convencionalmente para actualizar recursos completos y parcialmente, respectivamente?",
    "opciones": [
      "POST y GET",
      "PUT y PATCH",
      "DELETE y POST",
      "UPDATE y MODIFY"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Un controlador REST tiene el método genérico:\n\npublic function store(Request $request)\n{\n    $item = Modelo::create($request->all());\n    return response()->json($item, 201);\n}\n\n¿Por qué devuelve 201 en lugar de 200 HTTP?",
    "opciones": [
      "201 significa 'No Content', indicando que no hay respuesta que procesar.",
      "201 significa 'Created', y es la práctica recomendada en REST para indicar que un nuevo recurso ha sido creado exitosamente.",
      "201 indica que hubo errores pero se forzó la creación.",
      "200 está reservado solo para respuestas HTML."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Según los apuntes y la videoconferencia, en un servicio web REST en Laravel, la comunicación es 'sin estado' (Stateless). ¿Qué significa esto a nivel práctico en el controlador de la API?",
    "opciones": [
      "Que no podemos guardar datos en la base de datos (el estado).",
      "Que el servidor no guarda información de la sesión del cliente (como variables de sesión PHP) entre peticiones; cada petición debe ser independiente.",
      "Que no podemos usar el código HTTP 200.",
      "Que el servidor solo puede estar ubicado en un único estado geográfico."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "Dado el fragmento de la clase `PeliculaPROF`:\n\nclass PeliculaPROF extends Model\n{\n    protected $table = 'peliculas';\n}\n\n¿Por qué se especifica manualmente `$table = 'peliculas'`?",
    "opciones": [
      "Porque Eloquent obliga a declarar siempre el nombre de la tabla en todos los modelos.",
      "Para sobreescribir la convención por defecto de Eloquent, que buscaría una tabla llamada 'pelicula_p_r_o_fs'.",
      "Porque es una medida de seguridad contra inyecciones SQL.",
      "Porque 'peliculas' es una palabra reservada en MySQL."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "En la tarea, la ruta de creación está definida como `Route::post('/crearPeliculaPROF', ...);`\nSi el cliente hace la petición, pero olvida incluir el Content-Length en la cabecera, es un problema de protocolo. Pero si el cliente envía todos los datos vacíos (`{}`), ¿quién detiene la ejecución y previene el error en la BD?",
    "opciones": [
      "El archivo routes/api.php",
      "El método Validator::make() en el controlador, al evaluar la regla 'required'.",
      "El modelo Eloquent mediante sus relaciones.",
      "La directiva whereNumber() en la ruta."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 primera parte",
    "pregunta": "En la creación del controlador API, usamos: `php artisan make:controller CancionController --api`\n¿Qué ventaja tiene usar la bandera `--api` al generar este archivo?",
    "opciones": [
      "Instala automáticamente Guzzle en el proyecto.",
      "Crea un archivo rutas en automático dentro de routes/api.php.",
      "Genera los métodos del controlador (index, store, show, update, destroy) sin los métodos orientados a vistas HTML (create, edit).",
      "Configura el archivo .env para usar SQLite."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En el cliente Guzzle, para obtener la lista de géneros usamos: `$operacion = $cliente->____('listarGenerosPROF');`[cite: 441]. ¿Qué método falta para hacer una petición de lectura básica al API?",
    "opciones": [
      "post",
      "get",
      "put",
      "delete"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para decodificar la respuesta JSON en Guzzle usamos: `$lista = json_decode($operacion->getBody()->____(), true);`[cite: 443]. ¿Qué método se utiliza para extraer el contenido en formato texto de la respuesta?",
    "opciones": [
      "read()",
      "getContents()",
      "getText()",
      "getString()"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En las peticiones con Guzzle, para verificar el éxito: `if ($operacion->____() != 200) { return self::ERROR_SERVICIO_WEB; }`[cite: 442]. ¿Qué método nos da el código HTTP de respuesta?",
    "opciones": [
      "getStatus()",
      "getStatusCode()",
      "getCode()",
      "httpStatus()"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para enviar parámetros en la URL mediante una petición GET con Guzzle: `$cliente->get('existePeliculaPROF', ['____' => ['titulo' => $titulo]]);`[cite: 448]. ¿Qué clave del array de opciones debemos usar?",
    "opciones": [
      "query",
      "form_params",
      "json",
      "body"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para enviar datos simulando un formulario (x-www-form-urlencoded) en un POST: `$cliente->post('crearPeliculaPROF', ['____' => ['titulo' => $titulo]]);`[cite: 453]. ¿Qué clave es la correcta?",
    "opciones": [
      "query",
      "form_params",
      "json",
      "multipart"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Cuando hay un error en los datos de entrada, la API devuelve: `if ($operacion->getStatusCode() == ____) { return $datos['errores']; }`[cite: 449]. ¿Qué código numérico indica fallo de validación en la tarea?",
    "opciones": [
      "404",
      "500",
      "422",
      "403"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para enviar los datos directamente en formato JSON mediante un PUT: `$cliente->put('modificar', ['____' => ['argumento' => $argumento]]);`[cite: 459]. ¿Qué clave de Guzzle usamos?",
    "opciones": [
      "json",
      "form_params",
      "body_json",
      "query"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Si al intentar modificar una película, obtenemos: `if ($operacion->getStatusCode() == 404)`[cite: 460]. ¿Qué nos está indicando el servidor API con este código?",
    "opciones": [
      "Que no tenemos permisos para modificarla.",
      "Que los datos enviados no son válidos.",
      "Que la película que intentamos modificar no existe.",
      "Que el servidor está apagado."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Según el controlador de la tarea, si recibe datos incorrectos de formato: `if ($operacion->getStatusCode() == 403) { return self::ERROR_DATOS_NO_JSON; }`[cite: 461]. ¿Qué significa el error 403 en este contexto específico?",
    "opciones": [
      "Fallo en la base de datos.",
      "Datos no enviados en el formato JSON esperado.",
      "La ruta no permite el método PUT.",
      "El usuario no está autenticado."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para solicitar el borrado de un recurso en el API usando Guzzle: `$operacion = $cliente->____('borrarPeliculaPROF/' . $id_pelicula);`[cite: 466]. ¿Qué método invocamos?",
    "opciones": [
      "remove",
      "delete",
      "destroy",
      "erase"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En las rutas de Laravel, para aplicar un mismo controlador a varias rutas: `Route::controller(XYZPeliculasControllerAPI::class)->____(function () { ... });`[cite: 1011]. ¿Qué método agrupa las rutas?",
    "opciones": [
      "group",
      "bind",
      "wrap",
      "set"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En el archivo api.php, para exigir que el parámetro {pelicula} sea numérico: `Route::put('/modificar/{pelicula}', '...')->____('pelicula');`[cite: 1011]. ¿Qué restricción se usa?",
    "opciones": [
      "whereInt",
      "mustBeNumeric",
      "whereNumber",
      "isInteger"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En el controlador, para iniciar la comprobación de los datos entrantes: `$v = Validator::____($request->all(), [...]);`[cite: 470]. ¿Qué método estático crea el validador?",
    "opciones": [
      "create",
      "make",
      "build",
      "start"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En el array de reglas de validación, para hacer que un campo sea obligatorio: `'titulo' => '____|string|max:60'`[cite: 470]. ¿Qué regla falta?",
    "opciones": [
      "mandatory",
      "needed",
      "required",
      "must_exist"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para validar que el id de género enviado realmente está en la tabla `generos`: `'genero_id' => 'required|string|____:generos,id'`[cite: 471]. ¿Qué regla de Laravel verifica esto en la BD?",
    "opciones": [
      "in_table",
      "exists",
      "foreign",
      "has"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para validar que la duración es un número: `'duracion' => 'required|____|min:1|max:500'`[cite: 471]. ¿Qué regla se aplica?",
    "opciones": [
      "int",
      "integer",
      "numeric",
      "number"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para comprobar en el controlador si la validación no se cumplió: `if ($v->____()) { return response()->json(...); }`[cite: 473]. ¿Qué método indica el fallo?",
    "opciones": [
      "fails",
      "isInvalid",
      "hasErrors",
      "error"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para devolver una respuesta JSON correctamente formateada en el controlador: `return ____()->json(['resultado' => 1], 200);`[cite: 475]. ¿Qué función auxiliar (helper) debemos usar?",
    "opciones": [
      "reply",
      "return",
      "response",
      "send"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En el modelo, para verificar si ya existe un registro con ciertas condiciones sin traer los datos completos: `PeliculaPROF::where('titulo', $titulo)->____();`[cite: 474]. ¿Qué método devuelve un booleano?",
    "opciones": [
      "exists",
      "count",
      "check",
      "find"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para insertar un nuevo registro en la base de datos masivamente a partir de un array de datos válidos: `$pelicula = PeliculaPROF::____($datos);`[cite: 475]. ¿Qué método de Eloquent se usa?",
    "opciones": [
      "make",
      "insert",
      "save",
      "create"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En la función de modificar el argumento, para verificar que el cliente mandó la cabecera JSON: `if (!$request->____()) { return response()->json(['errores'], 403); }`[cite: 476]. ¿Qué método del Request hace esto?",
    "opciones": [
      "isJson",
      "wantsJson",
      "hasJson",
      "checkJson"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Al actualizar un modelo Eloquent, para consolidar los cambios en la base de datos: `$pelicula->argumento = $datos['argumento']; $pelicula->____();`[cite: 480]. ¿Qué método lanza el UPDATE?",
    "opciones": [
      "update",
      "push",
      "save",
      "store"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para verificar si el modelo guardado realmente sufrió modificaciones (y no era igual a lo que ya había): `if ($pelicula->____()) { return ... }`[cite: 480]. ¿Qué método de Laravel nos lo dice?",
    "opciones": [
      "isDirty",
      "hasChanges",
      "wasChanged",
      "isModified"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En la función de borrado de la API, para asegurarse de que el ID recibido por parámetro es un número: `if (!____($pelicula)) { ... }`[cite: 481]. ¿Qué función genérica de PHP se utiliza?",
    "opciones": [
      "is_numeric",
      "is_int",
      "is_integer",
      "is_number"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para recuperar un modelo de la BD usando su identificador principal (id): `$pelicula = PeliculaPROF::____($pelicula);`[cite: 482]. ¿Qué método de Eloquent busca por clave primaria?",
    "opciones": [
      "find",
      "search",
      "get",
      "locate"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para borrar permanentemente un registro instanciado en Eloquent: `$pelicula->____();`[cite: 483]. ¿Qué método ejecuta la instrucción DELETE en la BD?",
    "opciones": [
      "remove",
      "erase",
      "destroy",
      "delete"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En la lectura del CSV del cliente: `'titulo' => $datos['titulo'] ____ ''`[cite: 453]. ¿Qué operador PHP devuelve el segundo valor si el primero es null o no existe?",
    "opciones": [
      "||",
      "??",
      "?:",
      "or"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En el cliente, para forzar que el valor devuelto sea interpretado como entero por PHP: `return ____($datos['resultado']);`[cite: 462]. ¿Qué función de casteo se usa?",
    "opciones": [
      "intval",
      "to_int",
      "parse_int",
      "integer"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para procesar un archivo con datos separados por comas línea a línea en el cliente: `$linea = ____($linea_str);`[cite: 484]. ¿Qué función de PHP convierte el string en array parseando el CSV?",
    "opciones": [
      "explode_csv",
      "parse_csv",
      "str_getcsv",
      "split_csv"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Al extraer los datos de un array en PHP, para unir los mensajes de error en un solo string: `implode(\"\", $resultado)`[cite: 501]. ¿Qué hace exactamente la función `implode`?",
    "opciones": [
      "Divide el string en un array.",
      "Une los elementos del array en un solo string.",
      "Elimina los elementos vacíos del array.",
      "Codifica el array a formato JSON."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para definir una ruta que responda a la acción de crear (enviando datos): `Route::____('/crearPeliculaPROF', 'crearPeliculaPROF');`[cite: 1011]. ¿Qué verbo RESTful se usa?",
    "opciones": [
      "get",
      "put",
      "delete",
      "post"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para convertir los mensajes de error anidados del validador de Laravel en un array de un solo nivel: `'errores' => Arr::____($v->errors()->getMessages())`[cite: 473]. ¿Qué método helper se usa?",
    "opciones": [
      "collapse",
      "flatten",
      "merge",
      "simplify"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Una vez que la validación es correcta, para recuperar solo los datos que han pasado las reglas: `$datos = $v->____();`[cite: 473]. ¿Qué método usamos?",
    "opciones": [
      "data",
      "all",
      "get",
      "validated"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En la consulta Eloquent, para limpiar los espacios en blanco sobrantes antes de buscar: `PeliculaPROF::where('titulo', ____($datos['titulo']))`[cite: 474]. ¿Qué función de PHP aplicamos?",
    "opciones": [
      "clean",
      "trim",
      "strip_tags",
      "strip_spaces"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para indicar un error interno del servidor web (no contemplado por el API directamente) en Guzzle, ¿qué código HTTP devuelve el servidor por defecto en PHP? [cite: 736]",
    "opciones": [
      "404",
      "422",
      "500",
      "200"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para obtener un parámetro de una petición GET de Laravel (opcional si no se ha usado Router Binding): `$id = $_GET['id'] ?? null;`[cite: 905]. En Laravel, ¿qué método es equivalente a `$request->...`?",
    "opciones": [
      "$request->input('id')",
      "$request->get_param('id')",
      "$request->value('id')",
      "$request->parameter('id')"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Para convertir el JSON recibido en un array asociativo usando PHP puro: `json_decode($json_string, ____)`[cite: 449]. ¿Qué parámetro asegura que sea un array y no un objeto stdClass?",
    "opciones": [
      "1",
      "false",
      "true",
      "'array'"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Al crear el validador: `Validator::make(..., [...], [ 'titulo.required' => 'El título es obligatorio' ])`[cite: 471]. ¿Para qué sirve este tercer array de parámetros?",
    "opciones": [
      "Para añadir reglas condicionales.",
      "Para definir los valores por defecto.",
      "Para especificar mensajes de error personalizados.",
      "Para definir tipos de datos en la base de datos."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Sobre el cliente por comandos HTTPie visto en teoría: `HTTPie se presenta en tres versiones distintas: Desktop, Terminal y ____ App`[cite: 790]. ¿Cuál falta?",
    "opciones": [
      "Mobile",
      "Console",
      "Web",
      "Server"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En Laravel, para generar un recurso de API completo que incluya métodos como index, store, update y destroy automáticamente: `Route::____('canciones', CancionController::class);`[cite: 976]. ¿Qué método estático de Route se usa?",
    "opciones": [
      "resource",
      "apiResource",
      "crud",
      "apiGroup"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En la tarea, si el ID proporcionado para borrar no es numérico, creamos un array de errores: `$errores = ['No se ha recibido un id numérico'];`[cite: 481]. ¿Qué devuelve `count($errores)`?",
    "opciones": [
      "0",
      "1",
      "2",
      "null"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Al validar un objeto JSON entrante para procesar solo sus claves: `$v = Validator::make($request->____()->all(), ...);`[cite: 477]. ¿Qué método lee el payload JSON puro si vino con ese content-type?",
    "opciones": [
      "body",
      "payload",
      "json",
      "data"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En el cliente Guzzle, si necesitamos añadir parámetros a la URL (query string) para un GET: `['____' => ['titulo' => $titulo]]`[cite: 448]. ¿Qué palabra es la clave correcta?",
    "opciones": [
      "query",
      "params",
      "url_data",
      "search"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Según la teoría de la unidad 6, ¿qué formato es el más usado y ligero para la transferencia de datos en servicios RESTful modernos? [cite: 745]",
    "opciones": [
      "XML",
      "SOAP",
      "JSON",
      "YAML"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En Laravel, para validar un año que no sea superior al año actual dinámicamente: `'anio' => 'max:' . ____('Y')`[cite: 470]. ¿Qué función nativa de PHP usamos para obtener el año?",
    "opciones": [
      "time",
      "now",
      "date",
      "year"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Al devolver la respuesta tras borrar correctamente en la API: `return response()->json(['resultado' => 1], ____);`[cite: 483]. ¿Qué código HTTP se envía habitualmente si la respuesta lleva contenido extra?",
    "opciones": [
      "201",
      "204",
      "200",
      "404"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En el cliente, para decidir qué función llamar basándonos en la primera columna del CSV: `____ ($linea[0]) { case 'CREAR': ... break; }`[cite: 485]. ¿Qué estructura de control es?",
    "opciones": [
      "if",
      "while",
      "match",
      "switch"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Si en Guzzle usamos `$client->request('GET', '', ['query' => ['id' => 1]]);`[cite: 926]. ¿Es esto equivalente a `$client->get('', ['query' => ['id' => 1]]);`?",
    "opciones": [
      "No, `request` siempre hace peticiones POST.",
      "No, la sintaxis del array cambia completamente.",
      "Sí, `request` recibe el verbo HTTP como primer parámetro.",
      "Sí, pero `request` es síncrono y `get` es asíncrono."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "En una migración de Laravel, para añadir campos automáticos `created_at` y `updated_at`: `$table->____();`[cite: 955]. ¿Qué método los genera?",
    "opciones": [
      "timestamps",
      "dates",
      "add_times",
      "auto_dates"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 segunda parte",
    "pregunta": "Al definir la base de datos de un proyecto Laravel nuevo, se deben configurar los parámetros como `DB_DATABASE`[cite: 952]. ¿En qué archivo de la raíz del proyecto se ajustan?",
    "opciones": [
      ".config",
      ".env",
      "database.php",
      "settings.ini"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Dado el siguiente fragmento para usar Guzzle en un cliente PHP:\n\n$cliente = new GuzzleHttp\\____(['base_uri' => 'http://localhost/api/']);\n\n¿Qué clase de la librería Guzzle completa el código para inicializar el cliente HTTP según lo visto en la tarea?",
    "opciones": [
      "Request",
      "Client",
      "Connection",
      "Server"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En el archivo PROF_PeticionesAPI.php se realiza la siguiente petición (FRAGMENTO A):\n\n$operacion = $cliente->____('listarGenerosPROF');\n\nSi queremos obtener información del servidor (un listado) sin modificarla, ¿qué método HTTP de Guzzle usamos convencionalmente?",
    "opciones": [
      "post",
      "put",
      "get",
      "fetch"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En el código del cliente Guzzle, al recibir la respuesta del API de Laravel, se ejecuta la siguiente línea:\n\n$codigo = $operacion->____();\n\nSegún la videoconferencia, debemos analizar el código devuelto. ¿Qué método de Guzzle extrae el código de estado HTTP (ej: 200, 404, 422)?",
    "opciones": [
      "getStatus()",
      "getCode()",
      "getStatusCode()",
      "getHttpCode()"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Dado el siguiente fragmento en PROF_PeticionesAPI.php para preparar la decodificación de la respuesta:\n\n$lista = json_decode($operacion->getBody()->____(), true);\n\n¿Qué método de Guzzle encadenado tras getBody() se usa para extraer el cuerpo de la respuesta en formato de cadena de texto (string)?",
    "opciones": [
      "read()",
      "getContents()",
      "text()",
      "toString()"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Observa el siguiente código donde comprobamos la existencia de una película mediante GET:\n\n$cliente->get('existePeliculaPROF', [\n  '____' => [\n    'titulo' => $titulo,\n    'anio' => $anio\n  ]\n]);\n\nComo la petición es GET, los parámetros deben ir añadidos en la URL (Query String). ¿Qué clave asociativa utiliza Guzzle para esto?",
    "opciones": [
      "form_params",
      "json",
      "body",
      "query"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Dado el siguiente fragmento para la creación (POST) de un recurso en PROF_PeticionesAPI.php:\n\n$cliente->post('crearPeliculaPROF', [\n  '____' => [\n    'titulo' => $datos['titulo'],\n    ...\n  ]\n]);\n\nSi el servidor espera recibir los datos como un formulario HTML tradicional (`x-www-form-urlencoded`), ¿qué opción de Guzzle usamos?",
    "opciones": [
      "query",
      "form_params",
      "multipart",
      "json"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En la modificación del argumento (PUT), enviamos la petición así:\n\n$cliente->put('modificarArgumentoPeliculaPROF/' . $id, [\n  '____' => [\n    'argumento' => $argumento\n  ]\n]);\n\nPara que Guzzle codifique los datos como un documento JSON automáticamente y añada la cabecera Content-Type correcta, ¿qué clave usamos?",
    "opciones": [
      "json",
      "form_params",
      "body",
      "headers"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En el análisis de las respuestas del API (FRAGMENTO B):\n\n$datos = json_decode($str_json, ____);\n\nEl profesor siempre añade un segundo parámetro a `json_decode`. ¿Qué valor booleano se pasa para que el JSON se convierta en un array asociativo en PHP y no en un objeto genérico?",
    "opciones": [
      "false",
      "true",
      "1",
      "0"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Dado el siguiente fragmento de Guzzle para tratar fallos de validación:\n\nif ($operacion->getStatusCode() == 422) {\n  $datos = json_decode(..., true);\n  return $datos['____'];\n}\n\nSabiendo que el API de Laravel (servidor) devolvía algo como `['errores' => ['El título es obligatorio']]`, ¿qué índice del array de `$datos` debemos leer para extraerlos?",
    "opciones": [
      "mensajes",
      "error",
      "errores",
      "fails"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Para borrar una película, usamos Guzzle de la siguiente forma:\n\n$operacion = $cliente->____('borrarPeliculaPROF/' . $id_pelicula);\n\n¿Qué verbo HTTP, fundamental en arquitecturas REST para la eliminación, debe completar el método?",
    "opciones": [
      "remove",
      "delete",
      "destroy",
      "drop"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En `PROF_PeticionesAPI.php`, si la operación devuelve un código distinto a 200 al listar géneros, el profesor gestiona el error así:\n\nif ($operacion->getStatusCode() != 200) {\n  return self::____;\n}\n\n¿Qué constante devuelve la clase para indicar al cliente web que hubo un fallo en el servicio web?",
    "opciones": [
      "ERROR_PELICULA_NO_EXISTE",
      "ERROR_DATOS_NO_JSON",
      "ERROR_SERVICIO_WEB",
      "HTTP_ERROR"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Dado este fragmento de cliente consumiendo la API de borrado:\n\nif ($operacion->getStatusCode() == 404) {\n  return self::ERROR_PELICULA_NO_EXISTE;\n}\n\nSegún la teoría REST, ¿qué indica exactamente el código HTTP 404 que devuelve Laravel en este contexto?",
    "opciones": [
      "Que la validación de los datos falló.",
      "Que el servidor ha caído (Internal Server Error).",
      "Que el recurso solicitado (el ID de la película a borrar) no se ha encontrado.",
      "Que el usuario no tiene permisos."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Observa cómo se construye la URL de la petición DELETE o PUT en el cliente:\n\n$cliente->delete('borrarPeliculaPROF/' . $id_pelicula);\n\n¿A qué concepto de diseño RESTful responde el hecho de incluir el identificador de la película directamente en la propia URI?",
    "opciones": [
      "State Transfer Pattern",
      "Stateless Navigation",
      "Identificación de URI de recursos jerárquicos",
      "Paso de variables SOAP"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Analizando el archivo client/index.php, procesamos un textarea que contiene líneas separadas con datos:\n\n$linea = ____($linea_str);\n\n¿Qué función nativa de PHP se utiliza en la tarea para separar una cadena de texto (string) con formato CSV en un array indexado de campos?",
    "opciones": [
      "explode",
      "str_split",
      "str_getcsv",
      "fgetcsv"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En PROF_Operaciones.php, se verifica que la línea CSV tenga el número correcto de datos antes de crear una película:\n\nif (____($linea) == 7) {\n  $datos = ['titulo' => $linea[1], ...];\n}\n\n¿Qué función de PHP completa el condicional para contar cuántos elementos tiene el array `$linea`?",
    "opciones": [
      "sizeof",
      "length",
      "count",
      "array_length"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Al analizar el JSON de respuesta exitosa (200 OK) al insertar una película con Guzzle:\n\n$datos = json_decode(..., true);\nreturn ____($datos['resultado']);\n\n¿Qué función se usa en el cliente para garantizar que el ID devuelto por el API se convierta y retorne estrictamente como un tipo entero de PHP?",
    "opciones": [
      "parse_int",
      "(number)",
      "intval",
      "toInt"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Dado el siguiente fragmento en PROF_Operaciones.php tras recibir la respuesta de la creación:\n\nif (is_int($resultado)) {\n  if ($resultado > 0) {\n    $lineaInforme = \"Película creada con éxito (ID: \" . $resultado . \")\";\n  }\n}\n\nSabiendo que `PROF_crearPelicula()` puede devolver un array (si hay errores 422) o un número (el ID), ¿por qué se evalúa con `is_int($resultado)`?",
    "opciones": [
      "Porque el servidor devuelve un string con 'Éxito'.",
      "Para discernir si el servidor devolvió un ID numérico válido en vez del array de mensajes de error de validación.",
      "Porque Guzzle devuelve las respuestas siempre como objetos stdClass.",
      "Para evitar inyecciones SQL."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Si `$resultado` no es un número y contiene el array de errores del 422, el cliente formatea los errores así (FRAGMENTO C):\n\n$lineaInforme = \"Errores: <ul><li>\" . ____(\"</li><li>\", $resultado) . \"</li></ul>\";\n\n¿Qué función de PHP une todos los strings del array de errores en una sola cadena usando los tags HTML como pegamento?",
    "opciones": [
      "concat",
      "split",
      "implode",
      "join_array"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Dado el fragmento de inicialización de la clase `PROF_PeticionesAPI`:\n\nuse GuzzleHttp\\Client as GClientPROF;\n\npublic static function PROF_crearPelicula(____ $cliente, $datos)\n\nPara que la firma del método requiera el tipo correcto de objeto basándose en el 'use' anterior, ¿qué alias debemos usar en el espacio en blanco?",
    "opciones": [
      "GuzzleClient",
      "Client",
      "GClientPROF",
      "HttpClient"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En PROF_PeticionesAPI.php, al procesar la lista de géneros (FRAGMENTO D):\n\nforeach ($listaDeGeneros as $genero) {\n  $generos[intval($genero['____'])] = $genero;\n}\n\nPara facilitar las búsquedas, se indexa cada género en el array local usando su identificador único. ¿Qué clave del array JSON ocupa ese espacio?",
    "opciones": [
      "id",
      "nombre",
      "descripcion",
      "clave"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Si desde Guzzle parseamos un JSON proveniente del API de Laravel: `{\"resultado\": 0}` (porque no se modificó nada en BBDD).\n\n$datos = json_decode($json, true);\n\n¿Qué afirmación es correcta si evaluamos `$datos['resultado'] === false` en PHP?",
    "opciones": [
      "Devolverá true, porque 0 y false son idénticos.",
      "Devolverá false, porque 0 es un entero y false es booleano (comparación estricta).",
      "Lanzará un error de conversión de tipos.",
      "La variable no existe en el array."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Observa la petición Guzzle de creación (FRAGMENTO E):\n\n$operacion = $cliente->post('crearPeliculaPROF', ['form_params' => [...Datos...]]);\n\n¿Mediante qué objeto/método recupera Laravel en el servidor estos datos para validarlos, según la arquitectura que hemos estudiado?",
    "opciones": [
      "Mediante la superglobal $_GET exclusivamente.",
      "Mediante las variables de entorno del archivo .env",
      "Mediante el objeto $request instanciado, por ejemplo, invocando $request->all().",
      "A través de parámetros incrustados en la URI del route."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En el archivo cliente index.php, para mostrar en una tabla HTML un dato del API:\n\n<?= ____($genero['nombre'] ?? '') ?>\n\n¿Qué función se usa repetidamente en la vista del cliente para proteger la impresión de estos textos contra código HTML no deseado (XSS)?",
    "opciones": [
      "htmlentities",
      "strip_tags",
      "htmlspecialchars",
      "json_encode"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En PROF_Operaciones.php, el array de CSV se evalúa en un `switch` para operaciones en masa:\n\nswitch ($linea) {\n  case 'MODIFICAR':\n    $informe = ...;\n    ____;\n  case 'BORRAR':\n    ...\n}\n\nPara que la instrucción se detenga después de 'MODIFICAR' y no continúe ejecutando el caso 'BORRAR', ¿qué palabra reservada debe ir en el espacio en blanco?",
    "opciones": [
      "stop",
      "exit",
      "return",
      "break"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Si un API en Laravel tiene la validación `if (!$request->isJson()) { return 403; }`.\n¿Cómo debe construir el desarrollador su petición en Guzzle para cumplir este requisito y evitar el Forbidden?",
    "opciones": [
      "Usando 'form_params' en las opciones.",
      "Usando 'query' en las opciones.",
      "Usando la opción 'json' en el array de configuración de la petición para que añada el Content-Type correcto.",
      "Añadiendo '.json' al final de la URL."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Según la estructura enseñada para el consumo de API, ¿qué representa habitualmente el valor que el servidor devuelve en el JSON `{\"resultado\": X}` al realizar una creación POST exitosa?",
    "opciones": [
      "Un mensaje de error detallado.",
      "El identificador único (ID) del nuevo registro insertado en la base de datos.",
      "El número total de filas de la tabla.",
      "Un valor true siempre."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Observa el fragmento del archivo 'composer.json' del cliente:\n\n\"require\": {\n  \"guzzlehttp/guzzle\": \"^7.8\"\n}\n\n¿Cuál es la finalidad de incluir este bloque en el proyecto del cliente?",
    "opciones": [
      "Para instalar el servidor web Apache.",
      "Para que el gestor Composer sepa que debe descargar la librería Guzzle para realizar peticiones HTTP y la añada al autoloader.",
      "Para inicializar la base de datos MySQL.",
      "Para definir las reglas de validación (Validator) de Laravel."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Si el API de Laravel devuelve un error de validación 422: `{\"errores\": [\"El título es obligatorio\"]}` y lo recibimos en Guzzle:\n\n¿Qué secuencia de código es la correcta para imprimir ese error por pantalla en el cliente?",
    "opciones": [
      "echo $operacion['errores'];",
      "$datos = json_decode($operacion->getBody()->getContents(), true); echo $datos['errores'];",
      "echo $operacion->getMessage();",
      "echo json_decode($operacion)->error;"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En el cliente iteramos los géneros recibidos del servidor:\n\n<?php foreach ($listaDeGeneros as $genero): ?>\n  <td><?= $genero['nombre'] ?></td>\n<?php endforeach; ?>\n\nPara que `$listaDeGeneros` contenga esta estructura en PHP, el servidor Laravel tuvo que enviar un JSON válido. ¿Qué método de Laravel empaquetó esa colección de modelos en JSON?",
    "opciones": [
      "response()->xml()",
      "response()->json()",
      "response()->html()",
      "response()->text()"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En PROF_Operaciones.php se trata la línea del CSV:\n\nif (count($linea) == 3) {\n  $resultado = PROF_PeticionesAPI::PROF_modificarArgumentoPelicula($cliente, $linea[1], $linea[2]);\n}\n\nSi el usuario introduce `MODIFICAR,4,Nueva historia épica`, ¿qué dato estamos pasando como `$linea[1]` al método que hace la petición Guzzle?",
    "opciones": [
      "La palabra 'MODIFICAR'",
      "El ID numérico de la película a actualizar (4)",
      "El texto del argumento ('Nueva historia épica')",
      "Un array vacío"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En el cliente preparamos un envío POST:\n\n$datos = [\n  'titulo' => $linea[1],\n  'genero_id' => $linea[2]\n];\n\nSi el usuario olvida incluir el `genero_id` en el CSV, Guzzle enviará un campo vacío. Según el profesor y las reglas (`'genero_id' => 'required'`), ¿qué código de estado devolverá la API?",
    "opciones": [
      "200 OK",
      "404 Not Found",
      "422 Unprocessable Entity",
      "500 Internal Server Error"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Analiza la inicialización de Guzzle:\n\n$cliente = new GuzzleHttp\\Client(['base_uri' => 'http://localhost/api/']);\n\nSi posteriormente hacemos una petición con `$cliente->get('listarGenerosPROF')`, ¿cuál es la URL final a la que se envía la petición HTTP?",
    "opciones": [
      "http://localhost/listarGenerosPROF",
      "http://localhost/api/listarGenerosPROF",
      "http://localhost/api/?get=listarGenerosPROF",
      "https://localhost/api/listarGenerosPROF"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "El método `PROF_borrarPelicula` comprueba explícitamente los códigos 404 y 200 de la respuesta Guzzle. Si recibe un error 500 (Internal Server Error) desde Laravel, llega a la última línea de la función:\n\nreturn self::____;\n\n¿Qué valor constante se diseñó en la tarea para informar a la vista de que falló el servicio web de forma imprevista?",
    "opciones": [
      "ERROR_PELICULA_NO_EXISTE",
      "ERROR_DATOS_NO_JSON",
      "ERROR_SERVICIO_WEB",
      "null"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En Laravel definimos la ruta `PUT /modificarArgumentoPeliculaPROF/{pelicula}`. En Guzzle la llamamos así:\n\n$cliente->put('modificarArgumentoPeliculaPROF/9', ...);\n\nSegún la arquitectura REST, ¿por qué el '9' se concatena a la propia URL en lugar de pasarlo oculto en el cuerpo de la petición?",
    "opciones": [
      "Porque es una exigencia exclusiva del protocolo SOAP.",
      "Porque en REST, la URI (Uniform Resource Identifier) debe identificar jerárquicamente al recurso específico sobre el que actúa el método HTTP.",
      "Porque Guzzle no soporta el envío de cuerpos en peticiones PUT.",
      "Para saltar las validaciones del servidor."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En PROF_PeticionesAPI.php se construye un array con el operador `??` (Fusión null):\n\n'titulo' => $datos['titulo'] ?? '',\n\n¿Qué comportamiento tiene esta sintaxis al construir los 'form_params' para enviar con Guzzle?",
    "opciones": [
      "Comprueba si es un string y si no lanza una excepción.",
      "Si `$datos['titulo']` existe y no es nulo, usa su valor; de lo contrario, envía una cadena vacía, previniendo errores en PHP.",
      "Duplica el contenido de la variable.",
      "Realiza una petición a la base de datos automáticamente."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En Guzzle, usamos `query` para un GET con el objetivo de comprobar datos repetidos:\n\n$cliente->get('existePeliculaPROF', ['query' => ['titulo' => 'Batman']]);\n\n¿Cómo traduce Guzzle esto en la petición HTTP real que viaja por la red?",
    "opciones": [
      "Enviará el cuerpo (body) de la petición con `{\"titulo\": \"Batman\"}`.",
      "Añadirá los datos a la URL como una query string: `/existePeliculaPROF?titulo=Batman`.",
      "Creará una cabecera HTTP llamada 'Query-Titulo'.",
      "Descargará el recurso en un archivo XML."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "El API devuelve un 422 con: `{\"errores\": [\"Falta el título\", \"Falta el año\"]}`.\nSi en el cliente Guzzle hacemos `$resultado = json_decode($json, true);`, ¿de qué tipo es `$resultado['errores']` según la estructura devuelta?",
    "opciones": [
      "Un objeto simple (stdClass).",
      "Un string literal con comas.",
      "Un array indexado que contiene dos strings.",
      "Un tipo numérico entero."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Según la documentación de la Unidad 6 y la configuración del API, a diferencia de SOAP que usa obligatoriamente XML, ¿qué formato es el estándar predominante hoy y el utilizado en la tarea para el intercambio en API RESTful?",
    "opciones": [
      "XML",
      "YAML",
      "JSON",
      "CSV"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Observa el fragmento del cliente PHP al borrar con éxito:\n\n$datos = json_decode($operacion->getBody()->getContents(), true);\nreturn intval($datos['____']);\n\nSi recordamos el controlador Laravel, al borrar devuelve `return response()->json(['resultado' => 1], 200);`. ¿Qué clave del array debe ir en el espacio para recuperar el 1?",
    "opciones": [
      "resultado",
      "deleted",
      "éxito",
      "id"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Laravel tiene la ruta definida como `->whereNumber('pelicula')`. Si desde Guzzle el cliente hace esto:\n\n$cliente->delete('borrarPeliculaPROF/xyz');\n\nComo 'xyz' no cumple el requisito numérico, la ruta no coincide. ¿Qué código HTTP devolverá el framework automáticamente indicando que esa ruta no existe?",
    "opciones": [
      "200 OK",
      "404 Not Found",
      "422 Unprocessable Entity",
      "500 Internal Server Error"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En el archivo cliente index.php, los comandos a ejecutar se recogen de un formulario HTML:\n\n<textarea name=\"____\" id=\"datos\" cols=\"90\" rows=\"10\"></textarea>\n\nPara que en PHP podamos recoger este bloque de texto con `$_POST['datos']`, ¿qué debe ir en el atributo name?",
    "opciones": [
      "textarea",
      "datos",
      "texto",
      "csv"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En PROF_Operaciones.php al actualizar, leemos el resultado que extrajo Guzzle:\n\nif ($resultado > 0) {\n  $lineaInforme = \"Argumento modificado con éxito.\";\n} else {\n  $lineaInforme = \"Error... El argumento no ha cambiado.\";\n}\n\nSi Laravel retornó `$resultado = 0` usando la comprobación `$pelicula->wasChanged()`, ¿qué significa esto a nivel de base de datos?",
    "opciones": [
      "Que no existía conexión a la base de datos.",
      "Que el argumento nuevo que enviamos en JSON era idéntico al que la película ya tenía guardado, por lo que no hubo cambios reales.",
      "Que la película ha sido borrada.",
      "Que hubo un error de validación 422."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En el cliente listamos las películas llamando al API con GET:\n\n$listaDePeliculas = json_decode(..., true);\n\nSabiendo que el servidor envió `PeliculaPROF::select(...)->get()` convertido a JSON. En PHP, ¿qué estructura de datos representa ahora `$listaDePeliculas`?",
    "opciones": [
      "Un array multidimensional (una lista de arrays asociativos).",
      "Un solo string grande con HTML incrustado.",
      "Una instancia de la clase Modelo de Eloquent.",
      "Una clase SoapClient pura."
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Para la parte del cliente usando Guzzle, se pide enviar el body como JSON (FRAGMENTO G):\n\n$operacion = $cliente->put('endpoint', ['json' => ['argumento' => 'nuevo_texto']]);\n\n¿Por qué es preferible usar la clave `json` en lugar de codificarlo a mano con `json_encode` y mandarlo en `body`?",
    "opciones": [
      "Porque 'body' está deprecado en Guzzle.",
      "Porque Guzzle convierte automáticamente el array y además añade la cabecera HTTP 'Content-Type: application/json' necesaria para el servidor.",
      "Porque convierte la petición en GET.",
      "Porque cifra los datos con TLS internamente."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En el frontend del cliente web (index.php), antes de construir la tabla de géneros, se asegura su integridad:\n\n<?php if (!empty($listaDeGeneros) && ____($listaDeGeneros)): ?>\n\n¿Qué función completa la condición asegurando que la variable se puede recorrer con un `foreach` sin lanzar error de tipo?",
    "opciones": [
      "is_object",
      "is_array",
      "is_null",
      "isset"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "Si un desarrollador comete un error en el cliente al decodificar y omite el parámetro `true`:\n\n$datos = json_decode($json);\n\nDado que el JSON es `{\"resultado\": 1}`, ¿qué sintaxis orientada a objetos tendría que usar en PHP para extraer el '1' en lugar de la sintaxis de array asociativo?",
    "opciones": [
      "$datos['resultado']",
      "$datos->resultado",
      "$datos::resultado",
      "get_object_vars($datos)"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En el flujo del cliente, si el CSV detecta que el comando de la línea es 'CREAR', se llama a una función estática de operaciones:\n\n$informe[$n] = OperacionesAPI::PROF_Operacion____($cliente, $linea);\n\n¿Qué nombre completa la función que se encarga de aislar los datos del CSV y preparar la petición al servidor?",
    "opciones": [
      "CrearPelicula",
      "InsertData",
      "PostPelicula",
      "SaveCSV"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En la configuración de las rutas del servidor Laravel:\n\nRoute::delete('/borrarPeliculaPROF/{pelicula}', 'borrarPeliculaPROF');\n\nSi Guzzle invoca el método enviando la URL `.../borrarPeliculaPROF/14`. ¿Cómo sabe Laravel qué id borrar y se lo inyecta a la función del controlador `borrarPeliculaPROF($pelicula)`?",
    "opciones": [
      "Lo busca dentro del json enviado mediante $request->all().",
      "El framework enruta el segmento de la URI que coincide con '{pelicula}' y lo pasa como argumento al método del controlador.",
      "Lo guarda en una variable global temporal.",
      "Pregunta de nuevo al cliente Guzzle."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "En el cliente `index.php`, si tras consultar al API `$peliculas` es un array vacío porque no hay datos, el bloque HTML dice:\n\n<?php if (!empty($peliculas) && is_array($peliculas)): ?> ... <table ...> ... <?php else: ?> <p>No hay películas para mostrar</p> <?php endif; ?>\n\n¿Qué renderizará la vista finalmente?",
    "opciones": [
      "Una tabla HTML sin las etiquetas <tr>.",
      "El párrafo '<p>No hay películas para mostrar</p>'.",
      "Un error 500 fatal.",
      "Un volcado de array usando var_dump."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 tercera parte",
    "pregunta": "La videoconferencia hace mucho énfasis en la naturaleza de REST y Guzzle. Si Guzzle realiza una petición POST creando una película, y un segundo después un GET, se dice que es una comunicación 'Stateless' (sin estado). ¿Qué implica esto?",
    "opciones": [
      "Que el servidor guarda la identidad de Guzzle usando la variable PHP `$_SESSION` para el GET.",
      "Que cada petición es totalmente independiente; el servidor de Laravel no recuerda a Guzzle ni mantiene variables de estado en memoria compartida entre las dos peticiones.",
      "Que el servidor deniega la segunda conexión.",
      "Que la conexión se queda inactiva."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Dado el código del cliente Guzzle (F1):\n\n$operacion = $cliente->____('listarGenerosPROF');\n\nSabiendo que esta ruta en el servidor está definida como `Route::get('/listarGenerosPROF', ...)`, ¿qué método debemos usar en el cliente Guzzle para realizar la petición correctamente?",
    "opciones": [
      "post",
      "get",
      "request",
      "fetch"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En el cliente Guzzle tenemos (F2):\n\n$listaDeGeneros = json_decode($operacion->getBody()->getContents(), ____);\n\nPara que la variable `$listaDeGeneros` sea un array asociativo en PHP (y no un objeto stdClass), ¿qué valor debe ir en el espacio en blanco?",
    "opciones": [
      "false",
      "1",
      "true",
      "JSON_ARRAY"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Analizando la comprobación de errores en Guzzle (F3):\n\nif ($operacion->getStatusCode() != ____) {\n    return self::ERROR_SERVICIO_WEB;\n}\n\nSi queremos verificar que la petición GET se ha realizado de forma completamente exitosa según el estándar HTTP, ¿qué código numérico falta?",
    "opciones": [
      "404",
      "201",
      "500",
      "200"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En el cliente, al enviar datos por GET (F4):\n\n$operacion = $cliente->get('existePeliculaPROF', [\n    '____' => [\n        'titulo' => $titulo,\n        'anio' => $anio\n    ]\n]);\n\n¿Qué clave usa Guzzle para añadir estos parámetros a la URL (ej: `?titulo=...&anio=...`)?",
    "opciones": [
      "form_params",
      "json",
      "query",
      "url_data"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Al crear una película desde el cliente Guzzle (F5):\n\n$operacion = $cliente->post('crearPeliculaPROF', [\n    '____' => $datos\n]);\n\nSi el servidor espera estrictamente que el cuerpo de la petición sea un JSON (`$request->isJson()`), ¿qué opción debemos utilizar en Guzzle?",
    "opciones": [
      "body",
      "json",
      "form_params",
      "multipart"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Observa el manejo de la respuesta de error de validación (F6):\n\nif ($operacion->getStatusCode() == 422) {\n    $datos = json_decode(..., true);\n    return $datos['____'];\n}\n\nSegún el controlador del servidor, cuando falla la validación se devuelve `response()->json(['errores' => ...], 422)`. ¿Qué clave debemos usar para extraer esos mensajes?",
    "opciones": [
      "errors",
      "errores",
      "message",
      "fallos"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En la función de borrar en el cliente Guzzle (F7):\n\n$operacion = $cliente->____('borrarPeliculaPROF/' . $id_pelicula);\n\nPara respetar la arquitectura RESTful y el verbo HTTP correspondiente a la eliminación, ¿qué método de Guzzle se debe usar?",
    "opciones": [
      "remove",
      "delete",
      "destroy",
      "drop"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Al leer el archivo CSV en el index del cliente (F8):\n\n$linea = ____($linea_str);\n\n¿Qué función nativa de PHP se utiliza en la tarea para convertir una línea de texto con valores separados por comas en un array?",
    "opciones": [
      "explode",
      "str_getcsv",
      "csv_to_array",
      "json_decode"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En el archivo index.php del cliente se evalúa la operación (F9):\n\nswitch ($linea[0]) {\n    case '____':\n        $informe[$numLinea]['resultado'] = OperacionesAPI::PROF_OperacionCrearPelicula(...);\n        break;\n}\n\nPara que coincida con la llamada a la función de creación, ¿qué texto suele venir en la primera posición del CSV según la tarea?",
    "opciones": [
      "POST",
      "INSERT",
      "CREAR",
      "NUEVO"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Al comprobar si se tienen todos los datos para crear una película (F10):\n\nif (count($linea) == ____) {\n    $datos = ['titulo' => $linea[1], 'genero_id' => $linea[2]...];\n}\n\nSabiendo que el índice llega hasta `$linea[6]` (año) y `$linea[0]` es la acción, ¿cuántos elementos debe tener el array como mínimo?",
    "opciones": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En el archivo de rutas `api.php` del servidor (F11):\n\nRoute::____(XYZPeliculasControllerAPI::class)->group(function () {\n    Route::get('/listarPeliculasPROF', 'listarPeliculasPROF');\n});\n\n¿Qué método estático de `Route` nos permite agrupar varias rutas para que todas utilicen la misma clase controladora sin tener que repetirla?",
    "opciones": [
      "middleware",
      "controller",
      "prefix",
      "class"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En las rutas del servidor (F12):\n\nRoute::put('/modificar/{pelicula}', 'modificar')->____('pelicula');\n\n¿Qué restricción de Laravel usamos para asegurar que el parámetro de ruta `{pelicula}` solo acepte dígitos (un ID numérico)?",
    "opciones": [
      "whereInteger",
      "mustBeNumber",
      "whereNumber",
      "isNumeric"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En el archivo `web.php` (F13):\n\nRoute::post('/registro_de_usuarios', [RegistroController::class,'registrar'])->____('web.registro');\n\n¿Qué método se utiliza para asignarle un alias o nombre a la ruta, permitiendo referenciarla fácilmente desde las vistas Blade?",
    "opciones": [
      "alias",
      "name",
      "as",
      "id"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Analizando el controlador de API (F14):\n\npublic function crearPeliculaPROF(Request $request): ____ {\n    // ...\n    return response()->json(...);\n}\n\nEn PHP 8/Laravel, ¿qué tipo de retorno (type hint) es el más adecuado y estándar declarar en este método que devuelve un JSON?",
    "opciones": [
      "Array",
      "String",
      "JsonResponse",
      "Void"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En el controlador, creando el validador (F15):\n\n$v = Validator::____($request->all(), [\n    'titulo' => 'required|string|max:60|min:2'\n]);\n\n¿Qué método estático de la clase (o Facade) Validator se utiliza para inicializar una nueva instancia de validación?",
    "opciones": [
      "create",
      "build",
      "make",
      "init"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En las reglas de validación (F16):\n\n'genero_id' => 'required|string|____:generos,id'\n\n¿Qué regla de Laravel verifica que el valor enviado exista en una tabla específica de la base de datos (en este caso, en la tabla `generos`, columna `id`)?",
    "opciones": [
      "exists",
      "in",
      "foreign",
      "check"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En las reglas de validación del año (F17):\n\n'anio' => 'required|numeric|min:1965|____:' . date('Y')\n\nPara indicar que el año enviado no puede ser mayor que el año actual, ¿qué regla de validación debemos anteponer al valor generado por `date('Y')`?",
    "opciones": [
      "lessThan",
      "max",
      "before",
      "limit"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En el controlador, para verificar si la validación tuvo errores (F18):\n\nif ($v->____()) {\n    return response()->json(['errores' => ...], 422);\n}\n\n¿Qué método del objeto validador devuelve `true` si alguna regla no se ha cumplido?",
    "opciones": [
      "isInvalid",
      "hasErrors",
      "fails",
      "error"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Dentro del controlador, cuando la validación falla (F19):\n\nreturn response()->json([\n    'errores' => Arr::____($v->errors()->getMessages())\n], 422);\n\n¿Qué método de la clase `Arr` convierte un array multidimensional (como el que devuelve getMessages) en un array simple de un solo nivel?",
    "opciones": [
      "flatten",
      "collapse",
      "merge",
      "simplify"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En el controlador, si la película ya existe se devuelve un error (F20):\n\nif ($resultado) {\n    return response()->____(['errores' => ['La película ya existe']], 422);\n}\n\n¿Qué método de la función helper `response()` transforma automáticamente el array PHP en una cadena con formato JSON?",
    "opciones": [
      "send",
      "json",
      "array",
      "body"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En el controlador para crear el registro en BD (F21):\n\n$pelicula = PeliculaPROF::____($datos);\n\nSabiendo que `$datos` es un array validado, ¿qué método de Eloquent se usa para instanciar y guardar el modelo en la base de datos en un solo paso (asignación masiva)?",
    "opciones": [
      "insert",
      "save",
      "create",
      "make"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Al modificar el argumento, comprobamos el formato de entrada (F22):\n\nif (!$request->____()) {\n    return response()->json(['errores' => ['Los datos deben ser JSON']], 403);\n}\n\n¿Qué método del objeto `Request` verifica si la petición entrante tiene el Content-Type de JSON?",
    "opciones": [
      "hasJson",
      "wantsJson",
      "isJson",
      "checkJson"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Al modificar una película en el controlador (F23):\n\n$datos = $v->____();\n$pelicula->argumento = $datos['argumento'];\n\n¿Qué método del validador recupera exclusivamente los datos que pasaron exitosamente por las reglas de validación (ignorando datos extraños)?",
    "opciones": [
      "all",
      "safe",
      "validated",
      "get"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Para aplicar los cambios a la base de datos (F24):\n\n$pelicula->argumento = $datos['argumento'];\n$pelicula->____();\n\n¿Qué método de la instancia de Eloquent ejecuta la sentencia UPDATE en la base de datos para guardar las modificaciones?",
    "opciones": [
      "update",
      "push",
      "commit",
      "save"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Para verificar si el guardado realmente cambió algún valor (F25):\n\nif ($pelicula->____()) {\n    return response()->json(['resultado' => 1], 200);\n}\n\n¿Qué método de Eloquent devuelve `true` si el modelo tenía cambios respecto a la base de datos justo después de haber hecho un `save()`?",
    "opciones": [
      "isDirty",
      "wasChanged",
      "hasModifications",
      "isModified"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En la función de borrar (F26):\n\nfunction borrarPeliculaPROF($pelicula): JsonResponse {\n    if (!____($pelicula)) {\n        $errores = ['No se ha recibido un id numérico'];\n    }\n}\n\n¿Qué función estándar de PHP usamos para comprobar si la variable contenida en `$pelicula` es un número o una cadena numérica?",
    "opciones": [
      "is_int",
      "is_numeric",
      "is_number",
      "ctype_digit"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Al buscar el registro a borrar en el controlador (F27):\n\n$peliculaObj = PeliculaPROF::____($pelicula);\n\nSabiendo que `$pelicula` contiene el ID numérico (clave primaria), ¿qué método de Eloquent busca y devuelve el registro correspondiente o `null` si no existe?",
    "opciones": [
      "find",
      "search",
      "get",
      "whereId"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Para eliminar el registro de la base de datos (F28):\n\nif ($peliculaObj) {\n    $peliculaObj->____();\n    return response()->json(['resultado' => 1], 200);\n}\n\n¿Qué método de Eloquent ejecuta la sentencia DELETE en la tabla correspondiente a ese modelo instanciado?",
    "opciones": [
      "destroy",
      "remove",
      "delete",
      "erase"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En la migración de crear tabla películas (F29):\n\n$table->tinyText('argumento');\n$table->integer('anio');\n$table->____();\n\n¿Qué método de Blueprint genera automáticamente las columnas `created_at` y `updated_at` en Laravel?",
    "opciones": [
      "timeFields",
      "timestamps",
      "dateColumns",
      "autoDates"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En la migración de películas, al definir la clave foránea (F30):\n\n$table->foreign('genero_id')->____('id')->on('generos');\n\n¿Qué método se usa para indicar a qué columna de la tabla referenciada apunta nuestra clave foránea?",
    "opciones": [
      "pointsTo",
      "references",
      "mapsTo",
      "target"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En la migración de películas, sobre la clave foránea (F31):\n\n$table->foreign('genero_id')->references('id')->on('generos')->____('cascade');\n\nSi queremos que al borrar un género se borren automáticamente las películas asociadas a él, ¿qué método falta?",
    "opciones": [
      "onDelete",
      "onRemove",
      "cascadeOnDelete",
      "deleteBehavior"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En el método down() de las migraciones (F32):\n\npublic function down(): void {\n    Schema::____('peliculas');\n}\n\n¿Qué método de la clase Schema se usa habitualmente para revertir la migración eliminando la tabla de forma segura si existe?",
    "opciones": [
      "deleteTable",
      "dropIfExists",
      "remove",
      "truncate"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En el seeder PROFSeeder.php, para crear un usuario (F33):\n\nUser::create([\n    'name' => 'PROF1',\n    'password' => Hash::____('PROF1')\n]);\n\n¿Qué método de la Facade `Hash` se utiliza para encriptar la contraseña de forma segura (normalmente usando Bcrypt) antes de guardarla?",
    "opciones": [
      "crypt",
      "encrypt",
      "make",
      "hash"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En el seeder, para insertar géneros sin duplicarlos (F34):\n\nGeneroPROF::____(['nombre' => $genero['nombre']], $genero);\n\n¿Qué método de Eloquent busca un registro por los primeros atributos y, si no lo encuentra, lo crea usando los atributos del segundo array?",
    "opciones": [
      "createOrIgnore",
      "firstOrCreate",
      "insertIfNotExists",
      "updateOrCreate"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En el seeder, para evitar duplicar usuarios verificando antes (F35):\n\nif (User::where('name', 'PROF2')->____() === 0) {\n    User::create([...]);\n}\n\n¿Qué método de Eloquent ejecuta la consulta y devuelve el número de registros encontrados que coinciden con la condición?",
    "opciones": [
      "amount",
      "sum",
      "total",
      "count"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En el seeder, después de crear el usuario le asignamos una fecha (F36):\n\n$u->email_verified_at = ____();\n$u->save();\n\n¿Qué helper o función de Laravel/PHP devuelve la fecha y hora actual para registrarla en la base de datos?",
    "opciones": [
      "current_date",
      "now",
      "today",
      "timestamp"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En la vista Blade `registro.blade.php` (F37):\n\n@____('password_confirmation')\n    {{$message}}\n@enderror\n\n¿Qué directiva de Blade se utiliza para comprobar si existe un error de validación para un campo específico y mostrar su mensaje?",
    "opciones": [
      "ifError",
      "validate",
      "error",
      "catch"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En el archivo `composer.json` del cliente (F38):\n\n\"require\": {\n    \"guzzlehttp/____\": \"^7.8\"\n}\n\n¿Cuál es el nombre correcto del paquete (librería) que instalamos mediante Composer para hacer peticiones HTTP desde PHP?",
    "opciones": [
      "curl",
      "http-client",
      "guzzle",
      "requests"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "De acuerdo al temario de la Unidad 6 (F39), cuando usamos Guzzle o consumimos un servicio web, ¿qué protocolo subyacente de la capa de aplicación se utiliza para el intercambio de datos en las APIs RESTful?",
    "opciones": [
      "FTP",
      "HTTP",
      "SOAP",
      "TCP"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Según el temario y la implementación de la tarea (F40), el formato JSON ha desplazado a otro formato que era muy común en los servicios SOAP. ¿Qué formato era el utilizado nativamente por SOAP?",
    "opciones": [
      "YAML",
      "XML",
      "CSV",
      "HTML"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En el archivo del cliente `PROF_Operaciones.php`, uniendo los mensajes de error (F41):\n\n$lineaInforme = \"Errores: \" . ____(\"\", $resultado);\n\nSi `$resultado` es un array de strings (mensajes de error), ¿qué función de PHP los concatena en un único string vacío de separación?",
    "opciones": [
      "concat",
      "join_array",
      "implode",
      "merge_strings"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En las rutas del API en Laravel, al definir `Route::post('/crearPeliculaPROF', ...)` (F42). Si consumimos esta ruta desde un cliente externo como Guzzle, ¿por qué no necesitamos enviar el token `@csrf`?",
    "opciones": [
      "Porque Guzzle lo genera automáticamente leyendo la caché del servidor.",
      "Porque las peticiones POST nunca requieren token CSRF en Laravel.",
      "Porque las rutas en `routes/api.php` no incluyen el middleware `VerifyCsrfToken` por defecto al ser 'stateless'.",
      "Porque el token CSRF solo es necesario si usamos el formato XML."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Viendo cómo Laravel gestiona los Request, en el controlador (F43):\n\n$v = Validator::make($request->json()->____(), [...]);\n\nSi usamos `$request->json()`, ¿qué método encadenamos después para obtener el array completo de datos parseados del cuerpo JSON?",
    "opciones": [
      "get",
      "all",
      "toArray",
      "body"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "De acuerdo a la teoría de servicios REST (F44) mencionada por el profesor, si se enviara una petición POST a `/api/peliculas` para crear un recurso y este se crea correctamente, ¿qué código HTTP es el más purista/estándar para responder 'Creado'?",
    "opciones": [
      "200 OK",
      "201 Created",
      "202 Accepted",
      "204 No Content"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En la teoría y ejemplos de Laravel (F45):\n\nRoute::____('canciones', CancionController::class);\n\n¿Qué método estático en Laravel genera automáticamente las rutas para las acciones index, store, show, update y destroy en un contexto de API?",
    "opciones": [
      "apiResource",
      "resourceAPI",
      "groupAPI",
      "crud"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En la migración de películas, vimos `ALTER TABLE peliculas ADD CONSTRAINT check_duracion` (F46). Sabiendo que Laravel ofrece migraciones para ser agnóstico de base de datos, el uso de sentencias `\\DB::statement(\"...\")` implica:",
    "opciones": [
      "Que el código se ejecutará más rápido que con los métodos de Blueprint.",
      "Que estamos ejecutando SQL crudo (raw SQL) específico del motor de base de datos que estemos usando (ej. MySQL/MariaDB).",
      "Que es la única manera de añadir claves foráneas en Laravel.",
      "Que Eloquent validará automáticamente estas restricciones en PHP."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En la vista principal blade (F47):\n\n<p>Los endpoints disponibles son:</p>\n\nEn la terminología de servicios web REST, ¿qué es exactamente un 'endpoint'?",
    "opciones": [
      "El punto final donde se corta la conexión del servidor.",
      "El token de seguridad que se envía en las cabeceras.",
      "La dirección o URL específica (junto con su método HTTP) expuesta por el servidor para acceder a un recurso.",
      "El formato de salida que tendrá la respuesta (JSON o XML)."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Según la Videoconferencia del profesor (F48), se dejó claro que un tema específico de la teoría no iba a ser evaluado en el examen por estar obsoleto frente a REST. ¿Cuál era?",
    "opciones": [
      "SOAP",
      "HTTPie",
      "Guzzle",
      "JSON"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "En Guzzle, cuando instanciamos el cliente (F49):\n\n$cliente = new GClientPROF(['base_uri' => 'http://...']);\n\n¿Qué ventaja principal nos aporta configurar el `base_uri`?",
    "opciones": [
      "Evita tener que escribir la ruta completa en cada petición (`get`, `post`), permitiendo usar rutas relativas.",
      "Añade seguridad encriptando todas las comunicaciones hacia esa URL.",
      "Verifica automáticamente el certificado SSL del servidor destino.",
      "Asigna una cabecera 'Origin' estricta para evitar errores de CORS en PHP."
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 cuarta parte",
    "pregunta": "Al retornar datos de Eloquent (F50):\n\nreturn response()->json(GeneroPROF::all(), 200);\n\n¿Qué hace Laravel internamente con la colección de modelos devuelta por `all()` antes de enviarla al cliente HTTP?",
    "opciones": [
      "La envía como un archivo descargable .json.",
      "Serializa todos los objetos Eloquent (y sus atributos) en un array JSON, ignorando métodos internos y propiedades ocultas (hidden).",
      "Devuelve un error si no aplicamos un bucle `foreach` previamente para extraer los atributos.",
      "Convierte la colección a una tabla HTML formateada si el cliente es Guzzle."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Según la videoconferencia, en el archivo `routes/api.php` de nuestro servidor agrupamos varias rutas bajo el mismo controlador (FRAGMENTO 1):\n\nRoute::____(XYZPeliculasControllerAPI::class)->group(function () {\n    Route::get('/listarPeliculasPROF', 'listarPeliculasPROF');\n    ...\n});\n\n¿Qué método de la clase Route permite definir el controlador común para todo el grupo de rutas?",
    "opciones": [
      "controller",
      "class",
      "uses",
      "namespace"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Dado el código de rutas (FRAGMENTO 2):\n\nRoute::delete('/borrarPeliculaPROF/{pelicula}', 'borrarPeliculaPROF')->____('pelicula');\n\nEl profesor insiste en que las rutas deben ser precisas. ¿Qué método encadenado usamos en la tarea para asegurar que el parámetro `{pelicula}` sea estrictamente un valor numérico y evitar errores posteriores?",
    "opciones": [
      "isInteger",
      "whereNumeric",
      "assertNumber",
      "whereNumber"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Al diseñar un controlador de API REST como se pide en la tarea, observamos la firma de este método (FRAGMENTO 3):\n\npublic function listarPeliculasPROF(): ________\n\nSegún la teoría y la videoconferencia, el controlador no devuelve vistas HTML. ¿Qué tipo de dato de Laravel debe retornar para cumplir con la arquitectura de la tarea?",
    "opciones": [
      "View",
      "String",
      "JsonResponse",
      "Array"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En el controlador del servidor, para enviar los datos de las películas de vuelta al cliente Guzzle, usamos (FRAGMENTO 4):\n\nreturn ____()->json(PeliculaPROF::select('id', 'titulo', 'genero_id', 'duracion', 'anio', 'direccion', 'argumento')->get());\n\n¿Qué función global o *helper* de Laravel se invoca antes de `json()` para generar la respuesta HTTP adecuada?",
    "opciones": [
      "request",
      "response",
      "return",
      "send"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Observa cómo evitamos enviar datos innecesarios al cliente en el FRAGMENTO 4:\n\nPeliculaPROF::____('id', 'titulo', 'genero_id', 'duracion', 'anio', 'direccion', 'argumento')->get()\n\n¿Qué método de Eloquent se usa en la tarea para indicar explícitamente qué columnas recuperar de la base de datos, omitiendo por ejemplo los timestamps (`created_at`, `updated_at`)?",
    "opciones": [
      "only",
      "pluck",
      "select",
      "choose"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En la creación de una película (POST), recibimos los datos del cliente. Observa el FRAGMENTO 5:\n\npublic function crearPeliculaPROF(____ $request): JsonResponse\n\n¿Qué clase inyectamos en el método del controlador para acceder a los datos de la petición HTTP recibida?",
    "opciones": [
      "Input",
      "Client",
      "Connection",
      "Request"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "El profesor indicó en la videoconferencia que el flujo de un API pasa por recibir los datos y validarlos. Observa el FRAGMENTO 6:\n\n$v = Validator::make($request->all(), [\n    'titulo' => 'required|string|max:60|min:2',\n    ...\n]);\n\n¿Qué hace el método `$request->all()` en esta invocación?",
    "opciones": [
      "Devuelve todas las cabeceras HTTP de la petición.",
      "Devuelve un array con todos los datos de entrada proporcionados en la petición (payload).",
      "Valida automáticamente todos los datos recibidos.",
      "Limpia los datos de etiquetas HTML."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En el FRAGMENTO 6, hay una regla específica para el año: `'anio' => 'required|numeric|min:1965|max:' . date('Y')`.\nSi un usuario envía el año 1960, la validación fallará. ¿Qué método usamos en el controlador para verificar si la validación ha fallado?",
    "opciones": [
      "$v->fails()",
      "$v->isInvalid()",
      "$v->hasErrors()",
      "$v->error()"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En la tarea, si la validación falla, enviamos los errores devueltos por Laravel. (FRAGMENTO 7):\n\nreturn response()->json([\n    'errores' => Arr::____($v->errors()->getMessages())\n], 422);\n\n¿Qué método de la clase `Arr` se utiliza para convertir el array multidimensional de mensajes de error en un array de una sola dimensión?",
    "opciones": [
      "collapse",
      "merge",
      "flatten",
      "pluck"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Según la arquitectura REST implementada en la tarea, si los datos enviados por el cliente para crear una película (POST) NO pasan las reglas de validación, ¿qué código de estado HTTP devuelve el servidor obligatoriamente (mostrado en el FRAGMENTO 7)?",
    "opciones": [
      "400 Bad Request",
      "422 Unprocessable Entity",
      "404 Not Found",
      "403 Forbidden"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Para la regla `'genero_id' => 'required|string|exists:generos,id'`, ¿qué está comprobando exactamente la regla `exists` sobre el dato recibido?",
    "opciones": [
      "Que la variable `genero_id` existe en el array del Request.",
      "Que el ID de género proporcionado existe realmente en la columna `id` de la tabla `generos` de la base de datos.",
      "Que el género está activo en la sesión del usuario.",
      "Que el valor enviado no es nulo ni vacío."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Una vez la validación pasa correctamente (`!$v->fails()`), el controlador recupera los datos limpios y validados (FRAGMENTO 8):\n\n$datos = $v->____();\n\n¿Qué método del validador proporciona este array seguro de datos en Laravel?",
    "opciones": [
      "all",
      "safe",
      "validated",
      "get"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En la tarea se pide comprobar si la película ya existe antes de crearla (FRAGMENTO 9):\n\n$resultado = PeliculaPROF::where('titulo', trim($datos['titulo']))\n    ->where('anio', intval($datos['anio']))\n    ->____();\n\n¿Qué método terminador de Eloquent devuelve un booleano (true o false) para comprobar si hay algún registro que cumpla esas condiciones?",
    "opciones": [
      "exists",
      "count",
      "first",
      "get"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Si al comprobar la existencia de la película en el servidor descubrimos que ya existe, detenemos el proceso y devolvemos un mensaje. ¿Qué código HTTP usamos en la tarea para indicar que hay un conflicto o error semántico (la película ya existe)?",
    "opciones": [
      "200",
      "404",
      "422",
      "500"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Al insertar exitosamente una película con `$pelicula = PeliculaPROF::create($datos);`, queremos devolver el ID al cliente Guzzle. Observa el FRAGMENTO 10:\n\nreturn response()->json(['resultado' => $pelicula->____], 200);\n\n¿A qué propiedad del modelo `$pelicula` accedemos para enviar el identificador autogenerado por la base de datos?",
    "opciones": [
      "identifier",
      "primary_key",
      "id",
      "clave"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En el controlador `modificarArgumentoPeliculaPROF` (PUT), el profesor obliga a que la petición se haga enviando un documento JSON. (FRAGMENTO 11):\n\nif (!$request->____()) {\n    return response()->json(['errores' => ['Los datos enviados deben ser JSON']], 403);\n}\n\n¿Qué método del Request usamos para verificar que el cliente indicó en las cabeceras que el contenido es JSON?",
    "opciones": [
      "isJson",
      "hasJson",
      "expectsJson",
      "wantsJson"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Si un cliente intenta actualizar un argumento enviando datos que no son JSON, el servidor detecta que `$request->isJson()` es falso. Según el FRAGMENTO 11, ¿qué código de estado HTTP se devuelve indicando que el acceso de esta manera está 'Prohibido'?",
    "opciones": [
      "401",
      "403",
      "404",
      "405"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Para leer exclusivamente el contenido que el cliente envió como JSON puro y validar esos datos en una petición PUT, ¿qué método encadenado del Request usa el profesor? (FRAGMENTO 12)\n\n$v = Validator::make($request->____()->all(), ['argumento' => 'required']);",
    "opciones": [
      "input",
      "payload",
      "content",
      "json"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Después de asignar el nuevo argumento a la película (`$pelicula->argumento = $datos['argumento'];`), debemos guardarlo en base de datos. (FRAGMENTO 13):\n\n$pelicula->____();\n\n¿Qué método de Eloquent consolida el cambio en la tabla?",
    "opciones": [
      "store",
      "update",
      "save",
      "push"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "El cliente Guzzle espera saber si el argumento realmente cambió (porque quizás enviaron el mismo texto que ya estaba). (FRAGMENTO 14):\n\nif ($pelicula->____()) {\n    return response()->json(['resultado' => 1], 200);\n}\n\n¿Qué método de Eloquent se usa tras `save()` para saber si se modificaron datos en la base de datos?",
    "opciones": [
      "wasChanged",
      "isDirty",
      "hasChanges",
      "isUpdated"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En el controlador `borrarPeliculaPROF($pelicula)` primero se valida si el ID recibido es un número para evitar fallos. (FRAGMENTO 15):\n\nif (!____($pelicula)) {\n    $errores = ['No se ha recibido un id numérico de película'];\n}\n\n¿Qué función nativa de PHP se emplea aquí para verificar el parámetro de la ruta?",
    "opciones": [
      "is_int",
      "is_number",
      "is_numeric",
      "ctype_digit"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Al intentar borrar, debemos verificar si la película existe en la base de datos. (FRAGMENTO 16):\n\n$pelicula = PeliculaPROF::____($pelicula);\nif (!$pelicula) {\n    $errores = [\"No existe ninguna película\"];\n}\n\n¿Qué método de Eloquent busca un registro por su clave primaria, devolviendo `null` si no lo encuentra?",
    "opciones": [
      "search",
      "get",
      "first",
      "find"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Si un cliente invoca el método DELETE con un ID de película que no existe, el servidor ejecuta la validación del FRAGMENTO 16. ¿Qué código de estado HTTP se debe retornar para informar adecuadamente en un API REST de que el recurso no se halló?",
    "opciones": [
      "200",
      "401",
      "404",
      "422"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Una vez comprobado que la película existe en el controlador de borrado, procedemos a eliminarla físicamente. (FRAGMENTO 17):\n\n$pelicula->____();\nreturn response()->json(['resultado' => 1], 200);\n\n¿Cuál es el método de Eloquent para borrar una instancia de la base de datos?",
    "opciones": [
      "remove",
      "destroy",
      "delete",
      "drop"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Pasamos a la parte del cliente (Guzzle). En la clase `PROF_PeticionesAPI`, el profesor definió constantes para los códigos de error internos del cliente. (FRAGMENTO 18):\n\nconst ERROR_SERVICIO_WEB = ____;\nconst ERROR_DATOS_NO_JSON = -2;\nconst ERROR_PELICULA_NO_EXISTE = -3;\n\n¿Qué valor numérico tiene la constante ERROR_SERVICIO_WEB según los archivos de la tarea?",
    "opciones": [
      "-1",
      "0",
      "404",
      "500"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En el cliente, para solicitar el listado de películas al servidor Laravel, usamos Guzzle con el verbo HTTP correspondiente. (FRAGMENTO 19):\n\n$operacion = $cliente->____('listarPeliculasPROF');\n\nSegún los principios REST y la tarea, ¿qué método recupera información (solo lectura)?",
    "opciones": [
      "fetch",
      "get",
      "post",
      "request"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Al analizar la respuesta de Guzzle en el cliente, el profesor comprueba el código HTTP antes de procesar el JSON. (FRAGMENTO 20):\n\nif ($operacion->____() != 200) {\n    return self::ERROR_SERVICIO_WEB;\n}\n\n¿Qué método de la respuesta de Guzzle devuelve el código de estado (ej. 200, 422)?",
    "opciones": [
      "getStatus",
      "getHttpCode",
      "getStatusCode",
      "getCode"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Si el código HTTP es correcto, convertimos el JSON de la respuesta en una estructura de PHP. (FRAGMENTO 21):\n\n$listaDePeliculas = ____($operacion->getBody()->getContents(), true);\n\n¿Qué función nativa de PHP realiza esta conversión de formato texto JSON a un array asociativo?",
    "opciones": [
      "json_encode",
      "json_parse",
      "json_decode",
      "unserialize"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En el cliente, al verificar si existe una película (petición GET), pasamos parámetros adjuntos a la URL. (FRAGMENTO 22):\n\n$operacion = $cliente->get('existePeliculaPROF', [\n    '____' => [\n        'titulo' => $titulo,\n        'anio' => $anio\n    ]\n]);\n\n¿Qué clave de configuración en Guzzle añade estos parámetros a la cadena de consulta (Query String) de la URL?",
    "opciones": [
      "form_params",
      "json",
      "query",
      "headers"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Cuando se consumen servicios en el cliente y el servidor Laravel detecta duplicados o datos faltantes, retorna un código HTTP 422. En Guzzle esto se intercepta así (FRAGMENTO 23):\n\nif ($operacion->getStatusCode() == 422) {\n    $datos = json_decode($operacion->getBody()->getContents(), true);\n    return $datos['____'];\n}\n\n¿Qué índice o clave extrae el cliente del array `$datos` para mostrar los mensajes de fallo al usuario?",
    "opciones": [
      "errores",
      "mensajes",
      "fails",
      "error"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Para la creación de una película (POST), Guzzle debe enviar los datos emulando un formulario estándar (`application/x-www-form-urlencoded`). (FRAGMENTO 24):\n\n$operacion = $cliente->post('crearPeliculaPROF', [\n    '____' => [\n        'titulo' => $datos['titulo'] ?? '',\n        ...\n    ]\n]);\n\n¿Qué clave de configuración en Guzzle realiza este comportamiento automáticamente?",
    "opciones": [
      "json",
      "body",
      "query",
      "form_params"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En el cliente, al construir los datos para el POST (FRAGMENTO 24), el profesor utiliza el operador `??` (ej. `$datos['titulo'] ?? ''`). ¿Para qué se utiliza este operador de fusión null (null coalescing) aquí?",
    "opciones": [
      "Para cifrar la variable.",
      "Para evaluar si la variable es numérica.",
      "Para asegurar que, si el índice no existe en el array `$datos`, se asigne una cadena vacía en su lugar, evitando un warning en PHP.",
      "Para que el servidor Laravel lo interprete como NULL estricto en la base de datos."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Si la película se crea con éxito en el servidor, este devuelve un JSON: `{\"resultado\": 5}` (siendo 5 el ID nuevo). En el cliente lo leemos y aseguramos su tipo. (FRAGMENTO 25):\n\nreturn ____($datos['resultado']);\n\n¿Qué función nativa de PHP utiliza el profesor para forzar que el dato extraído sea un entero?",
    "opciones": [
      "intval",
      "(int)",
      "parse_int",
      "to_integer"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En el cliente, cuando realizamos la modificación del argumento (PUT), la URL incluye el ID de la película. (FRAGMENTO 26):\n\n$operacion = $cliente->put('modificarArgumentoPeliculaPROF/' . ____, [...]);\n\n¿Qué variable concatena el profesor a la URL para seguir la estructura de rutas RESTful donde el recurso se identifica en la URI?",
    "opciones": [
      "$titulo",
      "$id_pelicula",
      "$datos",
      "$argumento"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Para la petición PUT de modificación, el servidor Laravel exige que los datos vayan codificados en JSON (`$request->isJson()`). ¿Cómo configuramos Guzzle en el cliente para que envíe los datos de esta forma? (FRAGMENTO 27):\n\n$operacion = $cliente->put('...', [\n    '____' => [\n        'argumento' => $argumento\n    ]\n]);",
    "opciones": [
      "form_params",
      "json",
      "query",
      "headers_json"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En la gestión de la respuesta PUT, si el cliente envía un ID de una película que ya no existe, el servidor retornará un HTTP 404. ¿Cómo lo captura Guzzle? (FRAGMENTO 28):\n\nif ($operacion->getStatusCode() == 404) {\n    return self::____;\n}\n\n¿Qué constante diseñada por el profesor se devuelve en este caso particular?",
    "opciones": [
      "ERROR_SERVICIO_WEB",
      "ERROR_DATOS_NO_JSON",
      "ERROR_PELICula_NO_ENCONTRADA",
      "ERROR_PELICULA_NO_EXISTE"
    ],
    "correcta": 3
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Para realizar el borrado, el cliente debe usar el método HTTP que la teoría de servicios web REST define como idóneo para eliminaciones. (FRAGMENTO 29):\n\n$operacion = $cliente->____('borrarPeliculaPROF/' . $id_pelicula);\n\n¿Qué método invoca Guzzle en el código del cliente?",
    "opciones": [
      "delete",
      "remove",
      "drop",
      "destroy"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "La lógica en el controlador para crear películas devuelve el ID creado como `['resultado' => $pelicula->id]`. En la clase `PROF_Operaciones.php`, el cliente evalúa ese retorno. (FRAGMENTO 30):\n\nif (is_int($resultado)) {\n    if ($resultado > 0) {\n        $lineaInforme = \"Película creada con éxito (ID: \" . $resultado . \")\";\n    }\n}\n\nSabiendo que si hay errores devuelve un Array de strings en vez del ID numérico, ¿qué verifica `is_int($resultado)`?",
    "opciones": [
      "Comprueba que no se hayan devuelto errores de validación y que se tenga un ID numérico de éxito.",
      "Verifica si hubo una excepción SQL.",
      "Se asegura de que el número sea positivo.",
      "Valida que el JSON no esté vacío."
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En `PROF_Operaciones.php`, cuando `$resultado` contiene los errores de validación (array), el cliente prepara un mensaje HTML uniendo los errores. (FRAGMENTO 31):\n\n$lineaInforme = \"Errores...: <ul><li>\" . ____(\"</li><li>\", $resultado) . \"</li></ul>\";\n\n¿Qué función de PHP junta todos los elementos del array de errores en un solo string, separados por el delimitador HTML?",
    "opciones": [
      "explode",
      "concat",
      "implode",
      "join_array"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En el archivo principal del cliente `index.php`, al inicializar Guzzle, el profesor configura la URL base del API. (FRAGMENTO 32):\n\n$cliente = new GClientPROF([\n    '____' => API_BASE_URL,\n    'http_errors' => false\n]);\n\n¿Qué opción de Guzzle permite definir la raíz de la URL para que en peticiones posteriores solo indiquemos el endpoint (ej. `get('listar')`)?",
    "opciones": [
      "url_base",
      "root_uri",
      "base_uri",
      "host"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En la inicialización del cliente Guzzle (FRAGMENTO 32), la opción `'http_errors' => false` es vital. Según la videoconferencia y la arquitectura de la tarea, ¿qué ocurre si NO se pone esta opción y Laravel devuelve un error 422 o 404?",
    "opciones": [
      "Guzzle ignora la respuesta completamente.",
      "Guzzle intentará automáticamente arreglar el JSON.",
      "Guzzle lanzará una excepción fatal en PHP (ClientException) deteniendo la ejecución del script, en vez de permitirnos leer el código de estado.",
      "Guzzle forzará un código 200 siempre."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En `index.php`, los comandos masivos llegan en un textarea separados por saltos de línea. Se procesan iterando `$datos`. (FRAGMENTO 33):\n\nforeach ($datos as $linea_str) {\n    $linea = ____($linea_str);\n    switch ($linea) {\n       case 'CREAR': ...\n\n¿Qué función se emplea para convertir una cadena de texto en formato CSV (valores separados por comas) en un array indexado `$linea`?",
    "opciones": [
      "str_split",
      "str_getcsv",
      "explode",
      "fgetcsv"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En la parte de frontend del cliente (index.php), al imprimir los datos obtenidos del API en una tabla HTML (ej. `$pelicula['titulo']`), el profesor utiliza protección. (FRAGMENTO 34):\n\n<td><?= ____($pelicula['titulo'] ?? '') ?></td>\n\n¿Qué función se utiliza siempre para proteger la vista de posibles ataques XSS convirtiendo caracteres especiales en entidades HTML?",
    "opciones": [
      "htmlentities",
      "strip_tags",
      "htmlspecialchars",
      "urlencode"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "La videoconferencia destaca que la arquitectura en Laravel y en Guzzle para la Tarea 6 es *Stateless* (sin estado). En la práctica, al realizar un GET justo después de un POST, ¿qué significa esto para el servidor Laravel?",
    "opciones": [
      "El servidor recuerda mediante la sesión de PHP qué Guzzle acaba de crear la película.",
      "El servidor procesa el GET de forma completamente independiente; no sabe ni le importa si la petición anterior provino del mismo cliente.",
      "El servidor guarda una cookie temporal para vincular ambas peticiones.",
      "El servidor denegará el GET porque el POST consumió el token de estado."
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En la arquitectura MVC empleada en la parte del servidor (API), ¿cuál es el componente responsable principal de interactuar directamente con la base de datos para extraer o insertar las películas?",
    "opciones": [
      "El Controlador (Controller)",
      "La Ruta (Route)",
      "El Modelo (Model, Ej: PeliculaPROF)",
      "La Vista (View, o el renderizador JSON)"
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "En la API, cuando se hace un `GET /api/listarGenerosPROF`, el controlador responde: `return response()->json(GeneroPROF::select(...)->get());`. En la vista MVC, ¿quién actúa como \"la Vista\" en este flujo de servicio web RESTful?",
    "opciones": [
      "Un archivo Blade (`generos.blade.php`).",
      "El propio navegador web renderizando HTML.",
      "El documento JSON devuelto, ya que serializa los datos en una representación estructurada para el cliente.",
      "La base de datos MySQL al procesar el select."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Para el consumo de la API de creación (POST), la teoría indica que los códigos de error ayudan a entender qué falló. Según la tarea, si falta el campo 'titulo', Guzzle recibe un 422 Unprocessable Entity. ¿Quién originó este código 422?",
    "opciones": [
      "Guzzle, al detectar que falta un parámetro.",
      "El objeto Request de PHP de forma nativa.",
      "El método Validator de Laravel en el controlador, al verificar la regla 'required' y fallar.",
      "El motor de base de datos MySQL por una restricción NOT NULL."
    ],
    "correcta": 2
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Si un desarrollador en la parte de Guzzle se equivoca y realiza un `GET` hacia `crearPeliculaPROF` (el cual está definido en el servidor solo como POST), ¿qué código de estado HTTP estándar devolverá el servidor Laravel indicando que el verbo GET no se permite en esa ruta?",
    "opciones": [
      "404 Not Found",
      "405 Method Not Allowed",
      "500 Internal Server Error",
      "403 Forbidden"
    ],
    "correcta": 1
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "El profesor recalcó en la videoconferencia la importancia de extraer la respuesta de los métodos en el cliente. Si `$operacion = $cliente->delete(...)` se ejecuta con éxito, ¿cuál de los siguientes es el procedimiento que usa el profesor para leer el texto crudo del JSON devuelto?",
    "opciones": [
      "$operacion->getBody()->getContents();",
      "$operacion->readJson();",
      "$operacion->getPayload();",
      "file_get_contents($operacion);"
    ],
    "correcta": 0
  },
  {
    "tema": "repaso tarea 6 quinta parte",
    "pregunta": "Basándote en el repaso de la Tarea 6 que pide el profesor, el flujo principal del Servidor de la API consta de 4 pasos esenciales. ¿Cuál es el orden correcto del flujo en un método típico de controlador para crear o modificar?",
    "opciones": [
      "1) Recibir Request, 2) Validar Request, 3) Realizar acción en el Modelo (BBDD), 4) Emitir Respuesta JSON.",
      "1) Validar Request, 2) Recibir Request, 3) Emitir Respuesta JSON, 4) Realizar acción en el Modelo.",
      "1) Realizar acción en Modelo, 2) Validar Request, 3) Recibir Request, 4) Emitir Respuesta JSON.",
      "1) Emitir Respuesta JSON, 2) Realizar acción en Modelo, 3) Validar Request, 4) Recibir Request."
    ],
    "correcta": 0
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Qué es fundamentalmente Composer en el desarrollo de aplicaciones web con PHP?",
    "opciones": [
      "Un servidor web ligero optimizado para entornos de desarrollo.",
      "Un gestor de dependencias que permite declarar, descargar y mantener actualizadas las librerías de terceros en un proyecto.",
      "Un framework que implementa de forma nativa el patrón de arquitectura Modelo-Vista-Controlador.",
      "Un compilador de código PHP encargado de transformar scripts en binarios ejecutables."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Para inicializar un proyecto de Composer de forma interactiva a través de la terminal, ¿qué comando debemos ejecutar?",
    "opciones": [
      "composer install",
      "composer create-project",
      "composer init",
      "composer setup"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si un proyecto ya dispone de un archivo 'composer.json' configurado y descargamos el código sin la carpeta 'vendor', ¿qué comando recupera e instala todas las dependencias indicadas?",
    "opciones": [
      "composer update",
      "composer install",
      "composer download",
      "composer require"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Queremos añadir a nuestro proyecto la librería de plantillas Smarty y que quede registrada automáticamente en el archivo de configuración. ¿Qué comando es el adecuado?",
    "opciones": [
      "composer require smarty/smarty",
      "composer add smarty/smarty",
      "composer install smarty/smarty",
      "composer dependency-get smarty/smarty"
    ],
    "correcta": 0
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Qué comando de Composer debemos usar si queremos instalar una dependencia (como por ejemplo phpunit/phpunit) que solo va a ser necesaria durante la etapa de desarrollo local?",
    "opciones": [
      "composer require phpunit/phpunit --production-false",
      "composer require-dev phpunit/phpunit",
      "composer install-dev phpunit/phpunit",
      "composer dev-add phpunit/phpunit"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si modificamos la sección 'autoload' de nuestro archivo 'composer.json' para remapear directorios, ¿qué comando debemos ejecutar para forzar la regeneración del mapa de clases de carga automática sin reinstalar paquetes?",
    "opciones": [
      "composer clean-cache",
      "composer update-map",
      "composer status",
      "composer dump-autoload"
    ],
    "correcta": 3
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Qué información clave se almacena de forma automática en el archivo 'composer.lock'?",
    "opciones": [
      "Las rutas relativas del enrutador central y los endpoints del servidor web.",
      "Las versiones exactas y los hashes criptográficos de los paquetes instalados, garantizando que todo el equipo use las mismas versiones.",
      "Las credenciales y tokens de acceso de la base de datos relacional de producción.",
      "El código fuente binario precompilado de las vistas de la aplicación."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Qué función cumple un espacio de nombres (namespace) en PHP?",
    "opciones": [
      "Es una directiva para ocultar y proteger variables lógicas globales contra ataques informáticos.",
      "Permite encapsular clases, interfaces, funciones y constantes para evitar conflictos de nombres cuando coinciden elementos de librerías distintas.",
      "Actúa como una base de datos temporal indexada en la memoria caché del servidor.",
      "Es una estructura obligatoria para declarar herencia múltiple entre superclases."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si queremos declarar que una clase pertenece al espacio de nombres 'RMM04\\modelo', ¿dónde y cómo debe colocarse dicha declaración en el archivo PHP?",
    "opciones": [
      "Al final del archivo mediante la expresión: declare(namespace='RMM04\\modelo');",
      "En la primera línea transcurrida la apertura de la etiqueta <?php utilizando: namespace RMM04\\modelo;",
      "Dentro del cuerpo de la propia clase, justo antes del constructor utilizando la palabra: static namespace;",
      "En un archivo de configuración externo denominado 'autoload.php' exclusivamente."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si estamos dentro de un archivo PHP con un namespace distinto y queremos hacer referencia a la clase 'Pelicula' del espacio de nombres 'RMM04\\modelo' mediante un alias corto, ¿qué directiva usaremos en la cabecera?",
    "opciones": [
      "import RMM04\\modelo\\Pelicula;",
      "use RMM04\\modelo\\Pelicula;",
      "require_namespace('RMM04\\modelo\\Pelicula');",
      "include_class RMM04\\modelo\\Pelicula;"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Bajo la recomendación de carga automática PSR-4, ¿qué relación debe existir entre el namespace de una clase y su ubicación física en el disco?",
    "opciones": [
      "Ninguna, Composer busca el nombre del archivo de forma aleatoria por todo el disco duro del servidor.",
      "La estructura del espacio de nombres debe corresponderse unívocamente con la jerarquía de subcarpetas y el nombre del archivo del sistema de archivos.",
      "Todos los archivos del proyecto deben estar obligatoriamente en una única carpeta raíz plana llamada vendor.",
      "Las clases deben almacenarse de forma cifrada dentro de una base de datos SQLite interna."
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Dado el siguiente fragmento del archivo composer.json:\n\n\"psr-4\": { \"RMM04\\\\\": \"srcrmm/\" }\n\n¿Dónde buscará el autoloader una clase declarada como 'namespace RMM04\\modelo;' e instanciada como 'new Pelicula();'?",
    "opciones": [
      "En la ruta de la carpeta: srcrmm/Pelicula.php",
      "En la ruta de la carpeta: srcrmm/modelo/Pelicula.php",
      "En la ruta de la carpeta: vendor/RMM04/srcrmm/modelo.php",
      "En la raíz del proyecto con el nombre: RMM04_modelo_Pelicula.json"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Para poder utilizar el sistema de autoloteo (autoloading) generado por Composer en nuestro punto de entrada único (index.php), ¿qué archivo debemos incluir obligatoriamente?",
    "opciones": [
      "require 'vendor/autoload.php';",
      "include 'composer.json';",
      "require 'srcrmm/modelo/Peliculas.php';",
      "require 'composer.lock';"
    ],
    "correcta": 0
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Qué sucede si intentamos instanciar una clase utilizando su nombre simplificado sin haber puesto la cláusula 'use' correspondiente ni indicar su ruta cualificada completa en un archivo con namespace diferente?",
    "opciones": [
      "PHP la busca de forma automática en todas las subcarpetas del proyecto por cortesía.",
      "Se produce un error fatal (Fatal Error) indicando que la clase no ha sido encontrada.",
      "El script se ejecuta de forma normal pero omite las llamadas a los métodos lógicos de esa clase.",
      "Composer descarga automáticamente la clase que falta desde internet en tiempo real."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si en la cabecera de un archivo declaramos:\n\nuse RMM04\\servicios\\DBResult as Resultado;\n\n¿Cómo podemos instanciar o usar dicha clase de forma válida en el código inferior?",
    "opciones": [
      "$res = new DBResult();",
      "$res = new Resultado();",
      "$res = RMM04\\servicios\\Resultado::getInstance();",
      "$res = new RMM04\\servicios\\DBResult as Resultado();"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Cuál es la responsabilidad primordial de la capa de la Vista (View) en el patrón de arquitectura MVC?",
    "opciones": [
      "Procesar las credenciales de sesión del usuario y validar la seguridad perimetral.",
      "Realizar consultas directas y transacciones relacionales contra las tablas SQL.",
      "Recibir los datos procesados del flujo y encargarse de la interfaz de usuario, renderizando y maquetando el formato final (HTML/CSS).",
      "Interceptar las peticiones HTTP del cliente y determinar el método de enrutamiento."
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Cuál es la responsabilidad primordial de la capa del Modelo (Model) en el patrón de arquitectura MVC?",
    "opciones": [
      "Gestionar las peticiones de entrada del usuario a través de la URL o variables globales.",
      "Albergar los datos de la aplicación, las reglas relacionales de negocio y encargarse de interactuar con la persistencia o base de datos.",
      "Compilar y almacenar en caché los archivos del motor de plantillas visuales.",
      "Proporcionar componentes gráficos de interfaz de usuario como formularios estáticos."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Cuál es la responsabilidad primordial del Controlador (Controller) en el patrón de arquitectura MVC?",
    "opciones": [
      "Almacenar las estructuras lógicas de las tablas de la base de datos de forma permanente.",
      "Actuar como intermediario o 'director de orquesta', capturando la petición del usuario, solicitando datos al modelo e indicándole a la vista qué debe mostrar.",
      "Maquetar las etiquetas y selectores CSS del documento visual final.",
      "Configurar las directivas de mapeo PSR-4 en los archivos JSON."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Analiza este código:\n\n```html\n<h1>Lista de Películas</h1>\n{foreach $peliculas as $p}\n    <p>{$p->getTitulo()}</p>\n{/foreach}\n```\n¿A qué componente del patrón MVC pertenece estrictamente?",
    "opciones": [
      "Al Controlador",
      "Al Modelo",
      "A la Vista",
      "Al Enrutador"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Qué comando básico de Composer inicializa de manera interactiva un nuevo archivo de configuración en la raíz de un proyecto?",
    "opciones": [
      "composer install",
      "composer create-project",
      "composer init",
      "composer config"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si un proyecto no utiliza espacios de nombres ni carpetas jerárquicas en sus clases, ¿qué directiva de 'autoload' se define en el composer.json para listarlas?",
    "opciones": [
      "\"psr-4\"",
      "\"classmap\"",
      "\"files\"",
      "\"exclude-from-classmap\""
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Después de añadir o modificar manualmente una ruta de directorios en el bloque 'classmap' del archivo 'composer.json', ¿qué comando regenera el archivo 'autoload.php'?",
    "opciones": [
      "composer dumpautoload",
      "composer update-autoload",
      "composer install --refresh",
      "composer clear-cache"
    ],
    "correcta": 0
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Qué comando de Composer añade y descarga de manera automatizada un paquete de terceros (como smarty/smarty) a la sección 'require' del proyecto?",
    "opciones": [
      "composer require smarty/smarty",
      "composer install smarty/smarty",
      "composer add smarty/smarty",
      "composer get smarty/smarty"
    ],
    "correcta": 0
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Para limpiar u omitir las dependencias de desarrollo y descargar únicamente los paquetes críticos de producción al desplegar en un servidor real, ¿qué flag se añade al comando de instalación?",
    "opciones": [
      "composer install --no-dev",
      "composer install --production",
      "composer install --omit=dev",
      "composer install --pure"
    ],
    "correcta": 0
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si clonas un repositorio que tiene el archivo 'composer.json' y 'composer.lock', pero carece de la carpeta 'vendor', ¿qué comando restaura fielmente el entorno exacto?",
    "opciones": [
      "composer update",
      "composer upgrade",
      "composer install",
      "composer refresh"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Cuál es la extensión de archivo estándar que utilizan por defecto las plantillas visuales renderizadas por el motor de Smarty?",
    "opciones": [
      ".smarty",
      ".tpl",
      ".blade.php",
      ".html.php"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si en un script controlador ejecutamos la sentencia '$smarty->assign('usuario', 'Roberto');', ¿cómo se proyecta de forma directa este valor dentro de la plantilla Smarty?",
    "opciones": [
      "<?php echo $usuario; ?>",
      "{{ usuario }}",
      "{$usuario}",
      "[% usuario %]"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Cuál de las siguientes sentencias representa la etiqueta correcta para escribir un comentario interno dentro de una plantilla de Smarty?",
    "opciones": [
      "",
      "{* Este es un comentario *}",
      "// Este es un comentario",
      "{# Este es un comentario #}"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si tenemos un objeto '$pelicula' con un método público 'getTitulo()', ¿cuál es la sintaxis nativa de Smarty para invocar dicho método e imprimirlo en pantalla?",
    "opciones": [
      "{$pelicula->getTitulo()}",
      "{$pelicula.getTitulo}",
      "{{ pelicula.getTitulo() }}",
      "{$pelicula->titulo}"
    ],
    "correcta": 0
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Dada la siguiente declaración en la cabecera de un archivo PHP:\n\nnamespace RMM04\\modelo;\n\n¿Cuál es la función primordial de esta línea de código?",
    "opciones": [
      "Importar dinámicamente las funciones del motor relacional de PDO.",
      "Encapsular las clases de este archivo bajo el espacio lógico 'RMM04\\modelo' para evitar colisiones de nombres globales.",
      "Vincular el archivo de forma automática con la base de datos MySQL.",
      "Declarar una interfaz abstracta para el patrón controlador."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Para instanciar la clase 'Pelicula' que pertenece al namespace 'RMM04\\modelo' desde un script que está en el namespace global sin usar la palabra clave 'use', ¿cómo debemos escribir la sentencia?",
    "opciones": [
      "$p = new RMM04::modelo::Pelicula();",
      "$p = new \\RMM04\\modelo\\Pelicula();",
      "$p = new srcrmm/modelo/Pelicula();",
      "$p = new Pelicula(RMM04\\modelo);"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si queremos simplificar la codificación y escribir únicamente '$p = new Pelicula();' en un archivo con un namespace ajeno, ¿qué directiva debemos situar en la sección superior?",
    "opciones": [
      "import RMM04\\modelo\\Pelicula;",
      "include_namespace RMM04\\modelo\\Pelicula;",
      "use RMM04\\modelo\\Pelicula;",
      "require_class RMM04\\modelo\\Pelicula;"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Para poder registrar y utilizar las rutas lógicas del cargador automático de Composer en la aplicación, ¿qué archivo debe ser incluido obligatoriamente al inicio del script en el index.php?",
    "opciones": [
      "require_once 'composer.json';",
      "require_once 'vendor/autoload.php';",
      "require_once 'srcrmm/servicios/ConexionPDO.php';",
      "require_once 'composer.lock';"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Dentro del patrón arquitectónico MVC, ¿cuál es el componente encargado de procesar la entrada de datos, validar la lógica de sesión del usuario y coordinar el flujo llamando al modelo?",
    "opciones": [
      "La Vista (View)",
      "El Modelo (Model)",
      "El Controlador (Controller)",
      "La Base de Datos relacional"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Dentro del patrón MVC, ¿qué componente gestiona exclusivamente las sentencias SQL preparadas, las transacciones PDO y las reglas de consistencia de datos de negocio?",
    "opciones": [
      "El Controlador (Controller)",
      "El Modelo (Model)",
      "La Vista (View)",
      "El Servidor Apache"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Analiza la siguiente instrucción PHP:\n\n$titulo = trim($_POST['titulo'] ?? '');\nif (empty($titulo)) { $errores['titulo'] = 'Obligatorio'; }\n\n¿A qué capa lógica del patrón MVC pertenece por excelencia esta validación inicial de flujo?",
    "opciones": [
      "Al Modelo",
      "A la Vista",
      "Al Controlador",
      "Al motor Smarty"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Analiza la siguiente función:\n\npublic static function existe(PDO $pdo, int $id) {\n    $sql = 'SELECT COUNT(*) FROM generos WHERE id = :id';\n    $stmt = $pdo->prepare($sql);\n    $stmt->execute([':id' => $id]);\n    return $stmt->fetchColumn() > 0;\n}\n\n¿A qué componente del patrón MVC corresponde?",
    "opciones": [
      "Al Controlador",
      "A la Vista",
      "Al Modelo",
      "Al Enrutador Frontal"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Analiza las siguientes líneas escritas en un script del servidor:\n\n$smarty->assign('listaPeliculas', $peliculas);\n$smarty->display('listado.tpl');\n\n¿Dónde se localiza habitualmente esta llamada de asignación y renderizado?",
    "opciones": [
      "En un método de una clase del Modelo.",
      "En un método de una clase del Controlador, delegando el control a la Vista.",
      "Dentro de la estructura interna del archivo composer.json.",
      "En la clase de servicio ConexionPDO."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si un archivo contiene maquetación HTML pura junto a directivas lógicas como '{if isset($error)}' y '{foreach $generos as $g}', ¿qué capa del MVC se está implementando?",
    "opciones": [
      "El Controlador",
      "El Modelo",
      "La Vista",
      "El Mapeador PSR-4"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "En la programación orientada a objetos en PHP, ¿qué operador específico se utiliza para instanciar un objeto basado en una clase determinada?",
    "opciones": [
      "instanceof",
      "clone",
      "new",
      "->"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Qué nombre de método especial reserva PHP para definir el constructor dentro de una clase?",
    "opciones": [
      "public function initialize()",
      "public function __construct()",
      "public function init()",
      "public function Constructor()"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Dada una variable que contiene un objeto instanciado '$prueba', ¿qué operador se utiliza para invocar un método público de dicha instancia en PHP?",
    "opciones": [
      "El punto ( . )",
      "El operador flecha ( -> )",
      "El doble dos puntos ( :: )",
      "La barra invertida ( \\ )"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si una propiedad dentro de una clase PHP se declara mediante 'private $mensaje;', ¿cuál es el alcance legal de su visibilidad?",
    "opciones": [
      "Puede leerse y modificarse desde cualquier script de la aplicación.",
      "Es accesible solo desde los métodos de la propia clase que la define.",
      "Es accesible desde la clase que la define y también desde sus clases hijas.",
      "Se puede proyectar directamente en la vista sin pasar por el controlador."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si una propiedad dentro de una clase PHP se declara mediante 'protected $id;', ¿qué visibilidad se le está otorgando?",
    "opciones": [
      "No es accesible externamente, excepto para aquellas clases hijas que extiendan la clase base por herencia.",
      "Es accesible únicamente desde las plantillas HTML compiladas.",
      "Queda expuesta públicamente para cualquier instancia del proyecto.",
      "Solo puede ser manipulada por las librerías ubicadas en vendor."
    ],
    "correcta": 0
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "En PHP, ¿cuál es el operador de resolución de ámbito utilizado para acceder a constantes de clase o invocar métodos estáticos sin necesidad de instanciar la clase?",
    "opciones": [
      "El operador flecha ( -> )",
      "El doble dos puntos ( :: )",
      "El asterisco combinado ( * )",
      "El ampersand de referencia ( & )"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Deseamos declarar una constante inmutable denominada 'LADO_MAX' con un valor numérico de 300 dentro de una estructura de clase. ¿Cuál es la sintaxis correcta en PHP?",
    "opciones": [
      "define('LADO_MAX', 300);",
      "const LADO_MAX = 300;",
      "public static $LADO_MAX = 300;",
      "protected int $LADO_MAX = 300;"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Al implementar el patrón de enrutamiento estático basado en acciones URL (Router), ¿qué estructura de control condicional se utiliza habitualmente en el index.php para desviar el flujo al controlador?",
    "opciones": [
      "Un bucle for",
      "Una sentencia try-catch",
      "Un bloque switch o match",
      "Una directiva include_once en cascada"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si en una clase declaramos un método mediante 'public static function conectar()', ¿qué particularidad tiene este método respecto a su invocación?",
    "opciones": [
      "Requiere instanciar obligatoriamente un objeto con 'new' antes de ser llamado.",
      "Es un método estático y puede invocarse directamente a nivel de clase usando el nombre de la clase y el operador '::'.",
      "Solo puede ser ejecutado de forma asíncrona mediante peticiones AJAX.",
      "Su cuerpo lógico reside en el motor de plantillas Smarty."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Cuál es el propósito fundamental de inyectar la instancia de la clase 'PDO' como parámetro en los métodos lógicos del Modelo de datos?",
    "opciones": [
      "Habilitar el renderizado dinámico de las subvistas en Smarty.",
      "Proporcionar al modelo la conexión activa a la base de datos para preparar y ejecutar las consultas SQL de persistencia.",
      "Mapear los espacios de nombres bajo el estándar de Composer.",
      "Recoger los parámetros globales enviados por el cliente mediante POST."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Cuál es la función del archivo 'composer.lock' en la gestión de un proyecto web estructurado por capas?",
    "opciones": [
      "Bloquear el servidor Apache para evitar inyecciones de código malicioso.",
      "Fijar y registrar de forma estricta las versiones exactas de las librerías instaladas en el servidor, garantizando que el entorno sea idéntico en desarrollo y producción.",
      "Compilar en caché las plantillas .tpl modificadas recientemente.",
      "Mapear los métodos estáticos hacia el controlador centralizado."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Dentro del archivo 'composer.json', ¿en qué sección específica se configura el mapeado dinámico de carga de clases basado en el estándar industrial PSR-4?",
    "opciones": [
      "\"require\"",
      "\"autoload\"",
      "\"authors\"",
      "\"minimum-stability\""
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si un desarrollador elimina accidentalmente la carpeta entera 'vendor' de su espacio de trabajo, ¿qué comando básico de Composer la reconstruye por completo?",
    "opciones": [
      "composer require",
      "composer init",
      "composer install",
      "composer update-lock"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si queremos utilizar un alias simplificado para referenciar una clase de otro namespace de la forma: 'use RMM04\\servicios\\DBResult as Resultado;', ¿cómo la instanciaríamos legítimamente?",
    "opciones": [
      "$res = new DBResult();",
      "$res = new Resultado();",
      "$res = new RMM04\\servicios\\Resultado();",
      "$res = use Resultado();"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Dada la directiva en el composer.json: '\"psr-4\": { \"RMM04\\\\\": \"srcrmm/\" }'. Si instanciamos 'new \\RMM04\\servicios\\ConexionPDO()', ¿dónde buscará Composer el archivo físico?",
    "opciones": [
      "En la ruta: vendor/RMM04/servicios/ConexionPDO.php",
      "En la ruta: srcrmm/servicios/ConexionPDO.php",
      "En la ruta raíz: servicios/ConexionPDO.php",
      "En la ruta: srcrmm/ConexionPDO.servicios.php"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si necesitamos recuperar un valor de tipo entero enviado de un formulario de forma segura contra inyecciones usando una clase helper 'Peticion', ¿cuál es el método adecuado?",
    "opciones": [
      "$id = $peticion->getInt('id');",
      "$id = (int)$_POST['id'];",
      "$id = $peticion->getString('id');",
      "$id = $peticion->has('id');"
    ],
    "correcta": 0
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Cuál de las siguientes opciones describe el uso correcto de la directiva de Smarty para incluir una subplantilla de cabecera común dentro de otra plantilla principal?",
    "opciones": [
      "{extends file='cabecera.tpl'}",
      "{include file='cabecera.tpl'}",
      "{block name='cabecera'}",
      ""
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si un desarrollador mezcla código de consultas SQL e instrucciones SQL 'INSERT INTO...' dentro de un archivo de plantilla con extensión '.tpl', ¿qué principio del patrón MVC está violando de forma crítica?",
    "opciones": [
      "El principio de autoloteo mediante PSR-4.",
      "La separación estricta de responsabilidades, entremezclando la persistencia de datos (Modelo) con la capa de presentación (Vista).",
      "La configuración del archivo de bloqueo composer.lock.",
      "La inmutabilidad de los métodos controladores estáticos."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Qué directiva de Smarty delimita un bloque genérico heredable que puede ser sobrescrito por una plantilla hija que extienda la plantilla base?",
    "opciones": [
      "{include}",
      "{block} ... {/block}",
      "{foreach}",
      "{assign}"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Para indicar en una plantilla de Smarty que se desea heredar la maquetación base de un archivo denominado 'layout.tpl', ¿qué sentencia debe colocarse en la primera línea?",
    "opciones": [
      "{include file='layout.tpl'}",
      "{extends file='layout.tpl'}",
      "{block name='layout'}",
      "{$layout}"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si un método de persistencia del modelo ejecuta la directiva '$stmt->setFetchMode(PDO::FETCH_CLASS, Pelicula::class);', ¿cuál es el beneficio directo obtenido?",
    "opciones": [
      "Retornar un array asociativo limpio compatible con JavaScript.",
      "Instanciar e hidratar de forma automatizada objetos de la clase 'Pelicula' mapeando las columnas de la tabla con las propiedades de la entidad.",
      "Configurar los asteriscos de errores dentro de la sesión activa.",
      "Definir el espacio de nombres de los controladores relacionales."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si en un controlador verificamos una petición mediante el condicional 'if ($peticion->isPost())', ¿qué comportamiento HTTP del cliente se está evaluando?",
    "opciones": [
      "Si el usuario está logueado en la sesión de Smarty.",
      "Si la solicitud HTTP ha sido transmitida mediante el método seguro POST (típicamente desde un formulario).",
      "Si se ha modificado el archivo estático composer.json.",
      "Si la base de datosPDO ha retornado un conjunto vacío de registros."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Para asegurar que las variables y campos de un formulario persistan de forma temporal en pantalla tras cometer un error de validación de datos, ¿dónde se almacenan antes de redirigir?",
    "opciones": [
      "En el mapa de clases de Composer.",
      "En variables globales de sesión mediante la superglobal '$_SESSION'.",
      "En constantes estáticas dentro del archivo ConexionPDO.",
      "En el archivo físico eventos.log de la carpeta vendor."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "En PHP, si deseas forzar la detención inmediata del programa imprimiendo un mensaje descriptivo en el caso de que falle la conexión PDO a la base de datos, ¿qué constructor del lenguaje se suele invocar dentro del bloque 'catch'?",
    "opciones": [
      "echo",
      "die() o exit()",
      "unset()",
      "throw"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Dada la propiedad de clase 'private ?string $titulo = null;', ¿qué funcionalidad específica aporta el operador de interrogación ( ? ) situado antes del tipo de dato?",
    "opciones": [
      "Indica que el atributo es de visibilidad pública protegida.",
      "Permite que la propiedad acepte de forma legal un valor de tipo 'string' o, alternativamente, el estado nulo ('null').",
      "Fuerza a Composer a mapear la clase bajo demanda PSR-4.",
      "Denota que el método es un constructor mágico de Smarty."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si un desarrollador requiere cambiar los autores o el nombre del proyecto gestionado por Composer, ¿cuál es el único archivo fuente que debe editar manualmente?",
    "opciones": [
      "vendor/autoload.php",
      "composer.lock",
      "composer.json",
      "index.php"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "En una clase PHP, ¿qué pseudo-variable se utiliza dentro de los métodos de instancia para hacer referencia al propio contexto u objeto actual?",
    "opciones": [
      "self",
      "parent",
      "$this",
      "static"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "Si una clase del Modelo contiene código SQL puro embebido y realiza transacciones directas, ¿se considera una práctica correcta dentro del patrón de diseño arquitectónico MVC?",
    "opciones": [
      "No, el código SQL debe estar exclusivamente confinado en las plantillas Smarty de la vista.",
      "Sí, es la responsabilidad del Modelo encargarse de la abstracción, persistencia e integridad de los datos de negocio.",
      "No, las clases del Modelo solo manejan el enrutamiento mediante switches.",
      "Sí, siempre que se herede de forma explícita de la carpeta vendor."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "A diferencia de otros lenguajes como C++ o Java, ¿cuántos métodos constructores diferentes y sobrecargados en número de parámetros puede albergar como máximo una clase PHP?",
    "opciones": [
      "Tantos como desee el desarrollador separados por comas.",
      "Únicamente un solo constructor por clase (__construct).",
      "Dos: uno público estático y otro privado de instancia.",
      "Ninguno, PHP carece de constructores nativos."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 segunda parte",
    "pregunta": "¿Qué sucede de forma predeterminada si intentamos instanciar una clase PHP que ha sido explícitamente declarada bajo el modificador 'abstract class'?",
    "opciones": [
      "PHP crea un clon idéntico en la memoria del servidor de producción.",
      "Se produce un error fatal (Fatal Error) en tiempo de ejecución, dado que las clases abstractas no se pueden instanciar directamente.",
      "Composer descarga los paquetes que faltan de internet de forma interactiva.",
      "El script desvía el flujo de ejecución a la vista por defecto de Smarty."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 tercera parte",
    "pregunta": "¿Qué comando de Composer lee el archivo 'composer.json' e instala las dependencias en la carpeta 'vendor' respetando estrictamente el archivo de bloqueo 'composer.lock' si existe?",
    "opciones": [
      "composer init",
      "composer install",
      "composer require",
      "composer update"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 tercera parte",
    "pregunta": "Si queremos declarar que un archivo PHP pertenece al espacio de nombres 'RMM04\\controlador', ¿cuál es la sintaxis exacta y su ubicación obligatoria?",
    "opciones": [
      "Al final del archivo: declare(namespace = 'RMM04\\controlador');",
      "En la primera línea imprimible tras la apertura de <?php: namespace RMM04\\controlador;",
      "Dentro de la clase: public function setNamespace('RMM04\\controlador');",
      "En el archivo index.php mediante un array asociativo."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 tercera parte",
    "pregunta": "Dentro del patrón MVC, ¿cuál es la responsabilidad exclusiva de la capa del Modelo?",
    "opciones": [
      "Capturar las acciones del usuario de la URL e invocar las plantillas de Smarty.",
      "Gestionar los datos, las reglas de negocio de la aplicación y la persistencia o comunicación con la base de datos.",
      "Maquetar las etiquetas HTML/CSS y renderizar los componentes visuales.",
      "Cargar automáticamente las clases externas registradas en Packagist."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 tercera parte",
    "pregunta": "Analiza las siguientes líneas de código en PHP:\n\n```php\nclass PeliculaController {\n    public static function mostrarListado($pdo, $smarty) {\n        $peliculas = Peliculas::listar($pdo);\n        $smarty->assign('peliculas', $peliculas);\n        $smarty->display('listado.tpl');\n    }\n}\n```\n¿A qué capa del patrón MVC pertenece de forma inequívoca esta estructura?",
    "opciones": [
      "Al Modelo",
      "A la Vista",
      "Al Controlador",
      "Al Enrutamiento del Servidor Apache"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 tercera parte",
    "pregunta": "¿Cuál es la directiva básica de Smarty utilizada para indicar que una plantilla hereda el diseño estructural de otra plantilla base llamada 'layout.tpl'?",
    "opciones": [
      "{include file='layout.tpl'}",
      "{extends file='layout.tpl'}",
      "{block name='layout'}",
      "{$layout.tpl}"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 tercera parte",
    "pregunta": "Si queremos añadir una librería externa a nuestro proyecto y registrarla automáticamente en la sección 'require' de nuestro composer.json, ¿qué comando de terminal debemos emplear?",
    "opciones": [
      "composer init",
      "composer install",
      "composer require <nombre_paquete>",
      "composer update"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 tercera parte",
    "pregunta": "Para poder utilizar de forma inmediata cualquier clase del proyecto o de terceros sin incluir manualmente decenas de archivos 'require', ¿qué archivo autogenerado por Composer debemos incluir al inicio de nuestra aplicación?",
    "opciones": [
      "require 'composer.json';",
      "require 'vendor/autoload.php';",
      "require 'composer.lock';",
      "require 'srcrmm/servicios/ConexionPDO.php';"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 tercera parte",
    "pregunta": "Dada la siguiente directiva de Smarty: `{block name='contenido'} ... {/block}`. ¿Cuál es su utilidad primordial en la maquetación por capas?",
    "opciones": [
      "Proyectar un array asociativo directamente desde el modelo sin pasar por el controlador.",
      "Definir una sección o región que puede ser sobrescrita o personalizada por una plantilla hija.",
      "Establecer una conexión persistente PDO con la base de datos.",
      "Comentar un bloque de código para que no sea interpretado por el servidor."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 tercera parte",
    "pregunta": "Si estamos dentro de una clase PHP y queremos declarar una constante de clase con visibilidad pública y valor '300', ¿cuál es la sintaxis correcta?",
    "opciones": [
      "public define('LIMITE', 300);",
      "public const LIMITE = 300;",
      "public static $LIMITE = 300;",
      "protected int $LIMITE = 300;"
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 tercera parte",
    "pregunta": "Si una propiedad dentro de una clase PHP se define como `private $id;`, ¿desde qué lugar o contexto se puede acceder o modificar directamente este atributo?",
    "opciones": [
      "Desde cualquier script o archivo exterior de la aplicación.",
      "Únicamente desde el interior de los métodos de la propia clase que la define.",
      "Desde la propia clase y desde cualquier otra clase hija que la extienda.",
      "Directamente desde los archivos de la vista (.tpl) de Smarty."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 tercera parte",
    "pregunta": "¿Qué ocurre si ejecutamos el comando `composer update` en la raíz de la aplicación?",
    "opciones": [
      "Se borra la carpeta vendor y se formatea la configuración de la base de datos.",
      "Se buscan las versiones más recientes permitidas en el 'composer.json', se descargan y se actualiza el archivo 'composer.lock'.",
      "Se crea un nuevo espacio de nombres interactivo bajo el estándar PSR-4.",
      "Se compilan de forma estática todas las plantillas .tpl a formato HTML nativo."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 tercera parte",
    "pregunta": "Si en un archivo de la capa de la Vista (plantilla Smarty) se requiere imprimir el valor de una variable asignada llamada 'titulo', ¿cuál es la sintaxis correcta?",
    "opciones": [
      "<?php echo $titulo; ?>",
      "{{ titulo }}",
      "{$titulo}",
      "[[ $titulo ]]"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 tercera parte",
    "pregunta": "Analiza las siguientes líneas de código PHP:\n\n```php\n$id = $_GET['id'] ?? '';\nif (empty($id)) {\n    $smarty->assign('error', 'El identificador es obligatorio');\n    $smarty->display('error.tpl');\n    exit;\n}\n```\n¿A qué capa del patrón MVC pertenece la responsabilidad de procesar y validar este flujo?",
    "opciones": [
      "Al Modelo",
      "A la Vista",
      "Al Controlador",
      "Al Enrutador Frontal"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 tercera parte",
    "pregunta": "Si en la cabecera de un archivo declaramos `use RMM04\\modelo\\Pelicula;`, ¿qué ventaja nos aporta esta instrucción en el resto del script?",
    "opciones": [
      "Importa físicamente los bytes del archivo Pelicula.php en esa posición.",
      "Nos permite usar el nombre corto de la clase 'Pelicula' directamente sin escribir su namespace completo cada vez.",
      "Instancia automáticamente un objeto vacío de la clase Pelicula.",
      "Conecta de forma segura la clase con el motor de persistencia PDO."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 primera parte",
    "pregunta": "¿Qué es Composer en el ecosistema PHP y cuál es su función principal?",
    "opciones": [
      "Un framework que implementa el patrón MVC para desarrollar aplicaciones web.",
      "Un gestor de dependencias que permite gestionar e instalar paquetes y librerías reutilizables en tu proyecto.",
      "Un motor de plantillas (como Smarty o Blade) para generar vistas en HTML separando la lógica.",
      "Un enrutador automático que asocia URLs con controladores específicos."
    ],
    "correcta": 1
  },
  {
    "tema": "preguntas tema 4 primera parte",
    "pregunta": "Si clonas o descargas un proyecto que ya contiene un archivo composer.json y necesitas descargar a la carpeta vendor los paquetes especificados para que el proyecto funcione, ¿qué comando debes ejecutar?",
    "opciones": [
      "composer require",
      "composer update",
      "composer install",
      "composer init"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 primera parte",
    "pregunta": "Necesitas añadir la librería monolog/monolog a tu proyecto. ¿Qué comando utilizas en la terminal para descargarla y añadirla automáticamente a tus dependencias?",
    "opciones": [
      "composer require monolog/monolog",
      "composer install monolog/monolog",
      "composer add monolog/monolog",
      "composer update monolog/monolog"
    ],
    "correcta": 0
  },
  {
    "tema": "preguntas tema 4 primera parte",
    "pregunta": "¿Cómo se declara correctamente un espacio de nombres (namespace) al principio de un archivo PHP para encapsular sus clases y evitar colisiones de nombres?",
    "opciones": [
      "use RMM04\\modelo;",
      "include 'RMM04\\modelo';",
      "import RMM04\\modelo;",
      "namespace RMM04\\modelo;"
    ],
    "correcta": 3
  },
  {
    "tema": "preguntas tema 4 primera parte",
    "pregunta": "Si tenemos una clase que pertenece al espacio de nombres RMM04\\modelo, ¿cómo la importamos en el archivo del controlador para poder instanciarla simplemente con su nombre (sin escribir toda la ruta)?",
    "opciones": [
      "require RMM04\\modelo\\Pelicula;",
      "namespace RMM04\\modelo\\Pelicula;",
      "use RMM04\\modelo\\Pelicula;",
      "import RMM04\\modelo\\Pelicula;"
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 primera parte",
    "pregunta": "Dado el siguiente fragmento de código, ¿a qué capa del patrón MVC pertenece?\n\n$idproducto = filter_input(INPUT_POST, 'idprod', FILTER_VALIDATE_INT);\nif ($idproducto !== null && $idproducto !== false) {\n    $p = Producto::rescatar($idproducto);\n    $resultado = Favorito::nuevoFavorito($_SESSION['usuario'], $p);\n}\n$smarty->assign('resultado', $resultado);\n$smarty->display('vista.tpl');",
    "opciones": [
      "Al Modelo, porque está modificando directamente la base de datos.",
      "A la Vista, porque utiliza sentencias de Smarty para pintar el HTML final.",
      "Al Controlador, porque recoge el evento/datos, invoca al modelo y le pasa los datos resultantes a la vista.",
      "Al Enrutador, porque define qué URL llama a qué función."
    ],
    "correcta": 2
  },
  {
    "tema": "preguntas tema 4 primera parte",
    "pregunta": "Analiza este fragmento de código. ¿A qué parte de la arquitectura MVC corresponde?\n\n<!DOCTYPE html>\n<html lang=\"es\">\n<body>\n{foreach $peliculas as $peli}\n  <h1>{$peli->getTitulo()}</h1>\n{/foreach}\n</body>\n</html>",
    "opciones": [
      "Vista, porque su única responsabilidad es presentar los datos al usuario iterando sobre la información recibida con sintaxis de Smarty.",
      "Controlador, porque tiene una estructura de control (foreach) para decidir qué películas procesar.",
      "Modelo, porque está accediendo a los datos llamando al método getTitulo().",
      "Capa de acceso a datos, porque es donde se ejecutan las sentencias finales."
    ],
    "correcta": 0
  },
  {
    "tema": "preguntas tema 4 primera parte",
    "pregunta": "Observa el siguiente código. ¿En qué capa del patrón MVC debe ubicarse?\n\npublic static function borrarPelicula(PDO $pdo, int $id): int|DBResult {\n    $sql = \"DELETE FROM peliculas WHERE id = :id\";\n    $stmt = $pdo->prepare($sql);\n    $stmt->bindParam(':id', $id, PDO::PARAM_INT);\n    $stmt->execute();\n    return $stmt->rowCount();\n}",
    "opciones": [
      "En el Controlador, ya que recibe un identificador (id) por parámetro y ejecuta una acción directiva.",
      "En la Vista, porque devuelve el resultado de las filas afectadas (rowCount) para que el usuario las vea.",
      "En el Presentador, porque prepara la consulta SQL aislándola del resto del código.",
      "En el Modelo, ya que es el encargado de la lógica de negocio, de manejar los datos propios de la aplicación y su persistencia en la base de datos."
    ],
    "correcta": 3
  },
  {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "En el archivo principal donde configuras la vista de tu aplicación web (frontend), ¿cómo le indicas a JAXON cuál es la ruta del archivo PHP (el backend) que se encargará de recibir y procesar las peticiones AJAX?",
        "opciones": [
            "jaxon()->setOption('core.request.uri', 'backend.php');",
            "jaxon()->setUrl('backend.php');",
            "A través del atributo 'action' de la etiqueta <form action='backend.php'>.",
            "jaxon()->register(Jaxon::BACKEND_URL, 'backend.php');"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "A la hora de incluir JAXON en nuestra página web, necesitamos imprimir varias variables en el HTML. ¿Qué método nos devuelve el código JavaScript generado automáticamente con las funciones PHP que hemos registrado para poder invocarlas desde el cliente?",
        "opciones": [
            "jaxon()->getJs()",
            "jaxon()->getFunctions()",
            "jaxon()->getScript()",
            "jaxon()->exportJavascript()"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Según indicó el profesor, ¿cuál es el objetivo fundamental de la tecnología AJAX?",
        "opciones": [
            "Generar gráficos 3D complejos directamente en el navegador del usuario.",
            "Permitir al navegador establecer una comunicación asíncrona con el servidor para actualizar dinámicamente la página sin necesidad de recargarla por completo.",
            "Proteger las contraseñas de los usuarios mediante cifrado avanzado en el frontend.",
            "Sustituir por completo el uso de bases de datos relacionales en el servidor."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "¿Qué nombre reciben las aplicaciones web cuya interfaz se actualiza dinámicamente de forma completa sin cambiar de página, usando Javascript y AJAX para comunicarse con el servidor?",
        "opciones": [
            "Aplicaciones Multi-Page (MPA).",
            "Aplicaciones Estáticas (SA).",
            "Single Page Applications (SPA).",
            "Aplicaciones SOAP."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "El profesor incidió en que las aplicaciones con Jaxon requieren el uso de Composer. ¿Qué comando se utiliza para instalar la dependencia de Jaxon (jaxon-php/jaxon-core) en nuestro proyecto?",
        "opciones": [
            "composer download jaxon-php/jaxon-core",
            "composer install jaxon-php",
            "composer require jaxon-php/jaxon-core",
            "composer get jaxon"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Para poder utilizar las librerías instaladas con Composer (como Jaxon o Guzzle) en nuestro código PHP, ¿qué archivo debemos incluir obligatoriamente usando 'require_once'?",
        "opciones": [
            "vendor/autoload.php",
            "composer/init.php",
            "vendor/jaxon.php",
            "setup.json"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Al crear la estructura de un proyecto con JAXON, ¿qué tarea principal realizamos en el archivo 'setup.php' según el esquema visto en el temario?",
        "opciones": [
            "Imprimir las etiquetas HTML y el CSS de la página.",
            "Registrar las funciones o clases PHP para que puedan ser invocadas remotamente desde el cliente.",
            "Realizar peticiones FETCH a servidores externos.",
            "Conectar exclusivamente con la base de datos."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "¿Cuál es la instrucción correcta para registrar una función PHP llamada 'borrarPelicula' en JAXON?",
        "opciones": [
            "jaxon()->add('borrarPelicula');",
            "jaxon()->register(Jaxon::CALLABLE_FUNCTION, 'borrarPelicula');",
            "jaxon()->export('borrarPelicula');",
            "Jaxon::registerAjax('borrarPelicula');"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "En la arquitectura JAXON, ¿cuál es la responsabilidad exclusiva del archivo habitualmente llamado 'backend.php'?",
        "opciones": [
            "Crear las tablas en la base de datos.",
            "Procesar las peticiones AJAX entrantes y enviarlas a la función PHP registrada correspondiente.",
            "Generar el código Javascript y el diseño CSS.",
            "Mostrar el formulario HTML al usuario."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "¿Qué método de JAXON se debe utilizar en el archivo backend.php para procesar la petición AJAX recibida?",
        "opciones": [
            "jaxon()->processRequest();",
            "jaxon()->executeAjax();",
            "jaxon()->handle();",
            "jaxon()->run();"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Es vital comprobar si hay una petición entrante antes de procesarla en el backend. ¿Con qué método se hace esto?",
        "opciones": [
            "jaxon()->isAjax()",
            "jaxon()->checkRequest()",
            "jaxon()->canProcessRequest()",
            "jaxon()->hasData()"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Una vez registrada la función 'listarPeliculas' en el backend de Jaxon, ¿cómo se llamará por defecto la función JavaScript generada automáticamente para invocarla desde el navegador?",
        "opciones": [
            "ajax_listarPeliculas()",
            "call_listarPeliculas()",
            "jaxon_listarPeliculas()",
            "php_listarPeliculas()"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Según el ciclo de vida de una función manejadora en JAXON (destacado por el profesor), ¿qué tipo de objeto DEBE retornar siempre la función en PHP?",
        "opciones": [
            "Un objeto de la clase PDO.",
            "Una cadena de texto con HTML plano.",
            "Un objeto instanciado de la clase Jaxon\\Response.",
            "Un array asociativo codificado en JSON."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "El profesor insistió mucho en este punto: ¿Qué ocurre si dentro de una función registrada en JAXON haces uso de la instrucción 'echo' para mostrar un texto por pantalla?",
        "opciones": [
            "El texto aparecerá correctamente en una alerta emergente en el navegador.",
            "JAXON convertirá automáticamente el 'echo' en una instrucción para el DOM.",
            "Se corromperá el mensaje JSON que espera recibir Jaxon-JS y la actualización de la interfaz fallará.",
            "El servidor web se reiniciará por seguridad."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "¿Cómo se instancia correctamente el objeto de respuesta dentro de una función manejadora de JAXON?",
        "opciones": [
            "$response = new Response(); (o jaxon()->newResponse());",
            "$response = jaxon()->getResponse();",
            "$response = new Ajax();",
            "$response = jaxon()->create();"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Deseas reemplazar por completo el contenido de un <div> con id='resultados'. ¿Qué método del objeto Response de JAXON utilizarías?",
        "opciones": [
            "$response->replace('resultados', 'nuevo texto');",
            "$response->assign('resultados', 'innerHTML', 'nuevo texto');",
            "$response->write('resultados', 'nuevo texto');",
            "$response->set('resultados', 'nuevo texto');"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Deseas añadir un nuevo mensaje al FINAL del contenido actual de un elemento con id='log'. ¿Qué método del objeto Response es el adecuado?",
        "opciones": [
            "$response->append('log', 'innerHTML', 'nuevo mensaje');",
            "$response->prepend('log', 'innerHTML', 'nuevo mensaje');",
            "$response->assign('log', 'innerHTML', 'nuevo mensaje');",
            "$response->insertAfter('log', 'nuevo mensaje');"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Deseas añadir un texto justo AL PRINCIPIO del contenido que ya tiene un elemento con id='notificaciones'. ¿Qué método usarías?",
        "opciones": [
            "$response->insert('notificaciones', 'texto');",
            "$response->append('notificaciones', 'innerHTML', 'texto');",
            "$response->prepend('notificaciones', 'innerHTML', 'texto');",
            "$response->addFirst('notificaciones', 'texto');"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "¿Qué método del objeto Response de JAXON se utiliza para mostrar un cuadro de diálogo nativo del navegador con un mensaje para el usuario?",
        "opciones": [
            "$response->popup('¡Hola!');",
            "$response->dialog('¡Hola!');",
            "$response->window('¡Hola!');",
            "$response->alert('¡Hola!');"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Si necesitas limpiar por completo (dejar en blanco) el contenido interno de un elemento con id='errores', ¿qué instrucción es la más directa usando el objeto Response?",
        "opciones": [
            "$response->remove('errores');",
            "$response->clear('errores');",
            "$response->delete('errores');",
            "$response->empty('errores');"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "¿Qué método del objeto Response te permite ordenar al navegador que ejecute un código o función Javascript puro tras procesar la petición AJAX?",
        "opciones": [
            "$response->execute('miFuncion();');",
            "$response->eval('miFuncion();');",
            "$response->script('miFuncion();');",
            "$response->js('miFuncion();');"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "¿Qué ocurre cuando en JAXON-PHP usamos una instrucción como $response->assign('titulo', 'value', '');?",
        "opciones": [
            "Se borra el atributo 'id' del elemento 'titulo'.",
            "Se limpia el valor introducido en un campo de formulario (input) cuyo id sea 'titulo'.",
            "Se elimina el elemento 'titulo' del DOM por completo.",
            "Genera un error porque 'value' no es una propiedad válida."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "En la interfaz de usuario (HTML), si queremos evitar que un formulario se envíe de la manera tradicional recargando la página, ¿qué instrucción Javascript debemos añadir en el evento 'onsubmit' después de invocar a Jaxon?",
        "opciones": [
            "preventDefault();",
            "return false;",
            "stopSubmit();",
            "jaxon.halt();"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Si usamos Jaxon-JS nativo en el cliente, ¿cómo se puede obtener el valor de un campo de texto con id='isbn' para pasarlo por parámetro a una función?",
        "opciones": [
            "jaxon.getValue('isbn')",
            "jaxon.$('isbn').value",
            "jaxon.input('isbn')",
            "jaxon.get('isbn')"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Si un formulario tiene múltiples campos y queremos enviarlos todos de golpe a la función PHP del backend, ¿qué utilidad de Jaxon-JS en el cliente facilita esta tarea?",
        "opciones": [
            "jaxon.getAllInputs()",
            "jaxon.serialize('formId')",
            "jaxon.getFormValues('formId')",
            "jaxon.fetchForm('formId')"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "JAXON-PHP incluye factorías para generar código Javascript dinámicamente. ¿Para qué sirve específicamente el 'Parameter Factory' invocado con pm()?",
        "opciones": [
            "Para conectar con la base de datos mediante parámetros.",
            "Para generar el código Javascript necesario para recuperar datos de la interfaz (ej. pm()->input('id')).",
            "Para sanear las variables $_POST automáticamente.",
            "Para modificar los parámetros del archivo php.ini."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Usando la factoría de peticiones de Jaxon (Request Factory) dentro de una plantilla HTML, ¿cómo generaríamos el código Javascript para llamar a la función 'borrar' enviando el valor del input 'id_libro'?",
        "opciones": [
            "<?= rq()->call('borrar', pm()->input('id_libro')) ?>",
            "<?= jaxon()->borrar(pm()->input('id_libro')) ?>",
            "<?= request('borrar', 'id_libro') ?>",
            "<?= call('borrar')->with('id_libro') ?>"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "¿Qué ventaja aporta encadenar el método ->confirm() al usar el Request Factory en la vista (ej. rq()->call('borrar')->confirm('¿Seguro?'))?",
        "opciones": [
            "Autentica al usuario en el servidor antes de ejecutar la función.",
            "Genera código Javascript que mostrará un cuadro de confirmación nativo; si el usuario cancela, la petición AJAX no se envía.",
            "Envía un correo de confirmación al administrador del sistema.",
            "Realiza una doble petición AJAX por seguridad."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "En Javascript puro (sin Jaxon), ¿cuál de los siguientes es el objeto originalmente creado para realizar peticiones AJAX y que está incorporado nativamente en los navegadores?",
        "opciones": [
            "FetchRequest",
            "AjaxRequest",
            "XMLHttpRequest",
            "HTTPConnection"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "¿Qué función moderna de Javascript introducida en ECMAScript 2015 se utiliza ampliamente como alternativa basada en promesas para hacer peticiones AJAX?",
        "opciones": [
            "get()",
            "request()",
            "fetch()",
            "ajax()"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "El profesor destacó el proceso de validación. ¿Por qué NO es suficiente con prevalidar los datos únicamente en el frontend usando Javascript?",
        "opciones": [
            "Porque Javascript es muy lento procesando cadenas de texto.",
            "Porque el usuario podría tener Javascript deshabilitado o alterar el código en su navegador, siendo imprescindible validar siempre en el servidor (PHP).",
            "Porque Jaxon no permite ejecutar funciones Javascript de validación.",
            "Porque HTML5 ya valida todos los datos automáticamente sin necesidad de PHP."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "En un servicio web con arquitectura de tipo REST, ¿qué método (o verbo) HTTP se utiliza por convención para BORRAR un recurso?",
        "opciones": [
            "POST",
            "GET",
            "DELETE",
            "PUT"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "En un servicio web con arquitectura de tipo REST, ¿qué método (o verbo) HTTP se suele utilizar para MODIFICAR o actualizar un recurso existente?",
        "opciones": [
            "POST",
            "GET",
            "DELETE",
            "PUT"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Cuando una petición AJAX envía la carga útil de datos en formato JSON crudo (raw), ¿qué cabecera HTTP (Header) debe configurarse en la petición?",
        "opciones": [
            "Content-Type: text/html",
            "Content-Type: application/x-www-form-urlencoded",
            "Content-Type: application/json",
            "Content-Type: multipart/form-data"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Si un script PHP de nuestro backend (una API) recibe datos AJAX codificados en formato JSON crudo, ¿cómo debe leer esos datos ya que no estarán en el array $_POST?",
        "opciones": [
            "Usando filter_input(INPUT_JSON, 'datos')",
            "Leyendo el flujo de entrada con file_get_contents('php://input') y luego usando json_decode()",
            "Accediendo a la variable global $_JSON",
            "Usando la función nativa parse_json_request()"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "¿Qué formato estructurado de intercambio de datos se utiliza mayoritariamente en la comunicación asíncrona de Jaxon y de servicios REST actuales por su ligereza y facilidad de parseo en Javascript?",
        "opciones": [
            "XML",
            "YAML",
            "JSON",
            "CSV"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "En PHP, ¿qué función se emplea para convertir un array asociativo o un objeto de PHP en una cadena de texto con formato JSON para enviarlo al cliente web?",
        "opciones": [
            "json_encode()",
            "json_decode()",
            "serialize()",
            "json_stringify()"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "En PHP, ¿qué función se emplea para decodificar una cadena JSON que hemos recibido y transformarla de nuevo en un objeto o array nativo de PHP?",
        "opciones": [
            "json_encode()",
            "json_decode()",
            "unserialize()",
            "json_parse()"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Si utilizamos la función pm()->form('nuevaPelicula') en la vista para recopilar datos y mandarlos por AJAX, ¿qué recibirá la función PHP en el backend como parámetro?",
        "opciones": [
            "Un objeto XMLHttpRequest.",
            "Un string con el formato 'clave=valor'.",
            "Un array asociativo donde las claves son los nombres (name) de los inputs del formulario.",
            "Una instancia de la clase FormData de PHP."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "En un entorno Jaxon, ¿cómo ocultarías por completo un elemento div del DOM con id='resultados' usando el objeto Response?",
        "opciones": [
            "$response->assign('resultados', 'style.display', 'none');",
            "$response->hide('resultados');",
            "$response->invisible('resultados');",
            "$response->assign('resultados', 'visible', 'false');"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "¿Qué componente de JAXON-PHP es el encargado de generar e imprimir en el HTML la ruta y etiquetas <script> que enlazan con el código fuente de la librería Javascript de Jaxon?",
        "opciones": [
            "jaxon()->getScript()",
            "jaxon()->getJs()",
            "jaxon()->getCss()",
            "jaxon()->printLibrary()"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "El profesor hizo hincapié en el concepto de 'Aplicación Web Híbrida' (Mashup). ¿A qué hace referencia este concepto?",
        "opciones": [
            "A una aplicación que usa simultáneamente PHP y HTML en el mismo archivo.",
            "A la combinación de datos y funcionalidades de diferentes fuentes o servicios externos (ej. usando APIs de terceros o mapas) para crear una aplicación más rica.",
            "A una aplicación que funciona tanto en Windows como en Linux.",
            "A aplicaciones desarrolladas usando únicamente la librería JQuery."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "¿Cuál de las siguientes librerías de JavaScript, de código abierto y ligera, permite la integración de mapas de proveedores de teselas como OpenStreetMap en una aplicación web híbrida en el cliente?",
        "opciones": [
            "Guzzle",
            "Leaflet",
            "Composer",
            "Jaxon-JS"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Dentro de la lógica de una función PHP en Jaxon (como registrarPelicula), si detectas errores en la validación, ¿qué estrategia habitual usas para informar al usuario sin recargar la página?",
        "opciones": [
            "Hacer un header('Location: error.php') para redirigir a otra vista.",
            "Retornar un false lógico y cerrar la conexión a la base de datos.",
            "Usar el objeto Response para hacer assign() enviando los mensajes de error a los span/divs correspondientes junto a los campos del formulario.",
            "Hacer un echo 'Error en la validación' antes de salir de la función."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Al inicializar Jaxon en el archivo de setup, se suele definir una ruta. ¿Para qué sirve jaxon()->setOption('core.request.uri', 'rutabackend.php')?",
        "opciones": [
            "Le dice a Javascript en qué URL exacta del servidor se encuentra el archivo que procesará todas sus peticiones AJAX asíncronas.",
            "Le indica al servidor dónde encontrar la base de datos MySQL.",
            "Define la ruta de inicio de sesión de la aplicación.",
            "Redirige al usuario a esa ruta cuando finaliza una petición de forma automática."
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "En un bloque script de la vista, decides incluir la llamada directa: jaxon_listarPeliculas(); sin asociarlo a ningún evento (como onclick). ¿Qué provocará esto en el navegador?",
        "opciones": [
            "Dará un error de sintaxis porque las funciones jaxon_ siempre exigen un evento disparador.",
            "Ejecutará la petición AJAX de forma inmediata y automática justo en el momento en que el navegador lea e interprete esa línea durante la carga inicial de la página.",
            "Pausará la carga completa de la página hasta que el usuario pulse Enter.",
            "No hará nada, se necesita obligatoriamente usar rq()->call()."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Al examinar el código autogenerado por JAXON, te das cuenta de que la comunicación entre cliente y servidor se realiza por debajo usando la tecnología estándar de la web. ¿Cuál de estos métodos es el más utilizado nativamente por los navegadores antiguos y modernos para este fin?",
        "opciones": [
            "WebSocketRequest",
            "XMLHttpRequest",
            "Flash HTTP Client",
            "Java Applet HTTP"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "¿Qué es 'Composer' y por qué ha sido fundamental desde la Unidad 4 hasta la Unidad 7 en la creación de nuestros proyectos PHP?",
        "opciones": [
            "Es un framework MVC similar a Laravel.",
            "Es un IDE (Entorno de Desarrollo) específico para PHP.",
            "Es un sistema de gestión de dependencias para PHP, necesario para instalar paquetes de terceros como Jaxon, Guzzle o plantillas.",
            "Es un servidor web integrado que sustituye a Apache o Nginx."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Dentro de un proyecto, ¿qué archivo lee Composer para saber qué librerías exactas (y qué versiones) debe instalar al ejecutar 'composer install'?",
        "opciones": [
            "setup.php",
            "composer.json",
            "config.xml",
            "dependencies.txt"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 primera parte",
        "pregunta": "Si en la consola escribes 'composer init' en una carpeta vacía, ¿qué ocurrirá principalmente?",
        "opciones": [
            "Se iniciará el servidor web interno de PHP en el puerto 8000.",
            "Se descargarán automáticamente todas las librerías existentes en Packagist.",
            "Se iniciará un asistente interactivo para crear el archivo base 'composer.json' de tu nuevo proyecto.",
            "Se formateará el código PHP para cumplir con los estándares PSR."
        ],
        "correcta": 2
    },
    {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "¿Cuál es el principal objetivo del formato de examen tipo test enfocado en el reconocimiento visual según el profesor?",
    "opciones": [
      "Escribir código JavaScript y PHP desde cero sin usar librerías.",
      "Interpretar opciones, reconocer fragmentos de código, entender la lógica interna y descartar las opciones incorrectas o absurdas.",
      "Memorizar todos los métodos avanzados de la API de JAXON-JS.",
      "Demostrar conocimientos exclusivos sobre llamadas SOAP y XML puro."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Respecto a la tecnología AJAX, ¿qué aclaración explícita hace el profesor sobre el contenido evaluable en el examen?",
    "opciones": [
      "Es obligatorio saber implementar AJAX puro a mano mediante objetos XMLHttpRequest.",
      "Se exigirá programar promesas nativas con fetch y peticiones complejas con jQuery sin ayuda.",
      "No se pedirá escribir AJAX puro a mano ni promesas, sino comprender el concepto base y cómo lo simplifica la librería.",
      "Se evaluará únicamente la configuración de flujos asíncronos en entornos de Node.js."
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "¿Qué aspecto de la tarea inicial está íntimamente relacionado con el concepto teórico de 'Aplicaciones Híbridas' que entrará en el examen?",
    "opciones": [
      "El diseño visual de hojas de estilo CSS locales.",
      "El análisis de la implantación de AJAX e integración de servicios externos en diferentes sitios web.",
      "La configuración estricta de contenedores aislados de Docker.",
      "La serialización directa de modelos utilizando Eloquent ORM."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Según la arquitectura de JAXON explicada en la videoconferencia, ¿de qué se encarga específicamente el componente denominado 'Setup'?",
    "opciones": [
      "De renderizar el código HTML final directamente en la ventana del navegador.",
      "De interceptar las respuestas JSON y desencadenar alertas del DOM.",
      "De la configuración inicial y del registro de las funciones PHP que podrán ser invocadas de forma remota.",
      "De realizar las peticiones HTTP GET o POST utilizando la extensión cURL nativa."
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "¿Cuál es la función del archivo o componente 'Backend' en el flujo de trabajo de JAXON?",
    "opciones": [
      "Generar de forma automatizada las plantillas de vistas HTML del usuario.",
      "Recibir la petición AJAX, procesar la respuesta e invocar a las funciones PHP previamente registradas.",
      "Capturar el evento onclick del usuario antes de que se inicie la comunicación de red.",
      "Almacenar las credenciales secretas de las API Keys en cookies permanentes del cliente."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "¿Cómo contribuye la configuración inicial del proyecto JAXON al comportamiento del 'Frontend'?",
    "opciones": [
      "Permite vaciar la memoria del servidor de manera dinámica.",
      "Sigue el patrón MVC para obligar a almacenar los datos en formato serializado local.",
      "Sirve para generar automáticamente el código JavaScript que va a automatizar las peticiones AJAX en la vista del usuario.",
      "Inyecta hojas de estilo CSS para optimizar la carga estática de las páginas."
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Dentro del ciclo de vida de una función controlada por JAXON, ¿cuál es el primer paso obligatorio al recibir los datos desde el formulario HTML?",
    "opciones": [
      "Modificar directamente el modelo relacional de la base de datos.",
      "Validar estrictamente los datos recibidos.",
      "Instanciar de forma inmediata un objeto de tipo Response.",
      "Transformar los parámetros recibidos a una estructura XML usando SimpleXML."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Tras completar la validación inicial dentro de una función de JAXON, ¿qué acción del ciclo de vida se encarga de alterar los datos persistentes?",
    "opciones": [
      "La modificación o actualización del DOM en el lado del cliente.",
      "La ejecución de acciones pertinentes sobre el modelo o la base de datos.",
      "El envío automático de un encabezado HTTP de redirección 401 Unauthorized.",
      "La llamada al método heredado $response->script()."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Para retornar comandos de interfaz desde una función de PHP controlada por JAXON, ¿qué paso crucial resalta el profesor?",
    "opciones": [
      "Utilizar la sentencia echo o funciones como print_r() para ver los resultados.",
      "Instanciar obligatoriamente un objeto Response proporcionado por la librería JAXON.",
      "Interrumpir el script llamando a die() pasándole un JSON crudo.",
      "Ejecutar un método estático de la clase DB para registrar los logs en el backend."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "A la hora de alterar visualmente la vista del usuario desde PHP con JAXON, ¿qué heramienta se utiliza?",
    "opciones": [
      "Selectores CSS puros incrustados en etiquetas <style>.",
      "Los métodos asociados al objeto Response de JAXON (como assign, clear o append) para definir qué elementos HTML sufrirán modificaciones.",
      "El flujo global de entrada php://input mediante consultas de lectura directa.",
      "Funciones nativas de manipulación de cadenas de texto como trim() o base64_encode()."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "¿De qué manera viajan los comandos del objeto Response desde el servidor hacia el navegador para que Jaxon-JS los interprete?",
    "opciones": [
      "Se envían estructurados como un archivo de configuración de texto plano YAML.",
      "Se encapsulan automáticamente por JAXON en un formato JSON que viaja al navegador.",
      "Se transmiten como un documento XML parseado por SimpleXMLElement.",
      "Se propagan directamente a través de los parámetros query string de la ruta HTTP."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Al realizar la invocación de una función registrada en JAXON desde el código JavaScript del navegador (vista), ¿qué prefijo obligatorio se debe anteponer al nombre de la función?",
    "opciones": [
      "ajax_",
      "php_",
      "jaxon_",
      "backend_"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Respecto al uso de dependencias, ¿qué noción básica destaca el profesor sobre el papel de Composer en este tema?",
    "opciones": [
      "Ha servido para compilar y empaquetar el motor de plantillas Smarty en el entorno del cliente.",
      "Es el encargado de gestionar de forma exclusiva los mapas y teselas de OpenStreetMap.",
      "Se utiliza para inicializar el proyecto e instalar el paquete correspondiente a la librería JAXON.",
      "Permite interceptar eventos onsubmit de formularios HTML asíncronos."
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Si queremos registrar una función PHP clásica para que sea accesible mediante llamadas remotas de JAXON, ¿qué sintaxis básica empleamos en el setup?",
    "opciones": [
      "$jaxon->register(Jaxon::CALLABLE_FUNCTION, 'nombre_de_la_funcion');",
      "jaxon()->setOption('core.functions', 'nombre_de_la_funcion');",
      "$response->call('nombre_de_la_funcion');",
      "jaxon()->register(Jaxon::BACKEND_URL, 'nombre_de_la_funcion');"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Para inicializar el objeto de respuesta reglamentario dentro de una función controlada por JAXON en la tarea base, ¿qué clase o instanciación se utiliza?",
    "opciones": [
      "$response = new stdClass();",
      "$response = new Response();",
      "$response = jaxon()->getResponse();",
      "$response = new JaxonResponse();"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Si deseamos limpiar por completo el contenido (innerHTML) de una sección HTML con ID 'listaPeliculas' desde PHP usando JAXON, ¿qué método del objeto Response es el más directo?",
    "opciones": [
      "$response->assign('listaPeliculas', 'innerHTML', '');",
      "$response->clear('listaPeliculas');",
      "$response->script('document.getElementById(\"listaPeliculas\").innerHTML = \"\";');",
      "Las opciones A y B son válidas y consiguen limpiar el contenido."
    ],
    "correcta": 3
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Dado el siguiente fragmento de código usado en la tarea: $response->assign('listaPeliculas', 'innerHTML', $htmlPeliculas); ¿Qué acción realiza exactamente en el navegador del usuario?",
    "opciones": [
      "Borra las clases CSS asociadas al elemento con ID 'listaPeliculas'.",
      "Sustituye el contenido HTML interno del elemento cuyo ID es 'listaPeliculas' por la cadena almacenada en $htmlPeliculas.",
      "Inyecta un script ejecutable que llama a la función controladora listarPeliculasRMM().",
      "Modifica las propiedades de visibilidad del elemento cambiándolas a 'block'."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Si necesitas cambiar el estilo visual de visualización de un bloque (por ejemplo, para ocultar un contenedor de errores con ID 'genero_errores'), ¿qué llamada de JAXON es correcta?",
    "opciones": [
      "$response->assign('genero_errores', 'style.display', 'none');",
      "$response->clear('genero_errores', 'style.display');",
      "$response->append('genero_errores', 'none');",
      "jaxon()->setOption('genero_errores', 'none');"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Si dentro de una función de JAXON en PHP (como registrarPeliculaRMM) necesitas pedirle al navegador que ejecute otra función JavaScript autogenerada como 'jaxon_listarPeliculasRMM();', ¿qué método debes usar?",
    "opciones": [
      "$response->call('jaxon_listarPeliculasRMM()');",
      "$response->script('jaxon_listarPeliculasRMM();');",
      "$response->assign('script', 'innerHTML', 'jaxon_listarPeliculasRMM();');",
      "jaxon()->register('jaxon_listarPeliculasRMM();');"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "¿Qué ocurre si una función registrada por JAXON emite un 'echo' o imprime texto HTML directo antes de retornar el objeto Response?",
    "opciones": [
      "Se añade automáticamente al comienzo del DOM de la página principal.",
      "Mejora el rendimiento de la prevalidación de datos del formulario.",
      "Puede corromper o 'estropear' el formato de la respuesta JSON/Jaxon esperado por el navegador.",
      "Se almacena en el archivo global de logs de errores de base de datos."
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Al presionar un botón HTML para borrar una película, se desea mostrar una confirmación antes de llamar a la función JAXON. ¿Cuál es la sintaxis correcta en el evento inline de la vista?",
    "opciones": [
      "onclick='jaxon_borrarPeliculaRMM(id);'",
      "onclick='if(confirm(\"¿Estás seguro?\")) { jaxon_borrarPeliculaRMM(id); }'",
      "onclick='jaxon()->confirm(\"¿Estás seguro?\", borrarPeliculaRMM(id));'",
      "onsubmit='return jaxon_borrarPeliculaRMM(id);'"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Cuando pasamos todos los campos de un formulario HTML de golpe a una función de JAXON desde el cliente, ¿qué utilidad proporciona la librería JavaScript de Jaxon?",
    "opciones": [
      "jaxon.getFormValues('id_del_formulario')",
      "jaxon.$('id_del_formulario').value",
      "jaxon.serializeForm('id_del_formulario')",
      "jaxon.sendFormData('id_del_formulario')"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "En las funciones registradas de la tarea (como registrarPeliculaRMM($formulario)), ¿cómo se accede a un campo específico enviado a través de los valores del formulario?",
    "opciones": [
      "$formulario = filter_input(INPUT_POST, 'titulo');",
      "$titulo = trim($formulario['titulo'] ?? '');",
      "$titulo = $_POST['titulo'];",
      "$titulo = jaxon()->getParam('titulo');"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Si un servicio web remoto (como la API de OMDB) requiere autenticación mediante una clave única que se pasa como parámetro en la URL de consulta (query string), ¿cómo se denomina habitualmente esta clave?",
    "opciones": [
      "Bearer Token",
      "HTTP Basic Authorization",
      "API Key",
      "Session Cookie"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Utilizando la librería Guzzle en PHP para consultar un servicio web externo, ¿cuál es la forma recomendada de pasar parámetros de consulta en la URL (por ejemplo, el título de la película a buscar y la API Key)?",
    "opciones": [
      "Concatenar manualmente las cadenas controlando los espacios en blanco con trim().",
      "Utilizar la opción 'query' en el array de opciones del método de Guzzle.",
      "Enviar los datos codificados en el cuerpo de la petición mediante la opción 'form_params'.",
      "Almacenar los parámetros temporalmente en el array superglobal $_SESSION."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "En el archivo 'setup.php' de nuestra tarea se aprecian registros de funciones como 'registrarPeliculaRMM' y 'borrarPeliculaRMM'. ¿Por qué llevan las siglas 'RMM' añadidas al final?",
    "opciones": [
      "Son siglas obligatorias de la arquitectura interna del framework JAXON.",
      "Hacen referencia a los métodos estrictos de enrutamiento del lado del cliente.",
      "Corresponden a las iniciales del alumno (Roberto Moreno Moreno) para identificar de forma unívoca su autoría en la prueba.",
      "Indican que las funciones modifican tablas con relaciones de 'uno a muchos'."
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Cuando el servidor externo de OMDB responde a una consulta HTTP realizada con Guzzle, ¿qué código de estado HTTP se debe comprobar para asegurar que la respuesta es completamente correcta antes de tratar los datos?",
    "opciones": [
      "401 Unauthorized",
      "404 Not Found",
      "200 OK",
      "500 Internal Server Error"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Al recibir la respuesta en crudo de la API de OMDB a través de Guzzle ($res->getBody()), ¿qué función se utiliza para transformar esa cadena JSON en un array asociativo manipulable por PHP?",
    "opciones": [
      "json_encode($body)",
      "json_decode($body, true)",
      "Simplexml_load_string($body)",
      "unserialize($body)"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Si el formato JSON recibido de un servicio web externo no es válido o está corrompido, ¿qué función de PHP nos permite detectar de forma estricta este error en el formateo?",
    "opciones": [
      "json_last_error()",
      "is_numeric()",
      "empty()",
      "error_log()"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Dentro del bloque try-catch que envuelve una petición de red con Guzzle, ¿qué tipo de excepción específica se debe capturar para gestionar errores de conexión o caídas del servidor remoto?",
    "opciones": [
      "Exception $e",
      "RequestException o alertas de red genéricas",
      "Jaxon\\Exception",
      "PDOException"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "A la hora de maquetar el listado de películas devuelto por OMDB e inyectarlo en el frontend, ¿en qué propiedad HTML se suele volcar la estructura de la tabla dinámicamente?",
    "opciones": [
      "value",
      "style.display",
      "innerHTML",
      "className"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Al codificar un parámetro de búsqueda de texto para meterlo de forma segura en una URL manual (como el título de una película con espacios), ¿qué función de PHP realiza la conversión?",
    "opciones": [
      "base64_encode()",
      "urlencode()",
      "trim()",
      "json_encode()"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "¿Qué método del cliente GuzzleHttp\\Client permite deshabilitar el lanzamiento automático de excepciones ante respuestas con estados HTTP de error como 404 o 500?",
    "opciones": [
      "Configurar la opción ['http_errors' => false] en la inicialización o en la petición.",
      "Configurar la opción ['verify' => false] para ignorar la verificación SSL.",
      "Utilizar de forma obligatoria el flujo php://input.",
      "Llamar al método alias $client->delete()."
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Si un método de la clase Response de JAXON añade contenido visual al final del interior de un elemento HTML, ¿qué comando de la API PHP se está ejecutando?",
    "opciones": [
      "clear",
      "assign",
      "append",
      "prepend"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "¿Qué diferencia conceptual básica existe entre una migración y un seeder en la arquitectura de un proyecto web actual?",
    "opciones": [
      "La migración añade registros de datos y el seeder crea las vistas en Blade.",
      "La migración crea o modifica la estructura de la base de datos (tablas), mientras que el seeder rellena esas tablas con datos iniciales.",
      "La migración configura las llamadas AJAX y el seeder gestiona las promesas con fetch.",
      "No existe ninguna diferencia, ambos términos son alias de la librería JAXON."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "A nivel conceptual, ¿qué es un ORM (como Eloquent) mencionado en la videoconferencia como herramienta clave para interactuar con la base de datos?",
    "opciones": [
      "Un motor de plantillas que renderiza HTML en el lado del cliente.",
      "Un mapeador que vincula los registros de las tablas relacionales de la base de datos con clases y objetos en PHP.",
      "Una extensión de JavaScript que simula el comportamiento de jQuery.",
      "Un protocolo de redifusión web equivalente a los canales RSS."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Para asegurar que las funciones controladoras de JAXON mantengan la separación de conceptos del patrón MVC, ¿qué recomendó hacer el profesor en la tarea?",
    "opciones": [
      "Escribir las consultas SQL relacionales directamente en el archivo index.php.",
      "Sacar la lógica de consulta y base de datos a archivos externos o clases de modelo dedicadas.",
      "Eliminar el uso de Composer y de la carpeta vendor.",
      "Implementar la lógica completa de la aplicación utilizando únicamente código JavaScript en el frontend."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "En las aplicaciones web tradicionales, la interfaz de usuario se actualiza recargando la página entera. ¿Qué cambio drástico introduce la tecnología AJAX en este comportamiento?",
    "opciones": [
      "Obliga al uso de un servidor secundario basado en Node.js.",
      "Permite establecer comunicación asíncrona con el servidor web y actualizar la interfaz dinámicamente sin necesidad de recargar la página completa.",
      "Sustituye por completo el uso de bases de datos relacionales por archivos de texto serializados.",
      "Restringe las interacciones del usuario al uso exclusivo de la consola de depuración (console.log)."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Cuando una aplicación gestiona e implementa su interfaz de usuario íntegramente desde JavaScript en una única página inicial que se actualiza mediante AJAX, ¿con qué siglas se conoce?",
    "opciones": [
      "SOA (Architecture Oriented Services)",
      "SPA (Single Page Application)",
      "MVC (Model View Controller)",
      "API (Application Programming Interface)"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "A la hora de enlazar el frontend con el backend en JAXON, ¿qué método de la libreríaPHP se utiliza para especificar la URI exacta del script controlador (por ejemplo, 'backend.php')?",
    "opciones": [
      "jaxon()->setOption('js.lib.uri', 'backend.php');",
      "jaxon()->setOption('core.request.uri', 'backend.php');",
      "jaxon()->register(Jaxon::CALLABLE_FUNCTION, 'backend.php');",
      "$response->script('backend.php');"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "En el contexto de la Unidad 7, ¿qué es Leaflet?",
    "opciones": [
      "Una extensión de PHP que permite parsear documentos estructurados en XML.",
      "Una librería de JavaScript ligera y de código abierto que facilita la integración de mapas interactivos en páginas web.",
      "Un componente de backend diseñado para interceptar llamadas con tokens de portador.",
      "Un subcomando de Composer que instala herramientas de desarrollo como PHP Unit."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "¿Qué nombre reciben las pequeñas piezas en forma de mosaico que utiliza Leaflet para conformar y dar continuidad visual a un mapa?",
    "opciones": [
      "Tokens",
      "Popups",
      "Teselas (tiles)",
      "Feeds"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Si queremos centrar la vista de un mapa de OpenStreetMap en unas coordenadas geográficas determinadas con un nivel de ampliación concreto usando Leaflet, ¿qué método JavaScript de la librería llamamos?",
    "opciones": [
      "map.addTo()",
      "map.setView([latitud, longitud], zoom)",
      "map.bindPopup()",
      "map.openPopup()"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "¿Qué elemento interactivo podemos superponer en un mapa de Leaflet para destacar una ubicación exacta y asociarle una etiqueta de texto que se abra al hacer clic?",
    "opciones": [
      "Un validador FormData",
      "Un marcador (marker) junto con un popup",
      "Un flujo inyectado cURL",
      "Un objeto CookieJar"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "¿Qué protocolo o estándar avanzado se menciona en el temario como el más extendido para permitir que un usuario autorice de forma segura el acceso a sus datos privados de un servicio de terceros (como Google Drive) sin revelar su contraseña?",
    "opciones": [
      "HTTP Basic Authorization",
      "OAuth2",
      "HTTP Digest",
      "SAML"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Cuando un servicio web seguro de tipo REST requiere que incluyamos un Token de Portador en cada petición HTTP, ¿en qué cabecera específica se añade?",
    "opciones": [
      "Content-Type: application/json",
      "WWW-Authenticate: Basic",
      "Authorization: Bearer <token>",
      "X-API-Key: <token>"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Si un servicio web que utiliza autenticación por sesiones requiere que guardemos y reenviemos las cookies recibidas en las sucesivas peticiones de Guzzle, ¿qué objeto especializado nos proporciona la librería para este cometido?",
    "opciones": [
      "FileCookieJar o CookieJar",
      "RequestException",
      "SimpleXMLElement",
      "FormData"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "Cuando se realiza una petición HTTP de tipo POST o DELETE enviando datos en formato JSON crudo mediante Guzzle, ¿qué opción se debe usar en el array de configuración de la petición?",
    "opciones": [
      "'form_params'",
      "'query'",
      "'json'",
      "'cookies'"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "En un servicio web del backend que recibe datos en formato JSON crudo, ¿por qué no se pueden recopilar estos datos a través del array superglobal $_POST?",
    "opciones": [
      "Porque los datos JSON requieren obligatoriamente el uso de tokens Bearer.",
      "Porque no viajan codificados con el formato estándar de formulario 'x-www-form-urlencoded'.",
      "Porque JAXON deshabilita por defecto el acceso a las variables globales.",
      "Porque el modelo de la base de datos bloquea las peticiones asíncronas."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Segunda Parte",
    "pregunta": "¿Qué flujo especial de PHP se debe leer mediante 'file_get_contents' para capturar el cuerpo de una petición con datos JSON en crudo que llega al backend?",
    "opciones": [
      "php://output",
      "$_SERVER['REQUEST_METHOD']",
      "php://input",
      "$_SESSION['auth']"
    ],
    "correcta": 2
  },
  {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "¿Qué es OpenStreetMap según el temario de la Unidad 7?",
        "opciones": [
            "Un framework PHP para hacer peticiones AJAX.",
            "Un proyecto de código abierto y gratuito para la creación, publicación y visualización de mapas.",
            "Una API privada de pago idéntica a Google Maps Plattform.",
            "Una librería de JavaScript para crear animaciones 3D en el navegador."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "¿Qué es Leaflet?",
        "opciones": [
            "Un gestor de dependencias para PHP.",
            "Una librería de JavaScript ligera y de código abierto que permite integrar mapas de diferentes fuentes en páginas web.",
            "Un protocolo de seguridad para la autenticación en aplicaciones híbridas.",
            "Una base de datos documental para guardar coordenadas geográficas."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Usando la librería Leaflet en JavaScript, ¿cómo se inicializa un mapa para que se muestre dentro de un contenedor HTML `<div id=\"mapa_div\"></div>`?",
        "opciones": [
            "let map = new OpenStreetMap('mapa_div');",
            "let map = Leaflet.create('mapa_div');",
            "let map = L.map('mapa_div');",
            "let map = document.getMap('mapa_div');"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "En Leaflet, una vez inicializado el mapa, ¿qué método se utiliza para establecer las coordenadas del punto central y el nivel de zoom inicial?",
        "opciones": [
            "map.centerAndZoom([latitud, longitud], zoom);",
            "map.setView([latitud, longitud], zoom);",
            "map.locate([latitud, longitud], zoom);",
            "map.init([latitud, longitud], zoom);"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "¿Qué método de Leaflet permite asociar un pequeño cuadro de texto (popup) informativo a un marcador del mapa cuando el usuario hace clic sobre él?",
        "opciones": [
            "marcador.addText('Texto');",
            "marcador.setTooltip('Texto');",
            "marcador.bindPopup('Texto');",
            "marcador.showInfo('Texto');"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "En un servicio web basado en la arquitectura REST, ¿cuál es el verbo o método HTTP que se utiliza convencionalmente para OBTENER información o leer un recurso?",
        "opciones": [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "En un servicio web basado en la arquitectura REST, ¿cuál es el verbo HTTP que se utiliza convencionalmente para INSERTAR o crear nueva información?",
        "opciones": [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "En un servicio web basado en la arquitectura REST, ¿cuál es el verbo HTTP que se utiliza para BORRAR información?",
        "opciones": [
            "GET",
            "POST",
            "DELETE",
            "PUT"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "En un servicio web basado en la arquitectura REST, ¿cuál es el verbo HTTP que se utiliza habitualmente para MODIFICAR o actualizar información existente?",
        "opciones": [
            "GET",
            "POST",
            "DELETE",
            "PUT"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "¿Qué es la librería Guzzle que el profesor menciona como fundamental para esta unidad y que has usado en tu tarea?",
        "opciones": [
            "Un cliente HTTP para PHP que permite enviar peticiones a otros servidores web y consumir APIs de forma sencilla.",
            "Una librería de JavaScript para validar formularios en el navegador.",
            "Un framework CSS para maquetar el frontend.",
            "Un motor de plantillas alternativo a Blade y Smarty."
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Sabiendo que Guzzle se instala mediante Composer, ¿cuál es el comando correcto para añadirlo a tu proyecto?",
        "opciones": [
            "composer install guzzle",
            "composer download guzzlehttp",
            "composer require guzzlehttp/guzzle",
            "composer add guzzle-php"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Dentro de un script PHP, ¿cómo se instancia correctamente un nuevo cliente HTTP de Guzzle?",
        "opciones": [
            "$clienteHTTP = new HTTPClient();",
            "$clienteHTTP = new GuzzleHttp\\Client();",
            "$clienteHTTP = Guzzle::create();",
            "$clienteHTTP = new GuzzleClient();"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "¿Cuál es el método genérico del cliente Guzzle que se utiliza para realizar una petición HTTP especificando el método como primer parámetro (ej. 'GET' o 'POST')?",
        "opciones": [
            "$clienteHTTP->request('GET', $url);",
            "$clienteHTTP->send('GET', $url);",
            "$clienteHTTP->fetch('GET', $url);",
            "$clienteHTTP->call('GET', $url);"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Una vez recibida la respuesta de una petición Guzzle en la variable `$response`, ¿qué método nos devuelve el objeto con el cuerpo del mensaje recibido?",
        "opciones": [
            "$response->getText();",
            "$response->getBody();",
            "$response->getContent();",
            "$response->getData();"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Para extraer el texto plano del cuerpo de una respuesta Guzzle (Body), ¿qué método final debes usar?",
        "opciones": [
            "$body->toString();",
            "$body->readAll();",
            "$body->getContents();",
            "$body->parseText();"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Al realizar una petición con Guzzle a una URL con HTTPS, si el certificado SSL da problemas en tu servidor local, ¿qué opción debes pasarle a Guzzle para que no verifique el certificado?",
        "opciones": [
            "['verify' => false]",
            "['ssl' => ignore]",
            "['secure' => false]",
            "['ignore_cert' => true]"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Si quieres enviar parámetros en la propia URL (query string) usando Guzzle, ¿qué clave debes utilizar en el array de opciones?",
        "opciones": [
            "['url_params' => [...]]",
            "['query' => [...]]",
            "['get_data' => [...]]",
            "['parameters' => [...]]"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "En tu tarea con la API de OMDB, usaste `$client = new \\GuzzleHttp\\Client(['http_errors' => false]);`. ¿Para qué sirve exactamente esa opción `http_errors => false`?",
        "opciones": [
            "Para que PHP ignore errores de sintaxis en el código.",
            "Para forzar a la API a devolver siempre un código 200 OK.",
            "Para ocultar los errores de Javascript en la consola del navegador.",
            "Para evitar que Guzzle lance excepciones ante errores HTTP (como 404 o 500) y permitirte procesar la respuesta manualmente evaluando el status code."
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "¿Qué excepción específica es recomendable capturar en un bloque try-catch cuando se hacen peticiones HTTP con Guzzle por si falla la conexión?",
        "opciones": [
            "PDOException",
            "GuzzleHttp\\Exception\\ConnectionError",
            "GuzzleHttp\\Exception\\RequestException",
            "HttpException"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Si necesitas realizar una petición POST a una API REST enviando los datos directamente codificados en formato JSON crudo, ¿qué clave usas en el array de opciones de Guzzle?",
        "opciones": [
            "['form_params' => $datos]",
            "['json' => $datos]",
            "['body_json' => $datos]",
            "['data' => $datos]"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Si necesitas realizar una petición POST simulando el envío de un formulario HTML clásico (Content-Type: application/x-www-form-urlencoded), ¿qué clave usas en Guzzle?",
        "opciones": [
            "['form_params' => $datos]",
            "['post_data' => $datos]",
            "['form' => $datos]",
            "['url_encoded' => $datos]"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Al consumir un servicio web con Guzzle, si necesitas enviar una cabecera personalizada (como Authorization o X-API-Key), ¿cómo se indica en las opciones?",
        "opciones": [
            "['custom_headers' => ['Authorization' => '...']]",
            "['http_headers' => ['Authorization' => '...']]",
            "['headers' => ['Authorization' => '...']]",
            "['head' => ['Authorization' => '...']]"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "¿Qué método del objeto Response de Guzzle te permite consultar el valor de una cabecera concreta recibida desde el servidor remoto (por ejemplo, 'Content-Type')?",
        "opciones": [
            "$response->getHead('Content-Type')",
            "$response->getHeader('Content-Type')",
            "$response->checkHeader('Content-Type')",
            "$response->headers('Content-Type')"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Para verificar si una petición HTTP con Guzzle ha devuelto un código 200 OK (como hiciste en la tarea de OMDB), ¿qué método del objeto Response debes llamar?",
        "opciones": [
            "$response->getStatus()",
            "$response->getCode()",
            "$response->getHttpCode()",
            "$response->getStatusCode()"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Según el temario, ¿a qué nos referimos con el concepto de 'Aplicación Web Híbrida' o 'Mashup'?",
        "opciones": [
            "A una aplicación que usa HTML y CSS en el mismo archivo.",
            "A la combinación de datos y funcionalidades de diferentes fuentes o servicios externos (como APIs o mapas) para crear nuevos servicios más ricos.",
            "A un código que funciona igual en Windows y en Linux.",
            "A una aplicación desarrollada nativamente para móviles y web al mismo tiempo."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "¿Qué es una 'API Key' (Clave de API)?",
        "opciones": [
            "Una clave secreta única proporcionada por un servicio web para identificar y autorizar a la aplicación que realiza las peticiones.",
            "La contraseña del administrador de la base de datos MySQL.",
            "Un método de encriptación simétrica para la transferencia de archivos.",
            "Una librería de PHP para generar números aleatorios."
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "En tu tarea, a la hora de conectarte a la API de películas (OMDB), ¿cómo le enviabas la API Key al servidor remoto usando Guzzle?",
        "opciones": [
            "En el cuerpo de la petición POST con 'form_params'.",
            "A través de una Cookie de sesión.",
            "Como un parámetro directamente en la ruta (query string) de la URL: `?apikey={$apikey}`.",
            "Codificándola en Base64 dentro de la cabecera WWW-Authenticate."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "¿Cuál es el protocolo estándar utilizado para permitir que un usuario otorgue consentimiento a nuestra aplicación para acceder a su información privada en otro servicio (ej. Google Drive) sin cedernos su contraseña?",
        "opciones": [
            "SAML",
            "OAuth2",
            "HTTP Digest",
            "SOAP Token"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "¿En qué consiste la autenticación HTTP Basic?",
        "opciones": [
            "En enviar el nombre de usuario y la contraseña codificados en Base64 mediante la cabecera 'Authorization' en cada petición HTTP.",
            "En enviar únicamente el nombre de usuario en texto plano en la URL.",
            "En iniciar sesión mediante un formulario POST y recibir una cookie de por vida.",
            "En utilizar un certificado SSL emitido por el gobierno."
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "En los esquemas de autenticación basados en Tokens (donde el servidor te devuelve un token tras loguearte), ¿cómo se envía habitualmente este token en las siguientes peticiones?",
        "opciones": [
            "En la cabecera: X-Token-Send: <token>",
            "Como parte del cuerpo del JSON obligatoriamente.",
            "En la cabecera: Authorization: Bearer <token>",
            "En la cabecera: Content-Type: Token <token>"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Si un servicio web remoto requiere iniciar sesión y utiliza Cookies para recordar nuestra autenticación, ¿qué herramienta de Guzzle nos permite almacenar y reenviar automáticamente esas cookies?",
        "opciones": [
            "SessionStorage",
            "CookieJar",
            "CookieManager",
            "BrowserEmulator"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Si las credenciales de autenticación enviadas a un servicio REST fallan, ¿qué código de estado HTTP suele retornar el servidor para indicar 'No Autorizado'?",
        "opciones": [
            "404 Not Found",
            "500 Internal Server Error",
            "403 Forbidden",
            "401 Unauthorized"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Si tu propio servidor web implementa autenticación HTTP Basic, ¿en qué variable global de PHP se recibe automáticamente el nombre de usuario?",
        "opciones": [
            "$_SERVER['PHP_AUTH_USER']",
            "$_POST['username']",
            "$_SESSION['user']",
            "$_GET['auth_user']"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Siguiendo la pregunta anterior, ¿en qué variable global de PHP se recibe automáticamente la contraseña enviada por HTTP Basic?",
        "opciones": [
            "$_POST['password']",
            "$_SERVER['PHP_AUTH_PW']",
            "$_SERVER['HTTP_PASSWORD']",
            "$_SESSION['passwd']"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Dado que las cabeceras de autenticación (como HTTP Basic) y las API Keys suelen enviarse en texto plano, ¿qué medida de seguridad es indispensable aplicar en los servicios web para evitar que sean interceptadas?",
        "opciones": [
            "Usar siempre el verbo POST, ya que no se puede interceptar.",
            "Comprimir la petición en un archivo ZIP.",
            "Servir la API obligatoriamente mediante el protocolo HTTPS para cifrar la comunicación.",
            "Cambiar la API Key cada 5 minutos."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "¿Qué función nativa de PHP convierte un array asociativo o un objeto de PHP en una cadena de texto con notación JSON?",
        "opciones": [
            "json_encode()",
            "json_decode()",
            "json_stringify()",
            "serialize()"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "¿Qué función nativa de PHP analiza una cadena de texto JSON y la convierte en un objeto (o array) de PHP?",
        "opciones": [
            "json_parse()",
            "json_decode()",
            "json_encode()",
            "unserialize()"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Al usar la función `json_decode($json, true)`, ¿qué efecto tiene pasarle `true` como segundo parámetro?",
        "opciones": [
            "Ignora los errores de sintaxis del JSON.",
            "Obliga a que las claves del JSON estén en mayúsculas.",
            "Devuelve un array asociativo en lugar de un objeto estándar de PHP (stdClass).",
            "Fuerza la descarga del JSON como archivo adjunto en el navegador."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "En tu tarea, tras realizar el `json_decode` a la respuesta de OMDB, ejecutas la comprobación: `if (json_last_error() !== JSON_ERROR_NONE)`. ¿Cuál es el propósito de esta línea?",
        "opciones": [
            "Comprobar si la película buscada no existe en la base de datos.",
            "Verificar si la conexión con la API se ha cortado por falta de internet.",
            "Confirmar si el código de estado HTTP era 404.",
            "Verificar que el texto recibido se ha decodificado correctamente sin errores de formato o sintaxis en el JSON."
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Si un endpoint de tu backend (API REST) recibe una petición POST con los datos codificados en formato JSON crudo (raw), ¿cómo se debe leer ese contenido en PHP?",
        "opciones": [
            "Mediante la función file_get_contents('php://input')",
            "Accediendo directamente al array $_POST",
            "Consultando la variable $_JSON",
            "Leyendo el archivo temporal en $_FILES"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Para procesar documentos en formato XML, ¿qué extensión viene habilitada por defecto en PHP (desde la v5.1.2) que convierte fácilmente un XML en un objeto manipulable?",
        "opciones": [
            "DOMDocument",
            "SimpleXML",
            "XMLParser",
            "SAXReader"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Usando la extensión SimpleXML, ¿qué función te permite cargar y procesar un documento XML que ya tienes guardado en una variable de texto en PHP?",
        "opciones": [
            "simplexml_load_string()",
            "simplexml_load_file()",
            "xml_parse_string()",
            "new XMLDocument()"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Usando la extensión SimpleXML, ¿qué función te permite cargar y procesar un documento XML indicándole directamente la URL remota o la ruta del archivo?",
        "opciones": [
            "simplexml_import_url()",
            "simplexml_load_string()",
            "simplexml_load_file()",
            "file_get_xml()"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Si tienes un objeto SimpleXML `$xml` que contiene un listado de libros `<libro>`, ¿cómo iterarías por cada uno de ellos en PHP?",
        "opciones": [
            "while($libro = $xml->next())",
            "foreach ($xml->libro as $libro)",
            "for($i=0; $i<$xml->length; $i++)",
            "foreach ($xml->getElementsByTagName('libro') as $libro)"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "¿Qué función nativa de PHP utilizaste en tu tarea para codificar el título de la película y evitar que caracteres especiales (como acentos o espacios) rompieran la URL de OMDB?",
        "opciones": [
            "urlencode()",
            "htmlspecialchars()",
            "base64_encode()",
            "utf8_encode()"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "A la hora de programar un endpoint de una API REST (por ejemplo, `delete.php`), ¿por qué es importante realizar una comprobación como `if ($_SERVER['REQUEST_METHOD'] != 'DELETE')` al principio?",
        "opciones": [
            "Para ahorrar memoria en el servidor.",
            "Para indicar al navegador que oculte los parámetros en la URL.",
            "Para garantizar que ese script sólo se ejecute si se le invoca usando el verbo HTTP correcto, y devolver error en caso contrario.",
            "Para que la base de datos sepa qué instrucción SQL va a ejecutarse luego."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Según recalcó el profesor en la videoconferencia, ¿por qué es fundamental dominar el uso básico de Composer a partir de la Unidad 4?",
        "opciones": [
            "Porque permite diseñar bases de datos relacionales visualmente.",
            "Porque la gestión de dependencias (instalar paquetes como Jaxon o Guzzle) y el autoload de clases son imprescindibles en las aplicaciones modernas de PHP.",
            "Porque es la única forma de compilar el código PHP a lenguaje máquina.",
            "Porque sustituye por completo el uso de consultas SQL."
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "De acuerdo con los consejos de estudio del profesor en la videoconferencia, ¿cómo será el formato de evaluación para los conceptos de la Unidad 7 (Jaxon, AJAX, Guzzle) en el examen?",
        "opciones": [
            "Preguntas tipo test, centradas en el reconocimiento de la sintaxis y la lógica, descartando opciones que 'no tengan sentido'.",
            "Desarrollo completo desde cero de un servicio web REST en una hoja en blanco.",
            "Preguntas cortas donde hay que escribir entre 15 y 20 líneas de código Guzzle.",
            "Una prueba práctica cronometrada en el ordenador."
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Tal y como ha comentado el profesor al recomendar hacer la 'chuleta' de repaso, el ciclo de vida de una función manejadora (backend) que usas en Jaxon consta siempre de tres grandes pasos. ¿Cuáles son?",
        "opciones": [
            "Compilar, ejecutar y renderizar HTML puro.",
            "Instalar dependencias, configurar el archivo ini y arrancar Apache.",
            "Recibir los datos (vía AJAX) y validarlos, modificar el modelo (Base de Datos) y generar/devolver un objeto Response.",
            "Abrir una conexión cURL, leer el archivo XML y hacer un echo del resultado."
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 tercera parte",
        "pregunta": "Si en la API de OMDB recibes un JSON con la estructura `{\"Response\":\"True\", \"Search\":[...]}` y lo decodificas con `json_decode($body, true)`, ¿cómo compruebas en PHP si `Response` es igual a 'True' (tal y como hiciste en tu tarea)?",
        "opciones": [
            "if ($datos->Response == 'True')",
            "if ($datos.Response == 'True')",
            "if ($datos['Response'] == 'True')",
            "if (isset($datos, 'Response', 'True'))"
        ],
        "correcta": 2
    },
    {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Para enlazar el frontend con el archivo del servidor en JAXON, debemos configurar la URI de destino. Completa el hueco en el código: jaxon()->setOption('_____', 'backend.php');",
    "opciones": [
      "core.request.uri",
      "core.backend.url",
      "js.app.route",
      "ajax.backend.path"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "En la vista HTML, necesitamos imprimir el bloque de JavaScript generado por JAXON que mapea las funciones PHP del backend. Completa la línea: echo jaxon()->_____();",
    "opciones": [
      "getJs",
      "exportJavascript",
      "getScript",
      "getFunctions"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Para registrar una función PHP independiente llamada 'buscarPeliculaRMM' en nuestro archivo de configuración, empleamos el siguiente código: $jaxon->register(_____, 'buscarPeliculaRMM');",
    "opciones": [
      "Jaxon::PHP_FUNCTION",
      "Jaxon::CALLABLE_FUNCTION",
      "Jaxon::REGISTER_METHOD",
      "Jaxon::CALLBACK_FUNC"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Dentro de la función PHP del backend controlada por JAXON, ¿cómo instanciamos correctamente el objeto reglamentario de respuesta? Completa el fragmento: $response = new _____();",
    "opciones": [
      "JaxonResponse",
      "AjaxResponse",
      "Response",
      "JsonResponse"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Si en el backend registramos la función PHP 'borrarPeliculaRMM', ¿cómo debe invocarse de forma obligatoria desde el evento inline de un botón en el HTML de la vista?",
    "opciones": [
      "onclick=\"borrarPeliculaRMM(id);\"",
      "onclick=\"jaxon_borrarPeliculaRMM(id);\"",
      "onclick=\"ajax_borrarPeliculaRMM(id);\"",
      "onclick=\"jaxon()->borrarPeliculaRMM(id);\""
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Queremos sustituir todo el contenido interno de un contenedor HTML con ID 'tablaPeliculas' por una estructura HTML almacenada en la variable $html. Completa el método: $response->_____('tablaPeliculas', 'innerHTML', $html);",
    "opciones": [
      "assign",
      "append",
      "html",
      "replace"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Para agregar una nueva fila HTML al final de una tabla existente con ID 'historial_logs' sin alterar lo que ya hay dentro, completamos la instrucción de la respuesta con: $response->_____('historial_logs', 'innerHTML', $nuevaFila);",
    "opciones": [
      "prepend",
      "assign",
      "insert",
      "append"
    ],
    "correcta": 3
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Si deseamos vaciar por completo el contenido interno de un bloque de notificación cuyo ID es 'genero_errores', ejecutamos el método directo: $response->_____('genero_errores');",
    "opciones": [
      "clear",
      "remove",
      "clean",
      "reset"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "En el frontend, para recopilar y serializar de forma automática todos los inputs de un formulario con ID 'formRegistro', introducimos el método de la librería cliente: _____( 'formRegistro' )",
    "opciones": [
      "jaxon.serializeForm",
      "jaxon.getFormValues",
      "jaxon.$('formRegistro').values",
      "FormData.serialize"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Si enviamos un formulario con jaxon.getFormValues(), ¿cómo extraemos de manera segura el campo de texto 'titulo' dentro de la función PHP destructora? Completa la línea:\nfunction registrarPeliculaRMM($formulario) {\n  $titulo = _____;\n}",
    "opciones": [
      "$_POST['titulo']",
      "filter_input(INPUT_POST, 'titulo')",
      "$formulario['titulo'] ?? ''",
      "jaxon()->getParam('titulo')"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Queremos ocultar un cuadro de texto cuyo ID es 'capa_mensajes' modificando dinámicamente su propiedad CSS display desde PHP. Completa el fragmento: $response->assign('capa_mensajes', '_____', 'none');",
    "opciones": [
      "style.display",
      "css.display",
      "display",
      "visibility"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Para indicarle al navegador del usuario que ejecute una alerta o instrucción JavaScript arbitraria en texto plano desde una función de JAXON, empleamos el método: $response->_____(\"alert('Registro guardado');\");",
    "opciones": [
      "call",
      "execute",
      "script",
      "eval"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "¿Qué consecuencia directa tiene incluir por descuido una sentencia 'echo' o imprimir HTML en crudo dentro de una función controladora de JAXON antes de retornar el objeto Response?",
    "opciones": [
      "El texto se añade de forma automática al principio de la vista HTML.",
      "Se corrompe el formato estructurado JSON de la respuesta asíncrona, provocando un fallo en el cliente de JavaScript.",
      "Mejora los tiempos de respuesta del servidor web al saltarse el buffer de salida.",
      "Se almacena de forma aislada en el archivo maestro de logs de errores de MySQL."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Al final de nuestro script del backend ('backend.php'), ¿qué instrucción se encarga de capturar la petición HTTP entrante, invocar la función PHP registrada pertinente y devolver los comandos JSON? jaxon()->_____();",
    "opciones": [
      "sendResponse",
      "processRequest",
      "compile",
      "executeRequest"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Para incrustar una confirmación nativa en el botón de la vista de forma que solo se dispare la llamada remota de JAXON si el usuario acepta, completamos el evento inline: onclick=\"if(_____) { jaxon_borrarPeliculaRMM(id); }\"",
    "opciones": [
      "alert('¿Seguro?')",
      "jaxon.confirm('¿Seguro?')",
      "prompt('¿Seguro?')",
      "confirm('¿Estás seguro de borrar esta película?')"
    ],
    "correcta": 3
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "De acuerdo con lo expuesto por el profesor en la videoconferencia, ¿qué es conceptualmente una Single Page Application (SPA) o aplicación híbrida?",
    "opciones": [
      "Una aplicación web orientada exclusivamente a dispositivos móviles que no requiere el uso de hojas de estilo CSS.",
      "Un modelo de aplicación web que carga un único documento inicial y actualiza sus componentes mediante AJAX de forma asíncrona sin refrescar toda la pantalla.",
      "Un software de escritorio que duplica las bases de datos relacionales en formato plano XML de manera local.",
      "Un sistema web en el que el código fuente de JavaScript está totalmente deshabilitado por razones de seguridad."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Para consumir servicios web remotos o APIs de terceros (como el buscador de OMDB) desde nuestros scripts de PHP mediante orientación a objetos, ¿qué cliente HTTP instalamos con Composer?",
    "opciones": [
      "GuzzleHttp\\Client",
      "CurlNativa\\Manager",
      "JaxonClient\\Http",
      "PDO\\HttpClient"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Queremos hacer una petición GET mediante Guzzle y adjuntar parámetros de búsqueda de manera limpia en la query string de la URL. Completa el array de opciones: $client->request('GET', $url, [ '_____' => ['apikey' => $key, 's' => $busqueda] ]);",
    "opciones": [
      "form_params",
      "body",
      "query",
      "json"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Al capturar la respuesta JSON en crudo procedente de una API de servicios web mediante Guzzle, ¿qué función de PHP empleamos para transformarla en un array asociativo? $datos = _____( $res->getBody(), true );",
    "opciones": [
      "json_encode",
      "unserialize",
      "simplexml_load_string",
      "json_decode"
    ],
    "correcta": 3
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Si deseamos validar de forma estricta si ha ocurrido un fallo de formateo o de sintaxis durante el procesamiento de un string JSON recibido, consultamos la función nativa: _____",
    "opciones": [
      "json_last_error()",
      "error_get_last()",
      "check_json_syntax()",
      "is_null()"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Al usar GuzzleHttp, si el servidor externo contesta con un código HTTP de error de cliente o servidor (como 404 o 500), ¿qué excepción captura este fallo por defecto dentro del bloque try-catch?",
    "opciones": [
      "PDOException",
      "GuzzleHttp\\Exception\\RequestException",
      "Jaxon\\Exception\\CoreException",
      "JsonException"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Si queremos configurar el cliente de Guzzle para que NO lance excepciones automáticas ante respuestas con códigos HTTP de estado erróneos (como 400 o 500), debemos incluir la opción: '_____' => false",
    "opciones": [
      "exceptions",
      "verify",
      "http_errors",
      "debug"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "¿Qué librería de JavaScript, caracterizada por ser open-source y muy ligera, se introduce en la Unidad 7 para desplegar mapas interactivos?",
    "opciones": [
      "GoogleMapsSDK",
      "Leaflet",
      "OpenLayers",
      "JaxonMap"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "¿Con qué término técnico se conocen las pequeñas imágenes cuadradas en cuadrícula que Leaflet solicita dinámicamente para dar continuidad visual a un mapa?",
    "opciones": [
      "Layers",
      "Markers",
      "Popups",
      "Teselas (tiles)"
    ],
    "correcta": 3
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Para inicializar el objeto de mapa de Leaflet y fijar su centro de visualización geográfico y nivel de zoom, completamos la instrucción JavaScript: let map = L.map('mapa')._____( [37.38, -6.00], 13 );",
    "opciones": [
      "center",
      "init",
      "setView",
      "locate"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Queremos crear una chincheta o marcador en unas coordenadas con Leaflet e inyectarlo en el mapa. Completa el fragmento de código JavaScript: L._____( [37.38, -6.00] ).addTo(map);",
    "opciones": [
      "popup",
      "marker",
      "tileLayer",
      "pin"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "¿Qué protocolo o estándar de la industria se estudia en este tema para posibilitar accesos delegados y autorizaciones seguras mediante tokens sin revelar contraseñas?",
    "opciones": [
      "OAuth2",
      "BasicAuth",
      "SAML",
      "HTTPS Digest"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Cuando consumimos una API REST autorizada mediante Token de Portador (Bearer Token), ¿cuál es la estructura correcta para inyectar dicha credencial en las cabeceras con Guzzle?",
    "opciones": [
      "'query' => [ 'token' => $token ]",
      "'headers' => [ 'Authorization' => 'Bearer ' . $token ]",
      "'auth' => [ 'bearer', $token ]",
      "'headers' => [ 'X-API-Key' => $token ]"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Si un servicio web remoto requiere que guardemos y mantengamos vivas sus cookies de sesión en las sucesivas peticiones de Guzzle, ¿qué elemento debemos instanciar y pasar en la configuración?",
    "opciones": [
      "Un objeto CookieJar (o FileCookieJar)",
      "Un array superglobal $_SESSION serializado",
      "Una cabecera Content-Type de tipo multipart/form-data",
      "Una opción 'verify' fijada en true"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Deseamos enviar un array asociativo transformándolo automáticamente en una cadena estructurada JSON (raw body) en una petición POST con Guzzle. Completa el hueco: $client->request('POST', $url, [ '_____' => $datos ]);",
    "opciones": [
      "form_params",
      "multipart",
      "body",
      "json"
    ],
    "correcta": 3
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "¿Por qué un script de procesamiento backend que recibe datos formateados en un JSON crudo no puede recopilarlos de forma ordinaria leyendo la superglobal $_POST?",
    "opciones": [
      "Porque JAXON borra el array $_POST antes de abrir los hilos asíncronos.",
      "Porque $_POST solo mapea flujos de datos codificados bajo formatos estándar de formulario como application/x-www-form-urlencoded.",
      "Porque los datos JSON requieren obligatoriamente de cifrado por certificados SSL.",
      "Porque el protocolo HTTP impide el uso de superglobales en llamadas asíncronas."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Para capturar la cadena de texto cruda JSON (raw body) que llega al cuerpo de la petición HTTP del servidor en el backend, abrimos el flujo de lectura especial: $json = file_get_contents('_____');",
    "opciones": [
      "php://output",
      "php://stdin",
      "php://input",
      "php://buffer"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Dentro del ciclo de vida y despliegue coordinado de bases de datos, ¿qué diferencia funcional básica divide a una Migración de un Seeder?",
    "opciones": [
      "La migración construye las interfaces de Blade y el seeder crea las conexiones asíncronas de JAXON.",
      "La migración define o modifica el esquema estructural de la base de datos (tablas), mientras que el seeder inyecta datos iniciales o de prueba.",
      "El seeder compila el JavaScript cliente y la migración traduce objetos asociativos a XML.",
      "No hay diferencias reales, representan términos sinónimos dentro de la API core de JAXON."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "En las explicaciones del profesor se menciona el concepto de ORM (como Eloquent). ¿Cuál es su cometido principal?",
    "opciones": [
      "Un motor de plantillas que renderiza marcas HTML en la pantalla del usuario.",
      "Un mapeador objeto-relacional que asocia los registros de las tablas a objetos de programación en PHP para agilizar las operaciones de datos.",
      "Un sistema de seguridad perimetral diseñado para detener inyecciones en peticiones AJAX.",
      "Un gestor de paquetes de dependencias JavaScript alternativo a NPM o Bower."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Con el objetivo de respetar el patrón MVC y no mezclar la lógica de base de datos con la visualización en las funciones de JAXON, ¿qué buena práctica se implementó en la tarea?",
    "opciones": [
      "Escribir las cadenas de consulta relacionales inline directamente en el index.php.",
      "Extraer las operaciones SQL relacionales a clases independientes de Modelo (como Pelicula o Genero).",
      "Eliminar por completo el cargador vendor/autoload.php del proyecto.",
      "Programar todas las interacciones de base de datos usando scripts manuales de fetch en JavaScript."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Al concatenar variables de texto de manera manual dentro de los parámetros URL de una petición HTTP string, ¿qué función de PHP codifica de forma segura los caracteres especiales y espacios? _____( $texto )",
    "opciones": [
      "base64_encode",
      "json_encode",
      "urlencode",
      "trim"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "En el material de la tarea base del tema se implementa el método helper DB::doSQL(). ¿Qué tarea realiza principalmente en el backend?",
    "opciones": [
      "Inyectar mapas interactivos de Leaflet en la vista.",
      "Encapsular y automatizar las rutinas repetitivas de prepare(), execute() y fetchAll() de la extensión PDO de manera segura contra inyecciones SQL.",
      "Establecer túneles de comunicación SOAP asíncronos con APIs externas.",
      "Compilar las opciones globales de configuración del core de JAXON."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Cuando ejecutamos una sentencia SQL de manipulación (como INSERT, UPDATE o DELETE) a través de la función DB::doSQL(), ¿qué valor devuelve de forma común?",
    "opciones": [
      "Un array asociativo con el contenido completo de la tabla alterada.",
      "Un entero que cuantifica el número de filas o registros afectados por la operación.",
      "Un objeto instanciado de tipo Jaxon\\Response\\Response.",
      "Una cadena formateada en JSON con el esquema estructural de claves."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Tras insertar un registro en la base de datos relacional con PDO, queremos recuperar de inmediato el ID único incremental asignado de manera automática. ¿Qué método invocamos? $conexion->_____();",
    "opciones": [
      "getGeneratedKey",
      "last_id",
      "lastInsertId",
      "getLastPrimaryKey"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Según las pautas del curso, ¿por qué los métodos de controlador del backend llevan añadidas las iniciales del alumno (por ejemplo, 'registrarPeliculaRMM')?",
    "opciones": [
      "Porque constituye un requisito sintáctico ineludible fijado por el compilador de JAXON-JS.",
      "Para validar de manera fehaciente la autoría individual del estudiante en el desarrollo de la prueba frente a copias o plagios.",
      "Para indicarle al framework que trabaje bajo una arquitectura estructurada orientada a Singletons.",
      "Para activar de forma automatizada las funciones de geolocalización espacial de Leaflet."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Para procesar un documento estructurado de tipo XML en PHP y extraer información de forma muy sencilla y directa, ¿qué extensión nativa orientada a objetos se recomienda?",
    "opciones": [
      "DOMDocument",
      "XMLParserProcedural",
      "SimpleXML",
      "GuzzleXml"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Si tenemos los datos XML dentro de una variable de texto string en PHP, ¿qué función de la extensión SimpleXML empleamos para parsearla? $xml = _____( $cadenaXML );",
    "opciones": [
      "simplexml_load_file",
      "simplexml_load_string",
      "xml_decode",
      "json_decode"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Asumiendo que $xml es un objeto de tipo SimpleXMLElement con varios elementos repetidos '<pelicula>', ¿cuál es la forma correcta de recorrerlos en PHP?",
    "opciones": [
      "for ($i=0; $i < $xml->length(); $i++)",
      "while ($peli = $xml->getNextNode())",
      "$xml->iterate('pelicula', function($peli))",
      "foreach ($xml->pelicula as $peli)"
    ],
    "correcta": 4
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "¿Qué archivo maestro situado en la raíz de nuestro proyecto web centraliza la declaración de dependencias, librerías externas y paquetes requeridos por la aplicación?",
    "opciones": [
      "composer.json",
      "autoload.php",
      "jaxon.config.json",
      "package.json"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Para descargar y sincronizar en la carpeta local vendor todas las dependencias declaradas en un proyecto que acabamos de clonar, ¿qué comando ejecutamos por consola?",
    "opciones": [
      "composer init",
      "composer install",
      "composer update-core",
      "php jaxon install"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Completa el espacio para incluir de forma correcta el script de autocarga de clases generado por Composer al principio de nuestra aplicación: require_once '_____/autoload.php';",
    "opciones": [
      "vendor",
      "composer",
      "core",
      "jaxon"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "En la división estructural de JAXON, ¿cuál es la responsabilidad encomendada al componente de 'Frontend'?",
    "opciones": [
      "Procesar las consultas SQL relacionales directamente en el motor MySQL.",
      "Capturar los eventos de interfaz del usuario en el navegador y disparar de forma transparente las funciones JavaScript con prefijo jaxon_ hacia el servidor.",
      "Gestionar de forma remota los paquetes de dependencias con Composer.",
      "Analizar sintácticamente cadenas de texto XML del ayuntamiento."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "¿Qué acción se ejecuta en la aplicación cliente de inmediato después de que el objeto Response se transforma en JSON y es transmitido de vuelta por HTTP al navegador?",
    "opciones": [
      "Se almacena de forma persistente en una base de datos local SQLite.",
      "El motor de JavaScript de JAXON (Jaxon-JS) lee de forma secuencial los comandos para alterar selectivamente los elementos del DOM sin recargar la página.",
      "Se fuerza de inmediato una recarga completa de toda la ventana del navegador.",
      "Se detiene la ejecución del servidor web enviando un código de error de red."
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "Queremos verificar si un input obligatorio (como el año de lanzamiento) contiene caracteres numéricos. Completa el fragmento de código condicional de JAXON:\nif ( _____( $datos['anio'] ) ) {\n  $response->alert('Error'); return $response;\n}",
    "opciones": [
      "filter_has_var",
      "!is_numeric",
      "empty",
      "is_null"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 7 - Repaso Tema 7 Cuarta Parte",
    "pregunta": "A modo de síntesis teórica, ¿cuál es la ventaja primordial que aporta el empleo de una librería integradora de AJAX como JAXON en un desarrollo backend en PHP?",
    "opciones": [
      "Abstrae la comunicación asíncrona, permitiendo definir el comportamiento interactivo del DOM del navegador directamente desde métodos de PHP sin necesidad de codificar JavaScript manual complejo.",
      "Sustituye de forma nativa el uso de hojas de estilo CSS en el lado del cliente.",
      "Incrementa la velocidad de ancho de banda físico de la conexión a internet de los usuarios.",
      "Elimina por completo la necesidad de implementar servidores HTTP tradicionales como Apache o Nginx."
    ],
    "correcta": 0
  },
  {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En el archivo setup de tu proyecto, necesitas indicarle a JAXON dónde está el archivo que procesará las peticiones. ¿Qué código falta en la siguiente línea?\n\n$jaxon = jaxon();\n$jaxon->setOption('core.request.uri', [_____]);",
        "opciones": [
            "BASE_URL . 'backend.php'",
            "'frontend.php'",
            "jaxon()->getScript()",
            "'index.php'"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En el archivo backend.php, debes procesar la petición AJAX, pero antes debes comprobar si existe una petición válida. ¿Qué método falta?\n\nif($jaxon->[_____]())\n{\n    $jaxon->processRequest();\n}",
        "opciones": [
            "hasAjaxRequest",
            "checkRequest",
            "canProcessRequest",
            "isReady"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En el index.php, necesitas obtener el código Javascript propio de la librería Jaxon-JS para inyectarlo en el HTML. ¿Qué código falta?\n\n$jaxonCss = $jaxon->getCss();\n$jaxonJs = $jaxon->[_____]();\n$jaxonScript = $jaxon->getScript();",
        "opciones": [
            "getJavascript",
            "getJs",
            "getLibrary",
            "getFunctions"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Para poder llamar a la función 'listarPeliculasRMM' desde el navegador, primero debes registrarla en Jaxon. ¿Qué constante de Jaxon falta?\n\n$jaxon->register(Jaxon::[_____], 'listarPeliculasRMM');",
        "opciones": [
            "AJAX_METHOD",
            "REGISTER_FUNCTION",
            "CALLABLE_FUNCTION",
            "EXPORT_JS"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Toda función registrada en JAXON (backend) debe retornar un objeto específico para poder enviar comandos al navegador. ¿Qué código falta?\n\nfunction funcion1($fechaYhora) {\n    $response = [_____];\n    // ... \n    return $response;\n}",
        "opciones": [
            "new AJAX()",
            "new Response()",
            "json_encode()",
            "new stdClass()"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En tu función auxiliar 'logMessage', quieres añadir un texto AL PRINCIPIO del contenedor de logs sin borrar lo anterior. ¿Qué método de JAXON utilizas?\n\nfunction logMessage(Response $r, mixed $dato) {\n    $r->[_____]('log', 'innerHTML', '<div>' . $dato . '</div>');\n}",
        "opciones": [
            "assign",
            "append",
            "prepend",
            "clear"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Quieres reemplazar todo el contenido de la tabla de películas por el nuevo HTML generado. ¿Qué método falta?\n\n$htmlPeliculas = \"<table><tbody>...\";\n$response->[_____]('listaPeliculas', 'innerHTML', $htmlPeliculas);",
        "opciones": [
            "assign",
            "prepend",
            "write",
            "append"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Tras insertar una película con éxito, quieres que JAXON ordene al navegador ejecutar automáticamente la función Javascript que recarga la lista. ¿Qué método de Response usas?\n\n$response->[_____]('jaxon_listarPeliculasRMM();');",
        "opciones": [
            "execute",
            "eval",
            "call",
            "script"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Al recibir resultados de la API de OMDB, necesitas hacer visible el contenedor que estaba oculto usando estilos CSS desde JAXON. ¿Qué parámetro falta?\n\n$response->assign('peliculasOMDB_encontradas', '[_____]', 'block');",
        "opciones": [
            "class",
            "visibility",
            "style.display",
            "css"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Antes de validar el formulario, usas un bucle para vaciar los mensajes de error mostrados previamente en la interfaz. ¿Qué método falta?\n\nforeach($campos as $campo) {\n    $response->[_____]($campo.'_errores', 'innerHTML', '');\n}",
        "opciones": [
            "clear",
            "assign",
            "delete",
            "remove"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En el index.php, usas el Request Factory de JAXON para generar un botón que envíe todos los datos de un formulario al backend. ¿Qué código falta para el Parameter Factory?\n\n<input type=\"button\" onclick=\"<?=rq()->call('registrarPeliculaRMM', [_____])?>\" value=\"Añadir\">",
        "opciones": [
            "pm()->form('nuevaPelicula')",
            "jaxon.getForm('nuevaPelicula')",
            "pm()->input('nuevaPelicula')",
            "rq()->form('nuevaPelicula')"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Para enviar un único dato HTML crudo desde la vista hacia una función JAXON en el backend usando fábricas, ¿qué método de Parameter Factory (pm) usas?\n\n<?=rq()->call('funcion2', pm()->[_____]('RMM'))?>",
        "opciones": [
            "value",
            "html",
            "string",
            "text"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En el formulario HTML, debes evitar que al pulsar 'Enter' o 'Submit' la página se recargue tradicionalmente, permitiendo que AJAX haga el trabajo. ¿Qué instrucción falta?\n\n<form id=\"nuevaPelicula\" onSubmit=\"[_____]\">",
        "opciones": [
            "preventDefault();",
            "return false;",
            "jaxon.stop();",
            "event.cancel();"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Si has registrado en PHP una función llamada 'borrarPeliculaRMM', ¿cómo se llama exactamente la función generada por la librería para invocarla desde Javascript?\n\n<button onclick='if(confirm(\"...\")) { [_____](id); }'>Borrar</button>",
        "opciones": [
            "ajax_borrarPeliculaRMM",
            "call_borrarPeliculaRMM",
            "jaxon_borrarPeliculaRMM",
            "php_borrarPeliculaRMM"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En tu script final de index.php, llamas a la carga inicial de las películas. Dado que la función PHP no requiere parámetros, ¿qué le falta a la llamada Javascript?\n\njaxon_listarPeliculasRMM[_____];",
        "opciones": [
            "(null)",
            "(false)",
            "()",
            "(this)"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Para evitar que Guzzle lance excepciones PHP si la API remota devuelve un error 404 y poder leer el status code manualmente, ¿qué opción debes añadir al instanciar el cliente?\n\n$client = new \\GuzzleHttp\\Client([[_____] => false]);",
        "opciones": [
            "'throw_exceptions'",
            "'http_errors'",
            "'catch_errors'",
            "'verify'"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En Guzzle, utilizas un método genérico para ejecutar la petición HTTP indicando el verbo 'GET' como primer parámetro. ¿Cuál es ese método?\n\n$res = $client->[_____]('GET', $url);",
        "opciones": [
            "send",
            "fetch",
            "call",
            "request"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Tras realizar la petición a OMDB, quieres procesar el cuerpo SOLO si la respuesta del servidor fue correcta (HTTP 200 OK). ¿Qué método de Guzzle usas?\n\nif ($res->[_____]() == 200) { \n    // Procesar datos...\n}",
        "opciones": [
            "getStatus",
            "getHttpCode",
            "getStatusCode",
            "getCode"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Una vez confirmado el código 200 en Guzzle, necesitas extraer el contenido recibido para pasarlo a json_decode. ¿Qué método usas para obtener el cuerpo?\n\n$body = $res->[_____]();\n$datos = json_decode($body, true);",
        "opciones": [
            "getContent",
            "getText",
            "getBody",
            "getData"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Después de decodificar el JSON de la API de OMDB, quieres asegurarte de que el formato recibido no contenía errores de sintaxis antes de usar los datos. ¿Qué función de PHP llamas?\n\nif ([_____]() !== JSON_ERROR_NONE) {\n    logMessage($response, \"Formato inválido\");\n}",
        "opciones": [
            "json_check_errors",
            "json_last_error",
            "json_validate",
            "is_valid_json"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Para enviar un título de película con espacios o acentos en una URL (API OMDB), debes evitar que la cadena se rompa. ¿Qué función PHP falta?\n\n$url = \"http://www.omdbapi.com/?apikey={$apikey}&s=\" . [_____]($titulo);",
        "opciones": [
            "htmlspecialchars",
            "utf8_encode",
            "base64_encode",
            "urlencode"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En tus modelos, utilizas una clase genérica DB para obtener el objeto de conexión a la base de datos MySQL. ¿Qué método estático falta en la llamada?\n\n$conexion = DB::[_____]();\nif (!$conexion) { return []; }",
        "opciones": [
            "getConn",
            "connect",
            "getInstance",
            "open"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Al insertar un registro usando tu modelo Pelicula, pasas un array con los valores que sustituirán las interrogaciones (?) de la sentencia SQL. ¿Qué array falta?\n\n$sql = \"INSERT INTO peliculas (...) VALUES (?, ?, ?, ?, ?, ?)\";\n$filas = DB::doSQL($conexion, $sql, [_____]);",
        "opciones": [
            "[$titulo, $genero, $direccion, $duracion, $argumento, $anio]",
            "$_POST",
            "$_GET",
            "json_encode($formulario)"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Tras un INSERT exitoso, necesitas devolver el ID autogenerado por la base de datos para registrarlo en el LOG de tu tarea. ¿Qué método del objeto de conexión PDO utilizas?\n\nif ($filasAfectadas > 0) {\n    return $conexion->[_____]();\n}",
        "opciones": [
            "insert_id",
            "lastInsertId",
            "getGeneratedId",
            "lastId"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En la función 'borrarPeliculaRMM', el enunciado pide verificar que el ID recibido sea obligatoriamente un número antes de intentar borrar. ¿Qué función PHP usas?\n\nif (![_____]($id)) {\n    logMessage($response, \"El ID no es numérico\");\n    return $response;\n}",
        "opciones": [
            "is_int",
            "is_number",
            "is_numeric",
            "ctype_digit"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Imagina que consumes una API externa usando Guzzle y necesitas enviar la información codificada directamente como un JSON en el cuerpo del POST. ¿Qué clave de array debes usar?\n\n$client->post($url, [[_____] => $datosAEnviar]);",
        "opciones": [
            "'form_params'",
            "'json'",
            "'body'",
            "'raw_data'"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Usando la librería de mapas Leaflet, al cargar las teselas de OpenStreetMap, las condiciones de uso exigen que se añada el texto de copyright. ¿Qué opción debes rellenar?\n\nL.tileLayer(url, {\n    [_____]: '&copy; OpenStreetMap'\n}).addTo(map);",
        "opciones": [
            "copyright",
            "footer",
            "attribution",
            "credits"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Si añades un marcador en Leaflet y quieres que al hacerle clic muestre un globo de texto informativo (Catedral de Cádiz), ¿qué método encadenas?\n\nlet marcador = L.marker([lat, lng]).addTo(map);\nmarcador.[_____]('Catedral de Cádiz');",
        "opciones": [
            "setTooltip",
            "bindPopup",
            "addText",
            "showInfo"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En Javascript puro, para seleccionar el botón de borrado buscando dentro del formulario por su id y tipo de input usando selectores CSS (como se muestra en el temario), ¿qué usas?\n\ndocument.[_____]('#borrarnumero input[type=button]').onclick = function() { ... };",
        "opciones": [
            "querySelector",
            "getElementById",
            "getElementsByTagName",
            "find"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Para prevalidar datos o enviar un formulario tradicional a través de fetch, Javascript cuenta con un objeto nativo que recopila todo. ¿Qué código le falta al constructor?\n\nlet formData = new FormData([_____]);",
        "opciones": [
            "this.form",
            "document.getElementById('form1')",
            "jaxon.getForm('form1')",
            "document.form1"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Si quieres consumir una URL que devuelve un documento XML (como un RSS) usando la extensión que viene habilitada por defecto en PHP, ¿qué función invocas?\n\n$xml = [_____]('http://ejemplo.com/rss');",
        "opciones": [
            "simplexml_load_string",
            "xml_parse",
            "simplexml_load_file",
            "new DOMDocument"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Una vez definidos los scripts de JAXON en PHP, debes inyectarlos en tu documento HTML. ¿Cómo incluyes la librería base que obtuviste previamente con getJs()?\n\n<?php echo [_____] ?>",
        "opciones": [
            "$jaxonScript",
            "$jaxonCss",
            "$jaxonJs",
            "$jaxon->lib()"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En la respuesta JSON de OMDB, el estado de la búsqueda viene en el atributo 'Response'. ¿Cómo verificas en PHP que devolvió verdadero (True) usando el array asociativo?\n\nif (isset($datos['Response']) && [_____] == 'True') {\n    // Mostrar películas\n}",
        "opciones": [
            "$datos->Response",
            "$datos['Response']",
            "$response->isTrue()",
            "json_decode('Response')"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Al prevalidar en Javascript puro usando expresiones regulares, ¿qué método nativo del objeto string utilizas para comprobar que solo hay números?\n\nif (!edad.[_____](/^[1-9]+$/)) { errores=true; }",
        "opciones": [
            "test",
            "match",
            "check",
            "verify"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Usando Guzzle, quieres hacer una petición GET pero necesitas enviar la API Key adjunta en la propia URL (como parámetro query string). ¿Qué clave usas en las opciones?\n\n$client->get($url, [[_____] => ['api_key' => $apiKey]]);",
        "opciones": [
            "'url_params'",
            "'get_data'",
            "'query'",
            "'parameters'"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En una petición AJAX usando el API Fetch moderno, el primer '.then()' suele procesar la respuesta para devolver el cuerpo en formato JSON y pasarlo al siguiente '.then()'. ¿Qué código falta?\n\nfetch(url).then(response => [_____])\n         .then(data => console.log(data));",
        "opciones": [
            "response.json()",
            "JSON.parse(response)",
            "response.body()",
            "response.text()"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En Jaxon, si quieres eliminar o dejar completamente vacío el contenido HTML de un 'div' localizado por su 'id', puedes usar un método rápido de la clase Response. ¿Cuál es?\n\n$response->[_____]('listaPeliculas');",
        "opciones": [
            "empty",
            "delete",
            "clear",
            "remove"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Si tienes JQuery cargado en el frontend, Jaxon te permite usar un alias para interactuar directamente con selectores CSS en el servidor. ¿Qué método de Response usas?\n\n$response->[_____]('#numero')->val(90);",
        "opciones": [
            "jquery",
            "jq",
            "selector",
            "find"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Si tu script PHP recibe una petición tipo DELETE o PUT con una carga útil codificada como un JSON crudo (raw), ¿cómo debes leer el flujo de entrada?\n\n$datos = json_decode([_____]('php://input'));",
        "opciones": [
            "$_POST",
            "fread",
            "file_get_contents",
            "filter_input"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En Javascript puro (sin usar fetch o jQuery), ¿cuál es el objeto que se debe instanciar para realizar una petición AJAX de manera tradicional?\n\nlet xhr = new [_____]();\nxhr.open('GET', 'archivo.php');",
        "opciones": [
            "XMLHttpRequest",
            "AjaxRequest",
            "HTTPRequest",
            "JaxonRequest"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Para autenticarte en un servicio externo con Guzzle usando 'HTTP Basic', debes enviar las credenciales codificadas en Base64 en una cabecera HTTP específica. ¿Cuál es la clave de esa cabecera?\n\n$client->request('GET', $url, ['headers' => [\n    '[_____]' => 'Basic ' . $auth\n]]);",
        "opciones": [
            "WWW-Authenticate",
            "Authorization",
            "Auth-Token",
            "Basic-Auth"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Si un servicio web remoto implementa autenticación HTTP Basic en PHP, ¿en qué variable superglobal automática se recibe el 'nombre de usuario' introducido?\n\n$usuario = $_SERVER['[_____]'];",
        "opciones": [
            "HTTP_AUTH_USER",
            "PHP_AUTH_USER",
            "REMOTE_USER",
            "AUTH_USERNAME"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En tu tarea, procesaste la URL del póster devuelto por OMDB. Si existía imagen, creabas una etiqueta <img> inyectando la URL en el 'src'. ¿Qué variable falta?\n\n$poster = ($peli['Poster'] != 'N/A') ? \"<img src='[_____]' ...>\" : \"Sin imagen\";",
        "opciones": [
            "{$peli['Url']}",
            "{$peli['Image']}",
            "{$peli['Poster']}",
            "{$poster}"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "El 'Parameter Factory' de JAXON (llamado usando pm()) permite generar JS dinámico para recuperar datos del HTML. ¿Qué método usas para obtener el valor de un '<input>' por su ID?\n\n<?=rq()->call('borrarPelicula', pm()->[_____]('numeroABorrar'))?>",
        "opciones": [
            "value",
            "val",
            "input",
            "get"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Al leer un documento XML procesado con SimpleXML, quieres iterar por todas las etiquetas <libro> que están dentro del elemento principal. ¿Qué sintaxis del foreach falta?\n\nforeach ($xml->libro [_____] $libro) { \n    echo $libro->titulo;\n}",
        "opciones": [
            "=>",
            "as",
            "in",
            "of"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "Usando el 'Request Factory' de JAXON (rq()) incrustado en HTML, puedes añadir un cuadro de confirmación nativo que cancelará la llamada si el usuario dice 'No'. ¿Qué método encadenas?\n\n<?=rq()->call('borrar')->[_____]('¿Estás seguro?')?>",
        "opciones": [
            "alert",
            "confirm",
            "dialog",
            "verify"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En jQuery, para interceptar el envío de un formulario (submit) y detener el comportamiento tradicional del navegador de recargar la página, debes retornar un booleano. ¿Qué instrucción usas?\n\n$('#form1').submit(function() { \n    // código ajax \n    [_____]; \n});",
        "opciones": [
            "return false",
            "return true",
            "break",
            "preventDefault()"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En Javascript puro (ECMAScript), ¿cuál es el método que se utiliza para añadir un nuevo elemento al FINAL de una estructura dinámica Array?\n\nlet a = [1-3];\na.[_____]('D');",
        "opciones": [
            "append",
            "add",
            "insert",
            "push"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tema 7 quinta parte",
        "pregunta": "En PHP, cuando obtienes el Body de la respuesta de Guzzle, este devuelve un objeto 'Stream'. Si quieres forzar que ese Stream se convierta en un texto procesable (string), ¿qué casteo u operación aplicas?\n\n$textoRecibido = [_____] $response->getBody();",
        "opciones": [
            "(string)",
            "(text)",
            "(json)",
            "parse_str"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "En Javascript, deseas añadir un nuevo elemento al final de un array existente. ¿Qué método falta en el siguiente código?\n\nlet a = [1-3];\na.[_____]('D');",
        "opciones": [
            "add",
            "push",
            "append",
            "insert"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Para acceder a un elemento del DOM mediante su atributo 'id' usando Javascript puro, ¿qué función utilizas?\n\nlet divSalida = document.[_____]('salida');",
        "opciones": [
            "querySelectorId",
            "getElementByName",
            "getElementById",
            "findId"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Si quieres utilizar un selector CSS avanzado en Javascript puro para seleccionar un <span> dentro de un div con clase 'nombreClase', ¿qué método usas?\n\ndocument.[_____]('div.nombreClase span').innerHTML = 'ejemplo';",
        "opciones": [
            "querySelector",
            "getElementsByClassName",
            "getSelector",
            "findCSS"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Utilizando la librería JQuery, ¿qué símbolo se utiliza por defecto como alias para invocar a sus funciones y seleccionar elementos del DOM?\n\nlet lista1 = [_____]('#ejemplo');",
        "opciones": [
            "jQuery()",
            "J()",
            "$",
            "_"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "En JQuery, ¿qué método encadenado debes usar para añadir una nueva clase CSS a un elemento previamente seleccionado?\n\n$('#salida').[_____]('caja');",
        "opciones": [
            "setClass",
            "addClass",
            "css",
            "appendClass"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "En JQuery, si deseas insertar contenido HTML justo al FINAL del contenido actual de un contenedor, ¿qué método utilizas?\n\n$('#salida').[_____]('<B>valor</B>');",
        "opciones": [
            "insertAfter",
            "push",
            "append",
            "html"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Al interceptar el envío de un formulario en Javascript (evento onsubmit) para hacer una petición AJAX, necesitas recopilar todos sus datos. ¿Qué pasas al constructor de FormData si estás dentro de la propia función del evento?\n\ndocument.getElementById('form1').onsubmit = function() {\n  let formData = new FormData([_____]);\n};",
        "opciones": [
            "document",
            "this",
            "form1",
            "self"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Configurando una petición AJAX antigua con XMLHttpRequest, ¿qué método establece el tipo de verbo HTTP y la URL de destino?\n\nvar xmlhttp = new XMLHttpRequest();\nxmlhttp.[_____]('GET', 'backend/listarnumeros.php');",
        "opciones": [
            "start",
            "init",
            "open",
            "connect"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Para verificar que una petición XMLHttpRequest ha finalizado por completo, ¿qué constante se evalúa en la propiedad readyState?\n\nif (this.readyState == XMLHttpRequest.[_____] && this.status == 200) { ... }",
        "opciones": [
            "FINISHED",
            "DONE",
            "COMPLETE",
            "OK"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Usando el API moderno fetch() en Javascript, ¿en qué propiedad del objeto de configuración indicas el verbo HTTP a usar?\n\nfetch('backend/nuevonumero.php', {\n  [_____]: 'POST',\n  body: formData\n})",
        "opciones": [
            "type",
            "action",
            "method",
            "verb"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Haciendo uso del método abreviado de JQuery para peticiones POST, ¿qué método encadenado gestiona la respuesta si la petición AJAX tuvo éxito?\n\n$.post('backend.php', datos).[_____](function (respuesta) {\n  console.log(respuesta);\n});",
        "opciones": [
            "success",
            "then",
            "done",
            "ok"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "En un servicio REST, si deseas enviar los datos codificados directamente como JSON crudo desde Javascript, ¿qué cabecera debes configurar obligatoriamente en tu petición?\n\n[_____]: application/json",
        "opciones": [
            "Data-Type",
            "Accept",
            "Content-Type",
            "X-Requested-With"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Para inicializar el objeto base de JAXON en tu archivo setup.php, usas la función auxiliar. ¿Qué código falta?\n\n$jaxon = [_____]();",
        "opciones": [
            "new Jaxon",
            "jaxon",
            "JaxonFactory",
            "getJaxon"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Configurando JAXON, debes decirle a la librería qué archivo PHP atenderá las peticiones AJAX en el servidor. ¿Qué propiedad ajustas en setOption?\n\n$jaxon->setOption('[_____]', 'backend.php');",
        "opciones": [
            "core.request.uri",
            "ajax.backend.url",
            "server.script.path",
            "jaxon.ajax.handler"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "En la función 'logMessage' de tu tarea, usas un método del objeto Response de JAXON para inyectar el texto AL PRINCIPIO de la caja de logs. ¿Cuál es?\n\n$r->[_____]('log', 'innerHTML', '<div>Texto</div>');",
        "opciones": [
            "assign",
            "append",
            "prepend",
            "insertFirst"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "En tu tarea, tras guardar una película y borrar los mensajes de error visuales, debes vaciar el input HTML para que el usuario pueda escribir de nuevo. ¿Qué atributo cambias con assign?\n\n$response->assign($campo, '[_____]', '');",
        "opciones": [
            "innerHTML",
            "text",
            "value",
            "placeholder"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Generando un botón en HTML con PHP y JAXON, quieres recopilar automáticamente TODOS los datos del formulario 'nuevaPelicula'. ¿Qué método de la factoría 'pm()' usas?\n\n<?=rq()->call('registrarPeliculaRMM', pm()->[_____]('nuevaPelicula'))?>",
        "opciones": [
            "serialize",
            "form",
            "inputs",
            "getValues"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Antes de validar el formulario de películas, utilizas un bucle para limpiar visualmente las etiquetas 'span' de error. ¿Qué valor envías al innerHTML?\n\nforeach($campos as $campo) {\n  $response->assign($campo.'_errores', 'innerHTML', [_____]);\n}",
        "opciones": [
            "null",
            "false",
            "''",
            "0"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Al generar un botón de borrado con JAXON (Request Factory), ¿qué método encadenas para que aparezca una alerta nativa preguntando al usuario si está seguro, deteniendo la petición si cancela?\n\n<?=rq()->call('borrarPeliculaRMM', 5)->[_____]('¿Seguro que deseas borrarla?')?>",
        "opciones": [
            "alert",
            "confirm",
            "prompt",
            "verify"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Al usar el cliente HTTP Guzzle en tu función de buscar películas en OMDB, omites que PHP lance excepciones ante códigos 404 configurando el cliente. ¿Qué clase instancias?\n\n$client = new \\[_____](['http_errors' => false]);",
        "opciones": [
            "GuzzleHttp\\Request",
            "GuzzleHttp\\Client",
            "GuzzleHttp\\Connection",
            "GuzzleHttp\\Api"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Para realizar la consulta a la API remota de OMDB, debes llamar a un método del cliente Guzzle indicando el verbo HTTP (GET) y la URL. ¿Qué método es?\n\n$res = $client->[_____]('GET', $url);",
        "opciones": [
            "send",
            "fetch",
            "request",
            "call"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Tras una petición HTTP exitosa con Guzzle, extraes el cuerpo de la respuesta y luego lo transformas a un array PHP asociativo con decodificación JSON. ¿Qué método usas para extraer el cuerpo?\n\n$datos = json_decode($res->[_____](), true);",
        "opciones": [
            "getText",
            "getBody",
            "getContents",
            "getJson"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Tras usar json_decode(), aplicas una validación de seguridad para confirmar que el JSON recibido de la API de OMDB no está corrupto o mal formado. ¿Qué función de PHP utilizas?\n\nif ([_____]() !== JSON_ERROR_NONE) { logMessage(...); }",
        "opciones": [
            "json_check_errors",
            "is_valid_json",
            "json_validate",
            "json_last_error"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Para insertar el título introducido por el usuario en la URL de OMDB, debes asegurarte de codificar los espacios y caracteres especiales de forma segura. ¿Qué función nativa usas?\n\n$url = 'http://www.omdbapi.com/?apikey=...&s=' . [_____]($titulo);",
        "opciones": [
            "base64_encode",
            "urlencode",
            "htmlspecialchars",
            "utf8_encode"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "En tu función registrarPeliculaRMM, lo primero que haces es sanear los datos del formulario eliminando los espacios en blanco sobrantes a izquierda y derecha. ¿Qué función usas?\n\n$titulo = [_____]($formulario['titulo'] ?? '');",
        "opciones": [
            "strip_tags",
            "trim",
            "clean",
            "htmlspecialchars"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "En tu modelo PDO (Pelicula::insertar), una vez ejecutado el INSERT exitosamente, devuelves el ID autonumérico que MySQL le ha asignado al registro. ¿Qué método de la conexión llamas?\n\nreturn $conexion->[_____]();",
        "opciones": [
            "insert_id",
            "lastId",
            "lastInsertId",
            "getGeneratedId"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "En Pelicula::borrar, la consulta SQL utiliza consultas preparadas para evitar Inyección SQL. ¿Qué comodín pones en la sentencia para vincular luego el parámetro?\n\n$sql = 'DELETE FROM peliculas WHERE id = [_____]';",
        "opciones": [
            "?",
            ":id",
            "%s",
            "$1"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Construyendo las opciones del `<select>` de géneros mediante PHP, interpolas variables dentro de comillas dobles. ¿Qué variable usas para imprimir el texto visible del género?\n\n$htmlGeneros .= \"<option value='{$genero['id']}'>[_____]</option>\";",
        "opciones": [
            "{$genero['nombre']}",
            "{$genero['value']}",
            "{$genero['text']}",
            "{$genero['titulo']}"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Iniciando un mapa con Leaflet en un div preparado en el HTML, utilizas el objeto global 'L'. ¿Qué método crea la instancia del mapa pasándole el ID del contenedor?\n\nvar map = L.[_____]('map');",
        "opciones": [
            "createMap",
            "init",
            "map",
            "new"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "En Leaflet, para decirle al mapa de dónde debe cargar las imágenes (teselas) de OpenStreetMap, debes crear la capa y añadirla. ¿Qué función genera esta capa?\n\nL.[_____](osm_tile_template, { attribution: '&copy; OpenStreetMap' }).addTo(map);",
        "opciones": [
            "addLayer",
            "tileLayer",
            "imageLayer",
            "mapLayer"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Para centrar el mapa de Leaflet en unas coordenadas concretas (latitud y longitud) con un zoom predeterminado, se utiliza el siguiente método:\n\nmap.[_____]([latitud, longitud], zoom);",
        "opciones": [
            "setCenter",
            "setView",
            "focus",
            "locate"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Al instanciar un marcador en Leaflet, si deseas que al pulsarlo se despliegue un globo con texto informativo, le vinculas un popup con el siguiente método:\n\nmarker.[_____]('Catedral de Cádiz');",
        "opciones": [
            "addTooltip",
            "setInfo",
            "showText",
            "bindPopup"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Al autenticarte en una API REST externa que exige 'HTTP Basic', debes enviar el usuario y contraseña codificados en Base64 en las cabeceras usando Guzzle. ¿Qué palabra precede a la cadena en la cabecera?\n\n$headers = ['Authorization' => '[_____] ' . base64_encode($u.':'.$p)];",
        "opciones": [
            "Bearer",
            "Token",
            "Basic",
            "Digest"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Si un servicio web remoto te autentica a través de sesiones en lugar de Tokens, el servidor PHP almacena los datos en la variable superglobal asociada. ¿Cuál es?\n\n[_____]['auth'] = $user;",
        "opciones": [
            "$_COOKIE",
            "$_SERVER",
            "$_SESSION",
            "$_POST"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Para que Guzzle almacene automáticamente las cookies de sesión devueltas por un servidor (como PHPSESSID) y las reenvíe en las siguientes llamadas, se instancia la siguiente clase:\n\n$jar = new \\GuzzleHttp\\Cookie\\[_____];",
        "opciones": [
            "CookieJar",
            "SessionManager",
            "CookieStore",
            "SessionJar"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Usando Guzzle para hacer una petición POST a una API REST, si deseas que los datos del array asociativo `$datosNuevoMonumento` se codifiquen automáticamente a JSON, usas esta clave en el array de opciones:\n\n$options = ['cookies' => $jar, '[_____]' => $datosNuevoMonumento];",
        "opciones": [
            "form_params",
            "body",
            "raw",
            "json"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Para procesar un feed RSS (que es XML) desde un string o un archivo de forma nativa en PHP convirtiéndolo en un objeto fácilmente iterable, se utiliza la función:\n\n$xml = [_____]($cadena_o_archivo);",
        "opciones": [
            "simplexml_load_string",
            "xml_parse",
            "DOMDocument_load",
            "json_decode"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "En un objeto de la clase SimpleXMLElement de PHP, si el documento XML contiene múltiples nodos `<libro>`, puedes iterarlos de forma sencilla con un foreach. ¿Cómo referencias esos nodos?\n\nforeach ($xml->[_____] as $libro)",
        "opciones": [
            "nodes('libro')",
            "libro",
            "getChildren('libro')",
            "elements"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Si configuras tu propio script PHP para que proteja los recursos solicitando autenticación HTTP Basic al navegador, la contraseña tecleada por el usuario llega automáticamente a PHP a través de:\n\n$pass = $_SERVER['[_____]'];",
        "opciones": [
            "PHP_AUTH_PW",
            "HTTP_PASSWORD",
            "AUTH_PASS",
            "REMOTE_PASS"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Cuando tu API REST recibe una petición PUT o DELETE y los datos vienen codificados en el cuerpo del mensaje como JSON crudo (en lugar de form-urlencoded), ¿de dónde debe leerlos PHP?\n\n$datos = json_decode(file_get_contents('[_____]'));",
        "opciones": [
            "php://input",
            "$_POST",
            "php://stdin",
            "$_JSON"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "En Javascript, la propiedad length sirve para conocer el número de elementos de un array. ¿Cómo se utiliza en el código?\n\nlet longitudDeArray = a.[_____];",
        "opciones": [
            "size()",
            "count()",
            "length",
            "getLength()"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Para realizar la consulta en la API de OMDB, debías incrustar tu propia API Key en la URL como un parámetro de consulta (Query String). ¿Cuál es el nombre exacto de ese parámetro según tu código?\n\n$url = 'http://www.omdbapi.com/?[_____]={$apikey}&s=Batman';",
        "opciones": [
            "key",
            "token",
            "apikey",
            "auth"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Al configurar una petición GET con Guzzle en la que debes enviar cabeceras personalizadas (como tokens de autenticación), utilizas un array de opciones. ¿Qué clave principal envuelve a las cabeceras?\n\n$response = $clienteHTTP->request('GET', $url, ['[_____]' => $headers]);",
        "opciones": [
            "http_headers",
            "head",
            "auth",
            "headers"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Es una buena práctica englobar las peticiones Guzzle en un bloque Try-Catch para gestionar caídas del servidor remoto o errores 404/500 no silenciados. ¿Qué tipo de excepción específica capturas?\n\ncatch (GuzzleHttp\\Exception\\[_____] $e)",
        "opciones": [
            "ConnectionError",
            "HttpException",
            "RequestException",
            "GuzzleException"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Si un usuario no envía credenciales válidas a tu API protegida con HTTP Basic, debes responderle exigiendo autenticación. ¿Qué cabecera HTTP debes forzar con la función header() en PHP?\n\nheader('[_____]: Basic realm=\"APP\"');",
        "opciones": [
            "WWW-Authenticate",
            "Authorization-Required",
            "HTTP-Auth",
            "Request-Auth"
        ],
        "correcta": 0
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "En Javascript puro, para pre-validar que un input de texto (como la edad) contenga exclusivamente números, se suele usar una expresión regular. ¿Qué método del String ejecuta esta comprobación?\n\nif (!edad.[_____](/^[1-9]+$/)) { error = true; }",
        "opciones": [
            "test",
            "check",
            "match",
            "verify"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "En el script backend.php de JAXON, justo después de comprobar si hay una petición válida entrante, debes ordenar a la librería que despache la función. ¿Qué método invocas?\n\nif(jaxon()->canProcessRequest()) { jaxon()->[_____](); }",
        "opciones": [
            "execute",
            "run",
            "processRequest",
            "handle"
        ],
        "correcta": 2
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "En los modelos (como Pelicula o Genero) de la tarea, en caso de fallo al instanciar la conexión con PDO, dejas constancia en el log de PHP utilizando un método de tu clase DB. ¿Cuál es?\n\nerror_log(DB::[_____]());",
        "opciones": [
            "fetchError",
            "getLastError",
            "errorInfo",
            "getPDOError"
        ],
        "correcta": 1
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Tal y como ha recalcado el profesor, ¿qué instrucción esencial de la herramienta de consola de dependencias de PHP se debe ejecutar para instalar Jaxon según lo definido en el archivo json?\n\ncomposer [_____] jaxon-php/jaxon-core:~4.1",
        "opciones": [
            "add",
            "install",
            "download",
            "require"
        ],
        "correcta": 3
    },
    {
        "tema": "repaso tema 7 sexta parte",
        "pregunta": "Si el cliente web manda una petición AJAX a PHP pero Jaxon no ha registrado ninguna función manejadora en el servidor, ¿qué ocurre con el objeto de respuesta?\n\njaxon()->register(Jaxon::[_____], 'listarPeliculasRMM');",
        "opciones": [
            "AJAX_FUNCTION",
            "REGISTER_METHOD",
            "CALLABLE_FUNCTION",
            "EXPORT_JS"
        ],
        "correcta": 2
    },
    {
        "tema": "Migración de críticas tema5",
        "pregunta": "Dado el siguiente código de la migración:\n\nSchema::create('criticas', function (Blueprint $table) {\n    $table->id();\n    $table->integer('valoracion');\n    $table->tinyText('comentario');\n    $table->foreignId('pelicula')->constrained('peliculas')->onDelete('cascade')->onUpdate('cascade');\n    $table->timestamps();\n});\n\n¿Qué tipo de campo y con qué propósito se genera al ejecutar la instrucción `$table->id();`? [1, 2]",
        "opciones": [
            "Crea un campo 'id' de texto para almacenar el DNI del usuario.",
            "Crea un campo llamado 'id' que actúa como clave primaria autoincremental de la tabla.",
            "Crea una clave foránea genérica llamada 'id'.",
            "Crea un identificador único global (UUID) de 36 caracteres."
        ],
        "correcta": 1
    },
    {
        "tema": "Migración de críticas tema5",
        "pregunta": "En base al siguiente fragmento de código:\n\nSchema::create('criticas', function (Blueprint $table) {\n    $table->id();\n    $table->integer('valoracion');\n    $table->tinyText('comentario');\n    $table->foreignId('pelicula')->constrained('peliculas')->onDelete('cascade')->onUpdate('cascade');\n    $table->timestamps();\n});\n\n¿Qué indica la instrucción `constrained('peliculas')` encadenada a `$table->foreignId('pelicula')`? [1, 3]",
        "opciones": [
            "Renombra la columna de 'pelicula' a 'peliculas'.",
            "Obliga a que la columna 'pelicula' no pueda quedar vacía (NOT NULL).",
            "Establece una restricción de clave foránea que vincula el campo 'pelicula' con la clave primaria de la tabla 'peliculas'.",
            "Comprueba que la tabla 'peliculas' esté vacía antes de insertar una crítica."
        ],
        "correcta": 2
    },
    {
        "tema": "Migración de críticas tema5",
        "pregunta": "Observa el siguiente código donde se establecen las claves foráneas:\n\n$table->foreignId('pelicula')->constrained('peliculas')->onDelete('cascade')->onUpdate('cascade');\n$table->foreignId('usuario')->constrained('users')->onDelete('cascade')->onUpdate('cascade');\n\n¿Qué sucedería en la base de datos si se elimina el registro de un usuario en la tabla 'users' debido a la instrucción `onDelete('cascade')`? [1]",
        "opciones": [
            "La base de datos impedirá que el usuario sea borrado mostrando un error de restricción.",
            "El campo 'usuario' en la tabla de críticas pasará a tener un valor nulo.",
            "Se borrarán automáticamente todas las críticas que estuvieran asociadas a ese usuario eliminado.",
            "Se borrará la película asociada a las críticas de ese usuario."
        ],
        "correcta": 2
    },
    {
        "tema": "Migración de críticas tema5",
        "pregunta": "Dado el siguiente bloque de código:\n\nSchema::create('criticas', function (Blueprint $table) {\n    $table->id();\n    $table->integer('valoracion');\n    $table->tinyText('comentario');\n    // ... \n    $table->timestamps();\n});\n\n¿Qué efecto tiene la llamada a `$table->timestamps();` al aplicar esta migración a la base de datos? [1, 4]",
        "opciones": [
            "Registra en un archivo de log de Laravel la hora exacta en la que se ejecutó la migración.",
            "Genera automáticamente dos columnas en la tabla para registrar la fecha y hora de creación (`created_at`) y de última actualización (`updated_at`).",
            "Crea un único campo llamado 'timestamps' de tipo numérico.",
            "Actualiza el campo 'comentario' para que siempre incluya la fecha en la que se escribió."
        ],
        "correcta": 1
    },
    {
        "tema": "Migración de críticas tema5",
        "pregunta": "Analiza el siguiente fragmento de código de la migración:\n\npublic function down(): void\n{\n    Schema::dropIfExists('criticas');\n}\n\n¿Cuál es la finalidad de este método `down()` y qué instrucción ejecuta exactamente en la base de datos? [1, 5]",
        "opciones": [
            "Se utiliza para deshacer la migración (rollback) y elimina la tabla 'criticas' de la base de datos si esta existe.",
            "Se utiliza para vaciar todos los registros de la tabla 'criticas', dejando su estructura intacta.",
            "Se utiliza para crear la tabla 'criticas' de nuevo si esta ha sido borrada accidentalmente.",
            "Actualiza la tabla 'criticas' con las nuevas columnas añadidas en el código."
        ],
        "correcta": 0
    },
    {
        "tema": "Migración de críticas tema5",
        "pregunta": "Dado el siguiente código:\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('criticas', function (Blueprint $table) { \n            $table->id(); \n            $table->integer('valoracion');\n            // ...\n        });\n    }\n};\n\nSi ejecutamos el comando `php artisan migrate`, ¿qué función cumple exactamente el método `up()` dentro de esta clase? [1, 5]",
        "opciones": [
            "Deshace los cambios recientes introducidos en la tabla 'criticas'.",
            "Sube el archivo de la migración al servidor de producción remoto.",
            "Contiene las instrucciones necesarias (como Schema::create) que se aplicarán para agregar nuevas tablas o columnas a la base de datos.",
            "Genera datos de prueba falsos para rellenar la tabla recién creada."
        ],
        "correcta": 2
    },
    {
        "tema": "Migración de críticas tema5",
        "pregunta": "Observa el siguiente fragmento al que le falta una palabra clave:\n\nSchema::create('criticas', function (Blueprint $table) {\n    $table->id();\n    $table->____('valoracion');\n    $table->tinyText('comentario');\n    //...\n});\n\nSabiendo que el campo 'valoracion' de la crítica debe almacenar un número entero en la base de datos, ¿qué palabra completaría correctamente el código? [1]",
        "opciones": [
            "number",
            "numeric",
            "int",
            "integer"
        ],
        "correcta": 3
    },
    {
        "tema": "Migración de críticas tema5",
        "pregunta": "Dado el siguiente código incompleto de la migración:\n\nSchema::create('criticas', function (Blueprint $table) {\n    $table->id();\n    $table->integer('valoracion');\n    $table->tinyText('comentario');\n    $table->____('pelicula')->constrained('peliculas');\n});\n\n¿Qué método de Laravel se usa en el hueco indicado para definir un campo que actuará como clave foránea (almacenando un ID vinculado a otra tabla)? [1, 3]",
        "opciones": [
            "foreignId",
            "primaryKey",
            "referenceId",
            "relationId"
        ],
        "correcta": 0
    },
    {
        "tema": "Migración de críticas tema5",
        "pregunta": "Dado el siguiente fragmento inicial donde se define la clase de la migración:\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends ____\n{\n    public function up(): void { ... }\n};\n\n¿De qué clase base de Laravel hereda esta clase anónima para poder ejecutar los cambios en la estructura de la base de datos? [1]",
        "opciones": [
            "Blueprint",
            "Schema",
            "Migration",
            "Database"
        ],
        "correcta": 2
    },
    {
        "tema": "Migración de críticas tema5",
        "pregunta": "Dado el siguiente código:\n\nSchema::create('criticas', function (Blueprint $table) {\n    // ...\n    $table->tinyText('comentario');\n    // ...\n});\n\n¿A qué equivale el uso del método `tinyText` dentro del esquema de Blueprint de Laravel? [1]",
        "opciones": [
            "A crear una columna de texto numérico que almacena un máximo de 10 dígitos.",
            "A crear una columna en la base de datos de tipo texto pequeño, ideal para comentarios cortos.",
            "A encriptar el comentario insertado para que ocupe menos espacio en el disco duro del servidor.",
            "A generar una etiqueta de texto HTML invisible en la vista final de la aplicación."
        ],
        "correcta": 1
    }






];