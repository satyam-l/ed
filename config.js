/*
  Setting up the bot in a new server:
  - Update the IDs and bot token below.
*/

const config = {
	token: 'NzAzNzc1Njg3OTExMjc2Njg1.XqTgMw.ofo6vvlyyr91ia9AGinyGi6x47k',
	guild: '702849685429420085', // Your server ID where you'll use it.
	log: '703766881747861544', // Log channel ID.
	modmail: '704315525567610880', // Modmail category ID. You can leave it blank if you don't want to move it to a specific catgeory.
	support: '702856850420400158', // Support Team role ID.
	maxThreads: 0, // The max amount of modmail threads in the guild. 0 would mean infinity.
	autoreply: false, // Auto replies to the user without invoking the reply-command. It's set to false (default) right now, you can set it to true if you want it.
};

module.exports = config;