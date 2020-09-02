const del = require('del');

(async () => {
    const deletedFilePaths = await del(['css/style.css']);

    console.log('Deleted files:\n', deletedFilePaths.join('\n'));
})
    ();