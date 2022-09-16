import BasePlugin from './base-plugin.js';

export default class AutomaticSubsystemRestarter extends BasePlugin {
    static get description() {
        return (
            'The <code>AutomaticSubsystemRestarter</code> plugin automatically restarts SquadJS subsystems after a configured amount of time'
        );
    }

    static get defaultEnabled() {
        return true;
    }

    static get optionsSpecification() {
        return {
            restartRCON:
            {
                required: false,
                description: "enables automatic restart of RCON subsystem",
                default: true
            },
            restartLogParser:
            {
                required: false,
                description: "enables automatic restart of LogParser subsystem",
                default: true
            },
            restartIntervalRCON:
            {
                required: false,
                description: "RCON will be restarted every x hours",
                default: 1
            },
            restartIntervalLogParser:
            {
                required: false,
                description: "LogParser will be restarted every x hours",
                default: 1
            }
        };
    }

    constructor(server, options, connectors) {
        super(server, options, connectors);

        this.rcon_interval = null;
        this.logparser_interval = null;
    }

    async mount() {
        this.verbose(1, "Mounted");
        if (this.options.restartRCON) {
            this.rcon_interval = setInterval(async () => {
                await this.server.restartRCON();
                this.verbose(1, "RCON restarted");
            }, this.options.restartIntervalRCON * 60 * 1000)
        }
        if (this.options.restartLogParser) {
            this.logparser_interval = setInterval(async () => {
                await this.server.restartRCON();
                this.verbose(1, "LogParser restarted");
            }, this.options.restartIntervalLogParser * 60 * 1000)
        }
    }
    
    async unmount() {
        this.verbose(1, "Unmounted");
        clearInterval(this.rcon_interval);
        clearInterval(this.logparser_interval);
    }
}