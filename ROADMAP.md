# Fullstack roadmap

One checklist for moving from frontend work to fullstack development. Start at the first unchecked **core** subtopic. Each checkbox is one study step; the linked resource lists are a menu, not a demand to read everything in one day.

## How to use this roadmap

1. On a weekday, study one unchecked core subtopic. Spend up to 15–20 minutes on a small practical task; the group prompt below is a starting point.
2. Add a section with the same subtopic ID to [NOTES.md](NOTES.md): your short cheatsheet, what you did, and how it felt (easy, hard, boring, or your own words).
3. Commit your notes. Then check off that subtopic. The next reminder advances after a note commit for the current ID, even if you have not updated the checkbox yet.
4. Record skipped days in [STUDY_LOG.md](STUDY_LOG.md); a missed day does not move the checklist.

The 321 core subtopics below come from the supplied JSX curriculum, in its original order and wording. At one subtopic each weekday, they take about 64 weeks before the added steps. The original phase week estimates were shorter than this pace, so progress follows checkboxes rather than those estimates.

**Sources:** [supplied JSX curriculum](sources/fullstack-curriculum-tracker.jsx) · [Backend roadmap](https://roadmap.sh/backend) · [API Design roadmap](https://roadmap.sh/api-design?fl=1) · [Fullstack transition roadmap](https://roadmap.sh/ai/roadmap/fullstack-transition-for-frontend-developers-eqv75) · [earlier frontend notes](https://github.com/AsyaYeromina/kottans-frontend). The Backend and API resource links below were extracted from the public [roadmap.sh source](https://github.com/nilbuild/developer-roadmap/tree/master/roadmaps) on 2026-09-25. The AI roadmap supplied additional topic ideas; its generated per-node explanations and guides are not copied here.

## Core sequence

## Phase 1: Mental model flip

### 1.1 HTTP & networking

- [ ] **1.1.1** Full request/response lifecycle — from the server's perspective
- [ ] **1.1.2** HTTP methods: GET, POST, PUT, PATCH, DELETE — what each one means semantically
- [ ] **1.1.3** HTTP headers: Content-Type, Authorization, Accept, CORS headers
- [ ] **1.1.4** Status codes you send: 200, 201, 204, 400, 401, 403, 404, 409, 422, 500
- [ ] **1.1.5** Request body formats: JSON, form-urlencoded, multipart/form-data
- [ ] **1.1.6** URL anatomy: protocol, host, pathname, query string, fragment

**Added from the transition roadmap**

- [ ] **1.1.A1** Explain the client/server model and why HTTP requests are stateless.

**15–20 minute practice idea:** Use browser DevTools on one page. Record the request URL, method, status, and one header.

**Mentor pick:** [MDN HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).

<details><summary>Roadmap.sh resources · 22 nodes, 73 links</summary>

- **[Basics of DNS](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/basics-of-dns@v4nJYD9yiIEUviLPhVTCD.md)** · api-design
  - [What is DNS?](<https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/>)
  - [Introduction to DNS](<https://aws.amazon.com/route53/what-is-dns/>)
  - [DNS Record Crash Course for Web Developers](<https://dev.to/chrisachard/dns-record-crash-course-for-web-developers-35hn>)
  - [DNS explained in 100 seconds](<https://www.youtube.com/watch?v=UVR9lhUGAyU>)
- **[Content Negotiation in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/content-negotiation@TX_hg7EobNJhmWKsMCaT1.md)** · api-design
  - [Content Negotiation](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation>)
  - [Content Negotiation in Practice](<https://softwaremill.com/content-negotiation-in-practice/>)
- **[Cookies in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/cookies@UFuX8wcxZQ7dvaQF_2Yp8.md)** · api-design
  - [What Are API Cookies? How to Send it?](<https://apidog.com/articles/what-are-api-cookies/>)
  - [Using HTTP cookies - Mozilla](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies>)
- **[CORS under API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/cors@GRlsBogOlOwuqhMMPyHN3.md)** · api-design
  - [Cross-Origin Resource Sharing (CORS)](<https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS>)
  - [What is CORS?](<https://aws.amazon.com/what-is/cross-origin-resource-sharing/>)
  - [CORS in 100 seconds](<https://www.youtube.com/watch?v=4KHiSt0oLJ0>)
- **[HTTP in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/http@2HdKzAIQi15pr3YHHrbPp.md)** · api-design
  - [What is HTTP?](<https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/>)
  - [An overview of HTTP](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview>)
  - [HTTP/3 From A To Z: Core Concepts](<https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/>)
  - [HTTP Crash Course & Exploration](<https://www.youtube.com/watch?v=iYM2zFP3Zn0>)
- **[HTTP Headers in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/http-headers@rE-0yibRH6B2UBKp351cf.md)** · api-design
  - [HTTP Headers](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers>)
  - [What are HTTP Headers?](<https://blog.postman.com/what-are-http-headers/>)
  - [What are HTTP Headers & Types of HTTP headers](<https://requestly.com/blog/what-are-http-headers-understand-different-types-of-http-headers/>)
- **[HTTP Methods](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/http-methods@rADHM-6NAxEjzmgiHefDX.md)** · api-design
  - [HTTP Methods - MDN](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods>)
  - [What are HTTP Methods? - Postman](<https://blog.postman.com/what-are-http-methods/>)
- **[HTTP Status Codes](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/http-status-codes@7szYyzLifKsepNU0c2KnN.md)** · api-design
  - [HTTP Status Codes](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Status>)
  - [What are HTTP status codes?](<https://umbraco.com/knowledge-base/http-status-codes/>)
  - [List of HTTP status codes](<https://en.wikipedia.org/wiki/List_of_HTTP_status_codes>)
  - [HTTP Status Codes explained in 5 minutes](<https://www.youtube.com/watch?v=qmpUfWN7hh4>)
- **[HTTP Versions in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/http-versions@ACALE93mL4gnX5ThRIdRp.md)** · api-design
  - [Evolution of HTTP](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP>)
  - [HTTP: 1.0 vs 1.1 vs 2.0 vs 3.0](<https://www.baeldung.com/cs/http-versions>)
- **[Understand TCP / IP](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/understand-tcp--ip@KG3wO86F8Of27fU7QRcsn.md)** · api-design
  - [What is Transmission Control Protocol TCP/IP?](<https://www.fortinet.com/resources/cyberglossary/tcp-ip>)
  - [What is TCP/IP?](<https://www.cloudflare.com/en-gb/learning/ddos/glossary/tcp-ip/>)
  - [what is TCP/IP and OSI?](<https://www.youtube.com/watch?v=CRdL1PcherM>)
- **[URL, Query & Path Parameters](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/url-query--path-parameters@P-rGIk50Bg7nFmWieAW07.md)** · api-design
  - [Understanding Path Variables and Query Parameters](<https://medium.com/@averydcs/understanding-path-variables-and-query-parameters-in-http-requests-232248b71a8>)
  - [Describing parameters](<https://swagger.io/docs/specification/describing-parameters/>)
  - [How API Parameters Work: Query, Path, Header, and Body](<https://treblle.com/blog/api-parameters-query-path-header-body>)
- **[What are APIs](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/what-are-apis@r8M3quACGO2piu0u_R4hO.md)** · api-design
  - [Getting Started with APIs - Postman](<https://www.postman.com/what-is-an-api/>)
  - [API - IBM](<https://www.ibm.com/topics/api>)
  - [What is an API? - AWS](<https://aws.amazon.com/what-is/api/>)
  - [What is an API?](<https://www.youtube.com/watch?v=s7wmiS2mSXY>)
- **[Browsers](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/browsers-and-how-they-work@P82WFaTPgQEPNp5IIuZ1Y.md)** · backend
  - [How Browsers Work](<https://www.ramotion.com/blog/what-is-web-browser/>)
  - [Populating the Page: How Browsers Work](<https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work>)
  - [How Do Web Browsers Work?](<https://www.youtube.com/watch?v=5rLFYtXHo9s>)
- **[Cors](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/cors@LU6WUbkWKbPM1rb2_gEqa.md)** · backend
  - [Cross-Origin Resource Sharing (CORS)](<https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS>)
  - [Understanding CORS](<https://rbika.com/blog/understanding-cors>)
  - [CORS in 100 Seconds](<https://www.youtube.com/watch?v=4KHiSt0oLJ0>)
  - [CORS in 6 minutes](<https://www.youtube.com/watch?v=PNtFSVU-YTI>)
- **[DNS](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/dns-and-how-it-works@hkxw9jPGYphmjhTjw8766.md)** · backend
  - [Everything You Need to Know About DNS](<https://cs.fyi/guide/everything-you-need-to-know-about-dns>)
  - [What is DNS?](<https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/>)
  - [How DNS works (comic)](<https://howdns.works/>)
  - [DNS and How does it Work?](<https://www.youtube.com/watch?v=Wj0od2ag5sk>)
- **[Internet](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/how-does-the-internet-work@yCnn-NfSxIybUQ2iTuUGq.md)** · backend
  - [How does the Internet Work?](<https://cs.fyi/guide/how-does-internet-work>)
  - [The Internet Explained](<https://www.vox.com/2014/6/16/18076282/the-internet>)
  - [How does the internet work? (Full Course)](<https://www.youtube.com/watch?v=zN8YNNHcaZc>)
- **[HTTPS](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/https@x-WBJjBd8u93ym5gtxGsR.md)** · backend
  - [What is HTTPS?](<https://www.cloudflare.com/en-gb/learning/ssl/what-is-https/>)
  - [How HTTPS works (comic)](<https://howhttps.works/>)
  - [HTTPS explained with carrier pigeons](<https://baida.dev/articles/https-explained-with-carrier-pigeons>)
  - [HTTP vs HTTPS](<https://www.youtube.com/watch?v=nOmT_5hqgPk>)
- **[Backend Development](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/introduction@SiYUdtYMDImRPmV2_XPkH.md)** · backend
  - [What is backend? A comprehensive intro to server-side development](<https://alokai.com/blog/what-is-backend>)
  - [What is Back-End Architecture?](<https://www.codecademy.com/article/what-is-back-end-architecture>)
  - [Backend web development - a complete overview](<https://www.youtube.com/watch?v=XBu54nfzxAQ>)
  - [How The Backend Works](<https://www.youtube.com/watch?v=4r6WdaY3SOA>)
- **[SSL/TLS](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/ssltls@0v3OsaghJEGHeXX0c5kqn.md)** · backend
  - [Wikipedia - SSL/TLS](<https://en.wikipedia.org/wiki/Transport_Layer_Security>)
  - [Cloudflare - What is SSL?](<https://www.cloudflare.com/learning/ssl/what-is-ssl/>)
  - [SSL, TLS, HTTPS Explained](<https://www.youtube.com/watch?v=j9QmMEWmcfo>)
- **[Domain Name](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/what-is-domain-name@ZhSuu2VArnzPDp6dPQQSC.md)** · backend
  - [What is a Domain Name?](<https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name>)
  - [What is a Domain Name? \| Domain name vs. URL](<https://www.cloudflare.com/en-gb/learning/dns/glossary/what-is-a-domain-name/>)
  - [A Beginners Guide to How Domain Names Work](<https://www.youtube.com/watch?v=Y4cRx19nhJk>)
  - [Everything You Need to Know About Domain Names](<https://www.youtube.com/watch?v=qO5qcQgiNX4>)
- **[Hosting](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/what-is-hosting@aqMaEY8gkKMikiqleV5EP.md)** · backend
  - [What is the difference between Webpage, Website, Web server, and search engine?](<https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines>)
  - [What is a web server?](<https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server>)
  - [What is Web Hosting and How Does It Work?](<https://www.youtube.com/watch?v=H8oAvyqQwew>)
  - [Different Types of Web Hosting Explained](<https://www.youtube.com/watch?v=AXVZYzw8geg>)
- **[What is HTTP?](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/what-is-http@R12sArWVpbIs_PHxBqVaR.md)** · backend
  - [Full HTTP Networking Course](<https://www.youtube.com/watch?v=2JYT5f2isg4>)
  - [What is HTTP?](<https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/>)
  - [HTTP/3 From A To Z: Core Concepts](<https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/>)
  - [HTTP/1 to HTTP/2 to HTTP/3](<https://www.youtube.com/watch?v=a-sBfyiXysI>)

</details>

### 1.2 Node.js basics

- [ ] **1.2.1** What Node.js is: V8 engine + libuv (not a browser runtime)
- [ ] **1.2.2** Installing Node.js with nvm — managing multiple versions
- [ ] **1.2.3** Running scripts: node index.js
- [ ] **1.2.4** process object: process.env, process.argv, process.exit(), process.cwd()
- [ ] **1.2.5** Module system: require() / CommonJS vs import / ESM — differences and when to use each
- [ ] **1.2.6** package.json: scripts, dependencies, devDependencies, main, type fields
- [ ] **1.2.7** npm essentials: install, run, init, uninstall, update, ci

**Added from the transition roadmap**

- [ ] **1.2.A1** Use EventEmitter and explain when an event is useful.
- [ ] **1.2.A2** Compare the browser runtime with Node.js process and file APIs.

**15–20 minute practice idea:** Print `process.argv`, `process.cwd()`, and one environment variable in a tiny script.

**Mentor pick:** [Node.js introduction](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs).

<details><summary>Roadmap.sh resources · 3 nodes, 8 links</summary>

- **[JavaScript](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/javascript@8-lO-v6jCYYoklEJXULxN.md)** · backend
  - [Visit Dedicated JavaScript Roadmap](<https://roadmap.sh/javascript>)
  - [The Modern JavaScript Tutorial](<https://javascript.info/>)
  - [Build 30 Javascript Projects in 30 days](<https://javascript30.com/>)
  - [JavaScript Crash Course for Beginners](<https://youtu.be/hdI2bqOjy3c?t=2>)
- **[JavaScript](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/javascript@An2lMuJEkkpL0cfw4RrSl.md)** · backend
  - [Visit Dedicated JavaScript Roadmap](<https://roadmap.sh/javascript>)
  - [JavaScript from Beginner to Professional](<https://www.gurukultti.org/admin/notice/javascript.pdf>)
  - [The Modern JavaScript Tutorial](<https://javascript.info/>)
  - [JavaScript Crash Course For Beginners](<https://www.youtube.com/watch?v=hdI2bqOjy3c&t=4s>)
- **[Learn a Language](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/pick-a-backend-language@2f0ZO6GJElfZ2Eis28Hzg.md)** · backend
  - No external resources listed in this node.

</details>

### 1.3 Environment & config

- [ ] **1.3.1** .env file format: KEY=value pairs, no spaces around =
- [ ] **1.3.2** dotenv package: require('dotenv').config() — where to call it
- [ ] **1.3.3** Reading variables: process.env.MY_VAR
- [ ] **1.3.4** .gitignore: always exclude .env — never commit secrets
- [ ] **1.3.5** .env.example: template file documenting required variables

**Added from the transition roadmap**

- [ ] **1.3.A1** Separate development and production settings without committing secrets.

**15–20 minute practice idea:** Create `.env.example` and a `.gitignore`; explain why the real `.env` stays local.

**Mentor pick:** [Node.js environment variables](https://nodejs.org/api/environment_variables.html).

<details><summary>Roadmap.sh resources · 1 nodes, 3 links</summary>

- **[Twelve-Factor Apps](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/twelve-factor-apps@8DmabQJXlrT__COZrDVTV.md)** · backend
  - [The Twelve-Factor App](<https://12factor.net/>)
  - [An illustrated guide to 12 Factor Apps](<https://www.redhat.com/architect/12-factor-app>)
  - [Every Developer NEEDS To Know 12-Factor App Principles](<https://www.youtube.com/watch?v=FryJt0Tbt9Q>)

</details>

### 1.4 First raw HTTP server

- [ ] **1.4.1** Node.js built-in http module — no install needed
- [ ] **1.4.2** http.createServer((req, res) => {}) pattern
- [ ] **1.4.3** req object: req.url, req.method, req.headers
- [ ] **1.4.4** res.writeHead(statusCode, headersObject)
- [ ] **1.4.5** res.end(body) — sending the response
- [ ] **1.4.6** Manual routing: if/else on req.url + req.method
- [ ] **1.4.7** Sending JSON: JSON.stringify() + Content-Type: application/json header
- [ ] **1.4.8** Parsing incoming JSON body: req.on('data') + req.on('end') pattern

**15–20 minute practice idea:** Make a `/hello` endpoint with the built in `http` module and send JSON.

**Mentor pick:** [Node.js HTTP API](https://nodejs.org/api/http.html).

<details><summary>Roadmap.sh resources · 5 nodes, 17 links</summary>

- **[Apache](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/apache@jjjonHTHHo-NiAf6p9xPv.md)** · backend
  - [Apache Server](<https://httpd.apache.org/>)
  - [Apache Server Documentation](<https://httpd.apache.org/docs/2.4/>)
  - [What is Apache Web Server?](<https://www.youtube.com/watch?v=kaaenHXO4t4>)
  - [Apache vs NGINX](<https://www.youtube.com/watch?v=9nyiY-psbMs>)
- **[Caddy](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/caddy@Op-PSPNoyj6Ss9CS09AXh.md)** · backend
  - [Caddy Server](<https://caddyserver.com/>)
  - [caddyserver/caddy - Caddy on GitHub](<https://github.com/caddyserver/caddy>)
  - [How to Make a Simple Caddy 2 Website](<https://www.youtube.com/watch?v=WgUV_BlHvj0>)
- **[Web Servers](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/learn-about-web-servers@fekyMpEnaGqjh1Cu4Nyc4.md)** · backend
  - [What is a Web Server? - Mozilla](<https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server>)
  - [What is a Web Server?](<https://www.hostinger.co.uk/tutorials/what-is-a-web-server>)
  - [Web Server Concepts and Examples](<https://youtu.be/9J1nJOivdyw>)
- **[MS IIS](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/ms-iis@0NJDgfe6eMa7qPUOI6Eya.md)** · backend
  - [ASP.NET](<http://ASP.NET>)
  - [Microsoft -IIS](<https://www.iis.net/>)
  - [Learn Windows Web Server IIS](<https://www.youtube.com/watch?v=1VdxPWwtISA>)
  - [What is IIS?](<https://www.youtube.com/watch?v=hPWSqEXOjQY>)
- **[Nginx](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/nginx@z5AdThp9ByulmM9uekgm-.md)** · backend
  - [Nginx Website](<https://nginx.org/>)
  - [NGINX Explained in 100 Seconds](<https://www.youtube.com/watch?v=JKxlsvZXG7c>)
  - [NGINX Tutorial for Beginners](<https://www.youtube.com/watch?v=9t9Mp0BGnyI>)

</details>

## Phase 2: Node.js core

### 2.1 Event loop & async model

- [ ] **2.1.1** Call stack, Web APIs, task queue — how the three interact
- [ ] **2.1.2** Microtask queue vs macrotask queue — execution order
- [ ] **2.1.3** setTimeout, setInterval, setImmediate, process.nextTick — differences
- [ ] **2.1.4** Why Node.js is non-blocking despite being single-threaded
- [ ] **2.1.5** Promise execution order in the event loop
- [ ] **2.1.6** async/await desugared — what it compiles to under the hood
- [ ] **2.1.7** Blocking vs non-blocking operations — when it matters

**15–20 minute practice idea:** Predict and check the output order of one Promise, timer, and `process.nextTick`.

**Mentor pick:** [Node.js event loop guide](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick).

<details><summary>Roadmap.sh resources · 1 nodes, 2 links</summary>

- **[Real Time Data](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/real-time-data@5XGvep2qoti31bsyqNzrU.md)** · backend
  - [Real-time Data - Wiki](<https://en.wikipedia.org/wiki/Real-time_data>)
  - [What is Real-time Data?](<https://www.qlik.com/us/streaming-data/real-time-data>)

</details>

### 2.2 Streams & file system

- [ ] **2.2.1** What a Buffer is — binary data representation in Node.js
- [ ] **2.2.2** Readable, Writable, Duplex, Transform — stream types
- [ ] **2.2.3** pipe() method — connecting a readable stream to a writable
- [ ] **2.2.4** fs.promises: readFile, writeFile, appendFile, unlink, mkdir
- [ ] **2.2.5** path module: join(), resolve(), dirname(), basename(), extname()
- [ ] **2.2.6** __dirname and __filename (CJS) vs import.meta.url (ESM)
- [ ] **2.2.7** fs.readdir() + fs.stat() — working with directories
- [ ] **2.2.8** Streaming large files vs readFile — when to choose which

**15–20 minute practice idea:** Read a text file with `fs.promises` and print its first line.

**Mentor pick:** [Node.js streams API](https://nodejs.org/api/stream.html).

### 2.3 Error handling patterns

- [ ] **2.3.1** try/catch with async/await — the correct pattern
- [ ] **2.3.2** Unhandled promise rejections — why they crash production apps
- [ ] **2.3.3** process.on('unhandledRejection') and 'uncaughtException' handlers
- [ ] **2.3.4** Error object anatomy: message, name, stack
- [ ] **2.3.5** Custom error classes extending Error with extra fields
- [ ] **2.3.6** Error-first callbacks (legacy pattern — you'll still encounter it)
- [ ] **2.3.7** Operational errors vs programmer errors — the distinction

**15–20 minute practice idea:** Throw a custom error from an async function and return a safe message.

**Mentor pick:** [Node.js error handling](https://nodejs.org/api/errors.html).

<details><summary>Roadmap.sh resources · 2 nodes, 5 links</summary>

- **[Error Handling in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/error-handling@8tELdagrOaGCf3nMVs8t3.md)** · api-design
  - [Best Practices for API Error Handling](<https://blog.postman.com/best-practices-for-api-error-handling/>)
  - [Best Practices for REST API Error Handling](<https://www.baeldung.com/rest-api-error-handling-best-practices>)
  - [Handling HTTP API Errors with Problem Details](<https://www.youtube.com/watch?v=uvTT_0hqhyY>)
- **[Error Handling / Retries](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/error-handling--retries@XD1vDtrRQFbLyKJaD1AlA.md)** · api-design
  - [How To Improve Your Backend By Adding Retries to Your API Calls](<https://hackernoon.com/how-to-improve-your-backend-by-adding-retries-to-your-api-calls-83r3udx>)
  - [How to Make Resilient Web Applications with Retries](<https://www.youtube.com/watch?v=Gly94hp3Eec>)

</details>

### 2.4 Advanced async patterns

- [ ] **2.4.1** Promise.all() — parallel, fails fast on first rejection
- [ ] **2.4.2** Promise.allSettled() — parallel, never throws, returns all results
- [ ] **2.4.3** Promise.race() — resolves/rejects with the first to settle
- [ ] **2.4.4** Promise.any() — resolves with the first to fulfill
- [ ] **2.4.5** Sequential async with for...of loops (not forEach!)
- [ ] **2.4.6** Async iterators: for await...of
- [ ] **2.4.7** AbortController + AbortSignal — cancellation pattern

**15–20 minute practice idea:** Call two independent async functions with `Promise.allSettled` and inspect both results.

**Mentor pick:** [MDN Promise concurrency](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled).

### 2.5 npm ecosystem

- [ ] **2.5.1** Semantic versioning: major.minor.patch — what each bump means
- [ ] **2.5.2** package.json version ranges: ^ (minor), ~ (patch), exact
- [ ] **2.5.3** package-lock.json — purpose and when to commit it
- [ ] **2.5.4** npm scripts: pre/post hooks, chaining with &&
- [ ] **2.5.5** Global vs local package install — when each makes sense
- [ ] **2.5.6** npx — run a package without installing globally
- [ ] **2.5.7** Workspaces — monorepo basics

**15–20 minute practice idea:** Add one npm script and explain the lockfile diff after `npm install`.

**Mentor pick:** [npm package.json guide](https://docs.npmjs.com/cli/v11/configuring-npm/package-json).

### 2.6 Build a CRUD server (no framework)

- [ ] **2.6.1** Router class: store routes as method+path → handler map
- [ ] **2.6.2** Middleware concept: function(req, res, next) chain
- [ ] **2.6.3** Body parser middleware: handle incoming JSON without a library
- [ ] **2.6.4** In-memory storage: Map or plain object as 'database'
- [ ] **2.6.5** JSON file storage: read → parse → modify → write cycle
- [ ] **2.6.6** CRUD for one resource: create, read all, read one, update, delete
- [ ] **2.6.7** Consistent JSON error format: { statusCode, message, error }

**Added from the transition roadmap**

- [ ] **2.6.A1** Build one Express route and compare it with the raw Node.js server.
- [ ] **2.6.A2** Serve a static file and explain middleware order.

**15–20 minute practice idea:** Add GET and POST for one in memory collection in the raw HTTP server.

**Mentor pick:** [Node.js HTTP API](https://nodejs.org/api/http.html).

<details><summary>Roadmap.sh resources · 3 nodes, 9 links</summary>

- **[Building JSON / RESTful APIs](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/building-json--restful-apis@awdoiCHz7Yc3kYac_iy-a.md)** · api-design
  - [Specification for Building APIs in JSON](<https://jsonapi.org/>)
  - [How to Make a RESTful API](<https://www.integrate.io/blog/how-to-make-a-rest-api/>)
  - [What is a REST API?](<https://www.youtube.com/watch?v=lsMQRaeKNDk&t=170s>)
- **[Simple JSON APIs](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/simple-json-apis@TVR-SkErlOHbDKLBGfxep.md)** · api-design
  - [Specification for Building JSON APIs](<https://github.com/json-api/json-api>)
  - [JSON API: Explained in 4 Minutes](<https://www.youtube.com/watch?v=N-4prIh7t38>)
- **[JSON APIs](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/json-apis@sNceS4MpSIjRkWhNDmrFg.md)** · backend
  - [Full Stack Open - Node.js and Express (Part 3)](<https://fullstackopen.com/en/part3>)
  - [JSON.org - Introducing JSON](<https://www.json.org/json-en.html>)
  - [JSON API Recommendations and Best Practices](<https://jsonapi.org/recommendations/>)
  - [REST API vs JSON API - Which Should You Use?](<https://www.youtube.com/watch?v=0oXYLzuucwE>)

</details>

## Phase 3: NestJS + database

### 3.1 NestJS architecture

- [ ] **3.1.1** What NestJS is — opinionated Node.js framework, Angular-inspired DI system
- [ ] **3.1.2** NestJS CLI: npm i -g @nestjs/cli, nest new, nest generate
- [ ] **3.1.3** Module: feature container — groups controllers, services, providers
- [ ] **3.1.4** @Module() decorator: imports, controllers, providers, exports arrays
- [ ] **3.1.5** Controller: handles HTTP requests, maps routes to methods
- [ ] **3.1.6** @Controller('prefix'), @Get(), @Post(), @Put(), @Patch(), @Delete()
- [ ] **3.1.7** Service: holds business logic and data access — the brain of a feature
- [ ] **3.1.8** @Injectable() — marks a class as a provider the DI container can manage
- [ ] **3.1.9** Dependency Injection: declare a type in constructor → NestJS provides it
- [ ] **3.1.10** AppModule: root module, bootstrapped in main.ts with NestFactory.create()
- [ ] **3.1.11** Feature modules: UsersModule, AuthModule, ProductsModule pattern
- [ ] **3.1.12** Imports/exports between modules — how providers are shared
- [ ] **3.1.13** @Global() decorator — app-wide singleton providers

**15–20 minute practice idea:** Generate a Nest feature module, controller, and service; trace one request.

**Mentor pick:** [NestJS modules](https://docs.nestjs.com/modules).

### 3.2 DTOs & validation

- [ ] **3.2.1** What a DTO is: Data Transfer Object — defines shape of incoming data
- [ ] **3.2.2** class-validator: @IsString, @IsEmail, @IsNumber, @IsBoolean, @IsUUID
- [ ] **3.2.3** @IsNotEmpty, @IsOptional, @MinLength, @MaxLength, @Min, @Max, @IsEnum
- [ ] **3.2.4** class-transformer: plainToInstance, @Exclude, @Expose, @Transform
- [ ] **3.2.5** ValidationPipe: register globally in main.ts with app.useGlobalPipes()
- [ ] **3.2.6** transform: true — auto-convert plain objects to class instances
- [ ] **3.2.7** whitelist: true — strip properties not in the DTO
- [ ] **3.2.8** ParseIntPipe, ParseUUIDPipe, ParseBoolPipe — parameter transforms
- [ ] **3.2.9** @ValidateNested() + @Type(() => ChildDto) — validating nested DTOs
- [ ] **3.2.10** Custom validator: @ValidatorConstraint + @Validate() decorator

**15–20 minute practice idea:** Add one DTO validation rule and send both a valid and invalid request.

**Mentor pick:** [NestJS validation](https://docs.nestjs.com/techniques/validation).

### 3.3 HTTP mechanics in NestJS

- [ ] **3.3.1** @Body(), @Param('id'), @Query('page'), @Headers('x-api-key')
- [ ] **3.3.2** Route parameters: /users/:id — @Param('id') extracts it
- [ ] **3.3.3** Query strings: /users?page=2&limit=10 — @Query() extracts as object
- [ ] **3.3.4** HTTP exceptions: NotFoundException, BadRequestException, UnauthorizedException, ForbiddenException, ConflictException
- [ ] **3.3.5** Exception filters: ExceptionFilter interface, @Catch() decorator
- [ ] **3.3.6** Global exception filter: app.useGlobalFilters(new AllExceptionsFilter())
- [ ] **3.3.7** Interceptors: transform response, add logging, measure timing
- [ ] **3.3.8** @UseInterceptors() at method, controller, or global level
- [ ] **3.3.9** ExecutionContext: access request and response in guards/interceptors
- [ ] **3.3.10** NestJS middleware: NestMiddleware interface, configure() in module
- [ ] **3.3.11** @Req() and @Res() — escape hatch to raw Express request/response

**15–20 minute practice idea:** Add a route parameter and query parameter to one Nest endpoint.

**Mentor pick:** [NestJS controllers](https://docs.nestjs.com/controllers).

<details><summary>Roadmap.sh resources · 2 nodes, 6 links</summary>

- **[Handling CRUD Operations in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/crud-operations@zXxEiM5HeOn7W-Vue0tQf.md)** · api-design
  - [Introduction to Building a CRUD API with Node.js and Express](<https://www.split.io/blog/introduction-to-building-a-crud-api-with-node-js-and-express/>)
  - [An expert's guide to CRUD APIs](<https://www.forestadmin.com/blog/an-experts-guide-to-crud-apis-designing-a-robust-one/>)
  - [Rethinking CRUD For REST API Designs - Palentir](<https://blog.palantir.com/rethinking-crud-for-rest-api-designs-a2a8287dc2af>)
- **[Handling CRUD Operations in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/handling-crud-operations@zXxEiM5HeOn7W-Vue0tQf.md)** · api-design
  - [Introduction to Building a CRUD API with Node.js and Express](<https://www.split.io/blog/introduction-to-building-a-crud-api-with-node-js-and-express/>)
  - [An expert's guide to CRUD APIs](<https://www.forestadmin.com/blog/an-experts-guide-to-crud-apis-designing-a-robust-one/>)
  - [Rethinking CRUD For REST API Designs - Palentir](<https://blog.palantir.com/rethinking-crud-for-rest-api-designs-a2a8287dc2af>)

</details>

### 3.4 PostgreSQL fundamentals

- [ ] **3.4.1** What PostgreSQL is — relational DB, ACID compliant, open source
- [ ] **3.4.2** Running PostgreSQL locally via Docker: docker run --name pg -e POSTGRES_PASSWORD=pass -p 5432:5432 postgres
- [ ] **3.4.3** psql CLI: connect, \l (list DBs), \c (connect), \dt (tables), \d tablename
- [ ] **3.4.4** Core SQL: SELECT, INSERT INTO, UPDATE, DELETE, WHERE, ORDER BY, LIMIT, OFFSET
- [ ] **3.4.5** Data types: VARCHAR, TEXT, INTEGER, BIGINT, BOOLEAN, TIMESTAMP, UUID, JSONB
- [ ] **3.4.6** Constraints: NOT NULL, UNIQUE, DEFAULT, CHECK
- [ ] **3.4.7** Primary key and foreign key — referential integrity
- [ ] **3.4.8** INNER JOIN, LEFT JOIN — fetching related records
- [ ] **3.4.9** Transactions: BEGIN, COMMIT, ROLLBACK — atomicity guarantee
- [ ] **3.4.10** Indexes: what they are, B-tree index, when to add one
- [ ] **3.4.11** N+1 query problem — what it is, why it kills performance
- [ ] **3.4.12** Connection pooling — why you reuse connections instead of opening new ones

**Added from the transition roadmap**

- [ ] **3.4.A1** Explain normalization and write one GROUP BY query.
- [ ] **3.4.A2** Compare relational and document database shapes for one feature.

**15–20 minute practice idea:** Create two related tables and run one JOIN in `psql`.

**Mentor pick:** [PostgreSQL tutorial](https://www.postgresql.org/docs/current/tutorial.html).

<details><summary>Roadmap.sh resources · 7 nodes, 25 links</summary>

- **[ACID](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/acid@qSAdfaGUfn8mtmDjHJi3z.md)** · backend
  - [PostgreSQL Tutorial on Transactions](<https://www.postgresql.org/docs/current/tutorial-transactions.html>)
  - [MySQL InnoDB and the ACID Model](<https://dev.mysql.com/doc/refman/8.0/en/mysql-acid.html>)
  - [What is an ACID Compliant Database?](<https://retool.com/blog/whats-an-acid-compliant-database/>)
  - [Database System Concepts - Silberschatz, Korth, Sudarshan](<https://db-book.com/>)
  - [ACID Explained: Atomic, Consistent, Isolated & Durable](<https://www.youtube.com/watch?v=yaQ5YMWkxq4>)
- **[Database Indexes](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/database-indexes@y-xkHFE9YzhNIX3EiWspL.md)** · backend
  - [PostgreSQL - Indexes](<https://www.postgresql.org/docs/current/indexes.html>)
  - [What is a Database Index?](<https://www.codecademy.com/article/sql-indexes>)
  - [Use the Index, Luke! - A Guide to Database Performance for Developers](<https://use-the-index-luke.com/>)
  - [Database Indexing Explained](<https://www.youtube.com/watch?v=-qNSXK7s7_w>)
- **[Databases](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/more-about-databases@LJt27onEOeIBomiEMTyKd.md)** · backend
  - [Oracle: What is a Database?](<https://www.oracle.com/database/what-is-database/>)
  - [Prisma.io: What are Databases?](<https://www.prisma.io/dataguide/intro/what-are-databases>)
  - [Explore top posts about Backend Development](<https://app.daily.dev/tags/backend?ref=roadmapsh>)
- **[Database Normalization](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/normalization@Ge2SnKBrQQrU-oGLz6TmT.md)** · backend
  - [What is Normalization in DBMS (SQL)? 1NF, 2NF, 3NF, BCNF Database with Example](<https://www.guru99.com/database-normalization.html>)
  - [Complete guide to Database Normalization in SQL](<https://www.youtube.com/watch?v=rBPQ5fg_kiY>)
- **[PostgreSQL](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/postgresql@FihTrMO56kj9jT8O_pO2T.md)** · backend
  - [Visit Dedicated PostgreSQL DBA Roadmap](<https://roadmap.sh/postgresql-dba>)
  - [PostgreSQL Full Course for Beginners – freeCodeCamp](<https://www.youtube.com/watch?v=qw--VYLpxG4>)
  - [Official Website](<https://www.postgresql.org/>)
  - [Learn PostgreSQL - Full Tutorial for Beginners](<https://www.postgresqltutorial.com/>)
- **[Relational Databases](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/relational-databases@r45b461NxLN6wBODJ5CNP.md)** · backend
  - [Databases and SQL](<https://www.edx.org/course/databases-5-sql>)
  - [Relational Databases](<https://www.ibm.com/cloud/learn/relational-databases>)
  - [Intro To Relational Databases](<https://www.udacity.com/course/intro-to-relational-databases--ud197>)
  - [What is Relational Database](<https://youtu.be/OqjJjpjDRLc>)
- **[Transactions](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/transactions@rq_y_OBMD9AH_4aoecvAi.md)** · backend
  - [SQL Transactions Tutorial](<https://www.sqlservertutorial.net/sql-server-basics/sql-server-transaction/>)
  - [What is a Database transaction?](<https://www.youtube.com/watch?v=wHUOeXbZCYA>)
  - [ACID Properties in Databases With Examples](<https://www.youtube.com/watch?v=GAe5oB742dw>)

</details>

### 3.5 Prisma ORM

- [ ] **3.5.1** What Prisma is: schema-first ORM with type-safe query client
- [ ] **3.5.2** prisma init — creates schema.prisma + sets up DATABASE_URL in .env
- [ ] **3.5.3** schema.prisma: datasource block, generator block, model blocks
- [ ] **3.5.4** Field types: String, Int, Boolean, DateTime, Float, Json, Bytes
- [ ] **3.5.5** Field attributes: @id, @default(), @unique, @updatedAt, @map()
- [ ] **3.5.6** Model-level attributes: @@unique, @@index, @@map()
- [ ] **3.5.7** Relations: one-to-many, many-to-many (implicit join table), one-to-one
- [ ] **3.5.8** @relation() — explicit relation with fields and references
- [ ] **3.5.9** prisma generate — regenerates the type-safe Prisma Client
- [ ] **3.5.10** CRUD: create, findMany, findUnique, findFirst, update, upsert, delete, deleteMany
- [ ] **3.5.11** Where filters: equals, contains, startsWith, endsWith, gt, lt, gte, lte, in, not
- [ ] **3.5.12** select: return only specific fields
- [ ] **3.5.13** include: eager-load related records — prevents N+1
- [ ] **3.5.14** Pagination: skip + take pattern
- [ ] **3.5.15** Transactions: prisma.$transaction([...ops]) and interactive transactions
- [ ] **3.5.16** Migrations: npx prisma migrate dev (dev) vs prisma migrate deploy (prod)
- [ ] **3.5.17** Seeding: prisma/seed.ts + prisma.config.js seed command
- [ ] **3.5.18** Prisma Studio: npx prisma studio — visual DB browser in browser

**15–20 minute practice idea:** Model a one to many relation and query it with Prisma.

**Mentor pick:** [Prisma ORM guides](https://www.prisma.io/docs/orm).

<details><summary>Roadmap.sh resources · 4 nodes, 12 links</summary>

- **[Database Migrations](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/migrations@MOLAXgs0CMCT7o84L0EaK.md)** · backend
  - [Schema migration](<https://en.wikipedia.org/wiki/Schema_migration>)
  - [What is Database Migration?](<https://www.mongodb.com/resources/basics/databases/database-migration>)
  - [Introduction to Database Migration: A Beginner's Guide](<https://www.dbvis.com/thetable/introduction-to-database-migration-a-beginners-guide/>)
  - [Database Migrations Explained](<https://www.youtube.com/watch?v=mMsZPZKNc4g>)
- **[Migrations](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/migrations@MOLAXgs0CMCT7o84L0EaK.md.md)** · backend
  - [What are Database Migrations?](<https://www.prisma.io/dataguide/types/relational/what-are-database-migrations>)
  - [Database Migrations for Beginners](<https://www.youtube.com/watch?v=dJDBP7pPA-o>)
- **[N plus one problem](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/n1-problem@bQnOAu863hsHdyNMNyJop.md)** · backend
  - [In Detail Explanation of N+1 Problem](<https://medium.com/doctolib/understanding-and-fixing-n-1-query-30623109fe89>)
  - [What is the N+1 Problem](<https://planetscale.com/blog/what-is-n-1-query-problem-and-how-to-solve-it>)
  - [SQLite and the N+1 (no) problem](<https://www.youtube.com/watch?v=qPfAQY_RahA>)
- **[ORMs](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/orms@Z7jp_Juj5PffSxV7UZcBb.md)** · backend
  - [What is an ORM, how does it work, and how should I use one?](<https://stackoverflow.com/a/1279678>)
  - [What is an ORM](<https://www.freecodecamp.org/news/what-is-an-orm-the-meaning-of-object-relational-mapping-database-tools/>)
  - [Why Use an ORM?](<https://www.youtube.com/watch?v=vHt2LC1EM3Q>)

</details>

### 3.6 REST API design

- [ ] **3.6.1** Resource naming: plural nouns — /users, /products, /orders
- [ ] **3.6.2** HTTP method semantics: GET (read), POST (create), PUT (full replace), PATCH (partial update), DELETE (remove)
- [ ] **3.6.3** Idempotency: GET, PUT, DELETE are idempotent — POST is not
- [ ] **3.6.4** Nested resources: /users/:userId/posts/:postId
- [ ] **3.6.5** Offset pagination: ?page=2&limit=10 — simple, has drift issues
- [ ] **3.6.6** Cursor pagination: ?cursor=lastId&limit=10 — stable, better for real-time
- [ ] **3.6.7** Filtering: ?status=active&category=shoes — query params
- [ ] **3.6.8** Sorting: ?sortBy=createdAt&order=desc — query params
- [ ] **3.6.9** API versioning: /v1/users (URL) vs Accept-Version header
- [ ] **3.6.10** Soft delete pattern: deletedAt timestamp instead of real DELETE
- [ ] **3.6.11** UUID vs auto-increment IDs — tradeoffs
- [ ] **3.6.12** createdAt and updatedAt on every Prisma model

**Added from the transition roadmap**

- [ ] **3.6.A1** Sketch a GraphQL schema for one resource and compare it with REST.
- [ ] **3.6.A2** Design an API before implementation: request, response, errors, and examples.
- [ ] **3.6.A3** Explain BFF (backend for frontend) with a React screen.

**15–20 minute practice idea:** Write an endpoint contract with method, URI, examples, and error codes.

**Mentor pick:** [MDN HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

<details><summary>Roadmap.sh resources · 24 nodes, 67 links</summary>

- **[API Keys & Management](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/api-keys--management@tzUJwXu_scwQHnPPT0oY-.md)** · api-design
  - [What is API Key Management?](<https://www.akeyless.io/secrets-management-glossary/api-key-management/>)
  - [API Key Management - Definition and Best Practices](<https://infisical.com/blog/api-key-management>)
- **[API Lifecycle Management](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/api-lifecycle-management@At5exN7ZAx2IzY3cTCzHm.md)** · api-design
  - [What is the API Lifecycle?](<https://www.postman.com/api-platform/api-lifecycle/>)
  - [What is API Lifecycle Management?](<https://swagger.io/blog/api-strategy/what-is-api-lifecycle-management/>)
  - [Day in the Lifecycle of an API](<https://www.youtube.com/watch?v=VxY_cz0VQXE>)
- **[Different API Styles](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/different-api-styles@o8i093VQv-T5Qf1yGqU0R.md)** · api-design
  - [API Styles](<https://www.redhat.com/architect/api-styles>)
  - [Top API Styles](<https://www.youtube.com/watch?v=4vLxWqE94l4>)
- **[Filtering, Sorting & Search](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/filtering-sorting--search@dL3YellfAszBeJnm8KEYE.md)** · api-design
  - [How to Implement Filtering and Sorting in REST APIs](<https://oneuptime.com/blog/post/2026-01-26-rest-api-filtering-sorting/view>)
  - [Implement Search, Sort, Filter and Pagination Rest API With Node JS](<https://www.youtube.com/watch?v=0T4GsMYnVN4>)
- **[GraphQL APIs](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/graphql-apis@MKVcPM2EzAr2_Ieyp9Fu3.md)** · api-design
  - [Visit Dedicated GraphQL Roadmap](<https://roadmap.sh/graphql>)
  - [GraphQL Website](<https://graphql.org/>)
  - [Public GraphQL APIs](<https://github.com/graphql-kit/graphql-apis>)
  - [GraphQL Explained in 100 Seconds](<https://www.youtube.com/watch?v=eIQh02xuVw4>)
- **[gRPC](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/grpc-apis@1DrqtOwxCuFtWQXQ6ZALp.md)** · api-design
  - [gRPC Introduction](<https://grpc.io/docs/what-is-grpc/introduction/>)
  - [gRPC Core Concepts](<https://grpc.io/docs/what-is-grpc/core-concepts/>)
  - [Stephane Maarek - gRPC Introduction](<https://youtu.be/XRXTsQwyZSU>)
- **[HATEOAS in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/hateoas@LByD1vhzunhY1uY1YGZHP.md)** · api-design
  - [HATEOAS Driven REST APIs](<https://restfulapi.net/hateoas/>)
  - [HATEOAS](<https://htmx.org/essays/hateoas/>)
  - [What Happened To HATEOAS in RESTful API?](<https://www.youtube.com/watch?v=HNTSrytKCoQ>)
- **[Idempotency in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/idempotency@20KEgZH6cu_UokqWpV-9I.md)** · api-design
  - [What is idempotency?](<https://blog.dreamfactory.com/what-is-idempotency>)
  - [Idempotency Is Easy Until the Second Request Is Different](<https://blog.dochia.dev/blog/idempotency/>)
  - [Idempotent REST API](<https://restfulapi.net/idempotent-rest-apis/>)
- **[Naming Conventions](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/naming-conventions@0yY_lWzWVOC_WmPoyHw8W.md)** · api-design
  - [REST API URI Naming Conventions and Best Practices](<https://restfulapi.net/resource-naming/>)
  - [Good APIs Vs Bad APIs: 7 Tips for API Design](<https://www.youtube.com/watch?v=_gQaygjm_hg>)
- **[Pagination in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/pagination@pgJDzP3pJjhjr5wTRtPJO.md)** · api-design
  - [Everything you need to know about API pagination](<https://nordicapis.com/everything-you-need-to-know-about-api-pagination/>)
  - [Pagination in the REST API - Atlassian](<https://developer.atlassian.com/server/confluence/pagination-in-the-rest-api/>)
  - [Unlock the power of API pagination](<https://dev.to/pragativerma18/unlocking-the-power-of-api-pagination-best-practices-and-strategies-4b49>)
- **[Rate Limiting in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/rate-limiting@O7wjldZ3yTA2s_F-UnJw_.md)** · api-design
  - [Rate limit](<https://developer.mozilla.org/en-US/docs/Glossary/Rate_limit>)
  - [Throttle](<https://developer.mozilla.org/en-US/docs/Glossary/Throttle>)
  - [Debounce](<https://developer.mozilla.org/en-US/docs/Glossary/Debounce>)
  - [Rate Limiting techniques visualization](<https://smudge.ai/blog/ratelimit-algorithms>)
- **[Resource Modeling](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/resource-modeling@8IDks2DNFZ5nER7wK2Bu4.md)** · api-design
  - [Practical Guide to REST API Resource Modeling](<https://www.advancedcustomfields.com/blog/rest-api-resource/>)
  - [Resource modelling: think before you start coding](<https://medium.com/abn-amro-developer/resource-modelling-think-before-you-start-coding-a421357e9756>)
  - [Modeling RESTful API Resources](<https://www.youtube.com/watch?v=E7WSBLHEvbI>)
- **[REST Principles in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/rest-principles@9WI_z34jIFXwoUQuChyRU.md)** · api-design
  - [REST API Principles \| A Comprehensive Overview](<https://blog.dreamfactory.com/rest-apis-an-overview-of-basic-principles>)
  - [REST principles](<https://ninenines.eu/docs/en/cowboy/2.12/guide/rest_principles/>)
- **[RESTful APIs](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/restful-apis@BvwdASMvuNQ9DNgzdSZ4o.md)** · api-design
  - [What is REST?](<https://restfulapi.net/>)
  - [What is a RESTul API?](<https://aws.amazon.com/what-is/restful-api/>)
  - [Understanding RESTful APIs](<https://www.youtube.com/watch?v=lsMQRaeKNDk>)
- **[RFC 7807 - Problem Details for HTTP APIs in Error Handling](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/rfc-7807----problem-details@5CxU3inGcSHp-TDg3BQiY.md)** · api-design
  - [RFC 7807 - Problem Details for HTTP APIs](<https://datatracker.ietf.org/doc/html/rfc7807>)
  - [RFC 9457 - Problem Details for HTTP APIs](<https://www.rfc-editor.org/rfc/rfc9457.html>)
- **[RFC 7807 - Problem Details for HTTP APIs in Error Handling](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/rfc-7807----problem-details-for-apis@5CxU3inGcSHp-TDg3BQiY.md)** · api-design
  - [RFC 7807 - Problem Details for HTTP APIs](<https://datatracker.ietf.org/doc/html/rfc7807>)
  - [RFC 9457 - Problem Details for HTTP APIs](<https://www.rfc-editor.org/rfc/rfc9457.html>)
- **[SOAP APIs](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/soap-apis@Wwd-0PjrtViMFWxRGaQey.md)** · api-design
  - [What are SOAP APIs?](<https://www.indeed.com/career-advice/career-development/what-is-soap-api>)
  - [SOAP vs REST 101: Understand The Differences](<https://www.soapui.org/learn/api/soap-vs-rest-api/>)
- **[URI Design in API](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/uri-design@b3qRTLwCC_9uDoPGrd9Bu.md)** · api-design
  - [Guidelines for URI Design](<https://css-tricks.com/guidelines-for-uri-design/>)
  - [Designing URIs](<https://www.oreilly.com/library/view/restful-web-services/9780596809140/ch04.html>)
- **[Versioning Strategies in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/versioning-strategies@itILK2SXvLvAjk1Kul7EK.md)** · api-design
  - [What is API Versioning?](<https://www.postman.com/api-platform/api-versioning/>)
  - [API Versioning Best Practices](<https://kodekloud.com/blog/api-versioning-best-practices/>)
  - [Versioning your APIs](<https://www.youtube.com/watch?v=Np_Jr6AvCOc>)
- **[GraphQL](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/graphql@zp3bq38tMnutT2N0tktOW.md)** · backend
  - [Visit Dedicated GraphQL Roadmap](<https://roadmap.sh/graphql>)
  - [GraphQL](<https://graphql.org/>)
  - [Tutorial - GraphQL Explained in 100 Seconds](<https://www.youtube.com/watch?v=eIQh02xuVw4>)
- **[gRPC](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/grpc@J-TOE2lT4At1mSdNoxPS1.md)** · backend
  - [gRPC Website](<https://grpc.io/>)
  - [What Is GRPC?](<https://www.wallarm.com/what/the-concept-of-grpc>)
  - [What Is GRPC?](<https://www.youtube.com/watch?v=hVrwuMnCtok>)
- **[APIs](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/learn-about-apis@EwvLPSI6AlZ4TnNIJTZA4.md)** · backend
  - [Visit the Dedicated API Design Roadmap](<https://roadmap.sh/api-design>)
  - [Visit the Dedicated API Security Best Practices](<https://roadmap.sh/api-security-best-practices>)
  - [What is an API?](<https://aws.amazon.com/what-is/api/>)
  - [What is an API (in 5 minutes)](<https://www.youtube.com/watch?v=ByGJQzlzxQg>)
- **[REST](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/rest@lfNFDZZNdrB0lbEaMtU71.md)** · backend
  - [What is a REST API?](<https://www.redhat.com/en/topics/api/what-is-a-rest-api>)
  - [Best practices for RESTful web API design](<https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design>)
  - [Learn REST: A RESTful Tutorial](<https://restapitutorial.com/>)
  - [REST API Best Practices – REST Endpoint Design](<https://www.youtube.com/watch?v=1Wl-rtew1_E>)
- **[SOAP](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/soap@sSNf93azjuyMzQqIHE0Rh.md)** · backend
  - [SOAP Web Services Tutorial for Beginners](<https://www.guru99.com/soap-simple-object-access-protocol.html>)
  - [REST vs SOAP](<https://www.youtube.com/watch?v=_fq8Ye8kodA>)
  - [SOAP vs REST vs GraphQL vs gRPC](<https://www.youtube.com/watch?v=4vLxWqE94l4>)

</details>

### 3.7 Swagger / OpenAPI

- [ ] **3.7.1** @nestjs/swagger installation + DocumentBuilder setup in main.ts
- [ ] **3.7.2** SwaggerModule.createDocument() and SwaggerModule.setup('/api', app, doc)
- [ ] **3.7.3** @ApiTags('users') — group related endpoints in Swagger UI
- [ ] **3.7.4** @ApiOperation({ summary: 'Get all users' }) — describe an endpoint
- [ ] **3.7.5** @ApiProperty() on DTO fields — documents request body schema
- [ ] **3.7.6** @ApiPropertyOptional() — for optional DTO fields
- [ ] **3.7.7** @ApiResponse({ status: 200, type: UserDto }) — document response shape
- [ ] **3.7.8** @ApiBearerAuth() — mark JWT-protected endpoints
- [ ] **3.7.9** Testing endpoints live in Swagger UI at /api

**15–20 minute practice idea:** Document one endpoint and try it in Swagger UI.

**Mentor pick:** [OpenAPI specification](https://spec.openapis.org/oas/latest.html).

<details><summary>Roadmap.sh resources · 6 nodes, 20 links</summary>

- **[API Documentation Tools](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/api-documentation-tools@5R9yKfN1vItuv__HgCwP7.md)** · api-design
  - [Swagger's Official Website](<https://swagger.io/>)
  - [DapperDox's Official Website](<http://dapperdox.io/>)
  - [ReDoc Documentation](<https://github.com/Redocly/redoc>)
- **[Postman in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/postman@KQAus72RGqx5f-3-YeJby.md)** · api-design
  - [Postman Website](<https://www.postman.com/>)
  - [Postman Docs](<https://www.postman.com/api-documentation-tool/>)
  - [Postman Tutorial for Beginners](<https://www.youtube.com/watch?v=MFxk5BZulVU>)
- **[Readme.com in the Context of API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/readmecom@LxWHkhlikUaMT2G8YmVDQ.md)** · api-design
  - [Readme.com](<http://Readme.com>)
  - [Readme.com](<http://Readme.com>)
  - [Readme.com](<http://Readme.com>)
  - [ReadMe Website](<https://readme.com>)
  - [ReadMe](<https://github.com/orgs/readmeio/repositories?type=source>)
- **[Stoplight API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/stoplight@OpS2NX1lPTOtfjV1wKtC4.md)** · api-design
  - [Stoplight Website](<https://stoplight.io/>)
  - [stoplightio](<https://github.com/stoplightio>)
- **[Swagger / Open API](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/swagger--open-api@5RY7AlfRQydjxWK65Z4cv.md)** · api-design
  - [Swagger Website](<https://swagger.io/>)
  - [OpenAPI Initiative](<https://www.openapis.org/>)
  - [What is Swagger?](<https://blog.hubspot.com/website/what-is-swagger>)
- **[Open API Spec](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/open-api-specs@9cD5ag1L0GqHx4_zxc5JX.md)** · backend
  - [OpenAPI Specification Website](<https://swagger.io/specification/>)
  - [Open API Live Editor](<https://swagger.io/tools/swagger-editor/>)
  - [OpenAPI 3.0: How to Design and Document APIs with the Latest OpenAPI Specification 3.0](<https://www.youtube.com/watch?v=6kwmW_p_Tig>)
  - [REST API and OpenAPI: It’s Not an Either/Or Question](<https://www.youtube.com/watch?v=pRS9LRBgjYg>)

</details>

## Phase 4: Auth + security

### 4.1 JWT fundamentals

- [ ] **4.1.1** JWT structure: header.payload.signature — three base64url-encoded parts
- [ ] **4.1.2** Header: alg (HS256, RS256) + typ: JWT
- [ ] **4.1.3** Payload: sub, iat, exp — reserved claims + your custom claims
- [ ] **4.1.4** Signature: HMAC-SHA256 or RSA — prevents tampering
- [ ] **4.1.5** Access token: short-lived (15min–1hr) — sent with every request
- [ ] **4.1.6** Refresh token: long-lived (7–30 days) — used only to get new access tokens
- [ ] **4.1.7** Token storage options: httpOnly cookies (CSRF risk) vs memory (XSS safer)
- [ ] **4.1.8** Refresh token rotation: issue new refresh token on every use
- [ ] **4.1.9** Token revocation: blocklist in Redis or DB for forced logout
- [ ] **4.1.10** jwt.io — inspect and verify tokens manually in browser

**15–20 minute practice idea:** Decode a sample JWT locally and identify `sub`, `iat`, and `exp`.

**Mentor pick:** [JWT introduction](https://jwt.io/introduction).

<details><summary>Roadmap.sh resources · 2 nodes, 8 links</summary>

- **[JSON Web Token (JWT) in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/jwt@tWg68AHLIr1gIZA1za3jp.md)** · api-design
  - [JWT Authentication](<https://roadmap.sh/guides/jwt-authentication>)
  - [Introduction to JSON Web Tokens](<https://jwt.io/introduction>)
  - [JSON Web Tokens](<https://auth0.com/docs/secure/tokens/json-web-tokens>)
  - [Why is JWT popular?](<https://www.youtube.com/watch?v=P2CPd9ynFLg>)
- **[JWT](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/jwt@UxS_mzVUjLigEwKrXnEeB.md)** · backend
  - [jwt.io Website](<https://jwt.io/>)
  - [What is JWT?](<https://www.akana.com/blog/what-is-jwt>)
  - [JWT Security Best Practices](<https://curity.io/resources/learn/jwt-best-practices/>)
  - [Node.js JWT Authentication Tutorial](<https://www.youtube.com/watch?v=mbsmsi7l3r4>)

</details>

### 4.2 Auth implementation in NestJS

- [ ] **4.2.1** @nestjs/jwt and @nestjs/passport — install both
- [ ] **4.2.2** JwtModule.registerAsync() with useFactory for env-based config
- [ ] **4.2.3** PassportStrategy class — extend Strategy from passport-jwt
- [ ] **4.2.4** JwtStrategy: extract token from header, verify, return user
- [ ] **4.2.5** validate() return value becomes req.user in controllers
- [ ] **4.2.6** JwtAuthGuard extending AuthGuard('jwt')
- [ ] **4.2.7** LocalStrategy: validate username + password, return user
- [ ] **4.2.8** LocalAuthGuard for the POST /auth/login endpoint
- [ ] **4.2.9** @Public() custom decorator + IS_PUBLIC_KEY metadata
- [ ] **4.2.10** Global JwtAuthGuard that skips @Public() routes
- [ ] **4.2.11** Reflector service — reading decorator metadata in guards
- [ ] **4.2.12** Refresh token endpoint: validate refresh token → issue new pair
- [ ] **4.2.13** Logout: clear httpOnly cookie or add token ID to blocklist
- [ ] **4.2.14** @User() custom decorator — extract req.user cleanly in controllers

**Added from the transition roadmap**

- [ ] **4.2.A1** Define roles and permissions for one resource using least privilege.
- [ ] **4.2.A2** Design a password reset flow without implementing it yet.
- [ ] **4.2.A3** Explain when MFA adds protection.

**15–20 minute practice idea:** Protect one route and test anonymous versus signed in access.

**Mentor pick:** [NestJS authentication](https://docs.nestjs.com/security/authentication).

<details><summary>Roadmap.sh resources · 16 nodes, 47 links</summary>

- **[Attribute Based Access Control (ABAC) - An Authorization Method in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/abac@dZTe_kxIUQsc9N3w920aR.md)** · api-design
  - [What is Attribute Based Access Control?](<https://www.okta.com/uk/blog/2020/09/attribute-based-access-control-abac/>)
  - [Attribute Based Access Control](<https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html>)
- **[Authentication Methods in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/authentication-methods@cQnQ9v3mH27MGNwetz3JW.md)** · api-design
  - [API Authentication](<https://www.postman.com/api-platform/api-authentication/>)
- **[Authorization Methods in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/authorization-methods@nHbn8_sMY7J8o6ckbD-ER.md)** · api-design
  - [API Authorization Methods](<https://www.pingidentity.com/en/resources/identity-fundamentals/authorization/authorization-methods.html>)
- **[Basic Auth in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/basic-auth@0FzHERK5AeYL5wv1FBJbH.md)** · api-design
  - [Basic Authentication](<https://roadmap.sh/guides/basic-authentication>)
  - [Basic Auth Generation Header](<https://www.debugbear.com/basic-auth-header-generator>)
  - [Basic Authentication - Swagger.io](<https://swagger.io/docs/specification/authentication/basic-authentication/>)
  - [Basic Authentication - Twillio](<https://www.twilio.com/docs/glossary/what-is-basic-authentication>)
- **[Discretionary Access Control (DAC)](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/dac@_BXgYUlaYfpYrryXTw5n2.md)** · api-design
  - [Guide to Discretionary Access Control (DAC) With Examples](<https://builtin.com/articles/discretionary-access-control>)
  - [Discretionary Access Control (DAC)](<https://www.caldersecurity.co.uk/discretionary-access-control-dac/>)
  - [Discretionary Access Control](<https://www.youtube.com/watch?v=KyCamjQd0Mk>)
- **[Mandatory Access Control (MAC)](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/mac@tl1wXmOaj_zHL2o38VygO.md)** · api-design
  - [mandatory access control (MAC)](<https://www.techtarget.com/searchsecurity/definition/mandatory-access-control-MAC>)
  - [Mandatory access control defined](<https://nordlayer.com/learn/access-control/mandatory-access-control/>)
  - [Mandatory Access Control](<https://www.youtube.com/watch?v=E4CsEDEyauY>)
- **[Policy-Based Access Control (PBAC)](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/pbac@nJWtUyn9bljh3T-q_adJK.md)** · api-design
  - [Policy-Based Access Control (PBAC) – The Complete Know How for Organizations](<https://heimdalsecurity.com/blog/policy-based-access-control/>)
  - [Policy Based Access Control (PBAC) Explained](<https://www.pingidentity.com/en/resources/blog/post/policy-based-access-control.html>)
  - [What is PBAC? Policy Based Access Control Explainer by PlainID](<https://www.youtube.com/watch?v=b7Nc5LzByuc>)
- **[Role Based Access Control (RBAC) in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/rbac@wFsbmMi5Ey9UyDADdbdPW.md)** · api-design
  - [Role-Based Access Control](<https://auth0.com/docs/manage-users/access-control/rbac>)
  - [What is Role-based Access Control (RBAC)?](<https://www.redhat.com/en/topics/security/what-is-role-based-access-control>)
  - [Role-based Access Control (RBAC) vs. Attribute-based Access Control (ABAC)](<https://www.youtube.com/watch?v=rvZ35YW4t5k>)
- **[ReBAC](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/rebac@CCcY8UsGdd2pdBYHt9L4o.md)** · api-design
  - [How to Implement Relationship Based Access Control (ReBAC)](<https://www.freecodecamp.org/news/implement-relationship-based-access-control/>)
  - [Relationship-based Access Control (ReBAC)](<https://docs.aserto.com/docs/authorization-basics/authorization-models/rebac>)
  - [Understanding Relationship Based Access Control (ReBAC)](<https://www.youtube.com/watch?v=xCqpxiPXnCk>)
- **[Scopes & Permissions](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/scopes--permissions@qjawwRcMl2-IDwk8ExpPL.md)** · api-design
  - [What are REST API Scopes?](<https://auth0.com/blog/permissions-privileges-and-scopes/>)
- **[Session Based Authentication in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/session-based-auth@eQWoy4CpYP3TJL2bbhPB_.md)** · api-design
  - [Session Based Authentication](<https://roadmap.sh/guides/session-based-authentication>)
  - [Session vs Token Authentication](<https://www.authgear.com/post/session-vs-token-authentication>)
  - [Session Based Authentication - Roadmap.sh](<https://www.youtube.com/watch?v=gKkBEOq_shs>)
- **[Token Based Auth in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/token-based-auth@QTH7sy9uQZWl6ieBz7erY.md)** · api-design
  - [Token Based Authentication](<https://roadmap.sh/guides/token-authentication>)
  - [What Is Token-Based Authentication?](<https://www.okta.com/uk/identity-101/what-is-token-based-authentication/>)
  - [Session vs Token Authentication in 100 Seconds](<https://www.youtube.com/watch?v=UBUNrFtufWo>)
- **[Authentication](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/authentication@PY9G7KQy8bF6eIdr1ydHf.md)** · backend
  - [Basic Authentication](<https://roadmap.sh/guides/basic-authentication>)
  - [Session Based Authentication](<https://roadmap.sh/guides/session-based-authentication>)
  - [Token Based Authentication](<https://roadmap.sh/guides/token-authentication>)
  - [JWT Authentication](<https://roadmap.sh/guides/jwt-authentication>)
  - [OAuth - Open Authorization](<https://roadmap.sh/guides/oauth>)
  - [SSO - Single Sign On](<https://roadmap.sh/guides/sso>)
  - [Broken Authentication: Hands-on Exercise](<https://ransomleak.com/exercises/broken-user-authentication/>)
- **[Basic authentication](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/basic-authentication@yRiJgjjv2s1uV9vgo3n8m.md)** · backend
  - [HTTP Basic Authentication](<https://roadmap.sh/guides/http-basic-authentication>)
  - [Basic Authentication in 5 minutes](<https://www.youtube.com/watch?v=rhi1eIjSbvk>)
  - [Illustrated HTTP Basic Authentication](<https://www.youtube.com/watch?v=mwccHwUn7Gc>)
- **[Cookie-Based Authentication](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/cookie-based-auth@ffzsh8_5yRq85trFt9Xhk.md)** · backend
  - [HTTP Cookies - MDN Web Docs](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies>)
  - [Session vs Token Authentication](<https://www.section.io/engineering-education/token-based-vs-session-based-authentication/>)
  - [Session vs Token Authentication in 100 Seconds](<https://www.youtube.com/watch?v=UBUNrFtufWo>)
  - [How do cookies work?](<https://www.youtube.com/watch?v=rdVPflECed8>)
- **[Token authentication](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/token-authentication@0rGj7FThLJZouSQUhnqGW.md)** · backend
  - [Token Based Authentication](<https://roadmap.sh/guides/token-authentication>)
  - [What Is Token-Based Authentication?](<https://www.okta.com/identity-101/what-is-token-based-authentication/>)
  - [Why is JWT popular?](<https://www.youtube.com/watch?v=P2CPd9ynFLg>)

</details>

### 4.3 Password security

- [ ] **4.3.1** Never store plain-text passwords — fundamental rule
- [ ] **4.3.2** bcrypt: how one-way hashing works, what salt rounds mean
- [ ] **4.3.3** Salt rounds (10–12): cost factor, time/security tradeoff
- [ ] **4.3.4** bcrypt.hash(password, saltRounds) — call on registration
- [ ] **4.3.5** bcrypt.compare(plainPassword, hashedPassword) — call on login
- [ ] **4.3.6** argon2 — modern memory-hard alternative to bcrypt
- [ ] **4.3.7** Timing-safe comparison — why it prevents timing attacks
- [ ] **4.3.8** Password rules: minimum 8 chars, strength check, breach check (haveibeenpwned API)

**15–20 minute practice idea:** Hash and verify one password with a library; never log the plaintext.

**Mentor pick:** [OWASP password storage](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).

<details><summary>Roadmap.sh resources · 4 nodes, 11 links</summary>

- **[Bcrypt](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/bcrypt@dlG1bVkDmjI3PEGpkm1xH.md)** · backend
  - [bcrypt for Node.js](<https://github.com/kelektiv/node.bcrypt.js>)
  - [Understanding bcrypt](<https://auth0.com/blog/hashing-in-action-understanding-bcrypt/>)
  - [bcrypt explained](<https://www.youtube.com/watch?v=AzA_LTDoFqY>)
- **[MD5](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/md5@jWwA6yX4Zjx-r_KpDaD3c.md)** · backend
  - [Wikipedia - MD5](<https://en.wikipedia.org/wiki/MD5>)
  - [What is MD5?](<https://www.techtarget.com/searchsecurity/definition/MD5>)
  - [Why is MD5 not safe?](<https://infosecscout.com/why-md5-is-not-safe/>)
  - [How the MD5 hash function works](<https://www.youtube.com/watch?v=5MiMK45gkTY>)
- **[Scrypt](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/scrypt@kGTALrvCpxyVCXHRmkI7s.md)** · backend
  - [sCrypt Website](<https://www.tarsnap.com/scrypt.html>)
  - [Wikipedia - scrypt](<https://en.wikipedia.org/wiki/Scrypt>)
- **[SHA family](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/sha@JVN38r5jENoteia3YeIQ3.md)** · backend
  - [What is SHA?](<https://www.encryptionconsulting.com/education-center/what-is-sha/>)
  - [SHA: Secure Hashing Algorithm](<https://www.youtube.com/watch?v=DMtFhACPnTY>)

</details>

### 4.4 OAuth 2.0

- [ ] **4.4.1** What OAuth 2.0 is — delegated authorization, not authentication
- [ ] **4.4.2** OpenID Connect (OIDC) — identity layer on top of OAuth 2.0
- [ ] **4.4.3** Authorization Code flow: redirect → code → exchange → tokens
- [ ] **4.4.4** Access token vs ID token — what each contains
- [ ] **4.4.5** Google OAuth strategy: passport-google-oauth20 setup
- [ ] **4.4.6** GitHub OAuth strategy: passport-github2 setup
- [ ] **4.4.7** Callback URL: register in provider dashboard + handle in NestJS
- [ ] **4.4.8** Profile object: what provider returns (id, email, displayName, photos)
- [ ] **4.4.9** Linking OAuth accounts to local users — find-or-create pattern

**15–20 minute practice idea:** Draw the authorization code redirect and callback sequence.

**Mentor pick:** [OAuth 2.0 overview](https://oauth.net/2/).

<details><summary>Roadmap.sh resources · 5 nodes, 15 links</summary>

- **[OAuth 2.0](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/oauth-20@TLuNtQ6HKYQXmglyVk8-t.md)** · api-design
  - [OAuth](<https://roadmap.sh/guides/oauth>)
  - [OAuth Website](<https://oauth.net/2/>)
  - [What is OAuth 2.0?](<https://auth0.com/intro-to-iam/what-is-oauth-2>)
  - [OAuth 2 Explained In Simple Terms](<https://www.youtube.com/watch?v=ZV5yTm4pT8g>)
- **[undefined](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/oidc@jWekRGRa1131w92oS1HeW.md)** · api-design
  - [OIDC: Simplifying Secure Authentication With OpenID Connect](<https://www.fortinet.com/resources/cyberglossary/oidc>)
  - [OAuth 2.0 and OpenID Connect (in plain English)](<https://www.youtube.com/watch?v=996OiexHze0>)
- **[OAuth](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/oauth@vp-muizdICcmU0gN8zmkS.md)** · backend
  - [Okta - What the Heck is OAuth](<https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth>)
  - [DigitalOcean - An Introduction to OAuth 2](<https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2>)
  - [OAuth 2 Explained In Simple Terms](<https://www.youtube.com/watch?v=ZV5yTm4pT8g>)
- **[OpenID](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/openid@z3EJBpgGm0_Uj3ymhypbX.md)** · backend
  - [OpenID Website](<https://openid.net/>)
  - [OpenID Connect Protocol](<https://auth0.com/docs/authenticate/protocols/openid-connect-protocol>)
  - [An Illustrated Guide to OAuth and OpenID Connect](<https://www.youtube.com/watch?v=t18YB3xDfXI>)
  - [OAuth 2.0 and OpenID Connect (in plain English)](<https://www.youtube.com/watch?v=996OiexHze0>)
- **[Security Assertion Markup Language (SAML)](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/saml@UCHtaePVxS-0kpqlYxbfC.md)** · backend
  - [SAML Explained in Plain English](<https://www.onelogin.com/learn/saml>)
  - [How SAML Authentication Works](<https://www.youtube.com/watch?v=VzRnb9u8T1A>)

</details>

### 4.5 Security fundamentals

- [ ] **4.5.1** CORS: why browsers block cross-origin, NestJS enableCors() options
- [ ] **4.5.2** CSRF: what it is, SameSite=Strict cookie attribute, CSRF tokens
- [ ] **4.5.3** SQL injection: how it works, why Prisma parameterization prevents it
- [ ] **4.5.4** XSS: reflected, stored, DOM-based — input sanitization and CSP
- [ ] **4.5.5** Helmet.js: X-Frame-Options, Content-Security-Policy, HSTS headers
- [ ] **4.5.6** @nestjs/throttler: rate limiting — ThrottlerModule + ThrottlerGuard
- [ ] **4.5.7** Input sanitization: strip HTML, validate types strictly, whitelist
- [ ] **4.5.8** Never log passwords, tokens, PII, or secrets
- [ ] **4.5.9** HTTPS: TLS handshake basics, HTTP is never safe in production
- [ ] **4.5.10** Secrets in environment variables — never hardcode, never commit

**15–20 minute practice idea:** Write a tiny threat checklist for one endpoint: input, access, secrets, and logs.

**Mentor pick:** [OWASP cheat sheets](https://cheatsheetseries.owasp.org/).

<details><summary>Roadmap.sh resources · 7 nodes, 17 links</summary>

- **[API Security](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/api-security@qIJ6dUppjAjOTA8eQbp0n.md)** · api-design
  - [OWASP Project API Security](<https://owasp.org/API-Security/editions/2023/en/0x00-toc/>)
- **[Best Practices in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/best-practices@q1yaf-RbHIQsOqfzjn4k4.md)** · api-design
  - [API Security Best Practices](<https://roadmap.sh/api-security-best-practices>)
  - [Best Practices for REST API Design](<https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/>)
  - [Best Practices in API Design](<https://swagger.io/resources/articles/best-practices-in-api-design/>)
- **[Common Vulnerabilities in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/common-vulnerabilities@G70wvcOM1Isrx5ZBvS2xP.md)** · api-design
  - [Top 10 API Security Vulnerabilities](<https://curity.io/resources/learn/owasp-top-ten/>)
  - [Top API Vulnerabilities and 6 Ways to Mitigate Them](<https://brightsec.com/blog/top-api-vulnerabilities-and-6-ways-to-mitigate-them/>)
- **[Key Generation & Rotation](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/key-generation--rotation@0fSfFtskcJ0HNUZPf998l.md)** · api-design
  - [Introduction And Lesson Overview](<https://codesignal.com/learn/courses/api-key-authentication-security/lessons/api-key-generation-basics>)
  - [What Are API Keys, And Why Are They So Important?](<https://www.youtube.com/watch?v=sNn23dPRUS8&t=103s>)
- **[Content Security Policy](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/csp@HgQBde1zLUFtlwB66PR6_.md)** · backend
  - [MDN — Content Security Policy (CSP)](<https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP>)
  - [Google Devs — Content Security Policy (CSP)](<https://developers.google.com/web/fundamentals/security/csp>)
  - [Content Security Policy Explained](<https://www.youtube.com/watch?v=-LjPRzFR5f0>)
- **[Server Security](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/server-security@TZ0BWOENPv6pQm8qYB8Ow.md)** · backend
  - [What is a hardened server?](<https://www.sophos.com/en-us/cybersecurity-explained/what-is-server-hardening>)
  - [10 Tips for Hardening your Linux Servers](<https://www.youtube.com/watch?v=Jnxx_IAC0G4>)
- **[Web Security Knowledge](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/web-security@RBrIP5KbVQ2F0ly7kMfTo.md)** · backend
  - [Visit the Dedicated Cybersecurity Roadmap](<https://roadmap.sh/cyber-security>)
  - [OWASP Web Application Security Testing Checklist](<https://github.com/0xRadi/OWASP-Web-Checklist>)
  - [Why HTTPS Matters](<https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https>)
  - [7 Security Risks and Hacking Stories for Web Developers](<https://www.youtube.com/watch?v=4YOpILi9Oxs>)

</details>

### 4.6 OWASP Top 10

- [ ] **4.6.1** A01 Broken Access Control — check authorization on every endpoint, not just login
- [ ] **4.6.2** A02 Cryptographic Failures — use HTTPS, strong algorithms, no MD5/SHA1 for passwords
- [ ] **4.6.3** A03 Injection — SQL, command, LDAP injection — validate + parameterize
- [ ] **4.6.4** A04 Insecure Design — threat model before you build, not after
- [ ] **4.6.5** A05 Security Misconfiguration — no debug mode in prod, review all defaults
- [ ] **4.6.6** A06 Vulnerable and Outdated Components — npm audit, Dependabot
- [ ] **4.6.7** A07 Identification and Authentication Failures — brute force, weak passwords
- [ ] **4.6.8** A08 Software and Data Integrity Failures — verify dependency integrity
- [ ] **4.6.9** A09 Security Logging and Monitoring Failures — log auth events, protect logs
- [ ] **4.6.10** A10 Server-Side Request Forgery (SSRF) — validate URLs before fetching

**15–20 minute practice idea:** Find one access control mistake in a toy endpoint and describe the fix.

**Mentor pick:** [OWASP Top 10](https://owasp.org/www-project-top-ten/).

<details><summary>Roadmap.sh resources · 7 nodes, 18 links</summary>

- **[CCPA Under Standards and Compliance in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/ccpa@a-_iIE7UdoXzD00fD9MxN.md)** · api-design
  - [California Consumer Privacy Act (CCPA)](<https://oag.ca.gov/privacy/ccpa>)
  - [What is the CCPA?](<https://www.cloudflare.com/en-gb/learning/privacy/what-is-the-ccpa/>)
- **[GDPR in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/gdpr@vZxdswGLHCPi5GSuXEcHJ.md)** · api-design
  - [GDPR](<https://gdpr-info.eu/>)
  - [What is GDPR Compliance in Web Application and API Security?](<https://probely.com/blog/what-is-gdpr-compliance-in-web-application-and-api-security/>)
- **[HIPAA in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/hipaa@W4WwTmgZGnWmiYsB0ezml.md)** · api-design
  - [HIPAA](<https://www.hhs.gov/hipaa/index.html>)
  - [The 11 MOST Common HIPAA Violations](<https://www.youtube.com/watch?v=sN-zLAqYoTo>)
- **[PCI DSS in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/pci-dss@J0enF8UTVzY3H4n3pbPIF.md)** · api-design
  - [What is PCI DSS and how to comply?](<https://www.itgovernance.co.uk/pci_dss>)
  - [Payment Card Industry Data Security Standard](<https://en.wikipedia.org/wiki/Payment_Card_Industry_Data_Security_Standard>)
- **[PII under Standards and Compliance](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/pii@mXCKtLUvwVJkHrpHzOecq.md)** · api-design
  - [Personally Identifiable Information (PII): Definition, Types, and Examples](<https://www.investopedia.com/terms/p/personally-identifiable-information-pii.asp>)
  - [What is Personally Identifiable Information?](<https://www.ibm.com/topics/pii>)
- **[Standards and Compliance in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/standards-and-compliance@yvdfoly5WHHTq2Puss355.md)** · api-design
  - [What is API Compliance and Why is it important?](<https://www.traceable.ai/blog-post/achieve-api-compliance>)
  - [What is API compliance? A cloud security perspective](<https://www.wiz.io/academy/api-security/api-compliance>)
  - [REST API Standards](<https://www.integrate.io/blog/rest-api-standards/>)
- **[OWASP Security Risks](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/owasp-risks@AAgciyxuDvS2B_c6FRMvT.md)** · backend
  - [OWASP Website](<https://owasp.org/>)
  - [OWASP Application Security Verification Standard](<https://github.com/OWASP/ASVS>)
  - [OWASP Top 10 Security Risks](<https://cheatsheetseries.owasp.org/IndexTopTen.html>)
  - [OWASP Cheatsheets](<https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html>)
  - [OWASP Top 10: Exploit-then-Fix Labs](<https://ransomleak.com/catalogue/application-security/>)

</details>

## Phase 5: Testing + DevOps

### 5.1 Testing theory

- [ ] **5.1.1** Test pyramid: unit (many, fast) → integration → e2e (few, slow)
- [ ] **5.1.2** Test behavior, not implementation — test what, not how
- [ ] **5.1.3** Test doubles: mock (fake impl), stub (canned return), spy (real + tracking)
- [ ] **5.1.4** Arrange → Act → Assert (AAA) pattern
- [ ] **5.1.5** Test isolation: each test independent, no shared mutable state
- [ ] **5.1.6** Coverage: line, branch, function — aim for 70–80% meaningfully
- [ ] **5.1.7** TDD basics: red (write failing test) → green (make it pass) → refactor

**15–20 minute practice idea:** Write one behavior focused unit test using Arrange, Act, Assert.

**Mentor pick:** [NestJS testing](https://docs.nestjs.com/fundamentals/testing).

<details><summary>Roadmap.sh resources · 7 nodes, 20 links</summary>

- **[API Testing](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/api-testing@Wpk4TvxcZOJgAoXjrOsZF.md)** · api-design
  - [What is API Testing?](<https://www.postman.com/api-platform/api-testing/>)
  - [API Testing : What It is, How to Test & Best Practices](<https://testsigma.com/guides/api-testing/>)
- **[Functional Testing in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/functional-testing@6lm3wy9WTAERTqXCn6pFt.md)** · api-design
  - [API Functional Testing – Why Is It Important And How to Test](<https://testsigma.com/blog/api-functional-testing/>)
  - [What Is API Functional Testing?](<https://www.youtube.com/watch?v=CvJHDKMWofk>)
- **[Mocking APIs under API Testing](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/mocking-apis@bEVCT5QGY3uw0kIfAELKh.md)** · api-design
  - [What is API Mocking? Definition, Guide, and Best Practices](<https://katalon.com/resources-center/blog/what-is-api-mocking>)
  - [What is API mocking (What is API Mocking? Definition, Guide, and Best Practices)](<https://blog.postman.com/what-is-api-mocking/>)
  - [How to Mock RESTFUL APIs - The Easy way!](<https://www.youtube.com/watch?v=tJRN5WBF5Wc>)
- **[Unit Testing in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/unit-testing@JvmW78cDm84GNhq8VEYZp.md)** · api-design
  - [How to write unit tests for your REST API](<https://medium.com/@oyetoketoby80/how-to-write-unit-test-for-your-rest-api-f8f71376273f>)
  - [Unit test a REST API](<https://www.testim.io/blog/unit-test-rest-api/>)
- **[Functional Testing](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/functional-testing@NAGisfq2CgeK3SsuRjnMw.md)** · backend
  - [Playwright - End-to-End Testing Documentation](<https://playwright.dev/docs/intro>)
  - [What is Functional Testing?](<https://www.guru99.com/functional-testing.html>)
  - [Functional Testing: What It Is and How to Do It Right](<https://www.atlassian.com/continuous-delivery/software-testing/functional-testing>)
  - [Functional Testing vs Non-Functional Testing](<https://www.youtube.com/watch?v=NgQT7miTP9M>)
- **[Testing](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/testing@STQQbPa7PE3gbjMdL6P-t.md)** · backend
  - [What is Software Testing?](<https://www.guru99.com/software-testing-introduction-importance.html>)
  - [Testing Pyramid](<https://www.browserstack.com/guide/testing-pyramid-for-test-automation>)
  - [Explore top posts about Testing](<https://app.daily.dev/tags/testing?ref=roadmapsh>)
- **[Unit Testing](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/unit-testing@3OYm6b9f6WOrKi4KTOZYK.md)** · backend
  - [Jest - JavaScript Testing Framework](<https://jestjs.io/docs/getting-started>)
  - [JavaScript Testing Best Practices](<https://github.com/goldbergyoni/javascript-testing-best-practices>)
  - [What is Unit Testing?](<https://www.guru99.com/unit-testing-guide.html>)
  - [What is Unit Testing?](<https://youtu.be/x95ez7_V7rA?si=JhCVhcEN7zZOkxdp>)

</details>

### 5.2 Jest for NestJS

- [ ] **5.2.1** jest.config.ts setup — moduleNameMapper for path aliases
- [ ] **5.2.2** describe() — group related tests into a suite
- [ ] **5.2.3** it() / test() — individual test case
- [ ] **5.2.4** expect() matchers: toBe, toEqual, toContain, toMatchObject, toHaveLength, toBeNull
- [ ] **5.2.5** Async: resolves.toBe(), rejects.toThrow()
- [ ] **5.2.6** Call tracking: toHaveBeenCalled, toHaveBeenCalledWith, toHaveBeenCalledTimes
- [ ] **5.2.7** beforeEach / afterEach — setup and teardown per test
- [ ] **5.2.8** beforeAll / afterAll — setup and teardown once per suite
- [ ] **5.2.9** jest.fn() — create a mock function that tracks calls
- [ ] **5.2.10** jest.mock('../../module') — replace an entire module with mocks
- [ ] **5.2.11** jest.spyOn(object, 'methodName') — spy on a real method
- [ ] **5.2.12** Mocking PrismaService: create a mock factory with jest.fn() per method
- [ ] **5.2.13** Test.createTestingModule({ providers }).compile() — NestJS test module
- [ ] **5.2.14** Testing services: inject mocked Prisma, call service methods, assert
- [ ] **5.2.15** Testing controllers: mock service layer, test HTTP response shape
- [ ] **5.2.16** Testing Guards: mock ExecutionContext, call canActivate()
- [ ] **5.2.17** jest --coverage — generate HTML coverage report

**15–20 minute practice idea:** Test one Nest service with a mocked dependency.

**Mentor pick:** [Jest getting started](https://jestjs.io/docs/getting-started).

### 5.3 Integration & E2E testing

- [ ] **5.3.1** Supertest: test HTTP endpoints without starting a real server
- [ ] **5.3.2** NestJS E2E setup: Test.createTestingModule + app.init() + getHttpServer()
- [ ] **5.3.3** request(app.getHttpServer()).post('/users').send(dto).expect(201)
- [ ] **5.3.4** Test database: separate DB instance or override DATABASE_URL in tests
- [ ] **5.3.5** Database seeding: insert known fixtures before each test
- [ ] **5.3.6** Database cleanup: DELETE or TRUNCATE after each test for isolation
- [ ] **5.3.7** Testing a full auth flow: register → login → use JWT → access protected route

**Added from the transition roadmap**

- [ ] **5.3.A1** Write a small API contract test.
- [ ] **5.3.A2** Run a basic load test and record what changed.

**15–20 minute practice idea:** Send a request to a test app and assert status plus response shape.

**Mentor pick:** [NestJS testing](https://docs.nestjs.com/fundamentals/testing).

<details><summary>Roadmap.sh resources · 5 nodes, 14 links</summary>

- **[Contract Testing in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/contract-testing@NqeBglhzukVMMEF9p2CXc.md)** · api-design
  - [Complete Guide to Contract Testing](<https://testsigma.com/blog/api-contract-testing/>)
  - [Getting Started with API Contract Testing](<https://saucelabs.com/resources/blog/getting-started-with-api-contract-testing>)
  - [Contract Testing](<https://www.postman.com/templates/42247877-8529-429d-acba-4de20c3b5b3b/Contract-testing/>)
- **[Integration Testing in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/integration-testing@qZELS5vw2feS7QfyD7spX.md)** · api-design
  - [How to run API integration tests](<https://www.merge.dev/blog/api-integration-testing>)
  - [Integration testing template](<https://www.postman.com/templates/fe506090-ca91-4340-bea9-82d2c3d2bb9a/Integration-testing/>)
- **[Load Testing in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/load-testing@7JNEx_cbqnAx3esvwZMOd.md)** · api-design
  - [API Load Testing - Beginners Guide](<https://grafana.com/blog/2024/01/30/api-load-testing/>)
  - [Test Your API’s Performance by Simulating Real-world Traffic](<https://blog.postman.com/postman-api-performance-testing/>)
  - [Load Testing API's](<https://www.youtube.com/watch?v=a5hWE4hMOoY>)
- **[Performance Testing in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/performance-testing@DQcAV59vr1-ZRnMfbLXpu.md)** · api-design
  - [API Performance Testing: A Step-by-Step Guide](<https://testsigma.com/blog/api-performance-testing/>)
  - [Simulate user traffic to test your API performance](<https://learning.postman.com/docs/collections/performance-testing/testing-api-performance/>)
- **[Integration Testing](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/integration-testing@381Kw1IMRv7CJp-Uf--qd.md)** · backend
  - [Supertest - HTTP Integration Testing for Node.js](<https://github.com/ladjs/supertest>)
  - [Integration Testing](<https://www.guru99.com/integration-testing.html>)
  - [How to Integrate and Test Your Tech Stack](<https://thenewstack.io/how-to-integrate-and-test-your-tech-stack/>)
  - [Integration Testing in Node.js](<https://www.youtube.com/watch?v=r9HdJ8P6GQI>)

</details>

### 5.4 Docker

- [ ] **5.4.1** What Docker is: containers package app + dependencies together
- [ ] **5.4.2** Images (templates) vs containers (running instances)
- [ ] **5.4.3** Dockerfile: FROM, WORKDIR, COPY, RUN, EXPOSE, CMD, ENV, ARG
- [ ] **5.4.4** .dockerignore — exclude node_modules, .env, dist, .git
- [ ] **5.4.5** docker build -t myapp:latest . — build an image from Dockerfile
- [ ] **5.4.6** docker run -p 3000:3000 -e NODE_ENV=production myapp — run container
- [ ] **5.4.7** docker-compose.yml: services, ports, environment, volumes, depends_on
- [ ] **5.4.8** docker compose up -d, down, logs -f, ps, exec -it service bash
- [ ] **5.4.9** Multi-stage build: builder stage (compile TS) + runner stage (prod image)
- [ ] **5.4.10** Docker networking: containers reference each other by service name
- [ ] **5.4.11** Named volumes for PostgreSQL: persist data across container restarts
- [ ] **5.4.12** Healthcheck in compose: test command, interval, timeout, retries

**15–20 minute practice idea:** Run PostgreSQL with Docker Compose and inspect its logs.

**Mentor pick:** [Docker get started](https://docs.docker.com/get-started/).

<details><summary>Roadmap.sh resources · 1 nodes, 4 links</summary>

- **[LXC](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/lxc@31ZlpfIPr9-5vYZqvjUeL.md)** · backend
  - [LXC Documentation](<https://linuxcontainers.org/lxc/documentation/>)
  - [What is LXC?](<https://linuxcontainers.org/lxc/introduction/>)
  - [Getting Started with LXD Containerization](<https://www.youtube.com/watch?v=aIwgPKkVj8s>)
  - [Getting Started with LXC containers](<https://youtu.be/CWmkSj_B-wo>)

</details>

### 5.5 CI/CD with GitHub Actions

- [ ] **5.5.1** .github/workflows/ci.yml — file location and purpose
- [ ] **5.5.2** Workflow YAML structure: name, on (triggers), jobs, steps
- [ ] **5.5.3** Triggers: push, pull_request (with branch filters), workflow_dispatch
- [ ] **5.5.4** Runners: runs-on: ubuntu-latest
- [ ] **5.5.5** actions/checkout@v4 — check out the repo
- [ ] **5.5.6** actions/setup-node@v4 — install a specific Node.js version
- [ ] **5.5.7** actions/cache@v3 — cache node_modules between runs
- [ ] **5.5.8** npm ci — clean install from lockfile (faster than npm install in CI)
- [ ] **5.5.9** Running tests: npm run test:cov -- --passWithNoTests
- [ ] **5.5.10** Secrets and env vars: ${{ secrets.DATABASE_URL }} in workflow
- [ ] **5.5.11** Job dependencies: needs: [test] — deploy only when tests pass
- [ ] **5.5.12** Deploying to Railway: install Railway CLI, railway up in workflow
- [ ] **5.5.13** Branch protection rules: require CI to pass before merging to main

**Added from the transition roadmap**

- [ ] **5.5.A1** Use a feature branch, pull request, and code review for one small change.

**15–20 minute practice idea:** Add a workflow that installs dependencies and runs one existing test.

**Mentor pick:** [GitHub Actions quickstart](https://docs.github.com/en/actions/get-started/quickstart).

<details><summary>Roadmap.sh resources · 7 nodes, 26 links</summary>

- **[CI/CD](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/ci--cd@mGfD7HfuP184lFkXZzGjG.md)** · backend
  - [What is CI/CD?](<https://about.gitlab.com/topics/ci-cd/>)
  - [A Primer: Continuous Integration and Continuous Delivery (CI/CD)](<https://thenewstack.io/a-primer-continuous-integration-and-continuous-delivery-ci-cd/>)
  - [DevOps CI/CD Explained in 100 Seconds](<https://www.youtube.com/watch?v=scEDHsr3APg>)
  - [Automate your Workflows with GitHub Actions](<https://www.youtube.com/watch?v=nyKZTKQS_EQ>)
- **[AI-Powered Code Reviews](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/code-reviews@0TMdly8yiqnNR8sx36iqc.md)** · backend
  - [AI Code Reviews](<https://github.com/resources/articles/ai-code-reviews>)
  - [AI Code Review: How to Make it Work for You](<https://www.startearly.ai/post/ai-code-review-how-to-make-it-work-for-you>)
  - [You've Been Using AI the Hard Way (Use This Instead)](<https://www.youtube.com/watch?v=MsQACpcuTkU>)
  - [Automatic code reviews with OpenAI Codex](<https://www.youtube.com/watch?v=HwbSWVg5Ln4&t=83s>)
- **[Git](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/git@_I1E__wCIVrhjMk6IMieE.md)** · backend
  - [Visit Dedicated Git & GitHub Roadmap](<https://roadmap.sh/git-github>)
  - [Why use Git? (Interactive Lesson)](<https://inter-git.com/lessons/introduction>)
  - [Tutorial: Git for Absolutely Everyone](<https://thenewstack.io/tutorial-git-for-absolutely-everyone/>)
  - [Git & GitHub Crash Course For Beginners](<https://www.youtube.com/watch?v=SWYqp7iY_Tc>)
- **[GitHub](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/github@ptD8EVqwFUYr4W5A_tABY.md)** · backend
  - [Visit Dedicated Git & GitHub Roadmap](<https://roadmap.sh/git-github>)
  - [GitHub Documentation](<https://docs.github.com>)
  - [What is GitHub?](<https://www.youtube.com/watch?v=w3jLJU7DT5E>)
  - [Git and GitHub for Beginners](<https://www.youtube.com/watch?v=RGOj5yH7evk>)
- **[GitLab](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/gitlab@Wcp-VDdFHipwa7hNAp1z_.md)** · backend
  - [GitLab](<https://gitlab.com/>)
  - [GitLab Documentation](<https://docs.gitlab.com/>)
  - [What is GitLab and Why Use It?](<https://www.youtube.com/watch?v=bnF7f1zGpo4>)
- **[Repo Hosting Services](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/repo-hosting-services@NvUcSDWBhzJZ31nzT4UlE.md)** · backend
  - [GitHub](<https://github.com>)
  - [GitLab](<https://about.gitlab.com/>)
  - [BitBucket](<https://bitbucket.org/product/guides/getting-started/overview>)
- **[Version Control Systems](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/version-control-systems@ezdqQW9wTUw93F6kjOzku.md)** · backend
  - [Visit Dedicated Git & GitHub Roadmap](<https://roadmap.sh/git-github>)
  - [Why version control? (Interactive Lesson)](<https://inter-git.com/lessons/introduction>)
  - [What is version control?](<https://www.atlassian.com/git/tutorials/what-is-version-control>)
  - [What is a Version Control System and why you should always use it](<https://www.youtube.com/watch?v=IeXhYROClZk>)

</details>

### 5.6 Deployment

- [ ] **5.6.1** Railway.app: connect GitHub repo, auto-deploy on push to main
- [ ] **5.6.2** Environment variables panel in Railway — set all .env values here
- [ ] **5.6.3** PostgreSQL addon in Railway — DATABASE_URL injected automatically
- [ ] **5.6.4** RELEASE_COMMAND in railway.toml: npx prisma migrate deploy
- [ ] **5.6.5** Custom domain + automatic HTTPS certificate in Railway
- [ ] **5.6.6** Viewing logs in Railway dashboard — debugging production
- [ ] **5.6.7** Health check endpoint: GET /health → { status: 'ok', timestamp }
- [ ] **5.6.8** Zero-downtime rolling deploy — Railway's default behaviour

**Added from the transition roadmap**

- [ ] **5.6.A1** Add structured request logs and a health check.
- [ ] **5.6.A2** Explain cache aside using one endpoint.
- [ ] **5.6.A3** Explain queues, workers, and retries with one background task.
- [ ] **5.6.A4** Compare polling, WebSockets, and server sent events.
- [ ] **5.6.A5** Sketch a backup and restore check.

**15–20 minute practice idea:** Add `/health`, deploy a small app, and read its logs.

**Mentor pick:** [The Twelve-Factor App](https://12factor.net/).

<details><summary>Roadmap.sh resources · 32 nodes, 84 links</summary>

- **[API Gateways](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/api-gateways@MJeUD4fOHaJu1oxk4uQ-x.md)** · api-design
  - [What does an API Gateway do?](<https://www.redhat.com/en/topics/api/what-does-an-api-gateway-do>)
  - [API gateway vs. Load balancer: Do you need one or both?](<https://roadmap.sh/network-engineer/api-gateway-vs-load-balancer>)
  - [What are API Gateways?](<https://www.ibm.com/blog/api-gateway/>)
- **[API Integration Patterns](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/api-integration-patterns@R3aRhqCslwhegMfHtxg5z.md)** · api-design
  - [API Integration Patterns - Dzone](<https://dzone.com/refcardz/api-integration-patterns>)
- **[API Performance](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/api-performance@d9ZXdU73jiCdeNHQv1_DH.md)** · api-design
  - [10 Tips for Improving API Performance](<https://nordicapis.com/10-tips-for-improving-api-performance/>)
  - [Top 7 Ways to 10x Your API Performance](<https://www.youtube.com/watch?v=zvWKqUiovAM>)
- **[Batch Processing in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/batch-processing@X68HXAAV-nKo-V4Fu1o72.md)** · api-design
  - [API Design Guidance: Bulk vs Batch Import](<https://tyk.io/blog/api-design-guidance-bulk-and-batch-import/>)
  - [Stream vs Batch Processing Explained with Examples](<https://www.youtube.com/watch?v=1xgBQTF24mU>)
- **[BFF Pattern](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/bff-pattern@v8iYctF_k40ES0_hHXS9N.md)** · api-design
  - [Backend for Frontend](<https://bff-patterns.com/>)
  - ["Backends for Frontends": what is it?](<https://www.youtube.com/watch?v=tmGnpU8xOGE>)
- **[Caching Strategies in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/caching-strategies@PrvRCR4HCdGar0vcUbG_a.md)** · api-design
  - [Caching Strategies for APIs](<https://medium.com/@satyendra.jaiswal/caching-strategies-for-apis-improving-performance-and-reducing-load-1d4bd2df2b44>)
  - [Using Caching Strategies to Improve API Performance](<https://www.lonti.com/blog/using-caching-strategies-to-improve-api-performance>)
  - [Cache Systems Every Developer Should Know](<https://www.youtube.com/watch?v=dGAgxozNWFE>)
- **[Event Driven Architecture in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/event-driven-architecture@oMfOBkVsgiLvFLicOUdx6.md)** · api-design
  - [Event Driven Architecture Style](<https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven>)
  - [Event-driven Architecture](<https://aws.amazon.com/event-driven-architecture/>)
  - [Event-Driven Architecture: Explained in 7 Minutes!](<https://www.youtube.com/watch?v=gOuAqRaDdHA>)
- **[HTTP Caching in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/http-caching@qAolZHf_jp8hCdtqHZwC8.md)** · api-design
  - [Why HTTP Caching matters for APIs](<https://thenewstack.io/why-http-caching-matters-for-apis/>)
  - [Caching REST API Response](<https://restfulapi.net/caching/>)
  - [HTTP caching](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching>)
- **[Kafka in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/kafka@boYX1QcJullypfX4sevdy.md)** · api-design
  - [Kafka Website](<https://kafka.apache.org/>)
  - [apache/kafka](<https://github.com/apache/kafka>)
  - [Kafka in 100 seconds](<https://www.youtube.com/watch?v=uvb00oaa3k8>)
- **[Load Balancing in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/load-balancing@p5wsniYnOS7cbHd92RxGk.md)** · api-design
  - [What is Load Balancing?](<https://www.cloudflare.com/en-gb/learning/performance/what-is-load-balancing/>)
  - [API gateway vs. Load balancer: Do you need one or both?](<https://roadmap.sh/network-engineer/api-gateway-vs-load-balancer>)
  - [What is a Load Balancer?](<https://www.youtube.com/watch?v=sCR3SAVdyCc>)
- **[Messaging Queues in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/messaging-queues@IkPZel5zxXWIx90Qx7fZI.md)** · api-design
  - [What is a Message Queue?](<https://aws.amazon.com/message-queue/>)
  - [REST API Message Queues Explained](<https://www.youtube.com/watch?v=2idPgA6IN_Q>)
- **[Microservices Architecture](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/microservices-architecture@PPeBbooE121zrgNwpVTiA.md)** · api-design
  - [What is Microservices Architecture?](<https://cloud.google.com/learn/what-is-microservices-architecture>)
  - [Microservice Architecture Style](<https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices>)
  - [Microservices Explained in 5 Minutes](<https://www.youtube.com/watch?v=lL_j7ilk7rc>)
- **[Observability](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/observability@oIZimEuBHCBGsK6b-s57f.md)** · api-design
  - [Understanding API Observability](<https://medium.com/@shubhadeepchat/understanding-api-observability-cd0c61392dec>)
  - [Observability for APIs \| Postman Intergalactic](<https://www.youtube.com/watch?v=Wkng1VXQAaU&list=PLM-7VG-sgbtB5XIrXIWWaLPqPpjn7IoVC>)
- **[Performance Metrics in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/performance-metrics@nQpczZUcn-TvrfT80dv0Q.md)** · api-design
  - [API Performance Monitoring](<https://www.catchpoint.com/api-monitoring-tools/api-performance-monitoring>)
  - [How does API Monitoring Improves API Performance?](<https://tyk.io/blog/api-product-metrics-what-you-need-to-know/>)
- **[Profiling and Monitoring in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/profiling-and-monitoring@-qdwBg7HvwlbLy3IKCRij.md)** · api-design
  - [Monitor Health and Performance of your APIs](<https://learning.postman.com/docs/monitoring-your-api/intro-monitors/>)
  - [API profiling at Pintrest](<https://medium.com/pinterest-engineering/api-profiling-at-pinterest-6fa9333b4961>)
- **[RabbitMQ in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/rabbit-mq@H22jAI2W5QLL-b1rq-c56.md)** · api-design
  - [RabbitMQ Website](<https://www.rabbitmq.com/>)
  - [Intro to RabbitMQ](<https://www.youtube.com/watch?v=bfVddTJNiAw>)
- **[Rate Limiting / Throttling in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/rate-limiting--throttling@tPVtRV818D8zAAuNbqPNa.md)** · api-design
  - [API Management 101: Rate Limiting](<https://tyk.io/learning-center/api-rate-limiting/>)
  - [API Rate Limiting vs. Throttling](<https://blog.stoplight.io/best-practices-api-rate-limiting-vs-throttling>)
  - [What is Rate Limiting / API Throttling? \| System Design Concepts](<https://www.youtube.com/watch?v=9CIjoWPwAhU>)
- **[Real-time APIs](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/real-time-apis@JE12g5cqnwmgeTle14Vxw.md)** · api-design
  - [What are Realtime APIs?](<https://www.pubnub.com/guides/realtime-api/>)
  - [What are realtime APIs and when to use them?](<https://ably.com/topic/what-is-a-realtime-api>)
- **[Server Sent Events under Real-time APIs](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/server-sent-events@iNsXTtcIHsI_i-mCfjGYn.md)** · api-design
  - [Using server-sent events](<https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events>)
  - [Server-Sent Events \| Postman Level Up](<https://www.youtube.com/watch?v=KrE044J8jEQ>)
- **[Streaming Responses](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/streaming-responses@zeYJPEduAmLQHqq4kNBdx.md)** · api-design
  - [Streaming Data with REST APIs](<https://apisyouwonthate.com/blog/streaming-data-with-rest-apis/>)
  - [https://www.youtube.com/watch?v=xTTtqwGWemw](<https://www.youtube.com/watch?v=xTTtqwGWemw&t=210s>)
- **[Synchronous vs Asynchronous APIs](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/synchronous-vs-asynchronous-apis@--mmTKhG58_elbUqyn90G.md)** · api-design
  - [Asynchronous APIs — Everything You Need to Know](<https://blog.hubspot.com/website/asynchronous-api>)
  - [The Differences Between Synchronous and Asynchronous APIs](<https://nordicapis.com/the-differences-between-synchronous-and-asynchronous-apis/>)
  - [Understanding Asynchronous APIs](<https://blog.postman.com/understanding-asynchronous-apis/>)
- **[Web Sockets in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/web-sockets@UQ8N7gcVpRLAYXgUNHBt5.md)** · api-design
  - [WebSocket vs. HTTP: Which protocol should you use?](<https://roadmap.sh/network-engineer/websocket-vs-http>)
  - [The WebSocket API (WebSockets)](<https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API>)
  - [What are Web Sockets?](<https://www.pubnub.com/guides/websockets/>)
  - [How Web Sockets Work](<https://www.youtube.com/watch?v=pnj3Jbho5Ck>)
- **[Webhooks vs Polling in API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/webhooks-vs-polling@75NVxS0iwoQXxOHCkWQxH.md)** · api-design
  - [When to Use Webhooks, WebSocket, Pub/Sub, and Polling](<https://hookdeck.com/webhooks/guides/when-to-use-webhooks>)
  - [Polling vs webhooks: when to use one over the other](<https://www.merge.dev/blog/webhooks-vs-polling>)
- **[Client Side Caching](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/http-caching@KWTbEVX_WxS8jmSaAX3Fe.md)** · backend
  - [Client Side Caching](<https://redis.io/docs/latest/develop/use/client-side-caching/>)
  - [Everything you need to know about HTTP Caching](<https://www.youtube.com/watch?v=HiBDZgTNpXY>)
- **[Instrumentation, Monitoring, and Telemetry](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/instrumentation@4X-sbqpP0NDhM99bKdqIa.md)** · backend
  - [What is Instrumentation?](<https://en.wikipedia.org/wiki/Instrumentation_%28computer_programming%29>)
  - [What is Monitoring?](<https://www.yottaa.com/performance-monitoring-backend-vs-front-end-solutions/>)
  - [What is Telemetry?](<https://www.sumologic.com/insight/what-is-telemetry/>)
  - [Observability vs. APM vs. Monitoring](<https://www.youtube.com/watch?v=CAQ_a2-9UOI>)
  - [Explore top posts about Monitoring](<https://app.daily.dev/tags/monitoring?ref=roadmapsh>)
- **[Kafka](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/kafka@VoYSis1F1ZfTxMlQlXQKB.md)** · backend
  - [Apache Kafka](<https://kafka.apache.org/quickstart>)
  - [Apache Kafka Streams](<https://kafka.apache.org/documentation/streams/>)
  - [Kafka Streams Confluent](<https://docs.confluent.io/platform/current/streams/concepts.html>)
  - [Apache Kafka Fundamentals](<https://www.youtube.com/watch?v=B5j3uNBH8X4>)
- **[Monitoring](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/monitoring@QvMEEsXh0-rzn5hDGcmEv.md)** · backend
  - [Prometheus Documentation](<https://prometheus.io/docs/introduction/overview/>)
  - [Grafana Documentation](<https://grafana.com/docs/grafana/latest/>)
  - [Prometheus and Grafana Tutorial for Beginners](<https://www.youtube.com/watch?v=9TJx7QTrTyo>)
  - [Grafana Explained in 5 Minutes](<https://www.youtube.com/watch?v=lILY8eSspEo>)
- **[Observability](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/observability@Z01E67D6KjrShvQCHjGR7.md)** · backend
  - [DataDog Docs](<https://docs.datadoghq.com/>)
  - [Sentry Docs](<https://docs.sentry.io/>)
  - [Observability and Instrumentation: What They Are and Why They Matter](<https://newrelic.com/blog/best-practices/observability-instrumentation>)
  - [What is observability?](<https://www.youtube.com/watch?v=--17See0KHs>)
- **[Profiling Performance](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/profiling-performance@SYXJhanu0lFmGj2m2XXhS.md)** · backend
  - [How to Profile SQL Queries for Better Performance](<https://servebolt.com/articles/profiling-sql-queries/>)
  - [Performance Profiling](<https://www.youtube.com/watch?v=MaauQTeGg2k>)
- **[Server Sent Events](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/server-sent-events@RUSdlokJUcEYbCvq5FJBJ.md)** · backend
  - [Server Sent Events - MDN](<https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events>)
  - [Server-Sent Events \| Postman Level Up](<https://www.youtube.com/watch?v=KrE044J8jEQ&t=1s>)
- **[Serverless](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/serverless@nkmIv3dNwre4yrULMgTh3.md)** · backend
  - [Serverless](<https://www.ibm.com/cloud/learn/serverless>)
  - [AWS Services](<https://aws.amazon.com/serverless/>)
  - [Serverless Computing in 100 Seconds](<https://www.youtube.com/watch?v=W_VV2Fx32_Y&ab_channel=Fireship>)
- **[Telemetry](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/telemetry@neVRtPjIHP_VG7lHwfah0.md)** · backend
  - [OpenTelemetry Course - Understand Software Performance](<https://www.youtube.com/watch?v=r8UvWSX3KA8>)
  - [What is telemetry and how does it work?](<https://www.techtarget.com/whatis/definition/telemetry>)

</details>

## Phase 6: Fullstack capstone

### 6.1 Fullstack integration

- [ ] **6.1.1** CORS: configure NestJS origin to match React dev + prod URLs
- [ ] **6.1.2** Vite proxy in vite.config.ts: server.proxy for local dev (avoid CORS in dev)
- [ ] **6.1.3** Environment variables in Vite: VITE_ prefix, import.meta.env.VITE_API_URL
- [ ] **6.1.4** Axios instance: create with baseURL, timeout, default headers
- [ ] **6.1.5** Axios request interceptor: attach Authorization: Bearer <token> automatically
- [ ] **6.1.6** Axios response interceptor: catch 401 → trigger refresh → retry original request
- [ ] **6.1.7** Token refresh queue: hold parallel 401s while refresh is in-flight
- [ ] **6.1.8** TanStack Query: QueryClient setup, useQuery, useMutation, queryClient
- [ ] **6.1.9** queryKey conventions — stable keys prevent over-fetching
- [ ] **6.1.10** invalidateQueries — trigger refetch after create/update/delete
- [ ] **6.1.11** Optimistic updates: update UI immediately, rollback on error
- [ ] **6.1.12** Global error boundary for unhandled API errors

**Added from the transition roadmap**

- [ ] **6.1.A1** Explain an end to end request from React through the API to PostgreSQL and back.

**15–20 minute practice idea:** Load one API resource in React and show loading, success, and error states.

**Mentor pick:** [TanStack Query React overview](https://tanstack.com/query/latest/docs/framework/react/overview).

<details><summary>Roadmap.sh resources · 3 nodes, 10 links</summary>

- **[CSS](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/css@utA1W2O6pzoV_LbtDE5DN.md)** · backend
  - [Visit the Dedicated CSS Roadmap](<https://roadmap.sh/css>)
  - [CSS MDN Docs](<https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS>)
  - [CSS Tutorial – Full Course for Beginners](<https://www.youtube.com/watch?v=OXGznpKZ_sA>)
- **[Frontend Basics](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/frontend-basics@oyg5g4-cY5EBEUgVkjnL3.md)** · backend
  - [Visit the dedicated Frontend Developer Roadmap](<https://roadmap.sh/frontend>)
  - [What Is Front-End Development?](<https://cloudinary.com/guides/front-end-development/front-end-development-the-complete-guide>)
  - [Frontend web development - a complete overview](<https://www.youtube.com/watch?v=WG5ikvJ2TKA>)
- **[HTML](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/html@9-pCsW650T1mfj5dmRB9L.md)** · backend
  - [Visit the dedicated HTML roadmap](<https://roadmap.sh/html>)
  - [Responsive Web Design Certification - Co-Learn HTML & CSS with guided projects](<https://www.freecodecamp.org/learn/2022/responsive-web-design/>)
  - [HTML Full Course for Beginners](<https://www.youtube.com/watch?v=mJgBOIoGihA>)
  - [HTML Full Course - Build a Website Tutorial](<https://www.youtube.com/watch?v=pQN-pnXPaVg>)

</details>

### 6.2 Auth flow in React

- [ ] **6.2.1** Token storage decision: httpOnly cookie (server sets) vs memory state
- [ ] **6.2.2** Auth context: createContext + useReducer — global user state
- [ ] **6.2.3** Protected route component: read auth context, redirect if null
- [ ] **6.2.4** Redirect after login: useLocation() → state.from → navigate back
- [ ] **6.2.5** Silent refresh on app load: call /auth/refresh to restore session
- [ ] **6.2.6** Logout: clear tokens + queryClient.clear() + redirect to /login

**15–20 minute practice idea:** Draw the login, refresh, protected route, and logout states.

**Mentor pick:** [React context](https://react.dev/reference/react/useContext).

### 6.3 Portfolio & GitHub

- [ ] **6.3.1** README must-haves: what it does, tech stack, local setup, live demo link
- [ ] **6.3.2** Loom demo video: 2–3 min walkthrough — record this before applying
- [ ] **6.3.3** GitHub profile README (special username/username repo)
- [ ] **6.3.4** Pin 3 repos: Phase 3 API, Phase 4 with auth, capstone fullstack app
- [ ] **6.3.5** Contribution graph: aim for visible activity during learning period
- [ ] **6.3.6** Swagger link in README — shows you think about API consumers
- [ ] **6.3.7** Live demo URL in repo description — hiring managers click this first

**Added from the transition roadmap**

- [ ] **6.3.A1** Write a short case study that shows a problem, choices, and result.

**15–20 minute practice idea:** Improve one project README with setup steps and a screenshot.

**Mentor pick:** [GitHub README guidance](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes).

<details><summary>Roadmap.sh resources · 1 nodes, 4 links</summary>

- **[Documentation Generation with AI](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/documentation-generation@q7NpwqQXUp4wt2to-yFiP.md)** · backend
  - [AI code documentation: Benefits and top tips](<https://www.ibm.com/think/insights/ai-code-documentation-benefits-top-tips>)
  - [AI Code Documentation Generators: A Guide](<https://overcast.blog/ai-code-documentation-generators-a-guide-b6cd72cd0ec4>)
  - [How I Built a Tool to Auto-Generate GitHub Documentation with LLMs](<https://www.youtube.com/watch?v=QYchuz6nBR8>)
  - [How to Generate API Documentation Using AI](<https://www.youtube.com/watch?v=1529XqH50Xs>)

</details>

### 6.4 CV & job hunt in Poland

- [ ] **6.4.1** CV keywords: NestJS, Node.js, TypeScript, PostgreSQL, Prisma, Docker, REST API, JWT, React
- [ ] **6.4.2** LinkedIn headline: 'Fullstack Developer | React + Node.js | Warsaw'
- [ ] **6.4.3** No Fluff Jobs filters: TypeScript, Node.js, Junior/Mid, Warsaw + Remote
- [ ] **6.4.4** JustJoin.IT: search fullstack + Node.js, filter by experience level
- [ ] **6.4.5** Application volume target: 5–10 per week minimum
- [ ] **6.4.6** Cover note (2–3 sentences max): why this company, what you built relevant to them
- [ ] **6.4.7** Referrals: Warsaw tech meetups — Node.js Poland, WarsawJS

**15–20 minute practice idea:** Rewrite one CV bullet to describe a concrete technical result.

**Mentor pick:** [GitHub profile README](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme).

### 6.5 Interview preparation

- [ ] **6.5.1** Event loop: explain call stack → microtask queue → macrotask queue with example
- [ ] **6.5.2** NestJS DI: explain how the IoC container resolves providers by type
- [ ] **6.5.3** JWT: explain header.payload.signature + why short-lived access tokens exist
- [ ] **6.5.4** Database indexes: explain B-tree index and when you'd add one
- [ ] **6.5.5** N+1 problem: what it is + how Prisma include solves it
- [ ] **6.5.6** REST vs GraphQL: over-fetching, under-fetching, caching tradeoffs
- [ ] **6.5.7** CORS: why browsers enforce same-origin + how Access-Control headers solve it
- [ ] **6.5.8** System design basics: load balancer, caching layer, message queue concepts
- [ ] **6.5.9** Live coding: LeetCode Easy — arrays, strings, hashmaps, two pointers
- [ ] **6.5.10** Behavioral: 3 STAR stories — a hard technical problem, a collaboration, a mistake you made

**15–20 minute practice idea:** Explain one concept aloud for two minutes, then note where you hesitated.

**Mentor pick:** [MDN web technology guides](https://developer.mozilla.org/en-US/docs/Web).

<details><summary>Roadmap.sh resources · 2 nodes, 8 links</summary>

- **[Architectural Patterns](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/architectural-patterns@tHiUpG9LN35E5RaHddMv5.md)** · backend
  - [14 Architectural Patterns to know - Red Hat](<https://www.redhat.com/architect/14-software-architecture-patterns>)
  - [10 Common Software Architectural Patterns in a nutshell](<https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013>)
  - [Software Architecture Patterns - O'Reilly](<https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/>)
  - [10 Architecture Patterns Used In Enterprise Software Development Today](<https://www.youtube.com/watch?v=BrT3AO8bVQY>)
- **[How LLMs Work](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/how-llms-work@tUNP5VRKvrPcufPDPPEo8.md)** · backend
  - [Visit the Dedicated AI Engineer Roadmap](<https://roadmap.sh/ai-engineer>)
  - [What is a large language model (LLM)?](<https://www.cloudflare.com/en-gb/learning/ai/what-is-large-language-model/>)
  - [New to LLMs? Start Here](<https://towardsdatascience.com/new-to-llms-start-here/>)
  - [How Large Language Models Work](<https://www.youtube.com/watch?v=5sLYAQS9sWQ>)

</details>

## Optional surveys

Explore these when a project or job calls for them. They do not interrupt the daily core sequence. Their node links and all listed resources live here so this remains the single main roadmap.

### Other backend languages

<details><summary>Roadmap.sh resources · 7 nodes, 27 links</summary>

- **[C#](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/c@rImbMHLLfJwjf3l25vBkc.md)** · backend
  - [ASP.NET](<http://ASP.NET>)
  - [C# Learning Path](<https://docs.microsoft.com/en-us/learn/paths/csharp-first-steps/?WT.mc_id=dotnet-35129-website>)
  - [C# Tour](<https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/>)
  - [Learn C# Programming – Full Course with Mini-Projects](<https://www.youtube.com/watch?v=YrtFtdTTfv0>)
- **[Go](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/go@BdXbcz4-ar3XOX0wIKzBp.md)** · backend
  - [Visit Dedicated Go Roadmap](<https://roadmap.sh/golang>)
  - [Go Reference Documentation](<https://go.dev/doc/>)
  - [Go by Example - annotated example programs](<https://gobyexample.com/>)
  - [Go Programming – Golang Course with Bonus Projects](<https://www.youtube.com/watch?v=un6ZyFkqFKo>)
- **[Java](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/java@ANeSwxJDJyQ-49pO2-CCI.md)** · backend
  - [Visit Dedicated Java Roadmap](<https://roadmap.sh/java>)
  - [Java Website](<https://www.java.com/>)
  - [Complete Java course](<https://www.youtube.com/watch?v=xk4_1vDrzzo>)
- **[PHP](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/php@l9Wrq_Ad9-Ju4NIB0m5Ha.md)** · backend
  - [Visit Dedicated PHP Roadmap](<https://roadmap.sh/php>)
  - [PHP](<https://php.net/>)
  - [PHP - The Right Way](<https://phptherightway.com/>)
  - [PHP for Beginners](<https://www.youtube.com/watch?v=zZ6vybT1HQs>)
- **[Python](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/python@J_sVHsD72Yzyqb9KCIvAY.md)** · backend
  - [Visit Dedicated Python Roadmap](<https://roadmap.sh/python>)
  - [Python Full Course for free](<https://www.youtube.com/watch?v=ix9cRaBkVe0>)
  - [Python Website](<https://www.python.org/>)
  - [Automate the Boring Stuff](<https://automatetheboringstuff.com/>)
- **[Ruby](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/ruby@SlH0Rl07yURDko2nDPfFy.md)** · backend
  - [Visit the Dedicated Ruby Roadmap](<https://roadmap.sh/ruby>)
  - [Learn Ruby in 20 minutes](<https://www.ruby-lang.org/en/documentation/quickstart/>)
  - [Ruby, An Introduction to a Programmer’s Best Friend](<https://thenewstack.io/ruby-a-programmers-best-friend/>)
  - [Ruby Comprehensive courses](<https://www.youtube.com/playlist?list=PL_EzhIKp343lBMH4UuklrMRL_WkilGoXe>)
- **[Rust](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/rust@CWwh2abwqx4hAxpAGvhIx.md)** · backend
  - [Visit Dedicated Rust Roadmap](<https://roadmap.sh/rust>)
  - [The Rust Programming Language - Book](<https://doc.rust-lang.org/book/>)
  - [Rust vs. Go: Why They’re Better Together](<https://thenewstack.io/rust-vs-go-why-theyre-better-together/>)
  - [Learn Rust Programming](<https://www.youtube.com/watch?v=BpPEoZW5IiY>)

</details>

### Other databases and search tools

<details><summary>Roadmap.sh resources · 25 nodes, 86 links</summary>

- **[AWS Neptune](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/aws-neptune@5xy66yQrz1P1w7n6PcAFq.md)** · backend
  - [AWS Neptune](<https://aws.amazon.com/neptune/>)
  - [Setting Up Amazon Neptune Graph Database](<https://cliffordedsouza.medium.com/setting-up-amazon-neptune-graph-database-2b73512a7388>)
  - [Getting Started with Neptune Serverless](<https://www.youtube.com/watch?v=b04-jjM9t4g>)
- **[Cassandra](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/cassandra@zsiZLWJ2bMvrjuHch5fX_.md)** · backend
  - [Cassandra](<https://cassandra.apache.org/_/index.html>)
  - [Cassandra - Quick Guide](<https://www.tutorialspoint.com/cassandra/cassandra_quick_guide.htm>)
  - [Apache Cassandra Database – Full Course for Beginners](<https://www.youtube.com/watch?v=J-cSy5MeMOA>)
- **[ClickHouse](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/clickhouse@ZyGLSvx17p7QmYDy1LFbM.md)** · backend
  - [ClickHouse](<https://clickhouse.com/>)
  - [What is ClickHouse?](<https://clickhouse.com/docs/intro>)
  - [clickhouse](<https://github.com/ClickHouse/ClickHouse>)
  - [How to Get Started with ClickHouse](<https://www.youtube.com/watch?v=6mmQUOmA-T0&list=PL0Z2YDlm0b3gtIdcZI3B_8bMJclDOvY8s>)
- **[CouchDB](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/couchdb@qOlNzZ7U8LhIGukb67n7U.md)** · backend
  - [CouchDB](<https://couchdb.apache.org/>)
  - [CouchDB Documentation](<https://docs.couchdb.org/en/stable/>)
  - [What is CouchDB?](<https://www.youtube.com/watch?v=Mru4sHzIfSA>)
- **[DGraph](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/dgraph@GKrcTsUi5XWj_pP1TOK0S.md)** · backend
  - [Dgraph](<https://docs.dgraph.io/dgraph-overview>)
  - [dgraph](<https://github.com/dgraph-io/dgraph>)
  - [Dgraph, what is a graph database anyway?](<https://medium.com/@JalalOkbi/dgraph-what-is-a-graph-database-anyway-8b6c22fb1eeb>)
  - [Learn Dgraph in 20 minutes (Graph Database) quick tutorial](<https://www.youtube.com/watch?v=roHj5G4vM9Q>)
- **[DynamoDB](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/dynamodb@dwfEHInbX2eFiafM-nRMX.md)** · backend
  - [AWS DynamoDB](<https://aws.amazon.com/dynamodb/>)
  - [AWS DynamoDB Tutorial For Beginners](<https://www.youtube.com/watch?v=2k2GINpO308>)
- **[Elasticsearch](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/elasticsearch@NulaE1isWqn-feYHg4YQT.md)** · backend
  - [Visit the Dedicated Elasticsearch Roadmap](<https://roadmap.sh/elasticsearch>)
  - [Elasticsearch Website](<https://www.elastic.co/elasticsearch/>)
  - [Elasticsearch Documentation](<https://www.elastic.co/guide/index.html>)
  - [What is Elasticsearch](<https://www.youtube.com/watch?v=ZP0NmfyfsoM>)
- **[Firebase](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/firebase@RyJFLLGieJ8Xjt-DlIayM.md)** · backend
  - [The Ultimate Guide to Firebase](<https://fireship.io/lessons/the-ultimate-beginners-guide-to-firebase/>)
  - [Firebase Documentation](<https://firebase.google.com/docs>)
  - [Firebase in 100 seconds](<https://www.youtube.com/watch?v=vAoB4VbhRzM>)
- **[InfluxDB](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/influx-db@XbM4TDImSH-56NsITjyHK.md)** · backend
  - [InfluxDB Documentation](<https://docs.influxdata.com/influxdb/cloud/>)
  - [Time series database](<https://www.influxdata.com/time-series-database/>)
  - [Introduction to InfluxDB - DigitalOcean](<https://www.digitalocean.com/community/tutorials/how-to-monitor-system-metrics-with-the-tick-stack-on-centos-7>)
  - [The Basics of Time Series Data](<https://www.youtube.com/watch?v=wBWTj-1XiRU>)
- **[MariaDB](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/mariadb@tD3i-8gBpMKCHB-ITyDiU.md)** · backend
  - [MariaDB](<https://mariadb.org/>)
  - [MariaDB vs MySQL](<https://www.guru99.com/mariadb-vs-mysql.html>)
  - [MariaDB Tutorial For Beginners in One Hour](<https://www.youtube.com/watch?v=_AMj02sANpI>)
- **[Memcached](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/memcached@xPvVwGQw28uMeLYIWn8yn.md)** · backend
  - [memcached/memcached](<https://github.com/memcached/memcached#readme>)
  - [Memcached Tutorial](<https://www.tutorialspoint.com/memcached/index.htm>)
  - [Redis vs Memcached](<https://www.youtube.com/watch?v=Gyy1SiE8avE>)
- **[MongoDB](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/mongodb@28U6q_X-NTYf7OSKHjoWH.md)** · backend
  - [Visit Dedicated MongoDB Roadmap](<https://roadmap.sh/mongodb>)
  - [Learning Path for MongoDB Developers](<https://learn.mongodb.com/catalog>)
  - [MongoDB Online Sandbox](<https://mongoplayground.net/>)
- **[MS SQL](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/ms-sql@dEsTje8kfHwWjCI3zcgLC.md)** · backend
  - [Visit Dedicated SQL Roadmap](<https://roadmap.sh/sql>)
  - [MS SQL](<https://www.microsoft.com/en-ca/sql-server/>)
  - [Tutorials for SQL Server](<https://docs.microsoft.com/en-us/sql/sql-server/tutorials-for-sql-server-2016?view=sql-server-ver15>)
  - [SQL Server tutorial for beginners](<https://www.youtube.com/watch?v=-EPMOaV7h_Q>)
- **[MySQL](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/mysql@VPxOdjJtKAqmM5V0LR5OC.md)** · backend
  - [MySQL Docs](<https://dev.mysql.com/doc/>)
  - [MySQL for Developers](<https://planetscale.com/courses/mysql-for-developers/introduction/course-introduction>)
  - [MySQL Tutorial](<https://www.mysqltutorial.org/>)
  - [MySQL Complete Course](<https://www.youtube.com/watch?v=5OdVJbNCSso>)
- **[NEO4J](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/neo4j@BTNJfWemFKEeNeTyENXui.md)** · backend
  - [Neo4j Website](<https://neo4j.com>)
  - [Neo4j in 100 Seconds](<https://www.youtube.com/watch?v=T6L9EoBy8Zk>)
  - [Neo4j Course for Beginners](<https://www.youtube.com/watch?v=_IgbB24scLI>)
- **[NoSQL databases](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/nosql-databases@F8frGuv1dunOdcVJ_IiGs.md)** · backend
  - [Types of NoSQL Databases: How to Choose the Right One](<https://roadmap.sh/backend/types-of-nosql-databases>)
  - [NoSQL Explained](<https://www.mongodb.com/nosql-explained>)
  - [How do NoSQL Databases work](<https://www.youtube.com/watch?v=0buKQHokLK8>)
  - [SQL vs NoSQL Explained](<https://www.youtube.com/watch?v=ruz-vK8IesE>)
- **[Oracle](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/oracle@h1SAjQltHtztSt8QmRgab.md)** · backend
  - [Oracle Website](<https://www.oracle.com/database/>)
  - [Oracle Docs](<https://docs.oracle.com/en/database/index.html>)
  - [Oracle SQL Tutorial for Beginners](<https://www.youtube.com/watch?v=ObbNGhcxXJA>)
- **[Redis](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/redis@M0iaSSdVPWaCUpyTG50Vf.md)** · backend
  - [Visit Dedicated Redis Roadmap](<https://roadmap.sh/redis>)
  - [Redis Crash Course](<https://www.youtube.com/watch?v=XCsS_NVAa1g>)
  - [Redis Documentation](<https://redis.io/docs/latest/>)
  - [Redis Tutorial for Beginners](<https://www.youtube.com/watch?v=jgpVdJB2sKQ>)
- **[Redis](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/redis@g8GjkJAhvnSxXTZks0V1g.md)** · backend
  - [Visit Dedicated Redis Roadmap](<https://roadmap.sh/redis>)
  - [Redis Crash Course](<https://www.youtube.com/watch?v=XCsS_NVAa1g>)
  - [Redis Documentation](<https://redis.io/docs/latest/>)
  - [Redis Tutorial for Beginners](<https://www.youtube.com/watch?v=jgpVdJB2sKQ>)
- **[RethinkDB](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/rethinkdb@5T0ljwlHL0545ICCeehcQ.md)** · backend
  - [RethinkDB Crash Course](<https://www.youtube.com/watch?v=pW3PFtchHDc>)
  - [RethinkDB Website](<https://rethinkdb.com/>)
  - [Ten-minute Guide with RethinkDB](<https://rethinkdb.com/docs/guide/>)
- **[ScyllaDB](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/scylladb@aArZ3gKwObzafCkTOd-Hj.md)** · backend
  - [ScyllaDB](<https://www.scylladb.com/>)
  - [scylladb](<https://github.com/scylladb/scylladb>)
  - [Understanding ScyllaDB: A Comprehensive Overview](<https://risingwave.com/blog/understanding-scylladb-a-comprehensive-overview/>)
  - [What Makes ScyllaDB So Fast?](<https://www.youtube.com/watch?v=JPkrdWMVpPk>)
- **[Search Engines](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/search-engines@gKTSe9yQFVbPVlLzWB0hC.md)** · backend
  - [Visit the Dedicated Elasticsearch Roamdap](<https://roadmap.sh/elasticsearch>)
  - [Intro to OpenSearch](<https://opensearch.org/docs/latest/getting-started/intro/>)
  - [What is Elasticsearch? - Official Docs](<https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html>)
  - [Elasticsearch Tutorial for Beginners](<https://www.youtube.com/watch?v=ZP0NmfyNsuo>)
- **[Solr](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/solr@iN_1EuIwCx_7lRBw1Io4U.md)** · backend
  - [Solr on GitHub](<https://github.com/apache/solr>)
  - [Solr Website](<https://solr.apache.org/>)
  - [Solr Documentation](<https://solr.apache.org/resources.html#documentation>)
  - [Apache Solr vs Elasticsearch Differences](<https://www.youtube.com/watch?v=MMWBdSdbu5k>)
- **[SQLite](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/sqlite@kdulE3Z_BdbtRmq6T2KmR.md)** · backend
  - [SQLite](<https://www.sqlite.org/index.html>)
  - [SQLite Tutorial](<https://www.sqlitetutorial.net/>)
  - [SQLite Introduction](<https://www.youtube.com/watch?v=8Xyn8R9eKB8>)
- **[TimeScale](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/timescaledb@WiAK70I0z-_bzbWNwiHUd.md)** · backend
  - [Timescale Website](<https://www.timescale.com/>)
  - [Tutorial - TimeScaleDB Explained in 100 Seconds](<https://www.youtube.com/watch?v=69Tzh_0lHJ8>)
  - [What is Time Series Data?](<https://www.youtube.com/watch?v=Se5ipte9DMY>)

</details>

### Scaling and distributed systems

<details><summary>Roadmap.sh resources · 21 nodes, 61 links</summary>

- **[Backpressure](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/backpressure@JansCqGDyXecQkD1K7E7e.md)** · backend
  - [Awesome Architecture: Backpressure](<https://awesome-architecture.com/back-pressure/>)
  - [Backpressure explained — the flow of data through software](<https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7>)
  - [Handling Backpressure in Node.js Streams](<https://nodejs.org/learn/modules/backpressuring-in-streams>)
  - [What is Back Pressure](<https://www.youtube.com/watch?v=viTGm_cV7lE>)
- **[Building for Scale](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/building-for-scale@SHmbcMRsc3SygEDksJQBD.md)** · backend
  - [Scalable Architecture: A Definition and How-To Guide](<https://www.sentinelone.com/blog/scalable-architecture/>)
  - [Scaling Distributed Systems - Software Architecture Introduction](<https://www.youtube.com/watch?v=gxfERVP18-g>)
- **[Caching](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/caching@uPjCrDGA2MHylWXbZvMBM.md)** · backend
  - [What is caching?](<https://www.cloudflare.com/en-gb/learning/cdn/what-is-caching/>)
  - [Top Caching Strategies Explained](<https://blog.bytebytego.com/p/top-caching-strategies>)
  - [Caching Complete Tutorial for Beginners](<https://www.youtube.com/watch?v=1XJG34mewts>)
- **[CAP Theorem](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/cap-theorem@LAdKDJ4LcMaDWqslMvE8X.md)** · backend
  - [What is CAP Theorem?](<https://www.bmc.com/blogs/cap-theorem/>)
  - [An Illustrated Proof of the CAP Theorem](<https://mwhittaker.github.io/blog/an_illustrated_proof_of_the_cap_theorem/>)
  - [CAP Theorem and its applications in NoSQL Databases](<https://www.ibm.com/uk-en/cloud/learn/cap-theorem>)
  - [What is CAP Theorem?](<https://www.youtube.com/watch?v=_RbsFXWRZ10>)
- **[Circuit Breaker](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/circuit-breaker@spkiQTPvXY4qrhhVUkoPV.md)** · backend
  - [Circuit Breaker - Azure Architecture Patterns](<https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker>)
  - [Resilience4j - Circuit Breaker Library for Java](<https://github.com/resilience4j/resilience4j>)
  - [The Circuit Breaker Pattern](<https://aerospike.com/blog/circuit-breaker-pattern/>)
  - [What is the Circuit Breaker Pattern?](<https://www.youtube.com/watch?v=ADHcBxEXvFA>)
- **[Data Replication](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/data-replication@wrl7HHWXOaxoKVlNZxZ6d.md)** · backend
  - [Data Replication? - IBM](<https://www.ibm.com/topics/data-replication>)
  - [What is Data Replication?](<https://www.youtube.com/watch?v=iO8a1nMbL1o>)
- **[Failure Modes](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/failure-modes@GwApfL4Yx-b5Y8dB9Vy__.md)** · backend
  - [Database Failure Modes](<https://roadmap.sh/ai/course/database-failure-modes-prevention-and-recovery>)
- **[Graceful Degradation](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/graceful-degradation@G9AI_i3MkUE1BsO3_-PH7.md)** · backend
  - [What is Graceful Degradation & Why Does it Matter?](<https://blog.hubspot.com/website/graceful-degradation>)
  - [Four Considerations When Designing Systems For Graceful Degradation](<https://newrelic.com/blog/best-practices/design-software-for-graceful-degradation>)
  - [Graceful Degradation - Georgia Tech](<https://www.youtube.com/watch?v=Tk7e0LMsAlI>)
- **[Integration Patterns](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/integration-patterns@iatQ3RCxESHt1CwN3PSfx.md)** · backend
  - [Emerging Patterns in Building GenAI Products](<https://martinfowler.com/articles/gen-ai-patterns/>)
  - [5 Patterns for Scalable LLM Service Integration](<https://latitude.so/blog/5-patterns-for-scalable-llm-service-integration/>)
  - [AI Design Patterns - LLM Integration: Choosing Between Direct Calls, Agents, RAG, MCP & Workflows](<https://www.youtube.com/watch?v=_amJOKrM0XU>)
- **[Load Shifting](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/loadshifting@HoQdX7a4SnkFRU4RPQ-D5.md)** · backend
  - [Load Shifting](<https://en.wikipedia.org/wiki/Load_shifting>)
  - [Load Shifting 101](<https://www.youtube.com/watch?v=DOyMJEdk5aE>)
- **[Long Polling](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/long--short-polling@osvajAJlwGI3XnX0fE-kA.md)** · backend
  - [Long Polling](<https://javascript.info/long-polling>)
  - [What is Long Polling?](<https://www.youtube.com/watch?v=LD0_-uIsnOE>)
- **[Message Brokers](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/message-brokers@nJ5FpFgGCRaALcWmAKBKT.md)** · backend
  - [What are Message Brokers?](<https://www.ibm.com/topics/message-brokers>)
  - [Introduction to Message Brokers](<https://www.youtube.com/watch?v=57Qr9tk6Uxc>)
  - [Kafka vs RabbitMQ](<https://www.youtube.com/watch?v=_5mu7lZz5X4>)
- **[Microservices](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/microservices@K55h3aqOGe6-hgVhiFisT.md)** · backend
  - [Pattern: Microservice Architecture](<https://microservices.io/patterns/microservices.html>)
  - [What is Microservices?](<https://smartbear.com/solutions/microservices/>)
  - [Microservices 101](<https://thenewstack.io/microservices-101/>)
  - [Microservices explained in 5 minutes](<https://www.youtube.com/watch?v=lL_j7ilk7rc>)
- **[Monolithic Apps](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/monolith@Ke522R-4k6TDeiDRyZbbU.md)** · backend
  - [Pattern: Monolithic Architecture](<https://microservices.io/patterns/monolithic.html>)
  - [Monolithic Architecture - Advantages & Disadvantages](<https://datamify.medium.com/monolithic-architecture-advantages-and-disadvantages-e71a603eec89>)
  - [Monolithic vs Microservice Architecture](<https://www.youtube.com/watch?v=NdeTGlZ__Do>)
- **[RabbitMQ](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/rabbitmq@GPFRMcY1DEtRgnaZwJ3vW.md)** · backend
  - [RabbitMQ Tutorials](<https://www.rabbitmq.com/getstarted.html>)
  - [RabbitMQ Tutorial - Message Queues and Distributed Systems](<https://www.youtube.com/watch?v=nFxjaVmFj5E>)
  - [RabbitMQ in 100 Seconds](<https://m.youtube.com/watch?v=NQ3fZtyXji0>)
- **[Scaling Databases](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/scaling-databases@95d9itpUZ4s9roZN8kG9x.md)** · backend
  - [Strategies for Scaling Databases: A Comprehensive Guide](<https://medium.com/@anil.goyal0057/strategies-for-scaling-databases-a-comprehensive-guide-b69cda7df1d3>)
  - [Horizontal vs. Vertical Scaling - How to Scale a Database](<https://www.freecodecamp.org/news/horizontal-vs-vertical-scaling-in-database/>)
  - [Database Scaling Strategies for Beginners](<https://www.youtube.com/watch?v=dkhOZOmV7Fo>)
- **[Service Mesh](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/service-mesh@n14b7sfTOwsjKTpFC9EZ2.md)** · backend
  - [What is a Service Mesh (AWS blog)?](<https://aws.amazon.com/what-is/service-mesh/>)
  - [What is a Service Mesh (RedHat blog)?](<https://www.redhat.com/en/topics/microservices/what-is-a-service-mesh>)
  - [What is a Service Mesh?](<https://www.youtube.com/watch?v=vh1YtWjfcyk>)
- **[Sharding strategies](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/sharding-strategies@zWstl08R4uzqve4BdYurp.md)** · backend
  - [Wikipedia - Sharding in Database Architectures](<https://en.wikipedia.org/wiki/Shard_(database_architecture>)
  - [How sharding a database can make it faster](<https://stackoverflow.blog/2022/03/14/how-sharding-a-database-can-make-it-faster/>)
  - [What is Database Sharding?](<https://www.youtube.com/watch?v=XP98YCr-iXQ>)
- **[SOA](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/soa@tObmzWpjsJtK4GWhx6pwB.md)** · backend
  - [What is SOA?](<https://aws.amazon.com/what-is/service-oriented-architecture/>)
  - [Reference Architecture Foundation for Service Oriented Architecture](<http://docs.oasis-open.org/soa-rm/soa-ra/v1.0/soa-ra.html>)
  - [Service Oriented Architecture (SOA) Simplified](<https://www.youtube.com/watch?v=PA9RjHI463g>)
- **[Throttling](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/throttling@qAu-Y4KI2Z_y-EqiG86cR.md)** · backend
  - [Throttling - AWS Well-Architected Framework](<https://docs.aws.amazon.com/wellarchitected/2022-03-31/framework/rel_mitigate_interaction_failure_throttle_requests.html>)
  - [Throttling vs Debouncing](<https://www.youtube.com/watch?v=tJhA0DrH5co>)
- **[Web sockets](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/websockets@sVuIdAe08IWJVqAt4z-ag.md)** · backend
  - [Socket.io Library Bidirectional and Low-latency Communication for Every Platform](<https://socket.io/>)
  - [Introduction to WebSockets](<https://www.tutorialspoint.com/websockets/index.htm>)
  - [A Beginners Guide to WebSockets](<https://www.youtube.com/watch?v=8ARodQ4Wlf4>)
  - [How Web Sockets Work](<https://www.youtube.com/watch?v=G0_e02DdH7I>)

</details>

### AI tools and AI powered features

<details><summary>Roadmap.sh resources · 23 nodes, 81 links</summary>

- **[Learn the Basics of API Design](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/api-design/content/learn-the-basics@duKkpzPjUU_-8kyJGHqRX.md)** · api-design
  - No external resources listed in this node.
- **[AI Agents](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/agents@w1D3-bSg93ndKK9XJTu7z.md)** · backend
  - [Visit the Dedicated AI Agents Roadmap](<https://roadmap.sh/ai-agents>)
  - [What are AI Agents? - IBM](<https://www.ibm.com/think/topics/ai-agents>)
  - [What are AI Agents?](<https://www.youtube.com/watch?v=F8NKVhkZZWI>)
  - [From Zero to Your First AI Agent in 25 Minutes (No Coding)](<https://www.youtube.com/watch?v=EH5jx5qPabU>)
- **[AI-Assisted Coding](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/ai-assisted-coding@fA3yi9puMbTFmbPpo6OjN.md)** · backend
  - [Visit the Dedicated Vibe Coding Roadmap](<https://roadmap.sh/vibe-coding>)
  - [How to Become an Expert in AI-Assisted Coding – A Handbook for Developers](<https://www.freecodecamp.org/news/how-to-become-an-expert-in-ai-assisted-coding-a-handbook-for-developers/>)
  - [The 10 Best Vibe Coding Tools in 2026: Our Choices](<https://roadmap.sh/vibe-coding/best-tools>)
  - [Everything You Need to Know About Coding with AI // NOT vibe coding](<https://www.youtube.com/watch?v=5fhcklZe-qE>)
- **[AI vs. Traditional Software Development](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/ai-vs-traditional-coding@IZKl6PxbvgNkryAkdy3-p.md)** · backend
  - [Visit the Dedicated Vibe Coding Roamdap](<https://roadmap.sh/vibe-coding>)
  - [What is vibe coding?](<https://www.ibm.com/think/topics/vibe-coding>)
  - [How AI is transforming work at Anthropic](<https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic>)
  - [AI Systems vs Traditional Coding](<https://www.youtube.com/watch?v=P7lryCIvxgA>)
- **[Anthropic](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/anthropic@Lw2nR7x8PYgq1P5CxPAxi.md)** · backend
  - [Visit the Dedicated Claude Code Roamdap](<https://roadmap.sh/claude-code>)
  - [Anthropic](<https://www.anthropic.com/>)
  - [Claude Tutorials](<https://claude.com/resources/tutorials>)
  - [Anthropic: What We Know About the Company Behind Claude AI](<https://builtin.com/articles/anthropic>)
- **[Antigravity](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/antigravity@E7-LveK7jO2npxVTLUDfw.md)** · backend
  - [Google Antigravity](<https://antigravity.google/>)
  - [Getting Started with Google Antigravity](<https://codelabs.developers.google.com/getting-started-google-antigravity#0>)
  - [Hands-On With Antigravity: Google’s Newest AI Coding Experiment](<https://thenewstack.io/hands-on-with-antigravity-googles-newest-ai-coding-experiment/>)
  - [Antigravity + Stitch MCP: AI Agents That Build Complete Websites](<https://www.youtube.com/watch?v=7wa4Ey_tCCE>)
- **[AI Applications in Software Development](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/applications@Nx7mjvYgqLpmJ0_iSx5of.md)** · backend
  - [AI in software development](<https://www.ibm.com/think/topics/ai-in-software-development>)
  - [AI in software development: How to use it, benefits, and key trends](<https://appfire.com/resources/blog/ai-in-software-development>)
  - [AI-Assisted Software Development: A Comprehensive Guide with Practical Prompts (Part 1/3)](<https://aalapdavjekar.medium.com/ai-assisted-software-development-a-comprehensive-guide-with-practical-prompts-part-1-3-989a529908e0>)
- **[Claude Code](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/claude-code@RcC1fVuePQZ59AsJfeTdR.md)** · backend
  - [Visit the Dedicated Claude Code Roadmap](<https://roadmap.sh/claude-code>)
  - [Claude Code Overview](<https://code.claude.com/docs/en/overview>)
  - [Vibe coding tutorial: Build your first app with Claude Code](<https://roadmap.sh/vibe-coding/tutorial>)
  - [Claude Code Tutorial for Beginners](<https://www.youtube.com/watch?v=eMZmDH3T2bY>)
- **[Copilot](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/copilot@HQrxxDxKN8gizvXRU5psW.md)** · backend
  - [Quickstart for GitHub Copilot](<https://docs.github.com/en/copilot/quickstart>)
  - [What is GitHub Copilot?](<https://www.codecademy.com/article/what-is-github-copilot>)
  - [Getting started with GitHub Copilot \| Tutorial](<https://www.youtube.com/watch?v=n0NlxUyA7FI>)
- **[Cursor](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/cursor@CKlkVK_7GZ7xzIUHJqZr8.md)** · backend
  - [Cursor Learn](<https://cursor.com/learn>)
  - [Cursor Docs](<https://cursor.com/docs>)
  - [Claude Code vs Cursor: Which AI Coding Tool To Choose](<https://roadmap.sh/claude-code/vs-cursor>)
  - [Cursor Tutorial for Beginners (AI Code Editor)](<https://www.youtube.com/watch?v=ocMOZpuAMw4>)
- **[Embeddings](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/embeddings@Ofv__kXuBk-Vv2jVhaFss.md)** · backend
  - [What are Embeddings in Machine Learning?](<https://www.cloudflare.com/en-gb/learning/ai/what-are-embeddings/>)
  - [What is Embedding?](<https://www.ibm.com/topics/embedding>)
  - [Getting Started With Embeddings](<https://huggingface.co/blog/getting-started-with-embeddings>)
  - [What are Word Embeddings?](<https://www.youtube.com/watch?v=wgfSDrqYMJ4>)
- **[Function Calling](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/function-calling@Uve-UObgOBfrd-cLayVWe.md)** · backend
  - [A Comprehensive Guide to Function Calling in LLMs](<https://thenewstack.io/a-comprehensive-guide-to-function-calling-in-llms/>)
  - [Function Calling with LLMs \| Prompt Engineering Guide](<https://www.promptingguide.ai/applications/function_calling>)
  - [Function Calling with Open-Source LLMs](<https://medium.com/@rushing_andrei/function-calling-with-open-source-llms-594aa5b3a304>)
  - [LLM Function Calling - AI Tools Deep Dive](<https://www.youtube.com/watch?v=gMeTK6zzaO4>)
- **[Gemini](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/gemini@Bic4PHhz-YqzPWRimJO83.md)** · backend
  - [Google Gemini](<https://gemini.google.com/>)
  - [Google's Gemini Documentation](<https://workspace.google.com/solutions/ai/>)
  - [Welcome to the Gemini era](<https://www.youtube.com/watch?v=_fuimO6ErKI>)
- **[AI in Backend Development](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/learn-the-basics@UTupdqjOyLh7-56_0SXJ8.md)** · backend
  - [AI in software development - IBM](<https://www.ibm.com/think/topics/ai-in-software-development>)
  - [AI in Software Development - GitHub](<https://github.com/resources/articles/ai-in-software-development>)
  - [AI in Software Development: Revolutionizing the Coding Landscape](<https://www.coursera.org/articles/ai-in-software-development>)
- **[Model Context Protocol (MCP)](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/mcp@mHnI19RgZ57XDEIDaHxD0.md)** · backend
  - [MCP: Build Rich-Context AI Apps with Anthropic](<https://www.deeplearning.ai/short-courses/mcp-build-rich-context-ai-apps-with-anthropic/>)
  - [Model Context Protocol](<https://modelcontextprotocol.io/introduction>)
  - [modelcontexprotocol](<https://github.com/modelcontextprotocol/modelcontextprotocol>)
  - [A Clear Intro to MCP (Model Context Protocol) with Code Examples](<https://towardsdatascience.com/clear-intro-to-mcp/>)
- **[OpenAI](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/openai@-ye5ZtYFDoYGpj-UJaBP8.md)** · backend
  - [OpenAI Platform](<https://platform.openai.com/docs/overview>)
  - [OpenAI Models](<https://platform.openai.com/docs/models>)
  - [OpenAI Academy](<https://academy.openai.com/>)
- **[Prompt Engineering](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/prompting-techniques@xL8d-uHMpJKwUvT8z-Jia.md)** · backend
  - [Visit Dedicated Prompt Engineering Roadmap](<https://roadmap.sh/prompt-engineering>)
  - [Introduction to Prompt Engineering](<https://learnprompting.org/courses/intro-to-prompt-engineering>)
  - [Prompt engineering techniques](<https://www.ibm.com/think/topics/prompt-engineering-techniques>)
  - [What is Prompt Engineering?](<https://www.youtube.com/watch?v=nf1e-55KKbg>)
- **[RAGs](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/rags@6PCOCzCbx7jo9wO2Hl2gy.md)** · backend
  - [What is Retrieval-Augmented Generation? - Google](<https://cloud.google.com/use-cases/retrieval-augmented-generation>)
  - [The Ultimate Guide to RAGs – Each Component Dissected](<https://towardsdatascience.com/the-ultimate-guide-to-rags-each-component-dissected-3cd51c4c0212/>)
  - [What is Retrieval-Augmented Generation? - IBM](<https://www.youtube.com/watch?v=T-D1OfcDW1M>)
- **[Refactoring with AI](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/refactoring@EYT2rTLZ8tUW2u8DOnAWF.md)** · backend
  - [What is AI code refactoring? - IBM](<https://www.ibm.com/think/topics/ai-code-refactoring>)
  - [What is AI code refactoring?](<https://graphite.com/guides/what-is-ai-code-refactoring>)
  - [Using AI to Refactor Legacy Code: A Practical Guide with Scott Wierschem](<https://www.youtube.com/watch?v=B7Yt-WmlW2I>)
  - [AI-Driven Code Refactoring: Improving Legacy Codebases Automatically - Jorrik Klijnsma](<https://www.youtube.com/watch?v=u8tvVxUOwvY>)
- **[Skills](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/skills@IWubGe3oquSj882QVnhLU.md)** · backend
  - [Agent Skills with Anthropic](<https://www.deeplearning.ai/short-courses/agent-skills-with-anthropic/>)
  - [AI Agents or Skills? Why the Answer Is ‘Both’](<https://thenewstack.io/ai-agents-or-skills-why-the-answer-is-both/>)
  - [Agent Skills vs Tools: What Actually Matters](<https://blog.arcade.dev/what-are-agent-skills-and-tools>)
  - [The complete guide to Agent Skills](<https://www.youtube.com/watch?v=fabAI1OKKww>)
- **[Streamed Responses](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/streaming@9f-aWi3_7USy4XpNzrTL6.md)** · backend
  - [Streaming Responses in AI: How AI Outputs Are Generated in Real Time](<https://dev.to/pranshu_kabra_fe98a73547a/streaming-responses-in-ai-how-ai-outputs-are-generated-in-real-time-18kb>)
  - [AI for Web Devs: Faster Responses with HTTP Streaming](<https://austingil.com/ai-for-web-devs-streaming/>)
  - [Master the OpenAI API: Stream Responses](<https://www.toolify.ai/gpts/master-the-openai-api-stream-responses-139447>)
- **[Structured Outputs](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/structured-outputs@GMxPmyatxYmIPRFHfRAnr.md)** · backend
  - [Diving Deeper with Structured Outputs](<https://medium.com/data-science/diving-deeper-with-structured-outputs-b4a5d280c208>)
  - [Structured model outputs - OpenAI](<https://platform.openai.com/docs/guides/structured-outputs>)
  - [Structured outputs - Claude](<https://platform.claude.com/docs/en/build-with-claude/structured-outputs>)
  - [How to Measure LLM Confidence: Logprobs & Structured Output](<https://www.youtube.com/watch?v=THsGizLHrTs>)
- **[Vectors](https://github.com/nilbuild/developer-roadmap/blob/master/roadmaps/backend/content/vectors@yKNdBbahm_h81xdMDT-qx.md)** · backend
  - [What is vector embedding?](<https://www.ibm.com/think/topics/vector-embedding>)
  - [A Gentle Introduction to Vectors for Machine Learning](<https://machinelearningmastery.com/gentle-introduction-vectors-machine-learning/>)
  - [Vector Databases](<https://developers.cloudflare.com/vectorize/reference/what-is-a-vector-database/>)
  - [AI Foundations - What are Vectors?](<https://www.youtube.com/watch?v=dvDmXTKFtgQ>)

</details>
