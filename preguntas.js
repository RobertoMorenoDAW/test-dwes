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
    }






];