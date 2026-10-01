Timestamp files whose only job is to start a workflow on push.
GitHub's scheduled (cron) runs for this repo arrive hours late, so the
scheduled Claude jobs push these at the right times:
- market-data: after the India close (~4:35 PM IST) and the US close (~2:45 AM IST)
- live: each trading morning (~9:05 AM IST) to start the Live Nifty stream
The workflows' own cron schedules stay as a backup.
