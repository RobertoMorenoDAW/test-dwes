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
        "tema": "Unidad 7 - Tarea (JAXON y DOM)",
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
        "tema": "Unidad 7 - Tarea (JAXON y Validación)",
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
        "tema": "Unidad 7 - Tarea (Guzzle y APIs)",
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
        "tema": "Unidad 7 - Tarea (JAXON Frontend/Backend)",
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
        "tema": "Unidad 7 - Tarea (JSON en PHP)",
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
        "tema": "Unidad 7 - Tarea (Frontend JAXON)",
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
        "tema": "Unidad 7 - Tarea (Validación OMDB)",
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
        "tema": "Unidad 7 - Tarea (JAXON DOM y Estilos)",
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
        "tema": "Unidad 7 - Tarea (Lógica de Modelos de Base de Datos)",
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
        "tema": "Unidad 7 - Tarea (Ciclo de vida JAXON)",
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
    }






];