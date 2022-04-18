#!/bin/bash

cd $(dirname $0)

curl -s https://raw.githubusercontent.com/kmc-jp/shinpro-announcer/master/schedule.js -o schedule.js

dayOfWeek=""

case "$(date +%w)" in
  "0" ) dayOfWeek="日" ;;
  "1" ) dayOfWeek="月" ;;
  "2" ) dayOfWeek="火" ;;
  "3" ) dayOfWeek="水" ;;
  "4" ) dayOfWeek="木" ;;
  "5" ) dayOfWeek="金" ;;
  "6" ) dayOfWeek="土" ;;
esac

titleDate="$(date +'%m/%d') ($dayOfWeek)"
schedule=$(node announce.js $(date +"%m/%d") $(date +"%w"))

curl -X POST "https://slack.com/api/chat.postMessage" -d "channel=2022-announce" -d "text=$titleDate 開催のプロジェクト・イベント" -d "blocks=[ {  \"type\": \"header\",  \"text\": {   \"type\": \"plain_text\",   \"text\": \"$titleDate 開催のプロジェクト・イベント\",   \"emoji\": true  } }, {  \"type\": \"section\",  \"text\": {   \"type\": \"mrkdwn\",   \"text\": \"$schedule\"  } }, {  \"type\": \"divider\" }, {  \"type\": \"section\",  \"text\": {   \"type\": \"mrkdwn\",   \"text\": \"その他のプロジェクト日程は <https://www.kmc.gr.jp/guidance/2022/ | 新歓ページ> まで\"  } }]" -d 'token=xoxb-123456789-12345678901234567890'

