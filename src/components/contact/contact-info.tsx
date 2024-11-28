"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

function ContactInfo() {
  const form = useForm();

  return (
    <section className="py-12 layout">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div>
          <div className="mb-3 h-1 w-16 bg-success-main" />
            <p className=" font-bold text-2xl uppercase">COMPANY INFORMATION</p>
          </div>
          <div className="mb-3 h-1 w-16 bg-success-main" />

          <p className="text-sm text-neutral-600">
              Tilottama-13, Patthardadha,
          </p>
          <p className="text-sm text-neutral-600">Rupandehi, Lumbini</p>
          <p className="text-lg text-blue-900">9857029740</p>
          <p className="text-sm text-neutral-600">lokraj@nepalets.com</p>
        </div>

        <div>
          <div>
            <div className="mb-3 h-1 w-16 bg-success-main" />
            <p className=" font-bold text-2xl uppercase">
              Trucking headquarters
            </p>
          </div>

          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4379.386062620522!2d83.46175077624922!3d27.687933876193686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968778dbc1adfb%3A0x1bbcb9235d7414c5!2sE-Transportation%20Service!5e1!3m2!1sen!2snp!4v1732818751389!5m2!1sen!2snp"
              height="500"
              style={{ border: "0", width: "100%" }}
              loading="lazy"
            ></iframe>
          </div>

          <div className="mt-2">
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
