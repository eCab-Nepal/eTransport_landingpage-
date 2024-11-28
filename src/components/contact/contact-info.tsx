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
            <p className=" font-bold text-2xl uppercase">your inquiry</p>
          </div>

          <p className="mt-4 text-sm leading-6 text-neutral-600">
            Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx
            zippy fowls. Few quips galvanized the mock jury box. Quick brown
            dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves
            quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was
            gazed by MTV for luck. A wizard’s job is to vex chumps quickly in
            fog. Watch &apos;Jeopardy!&apos;, Alex Trebek&apos; fun TV quiz
            game. Woven silk pyjamas exchanged for blue quartz. Brawny gods
            just.
          </p>
          <div className="mt-4">
            <Form {...form}>
              <FormField
                control={form.control}
                name="ds"
                render={() => (
                  <FormItem>
                    <FormLabel> Your request</FormLabel>
                    <FormControl>
                      <Input />
                    </FormControl>

                    <div className="mt-2">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input />
                      </FormControl>
                    </div>

                    <div className="mt-2">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input />
                      </FormControl>
                    </div>

                    <div className="mt-2">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input />
                      </FormControl>
                    </div>

                    <div className="mt-2">
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />

              <Button className="mt-3" variant={"success"} size={"lg"}>
                Send
              </Button>
            </Form>
          </div>
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
            <div className="mb-3 h-1 w-16 bg-success-main" />
            <p className=" font-bold text-2xl uppercase">company information</p>
          </div>

          <div className="mt-4">
            <p className="text-sm text-neutral-600">
              Tilottama-13, Patthardadha,
            </p>
            <p className="text-sm text-neutral-600">Rupandehi, Lumbini</p>
            <p className="text-lg text-blue-900">9857029740</p>
            <p className="text-sm text-neutral-600">lokraj@nepalets.com</p>
          </div>

          <div className="mt-4">
            <p className="text-xl font-semibold text-neutral-900">
              Download ETS Nepal Today!
            </p>
            <p className="text-neutral-600 text-sm">
              Available on iOS and Android, ETS Nepal is your ultimate
              transportation companion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
