const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let disposable = vscode.commands.registerCommand('click-and-format-file.clickAndFormatFile', function () {
        vscode.commands.executeCommand('editor.action.formatDocument');
    });
    context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate,
}
