import { useState, useEffect, useRef } from "react";

const PHASES = [
  {
    id: 1, shortLabel: "Model flip", title: "Mental model flip",
    col: "#534AB7", bg: "#EEEDFE", tc: "#3C3489", duration: "2–3 weeks",
    groups: [
      { name: "HTTP & networking", topics: [
        "Full request/response lifecycle — from the server's perspective",
        "HTTP methods: GET, POST, PUT, PATCH, DELETE — what each one means semantically",
        "HTTP headers: Content-Type, Authorization, Accept, CORS headers",
        "Status codes you send: 200, 201, 204, 400, 401, 403, 404, 409, 422, 500",
        "Request body formats: JSON, form-urlencoded, multipart/form-data",
        "URL anatomy: protocol, host, pathname, query string, fragment",
      ]},
      { name: "Node.js basics", topics: [
        "What Node.js is: V8 engine + libuv (not a browser runtime)",
        "Installing Node.js with nvm — managing multiple versions",
        "Running scripts: node index.js",
        "process object: process.env, process.argv, process.exit(), process.cwd()",
        "Module system: require() / CommonJS vs import / ESM — differences and when to use each",
        "package.json: scripts, dependencies, devDependencies, main, type fields",
        "npm essentials: install, run, init, uninstall, update, ci",
      ]},
      { name: "Environment & config", topics: [
        ".env file format: KEY=value pairs, no spaces around =",
        "dotenv package: require('dotenv').config() — where to call it",
        "Reading variables: process.env.MY_VAR",
        ".gitignore: always exclude .env — never commit secrets",
        ".env.example: template file documenting required variables",
      ]},
      { name: "First raw HTTP server", topics: [
        "Node.js built-in http module — no install needed",
        "http.createServer((req, res) => {}) pattern",
        "req object: req.url, req.method, req.headers",
        "res.writeHead(statusCode, headersObject)",
        "res.end(body) — sending the response",
        "Manual routing: if/else on req.url + req.method",
        "Sending JSON: JSON.stringify() + Content-Type: application/json header",
        "Parsing incoming JSON body: req.on('data') + req.on('end') pattern",
      ]},
    ]
  },
  {
    id: 2, shortLabel: "Node core", title: "Node.js core",
    col: "#BA7517", bg: "#FAEEDA", tc: "#633806", duration: "3–4 weeks",
    groups: [
      { name: "Event loop & async model", topics: [
        "Call stack, Web APIs, task queue — how the three interact",
        "Microtask queue vs macrotask queue — execution order",
        "setTimeout, setInterval, setImmediate, process.nextTick — differences",
        "Why Node.js is non-blocking despite being single-threaded",
        "Promise execution order in the event loop",
        "async/await desugared — what it compiles to under the hood",
        "Blocking vs non-blocking operations — when it matters",
      ]},
      { name: "Streams & file system", topics: [
        "What a Buffer is — binary data representation in Node.js",
        "Readable, Writable, Duplex, Transform — stream types",
        "pipe() method — connecting a readable stream to a writable",
        "fs.promises: readFile, writeFile, appendFile, unlink, mkdir",
        "path module: join(), resolve(), dirname(), basename(), extname()",
        "__dirname and __filename (CJS) vs import.meta.url (ESM)",
        "fs.readdir() + fs.stat() — working with directories",
        "Streaming large files vs readFile — when to choose which",
      ]},
      { name: "Error handling patterns", topics: [
        "try/catch with async/await — the correct pattern",
        "Unhandled promise rejections — why they crash production apps",
        "process.on('unhandledRejection') and 'uncaughtException' handlers",
        "Error object anatomy: message, name, stack",
        "Custom error classes extending Error with extra fields",
        "Error-first callbacks (legacy pattern — you'll still encounter it)",
        "Operational errors vs programmer errors — the distinction",
      ]},
      { name: "Advanced async patterns", topics: [
        "Promise.all() — parallel, fails fast on first rejection",
        "Promise.allSettled() — parallel, never throws, returns all results",
        "Promise.race() — resolves/rejects with the first to settle",
        "Promise.any() — resolves with the first to fulfill",
        "Sequential async with for...of loops (not forEach!)",
        "Async iterators: for await...of",
        "AbortController + AbortSignal — cancellation pattern",
      ]},
      { name: "npm ecosystem", topics: [
        "Semantic versioning: major.minor.patch — what each bump means",
        "package.json version ranges: ^ (minor), ~ (patch), exact",
        "package-lock.json — purpose and when to commit it",
        "npm scripts: pre/post hooks, chaining with &&",
        "Global vs local package install — when each makes sense",
        "npx — run a package without installing globally",
        "Workspaces — monorepo basics",
      ]},
      { name: "Build a CRUD server (no framework)", topics: [
        "Router class: store routes as method+path → handler map",
        "Middleware concept: function(req, res, next) chain",
        "Body parser middleware: handle incoming JSON without a library",
        "In-memory storage: Map or plain object as 'database'",
        "JSON file storage: read → parse → modify → write cycle",
        "CRUD for one resource: create, read all, read one, update, delete",
        "Consistent JSON error format: { statusCode, message, error }",
      ]},
    ]
  },
  {
    id: 3, shortLabel: "NestJS + DB", title: "NestJS + database",
    col: "#0F6E56", bg: "#E1F5EE", tc: "#085041", duration: "6–8 weeks",
    groups: [
      { name: "NestJS architecture", topics: [
        "What NestJS is — opinionated Node.js framework, Angular-inspired DI system",
        "NestJS CLI: npm i -g @nestjs/cli, nest new, nest generate",
        "Module: feature container — groups controllers, services, providers",
        "@Module() decorator: imports, controllers, providers, exports arrays",
        "Controller: handles HTTP requests, maps routes to methods",
        "@Controller('prefix'), @Get(), @Post(), @Put(), @Patch(), @Delete()",
        "Service: holds business logic and data access — the brain of a feature",
        "@Injectable() — marks a class as a provider the DI container can manage",
        "Dependency Injection: declare a type in constructor → NestJS provides it",
        "AppModule: root module, bootstrapped in main.ts with NestFactory.create()",
        "Feature modules: UsersModule, AuthModule, ProductsModule pattern",
        "Imports/exports between modules — how providers are shared",
        "@Global() decorator — app-wide singleton providers",
      ]},
      { name: "DTOs & validation", topics: [
        "What a DTO is: Data Transfer Object — defines shape of incoming data",
        "class-validator: @IsString, @IsEmail, @IsNumber, @IsBoolean, @IsUUID",
        "@IsNotEmpty, @IsOptional, @MinLength, @MaxLength, @Min, @Max, @IsEnum",
        "class-transformer: plainToInstance, @Exclude, @Expose, @Transform",
        "ValidationPipe: register globally in main.ts with app.useGlobalPipes()",
        "transform: true — auto-convert plain objects to class instances",
        "whitelist: true — strip properties not in the DTO",
        "ParseIntPipe, ParseUUIDPipe, ParseBoolPipe — parameter transforms",
        "@ValidateNested() + @Type(() => ChildDto) — validating nested DTOs",
        "Custom validator: @ValidatorConstraint + @Validate() decorator",
      ]},
      { name: "HTTP mechanics in NestJS", topics: [
        "@Body(), @Param('id'), @Query('page'), @Headers('x-api-key')",
        "Route parameters: /users/:id — @Param('id') extracts it",
        "Query strings: /users?page=2&limit=10 — @Query() extracts as object",
        "HTTP exceptions: NotFoundException, BadRequestException, UnauthorizedException, ForbiddenException, ConflictException",
        "Exception filters: ExceptionFilter interface, @Catch() decorator",
        "Global exception filter: app.useGlobalFilters(new AllExceptionsFilter())",
        "Interceptors: transform response, add logging, measure timing",
        "@UseInterceptors() at method, controller, or global level",
        "ExecutionContext: access request and response in guards/interceptors",
        "NestJS middleware: NestMiddleware interface, configure() in module",
        "@Req() and @Res() — escape hatch to raw Express request/response",
      ]},
      { name: "PostgreSQL fundamentals", topics: [
        "What PostgreSQL is — relational DB, ACID compliant, open source",
        "Running PostgreSQL locally via Docker: docker run --name pg -e POSTGRES_PASSWORD=pass -p 5432:5432 postgres",
        "psql CLI: connect, \\l (list DBs), \\c (connect), \\dt (tables), \\d tablename",
        "Core SQL: SELECT, INSERT INTO, UPDATE, DELETE, WHERE, ORDER BY, LIMIT, OFFSET",
        "Data types: VARCHAR, TEXT, INTEGER, BIGINT, BOOLEAN, TIMESTAMP, UUID, JSONB",
        "Constraints: NOT NULL, UNIQUE, DEFAULT, CHECK",
        "Primary key and foreign key — referential integrity",
        "INNER JOIN, LEFT JOIN — fetching related records",
        "Transactions: BEGIN, COMMIT, ROLLBACK — atomicity guarantee",
        "Indexes: what they are, B-tree index, when to add one",
        "N+1 query problem — what it is, why it kills performance",
        "Connection pooling — why you reuse connections instead of opening new ones",
      ]},
      { name: "Prisma ORM", topics: [
        "What Prisma is: schema-first ORM with type-safe query client",
        "prisma init — creates schema.prisma + sets up DATABASE_URL in .env",
        "schema.prisma: datasource block, generator block, model blocks",
        "Field types: String, Int, Boolean, DateTime, Float, Json, Bytes",
        "Field attributes: @id, @default(), @unique, @updatedAt, @map()",
        "Model-level attributes: @@unique, @@index, @@map()",
        "Relations: one-to-many, many-to-many (implicit join table), one-to-one",
        "@relation() — explicit relation with fields and references",
        "prisma generate — regenerates the type-safe Prisma Client",
        "CRUD: create, findMany, findUnique, findFirst, update, upsert, delete, deleteMany",
        "Where filters: equals, contains, startsWith, endsWith, gt, lt, gte, lte, in, not",
        "select: return only specific fields",
        "include: eager-load related records — prevents N+1",
        "Pagination: skip + take pattern",
        "Transactions: prisma.$transaction([...ops]) and interactive transactions",
        "Migrations: npx prisma migrate dev (dev) vs prisma migrate deploy (prod)",
        "Seeding: prisma/seed.ts + prisma.config.js seed command",
        "Prisma Studio: npx prisma studio — visual DB browser in browser",
      ]},
      { name: "REST API design", topics: [
        "Resource naming: plural nouns — /users, /products, /orders",
        "HTTP method semantics: GET (read), POST (create), PUT (full replace), PATCH (partial update), DELETE (remove)",
        "Idempotency: GET, PUT, DELETE are idempotent — POST is not",
        "Nested resources: /users/:userId/posts/:postId",
        "Offset pagination: ?page=2&limit=10 — simple, has drift issues",
        "Cursor pagination: ?cursor=lastId&limit=10 — stable, better for real-time",
        "Filtering: ?status=active&category=shoes — query params",
        "Sorting: ?sortBy=createdAt&order=desc — query params",
        "API versioning: /v1/users (URL) vs Accept-Version header",
        "Soft delete pattern: deletedAt timestamp instead of real DELETE",
        "UUID vs auto-increment IDs — tradeoffs",
        "createdAt and updatedAt on every Prisma model",
      ]},
      { name: "Swagger / OpenAPI", topics: [
        "@nestjs/swagger installation + DocumentBuilder setup in main.ts",
        "SwaggerModule.createDocument() and SwaggerModule.setup('/api', app, doc)",
        "@ApiTags('users') — group related endpoints in Swagger UI",
        "@ApiOperation({ summary: 'Get all users' }) — describe an endpoint",
        "@ApiProperty() on DTO fields — documents request body schema",
        "@ApiPropertyOptional() — for optional DTO fields",
        "@ApiResponse({ status: 200, type: UserDto }) — document response shape",
        "@ApiBearerAuth() — mark JWT-protected endpoints",
        "Testing endpoints live in Swagger UI at /api",
      ]},
    ]
  },
  {
    id: 4, shortLabel: "Auth", title: "Auth + security",
    col: "#185FA5", bg: "#E6F1FB", tc: "#0C447C", duration: "3–4 weeks",
    groups: [
      { name: "JWT fundamentals", topics: [
        "JWT structure: header.payload.signature — three base64url-encoded parts",
        "Header: alg (HS256, RS256) + typ: JWT",
        "Payload: sub, iat, exp — reserved claims + your custom claims",
        "Signature: HMAC-SHA256 or RSA — prevents tampering",
        "Access token: short-lived (15min–1hr) — sent with every request",
        "Refresh token: long-lived (7–30 days) — used only to get new access tokens",
        "Token storage options: httpOnly cookies (CSRF risk) vs memory (XSS safer)",
        "Refresh token rotation: issue new refresh token on every use",
        "Token revocation: blocklist in Redis or DB for forced logout",
        "jwt.io — inspect and verify tokens manually in browser",
      ]},
      { name: "Auth implementation in NestJS", topics: [
        "@nestjs/jwt and @nestjs/passport — install both",
        "JwtModule.registerAsync() with useFactory for env-based config",
        "PassportStrategy class — extend Strategy from passport-jwt",
        "JwtStrategy: extract token from header, verify, return user",
        "validate() return value becomes req.user in controllers",
        "JwtAuthGuard extending AuthGuard('jwt')",
        "LocalStrategy: validate username + password, return user",
        "LocalAuthGuard for the POST /auth/login endpoint",
        "@Public() custom decorator + IS_PUBLIC_KEY metadata",
        "Global JwtAuthGuard that skips @Public() routes",
        "Reflector service — reading decorator metadata in guards",
        "Refresh token endpoint: validate refresh token → issue new pair",
        "Logout: clear httpOnly cookie or add token ID to blocklist",
        "@User() custom decorator — extract req.user cleanly in controllers",
      ]},
      { name: "Password security", topics: [
        "Never store plain-text passwords — fundamental rule",
        "bcrypt: how one-way hashing works, what salt rounds mean",
        "Salt rounds (10–12): cost factor, time/security tradeoff",
        "bcrypt.hash(password, saltRounds) — call on registration",
        "bcrypt.compare(plainPassword, hashedPassword) — call on login",
        "argon2 — modern memory-hard alternative to bcrypt",
        "Timing-safe comparison — why it prevents timing attacks",
        "Password rules: minimum 8 chars, strength check, breach check (haveibeenpwned API)",
      ]},
      { name: "OAuth 2.0", topics: [
        "What OAuth 2.0 is — delegated authorization, not authentication",
        "OpenID Connect (OIDC) — identity layer on top of OAuth 2.0",
        "Authorization Code flow: redirect → code → exchange → tokens",
        "Access token vs ID token — what each contains",
        "Google OAuth strategy: passport-google-oauth20 setup",
        "GitHub OAuth strategy: passport-github2 setup",
        "Callback URL: register in provider dashboard + handle in NestJS",
        "Profile object: what provider returns (id, email, displayName, photos)",
        "Linking OAuth accounts to local users — find-or-create pattern",
      ]},
      { name: "Security fundamentals", topics: [
        "CORS: why browsers block cross-origin, NestJS enableCors() options",
        "CSRF: what it is, SameSite=Strict cookie attribute, CSRF tokens",
        "SQL injection: how it works, why Prisma parameterization prevents it",
        "XSS: reflected, stored, DOM-based — input sanitization and CSP",
        "Helmet.js: X-Frame-Options, Content-Security-Policy, HSTS headers",
        "@nestjs/throttler: rate limiting — ThrottlerModule + ThrottlerGuard",
        "Input sanitization: strip HTML, validate types strictly, whitelist",
        "Never log passwords, tokens, PII, or secrets",
        "HTTPS: TLS handshake basics, HTTP is never safe in production",
        "Secrets in environment variables — never hardcode, never commit",
      ]},
      { name: "OWASP Top 10", topics: [
        "A01 Broken Access Control — check authorization on every endpoint, not just login",
        "A02 Cryptographic Failures — use HTTPS, strong algorithms, no MD5/SHA1 for passwords",
        "A03 Injection — SQL, command, LDAP injection — validate + parameterize",
        "A04 Insecure Design — threat model before you build, not after",
        "A05 Security Misconfiguration — no debug mode in prod, review all defaults",
        "A06 Vulnerable and Outdated Components — npm audit, Dependabot",
        "A07 Identification and Authentication Failures — brute force, weak passwords",
        "A08 Software and Data Integrity Failures — verify dependency integrity",
        "A09 Security Logging and Monitoring Failures — log auth events, protect logs",
        "A10 Server-Side Request Forgery (SSRF) — validate URLs before fetching",
      ]},
    ]
  },
  {
    id: 5, shortLabel: "DevOps", title: "Testing + DevOps",
    col: "#993C1D", bg: "#FAECE7", tc: "#712B13", duration: "3–4 weeks",
    groups: [
      { name: "Testing theory", topics: [
        "Test pyramid: unit (many, fast) → integration → e2e (few, slow)",
        "Test behavior, not implementation — test what, not how",
        "Test doubles: mock (fake impl), stub (canned return), spy (real + tracking)",
        "Arrange → Act → Assert (AAA) pattern",
        "Test isolation: each test independent, no shared mutable state",
        "Coverage: line, branch, function — aim for 70–80% meaningfully",
        "TDD basics: red (write failing test) → green (make it pass) → refactor",
      ]},
      { name: "Jest for NestJS", topics: [
        "jest.config.ts setup — moduleNameMapper for path aliases",
        "describe() — group related tests into a suite",
        "it() / test() — individual test case",
        "expect() matchers: toBe, toEqual, toContain, toMatchObject, toHaveLength, toBeNull",
        "Async: resolves.toBe(), rejects.toThrow()",
        "Call tracking: toHaveBeenCalled, toHaveBeenCalledWith, toHaveBeenCalledTimes",
        "beforeEach / afterEach — setup and teardown per test",
        "beforeAll / afterAll — setup and teardown once per suite",
        "jest.fn() — create a mock function that tracks calls",
        "jest.mock('../../module') — replace an entire module with mocks",
        "jest.spyOn(object, 'methodName') — spy on a real method",
        "Mocking PrismaService: create a mock factory with jest.fn() per method",
        "Test.createTestingModule({ providers }).compile() — NestJS test module",
        "Testing services: inject mocked Prisma, call service methods, assert",
        "Testing controllers: mock service layer, test HTTP response shape",
        "Testing Guards: mock ExecutionContext, call canActivate()",
        "jest --coverage — generate HTML coverage report",
      ]},
      { name: "Integration & E2E testing", topics: [
        "Supertest: test HTTP endpoints without starting a real server",
        "NestJS E2E setup: Test.createTestingModule + app.init() + getHttpServer()",
        "request(app.getHttpServer()).post('/users').send(dto).expect(201)",
        "Test database: separate DB instance or override DATABASE_URL in tests",
        "Database seeding: insert known fixtures before each test",
        "Database cleanup: DELETE or TRUNCATE after each test for isolation",
        "Testing a full auth flow: register → login → use JWT → access protected route",
      ]},
      { name: "Docker", topics: [
        "What Docker is: containers package app + dependencies together",
        "Images (templates) vs containers (running instances)",
        "Dockerfile: FROM, WORKDIR, COPY, RUN, EXPOSE, CMD, ENV, ARG",
        ".dockerignore — exclude node_modules, .env, dist, .git",
        "docker build -t myapp:latest . — build an image from Dockerfile",
        "docker run -p 3000:3000 -e NODE_ENV=production myapp — run container",
        "docker-compose.yml: services, ports, environment, volumes, depends_on",
        "docker compose up -d, down, logs -f, ps, exec -it service bash",
        "Multi-stage build: builder stage (compile TS) + runner stage (prod image)",
        "Docker networking: containers reference each other by service name",
        "Named volumes for PostgreSQL: persist data across container restarts",
        "Healthcheck in compose: test command, interval, timeout, retries",
      ]},
      { name: "CI/CD with GitHub Actions", topics: [
        ".github/workflows/ci.yml — file location and purpose",
        "Workflow YAML structure: name, on (triggers), jobs, steps",
        "Triggers: push, pull_request (with branch filters), workflow_dispatch",
        "Runners: runs-on: ubuntu-latest",
        "actions/checkout@v4 — check out the repo",
        "actions/setup-node@v4 — install a specific Node.js version",
        "actions/cache@v3 — cache node_modules between runs",
        "npm ci — clean install from lockfile (faster than npm install in CI)",
        "Running tests: npm run test:cov -- --passWithNoTests",
        "Secrets and env vars: ${{ secrets.DATABASE_URL }} in workflow",
        "Job dependencies: needs: [test] — deploy only when tests pass",
        "Deploying to Railway: install Railway CLI, railway up in workflow",
        "Branch protection rules: require CI to pass before merging to main",
      ]},
      { name: "Deployment", topics: [
        "Railway.app: connect GitHub repo, auto-deploy on push to main",
        "Environment variables panel in Railway — set all .env values here",
        "PostgreSQL addon in Railway — DATABASE_URL injected automatically",
        "RELEASE_COMMAND in railway.toml: npx prisma migrate deploy",
        "Custom domain + automatic HTTPS certificate in Railway",
        "Viewing logs in Railway dashboard — debugging production",
        "Health check endpoint: GET /health → { status: 'ok', timestamp }",
        "Zero-downtime rolling deploy — Railway's default behaviour",
      ]},
    ]
  },
  {
    id: 6, shortLabel: "Capstone", title: "Fullstack capstone",
    col: "#444441", bg: "#F1EFE8", tc: "#2C2C2A", duration: "4–6 weeks",
    groups: [
      { name: "Fullstack integration", topics: [
        "CORS: configure NestJS origin to match React dev + prod URLs",
        "Vite proxy in vite.config.ts: server.proxy for local dev (avoid CORS in dev)",
        "Environment variables in Vite: VITE_ prefix, import.meta.env.VITE_API_URL",
        "Axios instance: create with baseURL, timeout, default headers",
        "Axios request interceptor: attach Authorization: Bearer <token> automatically",
        "Axios response interceptor: catch 401 → trigger refresh → retry original request",
        "Token refresh queue: hold parallel 401s while refresh is in-flight",
        "TanStack Query: QueryClient setup, useQuery, useMutation, queryClient",
        "queryKey conventions — stable keys prevent over-fetching",
        "invalidateQueries — trigger refetch after create/update/delete",
        "Optimistic updates: update UI immediately, rollback on error",
        "Global error boundary for unhandled API errors",
      ]},
      { name: "Auth flow in React", topics: [
        "Token storage decision: httpOnly cookie (server sets) vs memory state",
        "Auth context: createContext + useReducer — global user state",
        "Protected route component: read auth context, redirect if null",
        "Redirect after login: useLocation() → state.from → navigate back",
        "Silent refresh on app load: call /auth/refresh to restore session",
        "Logout: clear tokens + queryClient.clear() + redirect to /login",
      ]},
      { name: "Portfolio & GitHub", topics: [
        "README must-haves: what it does, tech stack, local setup, live demo link",
        "Loom demo video: 2–3 min walkthrough — record this before applying",
        "GitHub profile README (special username/username repo)",
        "Pin 3 repos: Phase 3 API, Phase 4 with auth, capstone fullstack app",
        "Contribution graph: aim for visible activity during learning period",
        "Swagger link in README — shows you think about API consumers",
        "Live demo URL in repo description — hiring managers click this first",
      ]},
      { name: "CV & job hunt in Poland", topics: [
        "CV keywords: NestJS, Node.js, TypeScript, PostgreSQL, Prisma, Docker, REST API, JWT, React",
        "LinkedIn headline: 'Fullstack Developer | React + Node.js | Warsaw'",
        "No Fluff Jobs filters: TypeScript, Node.js, Junior/Mid, Warsaw + Remote",
        "JustJoin.IT: search fullstack + Node.js, filter by experience level",
        "Application volume target: 5–10 per week minimum",
        "Cover note (2–3 sentences max): why this company, what you built relevant to them",
        "Referrals: Warsaw tech meetups — Node.js Poland, WarsawJS",
      ]},
      { name: "Interview preparation", topics: [
        "Event loop: explain call stack → microtask queue → macrotask queue with example",
        "NestJS DI: explain how the IoC container resolves providers by type",
        "JWT: explain header.payload.signature + why short-lived access tokens exist",
        "Database indexes: explain B-tree index and when you'd add one",
        "N+1 problem: what it is + how Prisma include solves it",
        "REST vs GraphQL: over-fetching, under-fetching, caching tradeoffs",
        "CORS: why browsers enforce same-origin + how Access-Control headers solve it",
        "System design basics: load balancer, caching layer, message queue concepts",
        "Live coding: LeetCode Easy — arrays, strings, hashmaps, two pointers",
        "Behavioral: 3 STAR stories — a hard technical problem, a collaboration, a mistake you made",
      ]},
    ]
  },
];

function getTopicId(pi, gi, ti) { return `p${pi}_g${gi}_t${ti}`; }

function calcPhase(pi, done) {
  let total = 0, completed = 0;
  PHASES[pi].groups.forEach((g, gi) =>
    g.topics.forEach((_, ti) => { total++; if (done.has(getTopicId(pi, gi, ti))) completed++; })
  );
  return { total, completed, pct: total ? Math.round(completed / total * 100) : 0 };
}

function calcOverall(done) {
  let total = 0, completed = 0;
  PHASES.forEach((_, pi) => { const r = calcPhase(pi, done); total += r.total; completed += r.completed; });
  return { total, completed, pct: total ? Math.round(completed / total * 100) : 0 };
}

const S = {
  card: { background: 'var(--color-background-secondary)', borderRadius: 'var(--border-radius-md)', padding: '10px 14px' },
  label: { fontSize: 10, color: 'var(--color-text-tertiary)', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '.04em' },
  border: '0.5px solid var(--color-border-tertiary)',
};

export default function CurriculumTracker() {
  const [done, setDone] = useState(new Set());
  const [activePhase, setActivePhase] = useState(0);
  const [loading, setLoading] = useState(true);
  const [collapsed, setCollapsed] = useState({});
  const hasLoaded = useRef(false);

  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage.get('fscurriculum-v3');
        if (r?.value) setDone(new Set(JSON.parse(r.value)));
      } catch(_) {}
      hasLoaded.current = true;
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (hasLoaded.current) {
      window.storage.set('fscurriculum-v3', JSON.stringify([...done])).catch(() => {});
    }
  }, [done]);

  function toggle(id) {
    setDone(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  }

  function markAll(pi) {
    setDone(prev => {
      const n = new Set(prev);
      PHASES[pi].groups.forEach((g, gi) => g.topics.forEach((_, ti) => n.add(getTopicId(pi, gi, ti))));
      return n;
    });
  }

  function clearAll(pi) {
    setDone(prev => {
      const n = new Set(prev);
      PHASES[pi].groups.forEach((g, gi) => g.topics.forEach((_, ti) => n.delete(getTopicId(pi, gi, ti))));
      return n;
    });
  }

  function toggleGroup(key) {
    setCollapsed(prev => ({ ...prev, [key]: !prev[key] }));
  }

  if (loading) return <div style={{ padding: '2rem', fontSize: 13, color: 'var(--color-text-secondary)' }}>Loading progress…</div>;

  const overall = calcOverall(done);
  const phase = PHASES[activePhase];
  const prog = calcPhase(activePhase, done);

  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>

      {/* Overall bar */}
      <div style={{ ...S.card, marginBottom: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ ...S.label, margin: 0 }}>total progress</span>
          <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--color-text-primary)' }}>
            {overall.completed} / {overall.total} topics · {overall.pct}%
          </span>
        </div>
        <div style={{ height: 5, background: 'var(--color-background-primary)', borderRadius: 3, overflow: 'hidden', marginBottom: 8 }}>
          <div style={{ height: '100%', width: `${overall.pct}%`, background: '#1D9E75', borderRadius: 3, transition: 'width .4s' }} />
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {PHASES.map((p, pi) => {
            const r = calcPhase(pi, done);
            return (
              <div key={pi} onClick={() => setActivePhase(pi)} title={`Phase ${p.id}: ${r.completed}/${r.total}`}
                style={{ flex: 1, height: 4, borderRadius: 2, cursor: 'pointer',
                  background: r.pct === 100 ? p.col : r.pct > 0 ? p.col + '55' : 'var(--color-background-primary)',
                  outline: activePhase === pi ? `2px solid ${p.col}` : 'none', outlineOffset: 1, transition: 'background .3s' }} />
            );
          })}
        </div>
      </div>

      {/* Phase tabs */}
      <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 14 }}>
        {PHASES.map((p, pi) => {
          const r = calcPhase(pi, done);
          const active = pi === activePhase;
          return (
            <button key={pi} onClick={() => setActivePhase(pi)} style={{
              padding: '5px 12px', fontSize: 12, borderRadius: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5,
              border: `0.5px solid ${active ? 'transparent' : p.col + '55'}`,
              background: active ? p.bg : 'transparent', color: active ? p.tc : 'var(--color-text-secondary)', transition: 'all .15s'
            }}>
              <span style={{ fontWeight: 500 }}>{p.id}</span>
              <span style={{ display: active ? 'inline' : 'none' }}>{p.shortLabel}</span>
              {r.pct === 100 && <span style={{ fontSize: 10, color: '#0F6E56' }}>✓</span>}
              {r.pct > 0 && r.pct < 100 && <span style={{ fontSize: 10, color: p.col }}>{r.pct}%</span>}
            </button>
          );
        })}
      </div>

      {/* Phase header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 2 }}>
            <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--color-text-primary)' }}>
              Phase {phase.id}: {phase.title}
            </span>
            <span style={{ fontSize: 11, padding: '2px 9px', borderRadius: 10, background: phase.bg, color: phase.tc }}>
              {phase.duration}
            </span>
          </div>
          <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
            {prog.completed} of {prog.total} topics · {prog.pct}%
          </span>
        </div>
        <div style={{ display: 'flex', gap: 5 }}>
          <button onClick={() => markAll(activePhase)} style={{
            fontSize: 11, padding: '4px 10px', borderRadius: 8, cursor: 'pointer',
            border: `0.5px solid ${phase.col}55`, background: phase.bg, color: phase.tc
          }}>mark all</button>
          <button onClick={() => clearAll(activePhase)} style={{
            fontSize: 11, padding: '4px 10px', borderRadius: 8, cursor: 'pointer',
            border: '0.5px solid var(--color-border-secondary)', background: 'transparent', color: 'var(--color-text-tertiary)'
          }}>clear</button>
        </div>
      </div>

      {/* Phase progress bar */}
      <div style={{ height: 4, background: 'var(--color-background-secondary)', borderRadius: 2, overflow: 'hidden', marginBottom: 14 }}>
        <div style={{ height: '100%', width: `${prog.pct}%`, background: phase.col, borderRadius: 2, transition: 'width .3s' }} />
      </div>

      {/* Groups */}
      {phase.groups.map((group, gi) => {
        const groupDone = group.topics.filter((_, ti) => done.has(getTopicId(activePhase, gi, ti))).length;
        const gKey = `${activePhase}_${gi}`;
        const open = collapsed[gKey] !== true;
        const allDone = groupDone === group.topics.length;

        return (
          <div key={gi} style={{ marginBottom: 7, border: S.border, borderRadius: 'var(--border-radius-md)', overflow: 'hidden' }}>
            <div onClick={() => toggleGroup(gKey)} style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '9px 14px', cursor: 'pointer',
              background: allDone ? phase.bg + '88' : 'var(--color-background-secondary)', userSelect: 'none'
            }}>
              <span style={{ fontSize: 12, color: 'var(--color-text-tertiary)', transform: open ? 'rotate(90deg)' : 'none', transition: 'transform .15s', display: 'inline-block', width: 10 }}>›</span>
              <span style={{ flex: 1, fontSize: 13, fontWeight: 500, color: 'var(--color-text-primary)' }}>{group.name}</span>
              <span style={{ fontSize: 11, color: allDone ? '#0F6E56' : 'var(--color-text-tertiary)' }}>
                {groupDone}/{group.topics.length}
              </span>
              {allDone && (
                <span style={{ fontSize: 10, background: '#E1F5EE', color: '#0F6E56', padding: '1px 7px', borderRadius: 8, fontWeight: 500 }}>done</span>
              )}
            </div>

            {open && group.topics.map((topic, ti) => {
              const topicId = getTopicId(activePhase, gi, ti);
              const checked = done.has(topicId);
              return (
                <div key={ti} onClick={() => toggle(topicId)} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12, padding: '8px 14px', cursor: 'pointer',
                  background: checked ? 'var(--color-background-secondary)' : 'var(--color-background-primary)',
                  borderTop: S.border, transition: 'background .1s'
                }}>
                  <div style={{
                    width: 17, height: 17, borderRadius: 4, flexShrink: 0, marginTop: 2,
                    border: `1.5px solid ${checked ? phase.col : 'var(--color-border-secondary)'}`,
                    background: checked ? phase.col : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .15s'
                  }}>
                    {checked && <span style={{ color: '#fff', fontSize: 10, lineHeight: 1 }}>✓</span>}
                  </div>
                  <span style={{
                    fontSize: 13, lineHeight: 1.55,
                    color: checked ? 'var(--color-text-tertiary)' : 'var(--color-text-primary)',
                    textDecoration: checked ? 'line-through' : 'none', transition: 'all .15s'
                  }}>{topic}</span>
                </div>
              );
            })}
          </div>
        );
      })}

      <div style={{ marginTop: 12, fontSize: 11, color: 'var(--color-text-tertiary)', textAlign: 'center' }}>
        progress saves automatically · click group headers to collapse
      </div>
    </div>
  );
}
