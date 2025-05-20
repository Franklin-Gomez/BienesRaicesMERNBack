"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const port = process.env.PORT || 4000;
server_1.app.listen(port, () => {
    console.log(`Rest API funcionando en el puerto ${port}`);
});
//# sourceMappingURL=index.js.map