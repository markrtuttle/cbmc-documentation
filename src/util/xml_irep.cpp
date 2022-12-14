/*******************************************************************\

Module:

Author: Daniel Kroening

  Date: November 2005

\*******************************************************************/

#include "xml_irep.h"

#include <iostream>
#include <string>

#include "irep.h"
#include "source_location.h"

void convert(
  const irept &irep,
  xmlt &xml)
{
  if(irep.id()!=ID_nil)
    xml.new_element("id").data=irep.id_string();

  for(const auto &sub_irep : irep.get_sub())
  {
    xmlt &x_sub=xml.new_element("sub");
    convert(sub_irep, x_sub);
  }

  for(const auto &irep_entry : irep.get_named_sub())
  {
    if(!irept::is_comment(irep_entry.first))
    {
      xmlt &x_nsub = xml.new_element("named_sub");
      x_nsub.set_attribute("name", id2string(irep_entry.first));
      convert(irep_entry.second, x_nsub);
    }
  }

  for(const auto &irep_entry : irep.get_named_sub())
  {
    if(!irept::is_comment(irep_entry.first))
    {
      xmlt &x_com = xml.new_element("comment");
      x_com.set_attribute("name", id2string(irep_entry.first));
      convert(irep_entry.second, x_com);
    }
  }
}

void convert(
  const xmlt &xml,
  irept &irep)
{
  irep.id(ID_nil);

  xmlt::elementst::const_iterator it = xml.elements.begin();
  for(; it != xml.elements.end(); it++)
  {
    if(it->name=="id")
    {
      irep.id(it->data);
    }
    else if(it->name=="named_sub")
    {
      irept r;
      convert(*it, r);
      std::string named_name = it->get_attribute("name");
      irep.move_to_named_sub(named_name, r);
    }
    else if(it->name=="sub")
    {
      irept r;
      convert(*it, r);
      irep.move_to_sub(r);
    }
    else if(it->name=="comment")
    {
      irept r;
      convert(*it, r);
      std::string named_name = it->get_attribute("name");
      irep.move_to_named_sub(named_name, r);
    }
    else
    {
      // Should not happen
      std::cout << "Unknown sub found (" << it->name << "); malformed xml?";
      std::cout << "\n";
    }
  }
}

xmlt xml(const source_locationt &location)
{
  xmlt result;

  result.name = "location";

  if(!location.get_working_directory().empty())
    result.set_attribute(
      "working-directory", id2string(location.get_working_directory()));

  if(!location.get_file().empty())
    result.set_attribute("file", id2string(location.get_file()));

  if(!location.get_line().empty())
    result.set_attribute("line", id2string(location.get_line()));

  if(!location.get_column().empty())
    result.set_attribute("column", id2string(location.get_column()));

  if(!location.get_function().empty())
    result.set_attribute("function", id2string(location.get_function()));

  return result;
}
