#!/bin/bash

echo -e "This will upload contents of ../release to FTP server\n\nBe sure to run ./make_release first\n"
read -rsp $'Press enter to continue, or Ctrl+C to abort...\n'

# FTP UPLOAD config
# -----------------

source ../../../ftp_login.sh

FTP_TARGET=/
FTP_SOURCE=../release

cd $FTP_SOURCE

lftp ftp://$FTP_USER@$FTP_HOST -e "mirror -X makefile -v --ignore-time -Rn . $FTP_TARGET ; quit"

