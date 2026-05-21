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
    }






];