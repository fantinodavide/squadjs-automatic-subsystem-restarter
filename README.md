## Automatic SubSystem Restarter
This plugin will automatically restart the selected subsystems every *x* hours

### Options
#### restartRCON
###### Description
enables automatic restart of RCON subsystem
###### Default
```json
true
```
#### restartLogParser
###### Description
enables automatic restart of LogParser subsystem
###### Default
```json
true
```
#### restartIntervalRCON
###### Description
RCON will be restarted every x hours
###### Default
```json
1
```
#### restartIntervalLogParser
###### Description
LogParser will be restarted every x hours
###### Default
```json
1
```
### Example configuration
```json
{
  "plugin": "AutomaticSubsystemRestarter",
  "enabled": true,
  "restartRCON": true,
  "restartLogParser": true,
  "restartIntervalRCON": 1,
  "restartIntervalLogParser": 1
}
```
