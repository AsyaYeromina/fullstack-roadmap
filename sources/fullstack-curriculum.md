# Original fullstack curriculum

Markdown transcription of the supplied curriculum. The 321 topics retain their original phase, group, order, and wording. Phase durations are the original estimates; use [ROADMAP.md](../ROADMAP.md) for the active checklist, added topics, practice prompts, and resource links.

## Phase 1: Mental model flip

Original estimate: 2–3 weeks.

### 1.1 HTTP & networking

- **1.1.1** Full request/response lifecycle — from the server's perspective
- **1.1.2** HTTP methods: GET, POST, PUT, PATCH, DELETE — what each one means semantically
- **1.1.3** HTTP headers: Content-Type, Authorization, Accept, CORS headers
- **1.1.4** Status codes you send: 200, 201, 204, 400, 401, 403, 404, 409, 422, 500
- **1.1.5** Request body formats: JSON, form-urlencoded, multipart/form-data
- **1.1.6** URL anatomy: protocol, host, pathname, query string, fragment

### 1.2 Node.js basics

- **1.2.1** What Node.js is: V8 engine + libuv (not a browser runtime)
- **1.2.2** Installing Node.js with nvm — managing multiple versions
- **1.2.3** Running scripts: node index.js
- **1.2.4** process object: process.env, process.argv, process.exit(), process.cwd()
- **1.2.5** Module system: require() / CommonJS vs import / ESM — differences and when to use each
- **1.2.6** package.json: scripts, dependencies, devDependencies, main, type fields
- **1.2.7** npm essentials: install, run, init, uninstall, update, ci

### 1.3 Environment & config

- **1.3.1** .env file format: KEY=value pairs, no spaces around =
- **1.3.2** dotenv package: require('dotenv').config() — where to call it
- **1.3.3** Reading variables: process.env.MY_VAR
- **1.3.4** .gitignore: always exclude .env — never commit secrets
- **1.3.5** .env.example: template file documenting required variables

### 1.4 First raw HTTP server

- **1.4.1** Node.js built-in http module — no install needed
- **1.4.2** http.createServer((req, res) => {}) pattern
- **1.4.3** req object: req.url, req.method, req.headers
- **1.4.4** res.writeHead(statusCode, headersObject)
- **1.4.5** res.end(body) — sending the response
- **1.4.6** Manual routing: if/else on req.url + req.method
- **1.4.7** Sending JSON: JSON.stringify() + Content-Type: application/json header
- **1.4.8** Parsing incoming JSON body: req.on('data') + req.on('end') pattern

## Phase 2: Node.js core

Original estimate: 3–4 weeks.

### 2.1 Event loop & async model

- **2.1.1** Call stack, Web APIs, task queue — how the three interact
- **2.1.2** Microtask queue vs macrotask queue — execution order
- **2.1.3** setTimeout, setInterval, setImmediate, process.nextTick — differences
- **2.1.4** Why Node.js is non-blocking despite being single-threaded
- **2.1.5** Promise execution order in the event loop
- **2.1.6** async/await desugared — what it compiles to under the hood
- **2.1.7** Blocking vs non-blocking operations — when it matters

### 2.2 Streams & file system

- **2.2.1** What a Buffer is — binary data representation in Node.js
- **2.2.2** Readable, Writable, Duplex, Transform — stream types
- **2.2.3** pipe() method — connecting a readable stream to a writable
- **2.2.4** fs.promises: readFile, writeFile, appendFile, unlink, mkdir
- **2.2.5** path module: join(), resolve(), dirname(), basename(), extname()
- **2.2.6** __dirname and __filename (CJS) vs import.meta.url (ESM)
- **2.2.7** fs.readdir() + fs.stat() — working with directories
- **2.2.8** Streaming large files vs readFile — when to choose which

### 2.3 Error handling patterns

- **2.3.1** try/catch with async/await — the correct pattern
- **2.3.2** Unhandled promise rejections — why they crash production apps
- **2.3.3** process.on('unhandledRejection') and 'uncaughtException' handlers
- **2.3.4** Error object anatomy: message, name, stack
- **2.3.5** Custom error classes extending Error with extra fields
- **2.3.6** Error-first callbacks (legacy pattern — you'll still encounter it)
- **2.3.7** Operational errors vs programmer errors — the distinction

### 2.4 Advanced async patterns

- **2.4.1** Promise.all() — parallel, fails fast on first rejection
- **2.4.2** Promise.allSettled() — parallel, never throws, returns all results
- **2.4.3** Promise.race() — resolves/rejects with the first to settle
- **2.4.4** Promise.any() — resolves with the first to fulfill
- **2.4.5** Sequential async with for...of loops (not forEach!)
- **2.4.6** Async iterators: for await...of
- **2.4.7** AbortController + AbortSignal — cancellation pattern

### 2.5 npm ecosystem

- **2.5.1** Semantic versioning: major.minor.patch — what each bump means
- **2.5.2** package.json version ranges: ^ (minor), ~ (patch), exact
- **2.5.3** package-lock.json — purpose and when to commit it
- **2.5.4** npm scripts: pre/post hooks, chaining with &&
- **2.5.5** Global vs local package install — when each makes sense
- **2.5.6** npx — run a package without installing globally
- **2.5.7** Workspaces — monorepo basics

### 2.6 Build a CRUD server (no framework)

- **2.6.1** Router class: store routes as method+path → handler map
- **2.6.2** Middleware concept: function(req, res, next) chain
- **2.6.3** Body parser middleware: handle incoming JSON without a library
- **2.6.4** In-memory storage: Map or plain object as 'database'
- **2.6.5** JSON file storage: read → parse → modify → write cycle
- **2.6.6** CRUD for one resource: create, read all, read one, update, delete
- **2.6.7** Consistent JSON error format: { statusCode, message, error }

## Phase 3: NestJS + database

Original estimate: 6–8 weeks.

### 3.1 NestJS architecture

- **3.1.1** What NestJS is — opinionated Node.js framework, Angular-inspired DI system
- **3.1.2** NestJS CLI: npm i -g @nestjs/cli, nest new, nest generate
- **3.1.3** Module: feature container — groups controllers, services, providers
- **3.1.4** @Module() decorator: imports, controllers, providers, exports arrays
- **3.1.5** Controller: handles HTTP requests, maps routes to methods
- **3.1.6** @Controller('prefix'), @Get(), @Post(), @Put(), @Patch(), @Delete()
- **3.1.7** Service: holds business logic and data access — the brain of a feature
- **3.1.8** @Injectable() — marks a class as a provider the DI container can manage
- **3.1.9** Dependency Injection: declare a type in constructor → NestJS provides it
- **3.1.10** AppModule: root module, bootstrapped in main.ts with NestFactory.create()
- **3.1.11** Feature modules: UsersModule, AuthModule, ProductsModule pattern
- **3.1.12** Imports/exports between modules — how providers are shared
- **3.1.13** @Global() decorator — app-wide singleton providers

### 3.2 DTOs & validation

- **3.2.1** What a DTO is: Data Transfer Object — defines shape of incoming data
- **3.2.2** class-validator: @IsString, @IsEmail, @IsNumber, @IsBoolean, @IsUUID
- **3.2.3** @IsNotEmpty, @IsOptional, @MinLength, @MaxLength, @Min, @Max, @IsEnum
- **3.2.4** class-transformer: plainToInstance, @Exclude, @Expose, @Transform
- **3.2.5** ValidationPipe: register globally in main.ts with app.useGlobalPipes()
- **3.2.6** transform: true — auto-convert plain objects to class instances
- **3.2.7** whitelist: true — strip properties not in the DTO
- **3.2.8** ParseIntPipe, ParseUUIDPipe, ParseBoolPipe — parameter transforms
- **3.2.9** @ValidateNested() + @Type(() => ChildDto) — validating nested DTOs
- **3.2.10** Custom validator: @ValidatorConstraint + @Validate() decorator

### 3.3 HTTP mechanics in NestJS

- **3.3.1** @Body(), @Param('id'), @Query('page'), @Headers('x-api-key')
- **3.3.2** Route parameters: /users/:id — @Param('id') extracts it
- **3.3.3** Query strings: /users?page=2&limit=10 — @Query() extracts as object
- **3.3.4** HTTP exceptions: NotFoundException, BadRequestException, UnauthorizedException, ForbiddenException, ConflictException
- **3.3.5** Exception filters: ExceptionFilter interface, @Catch() decorator
- **3.3.6** Global exception filter: app.useGlobalFilters(new AllExceptionsFilter())
- **3.3.7** Interceptors: transform response, add logging, measure timing
- **3.3.8** @UseInterceptors() at method, controller, or global level
- **3.3.9** ExecutionContext: access request and response in guards/interceptors
- **3.3.10** NestJS middleware: NestMiddleware interface, configure() in module
- **3.3.11** @Req() and @Res() — escape hatch to raw Express request/response

### 3.4 PostgreSQL fundamentals

- **3.4.1** What PostgreSQL is — relational DB, ACID compliant, open source
- **3.4.2** Running PostgreSQL locally via Docker: docker run --name pg -e POSTGRES_PASSWORD=pass -p 5432:5432 postgres
- **3.4.3** psql CLI: connect, \l (list DBs), \c (connect), \dt (tables), \d tablename
- **3.4.4** Core SQL: SELECT, INSERT INTO, UPDATE, DELETE, WHERE, ORDER BY, LIMIT, OFFSET
- **3.4.5** Data types: VARCHAR, TEXT, INTEGER, BIGINT, BOOLEAN, TIMESTAMP, UUID, JSONB
- **3.4.6** Constraints: NOT NULL, UNIQUE, DEFAULT, CHECK
- **3.4.7** Primary key and foreign key — referential integrity
- **3.4.8** INNER JOIN, LEFT JOIN — fetching related records
- **3.4.9** Transactions: BEGIN, COMMIT, ROLLBACK — atomicity guarantee
- **3.4.10** Indexes: what they are, B-tree index, when to add one
- **3.4.11** N+1 query problem — what it is, why it kills performance
- **3.4.12** Connection pooling — why you reuse connections instead of opening new ones

### 3.5 Prisma ORM

- **3.5.1** What Prisma is: schema-first ORM with type-safe query client
- **3.5.2** prisma init — creates schema.prisma + sets up DATABASE_URL in .env
- **3.5.3** schema.prisma: datasource block, generator block, model blocks
- **3.5.4** Field types: String, Int, Boolean, DateTime, Float, Json, Bytes
- **3.5.5** Field attributes: @id, @default(), @unique, @updatedAt, @map()
- **3.5.6** Model-level attributes: @@unique, @@index, @@map()
- **3.5.7** Relations: one-to-many, many-to-many (implicit join table), one-to-one
- **3.5.8** @relation() — explicit relation with fields and references
- **3.5.9** prisma generate — regenerates the type-safe Prisma Client
- **3.5.10** CRUD: create, findMany, findUnique, findFirst, update, upsert, delete, deleteMany
- **3.5.11** Where filters: equals, contains, startsWith, endsWith, gt, lt, gte, lte, in, not
- **3.5.12** select: return only specific fields
- **3.5.13** include: eager-load related records — prevents N+1
- **3.5.14** Pagination: skip + take pattern
- **3.5.15** Transactions: prisma.$transaction([...ops]) and interactive transactions
- **3.5.16** Migrations: npx prisma migrate dev (dev) vs prisma migrate deploy (prod)
- **3.5.17** Seeding: prisma/seed.ts + prisma.config.js seed command
- **3.5.18** Prisma Studio: npx prisma studio — visual DB browser in browser

### 3.6 REST API design

- **3.6.1** Resource naming: plural nouns — /users, /products, /orders
- **3.6.2** HTTP method semantics: GET (read), POST (create), PUT (full replace), PATCH (partial update), DELETE (remove)
- **3.6.3** Idempotency: GET, PUT, DELETE are idempotent — POST is not
- **3.6.4** Nested resources: /users/:userId/posts/:postId
- **3.6.5** Offset pagination: ?page=2&limit=10 — simple, has drift issues
- **3.6.6** Cursor pagination: ?cursor=lastId&limit=10 — stable, better for real-time
- **3.6.7** Filtering: ?status=active&category=shoes — query params
- **3.6.8** Sorting: ?sortBy=createdAt&order=desc — query params
- **3.6.9** API versioning: /v1/users (URL) vs Accept-Version header
- **3.6.10** Soft delete pattern: deletedAt timestamp instead of real DELETE
- **3.6.11** UUID vs auto-increment IDs — tradeoffs
- **3.6.12** createdAt and updatedAt on every Prisma model

### 3.7 Swagger / OpenAPI

- **3.7.1** @nestjs/swagger installation + DocumentBuilder setup in main.ts
- **3.7.2** SwaggerModule.createDocument() and SwaggerModule.setup('/api', app, doc)
- **3.7.3** @ApiTags('users') — group related endpoints in Swagger UI
- **3.7.4** @ApiOperation({ summary: 'Get all users' }) — describe an endpoint
- **3.7.5** @ApiProperty() on DTO fields — documents request body schema
- **3.7.6** @ApiPropertyOptional() — for optional DTO fields
- **3.7.7** @ApiResponse({ status: 200, type: UserDto }) — document response shape
- **3.7.8** @ApiBearerAuth() — mark JWT-protected endpoints
- **3.7.9** Testing endpoints live in Swagger UI at /api

## Phase 4: Auth + security

Original estimate: 3–4 weeks.

### 4.1 JWT fundamentals

- **4.1.1** JWT structure: header.payload.signature — three base64url-encoded parts
- **4.1.2** Header: alg (HS256, RS256) + typ: JWT
- **4.1.3** Payload: sub, iat, exp — reserved claims + your custom claims
- **4.1.4** Signature: HMAC-SHA256 or RSA — prevents tampering
- **4.1.5** Access token: short-lived (15min–1hr) — sent with every request
- **4.1.6** Refresh token: long-lived (7–30 days) — used only to get new access tokens
- **4.1.7** Token storage options: httpOnly cookies (CSRF risk) vs memory (XSS safer)
- **4.1.8** Refresh token rotation: issue new refresh token on every use
- **4.1.9** Token revocation: blocklist in Redis or DB for forced logout
- **4.1.10** jwt.io — inspect and verify tokens manually in browser

### 4.2 Auth implementation in NestJS

- **4.2.1** @nestjs/jwt and @nestjs/passport — install both
- **4.2.2** JwtModule.registerAsync() with useFactory for env-based config
- **4.2.3** PassportStrategy class — extend Strategy from passport-jwt
- **4.2.4** JwtStrategy: extract token from header, verify, return user
- **4.2.5** validate() return value becomes req.user in controllers
- **4.2.6** JwtAuthGuard extending AuthGuard('jwt')
- **4.2.7** LocalStrategy: validate username + password, return user
- **4.2.8** LocalAuthGuard for the POST /auth/login endpoint
- **4.2.9** @Public() custom decorator + IS_PUBLIC_KEY metadata
- **4.2.10** Global JwtAuthGuard that skips @Public() routes
- **4.2.11** Reflector service — reading decorator metadata in guards
- **4.2.12** Refresh token endpoint: validate refresh token → issue new pair
- **4.2.13** Logout: clear httpOnly cookie or add token ID to blocklist
- **4.2.14** @User() custom decorator — extract req.user cleanly in controllers

### 4.3 Password security

- **4.3.1** Never store plain-text passwords — fundamental rule
- **4.3.2** bcrypt: how one-way hashing works, what salt rounds mean
- **4.3.3** Salt rounds (10–12): cost factor, time/security tradeoff
- **4.3.4** bcrypt.hash(password, saltRounds) — call on registration
- **4.3.5** bcrypt.compare(plainPassword, hashedPassword) — call on login
- **4.3.6** argon2 — modern memory-hard alternative to bcrypt
- **4.3.7** Timing-safe comparison — why it prevents timing attacks
- **4.3.8** Password rules: minimum 8 chars, strength check, breach check (haveibeenpwned API)

### 4.4 OAuth 2.0

- **4.4.1** What OAuth 2.0 is — delegated authorization, not authentication
- **4.4.2** OpenID Connect (OIDC) — identity layer on top of OAuth 2.0
- **4.4.3** Authorization Code flow: redirect → code → exchange → tokens
- **4.4.4** Access token vs ID token — what each contains
- **4.4.5** Google OAuth strategy: passport-google-oauth20 setup
- **4.4.6** GitHub OAuth strategy: passport-github2 setup
- **4.4.7** Callback URL: register in provider dashboard + handle in NestJS
- **4.4.8** Profile object: what provider returns (id, email, displayName, photos)
- **4.4.9** Linking OAuth accounts to local users — find-or-create pattern

### 4.5 Security fundamentals

- **4.5.1** CORS: why browsers block cross-origin, NestJS enableCors() options
- **4.5.2** CSRF: what it is, SameSite=Strict cookie attribute, CSRF tokens
- **4.5.3** SQL injection: how it works, why Prisma parameterization prevents it
- **4.5.4** XSS: reflected, stored, DOM-based — input sanitization and CSP
- **4.5.5** Helmet.js: X-Frame-Options, Content-Security-Policy, HSTS headers
- **4.5.6** @nestjs/throttler: rate limiting — ThrottlerModule + ThrottlerGuard
- **4.5.7** Input sanitization: strip HTML, validate types strictly, whitelist
- **4.5.8** Never log passwords, tokens, PII, or secrets
- **4.5.9** HTTPS: TLS handshake basics, HTTP is never safe in production
- **4.5.10** Secrets in environment variables — never hardcode, never commit

### 4.6 OWASP Top 10

- **4.6.1** A01 Broken Access Control — check authorization on every endpoint, not just login
- **4.6.2** A02 Cryptographic Failures — use HTTPS, strong algorithms, no MD5/SHA1 for passwords
- **4.6.3** A03 Injection — SQL, command, LDAP injection — validate + parameterize
- **4.6.4** A04 Insecure Design — threat model before you build, not after
- **4.6.5** A05 Security Misconfiguration — no debug mode in prod, review all defaults
- **4.6.6** A06 Vulnerable and Outdated Components — npm audit, Dependabot
- **4.6.7** A07 Identification and Authentication Failures — brute force, weak passwords
- **4.6.8** A08 Software and Data Integrity Failures — verify dependency integrity
- **4.6.9** A09 Security Logging and Monitoring Failures — log auth events, protect logs
- **4.6.10** A10 Server-Side Request Forgery (SSRF) — validate URLs before fetching

## Phase 5: Testing + DevOps

Original estimate: 3–4 weeks.

### 5.1 Testing theory

- **5.1.1** Test pyramid: unit (many, fast) → integration → e2e (few, slow)
- **5.1.2** Test behavior, not implementation — test what, not how
- **5.1.3** Test doubles: mock (fake impl), stub (canned return), spy (real + tracking)
- **5.1.4** Arrange → Act → Assert (AAA) pattern
- **5.1.5** Test isolation: each test independent, no shared mutable state
- **5.1.6** Coverage: line, branch, function — aim for 70–80% meaningfully
- **5.1.7** TDD basics: red (write failing test) → green (make it pass) → refactor

### 5.2 Jest for NestJS

- **5.2.1** jest.config.ts setup — moduleNameMapper for path aliases
- **5.2.2** describe() — group related tests into a suite
- **5.2.3** it() / test() — individual test case
- **5.2.4** expect() matchers: toBe, toEqual, toContain, toMatchObject, toHaveLength, toBeNull
- **5.2.5** Async: resolves.toBe(), rejects.toThrow()
- **5.2.6** Call tracking: toHaveBeenCalled, toHaveBeenCalledWith, toHaveBeenCalledTimes
- **5.2.7** beforeEach / afterEach — setup and teardown per test
- **5.2.8** beforeAll / afterAll — setup and teardown once per suite
- **5.2.9** jest.fn() — create a mock function that tracks calls
- **5.2.10** jest.mock('../../module') — replace an entire module with mocks
- **5.2.11** jest.spyOn(object, 'methodName') — spy on a real method
- **5.2.12** Mocking PrismaService: create a mock factory with jest.fn() per method
- **5.2.13** Test.createTestingModule({ providers }).compile() — NestJS test module
- **5.2.14** Testing services: inject mocked Prisma, call service methods, assert
- **5.2.15** Testing controllers: mock service layer, test HTTP response shape
- **5.2.16** Testing Guards: mock ExecutionContext, call canActivate()
- **5.2.17** jest --coverage — generate HTML coverage report

### 5.3 Integration & E2E testing

- **5.3.1** Supertest: test HTTP endpoints without starting a real server
- **5.3.2** NestJS E2E setup: Test.createTestingModule + app.init() + getHttpServer()
- **5.3.3** request(app.getHttpServer()).post('/users').send(dto).expect(201)
- **5.3.4** Test database: separate DB instance or override DATABASE_URL in tests
- **5.3.5** Database seeding: insert known fixtures before each test
- **5.3.6** Database cleanup: DELETE or TRUNCATE after each test for isolation
- **5.3.7** Testing a full auth flow: register → login → use JWT → access protected route

### 5.4 Docker

- **5.4.1** What Docker is: containers package app + dependencies together
- **5.4.2** Images (templates) vs containers (running instances)
- **5.4.3** Dockerfile: FROM, WORKDIR, COPY, RUN, EXPOSE, CMD, ENV, ARG
- **5.4.4** .dockerignore — exclude node_modules, .env, dist, .git
- **5.4.5** docker build -t myapp:latest . — build an image from Dockerfile
- **5.4.6** docker run -p 3000:3000 -e NODE_ENV=production myapp — run container
- **5.4.7** docker-compose.yml: services, ports, environment, volumes, depends_on
- **5.4.8** docker compose up -d, down, logs -f, ps, exec -it service bash
- **5.4.9** Multi-stage build: builder stage (compile TS) + runner stage (prod image)
- **5.4.10** Docker networking: containers reference each other by service name
- **5.4.11** Named volumes for PostgreSQL: persist data across container restarts
- **5.4.12** Healthcheck in compose: test command, interval, timeout, retries

### 5.5 CI/CD with GitHub Actions

- **5.5.1** .github/workflows/ci.yml — file location and purpose
- **5.5.2** Workflow YAML structure: name, on (triggers), jobs, steps
- **5.5.3** Triggers: push, pull_request (with branch filters), workflow_dispatch
- **5.5.4** Runners: runs-on: ubuntu-latest
- **5.5.5** actions/checkout@v4 — check out the repo
- **5.5.6** actions/setup-node@v4 — install a specific Node.js version
- **5.5.7** actions/cache@v3 — cache node_modules between runs
- **5.5.8** npm ci — clean install from lockfile (faster than npm install in CI)
- **5.5.9** Running tests: npm run test:cov -- --passWithNoTests
- **5.5.10** Secrets and env vars: ${{ secrets.DATABASE_URL }} in workflow
- **5.5.11** Job dependencies: needs: [test] — deploy only when tests pass
- **5.5.12** Deploying to Railway: install Railway CLI, railway up in workflow
- **5.5.13** Branch protection rules: require CI to pass before merging to main

### 5.6 Deployment

- **5.6.1** Railway.app: connect GitHub repo, auto-deploy on push to main
- **5.6.2** Environment variables panel in Railway — set all .env values here
- **5.6.3** PostgreSQL addon in Railway — DATABASE_URL injected automatically
- **5.6.4** RELEASE_COMMAND in railway.toml: npx prisma migrate deploy
- **5.6.5** Custom domain + automatic HTTPS certificate in Railway
- **5.6.6** Viewing logs in Railway dashboard — debugging production
- **5.6.7** Health check endpoint: GET /health → { status: 'ok', timestamp }
- **5.6.8** Zero-downtime rolling deploy — Railway's default behaviour

## Phase 6: Fullstack capstone

Original estimate: 4–6 weeks.

### 6.1 Fullstack integration

- **6.1.1** CORS: configure NestJS origin to match React dev + prod URLs
- **6.1.2** Vite proxy in vite.config.ts: server.proxy for local dev (avoid CORS in dev)
- **6.1.3** Environment variables in Vite: VITE_ prefix, import.meta.env.VITE_API_URL
- **6.1.4** Axios instance: create with baseURL, timeout, default headers
- **6.1.5** Axios request interceptor: attach Authorization: Bearer <token> automatically
- **6.1.6** Axios response interceptor: catch 401 → trigger refresh → retry original request
- **6.1.7** Token refresh queue: hold parallel 401s while refresh is in-flight
- **6.1.8** TanStack Query: QueryClient setup, useQuery, useMutation, queryClient
- **6.1.9** queryKey conventions — stable keys prevent over-fetching
- **6.1.10** invalidateQueries — trigger refetch after create/update/delete
- **6.1.11** Optimistic updates: update UI immediately, rollback on error
- **6.1.12** Global error boundary for unhandled API errors

### 6.2 Auth flow in React

- **6.2.1** Token storage decision: httpOnly cookie (server sets) vs memory state
- **6.2.2** Auth context: createContext + useReducer — global user state
- **6.2.3** Protected route component: read auth context, redirect if null
- **6.2.4** Redirect after login: useLocation() → state.from → navigate back
- **6.2.5** Silent refresh on app load: call /auth/refresh to restore session
- **6.2.6** Logout: clear tokens + queryClient.clear() + redirect to /login

### 6.3 Portfolio & GitHub

- **6.3.1** README must-haves: what it does, tech stack, local setup, live demo link
- **6.3.2** Loom demo video: 2–3 min walkthrough — record this before applying
- **6.3.3** GitHub profile README (special username/username repo)
- **6.3.4** Pin 3 repos: Phase 3 API, Phase 4 with auth, capstone fullstack app
- **6.3.5** Contribution graph: aim for visible activity during learning period
- **6.3.6** Swagger link in README — shows you think about API consumers
- **6.3.7** Live demo URL in repo description — hiring managers click this first

### 6.4 CV & job hunt in Poland

- **6.4.1** CV keywords: NestJS, Node.js, TypeScript, PostgreSQL, Prisma, Docker, REST API, JWT, React
- **6.4.2** LinkedIn headline: 'Fullstack Developer | React + Node.js | Warsaw'
- **6.4.3** No Fluff Jobs filters: TypeScript, Node.js, Junior/Mid, Warsaw + Remote
- **6.4.4** JustJoin.IT: search fullstack + Node.js, filter by experience level
- **6.4.5** Application volume target: 5–10 per week minimum
- **6.4.6** Cover note (2–3 sentences max): why this company, what you built relevant to them
- **6.4.7** Referrals: Warsaw tech meetups — Node.js Poland, WarsawJS

### 6.5 Interview preparation

- **6.5.1** Event loop: explain call stack → microtask queue → macrotask queue with example
- **6.5.2** NestJS DI: explain how the IoC container resolves providers by type
- **6.5.3** JWT: explain header.payload.signature + why short-lived access tokens exist
- **6.5.4** Database indexes: explain B-tree index and when you'd add one
- **6.5.5** N+1 problem: what it is + how Prisma include solves it
- **6.5.6** REST vs GraphQL: over-fetching, under-fetching, caching tradeoffs
- **6.5.7** CORS: why browsers enforce same-origin + how Access-Control headers solve it
- **6.5.8** System design basics: load balancer, caching layer, message queue concepts
- **6.5.9** Live coding: LeetCode Easy — arrays, strings, hashmaps, two pointers
- **6.5.10** Behavioral: 3 STAR stories — a hard technical problem, a collaboration, a mistake you made
