create policy "Enable Update for authenticated users"
on "public"."users"
as permissive
for update
to authenticated
using (true);



