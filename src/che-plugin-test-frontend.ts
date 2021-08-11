
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';
import * as che from '@eclipse-che/plugin';

export async function start(context: theia.PluginContext) {
    await che.workspace.getCurrentWorkspace();
}

export function stop() {

}
