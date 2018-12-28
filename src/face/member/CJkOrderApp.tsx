import { CApp } from 'tonva-react-usql';
import { meInFrame } from 'tonva-tools';

const tonvaApp = 'JKDev/jkOrder';

export class CJkOrderApp extends CApp {
    //private unit: number;
    constructor() {        
        super(tonvaApp, {usqs:{}} );
    }

    async load() {
        await this.beforeStart();
    }

    renderMain(): JSX.Element {
        return this.renderView(this.VAppMain);
    }
}

