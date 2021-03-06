// Type definitions for archiver v0.15.0
// Project: https://github.com/archiverjs/node-archiver
// Definitions by: Esri <https://github.com/archiverjs/node-archiver>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/* =================== USAGE ===================

    import Archiver = require('archiver);
    var archiver = Archiver.create('zip');
    archiver.pipe(FS.createWriteStream('xxx'));
    archiver.append(FS.createReadStream('xxx'));
    archiver.finalize();

 =============================================== */


declare module "archiver" {
    import * as FS from 'fs';
    import * as Stream from "stream";

    interface nameInterface {
        name?: string;
    }

    interface Archiver extends Stream.Transform {
        pipe(writeStream: FS.WriteStream): void;
        append(readStream: FS.ReadStream, name: nameInterface): void;
        finalize(): void;
        directory(dirpath: string, destpath?: string | boolean, data?: any)
    }

    interface Options {

    }

    function archiver(format: string, options?: Options): Archiver;

    namespace archiver {
        function create(format: string, options?: Options): Archiver;
    }

    export = archiver;
}