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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.532429028436!2d-73.9882851!3d40.7283085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599c85cf5d01%3A0xb74ffc9c6abbc70f!2s123%202nd%20Ave%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2snp!4v1726068321559!5m2!1sen!2snp"
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
              123 Second Street Fifth Avenue,
            </p>
            <p className="text-sm text-neutral-600">Manhattan, New York</p>
            <p className="text-lg text-blue-900">+00 41 258 489 6587</p>
            <p className="text-sm text-neutral-600">info@trucking.com</p>
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
          <div className="mt-4">
            <p className="text-xl font-semibold text-neutral-900">
              Stay Connected:
            </p>
            <p className="text-neutral-600 text-sm">
              Follow us on social media for updates, news, and exclusive offers.
            </p>
          </div>
          <p className="mt-4 text-neutral-900 font-semibold">
            ETS Nepal – Empowering Seamless Transportation in Nepal.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
