#!/usr/bin/python3

# -*- coding: utf-8 -*-
"""
Created on Wed Aug 29 22:52:40 2018

@author: lars

This script performs crude replacement of tags:

  <script src="filename"></script> 
  {% include "filename.md" %}
  {% include "filename" %}
  
with the contents of "filename". 

Files ending in md are converted from markdown to html in the process.

"""

import sys
import re

from markdown import markdown

script_revision = '2018-09-03'


def includeScript(line, regex):
    result = regex.search(line)
    if not result is None:
        filename = result.group(1)
        print("  Including script: %s" % filename)    
        subst_str = "<script> // %s\n" % filename
        with open(filename, 'r') as file:
            subst_str += file.read()
        subst_str += "\n</script>\n"
        line = regex.sub(subst_str, line)
    return line

    
def includeMarkdown(line, regex):
    result = regex.search(line)
    if not result is None:
        filename = result.group(1)
        print("  Including markdown: %s" % filename)
        with open(filename, 'r') as file:
            line = markdown(file.read())    
    return line

def includeRaw(line, regex):
    result = regex.search(line)
    if not result is None:
        filename = result.group(1)
        print("  Including raw: %s" % filename)        
        with open(filename, 'r') as file:
            line = regex.sub(file.read(), line)
    return line

    
def processFile(filename_in, filename_out):
    print("Processing: %s, writing: %s" % (filename_in, filename_out))
    reg_script = re.compile("""<script\s+src="([^"]+)">\s*</script>""")
    reg_include_md = re.compile("""{% include "(.+?.md)" %}""")
    reg_include_raw = re.compile("""{% include "([^"]+)" %}""")
    
    with open(filename_in, 'r') as f_in:
        with open(filename_out, 'w') as f_out:
            for line in f_in:
                line = includeScript(line, reg_script)
                line = includeMarkdown(line, reg_include_md)
                line = includeRaw(line, reg_include_raw)
                f_out.write(line)

def usage():
    print("Process html script by Lars Ole Pontoppidan, %s" % script_revision)
    print("\n  %s <input file> <output file>\n" % sys.argv[0]);
        
if __name__ == "__main__":    
    if len(sys.argv) == 3:
        processFile(sys.argv[1], sys.argv[2])
    else:
        usage()

