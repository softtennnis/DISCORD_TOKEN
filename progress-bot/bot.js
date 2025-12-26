//進捗確認 bot.js
// 進捗確認 bot.js
const { Client, GatewayIntentBits } = require('discord.js');

const channelId = '1433030848394952795';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
});

client.once('ready', async () => {
  try {
    console.log(`✅ Logged in as ${client.user.tag}`);

    const channel = await client.channels.fetch(channelId);
    if (!channel) {
      console.log("❌ チャンネルが見つかりません");
      process.exit(1);
    }

    await channel.send(
      '🌙 進捗確認の時間です！今週の進捗をここに報告してください'
    );

    console.log('✅ メッセージ送信完了');
  } catch (err) {
    console.error('❌ エラー:', err);
  } finally {
    client.destroy();   // ← 超重要：即終了
    process.exit(0);
  }
});

client.login(process.env.TOKEN);
